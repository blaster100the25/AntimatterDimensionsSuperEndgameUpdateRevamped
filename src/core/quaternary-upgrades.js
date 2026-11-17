import { BitPurchasableMechanicState, RebuyableMechanicState } from "./game-mechanics";

class QuaternaryUpgradeState extends BitPurchasableMechanicState {
  constructor(config) {
    super(config);
    this.registerEvents(config.checkEvent, () => this.tryUnlock());
  }

  get name() {
    return this.config.name;
  }

  get requirement() {
    return typeof this.config.requirement === "function" ? this.config.requirement() : this.config.requirement;
  }

  get lockEvent() {
    return typeof this.config.lockEvent === "function" ? this.config.lockEvent() : this.config.lockEvent;
  }

  get currency() {
    return Currency.quaternionMachines;
  }

  get bitIndex() {
    return this.id;
  }

  get bits() {
    return player.reality.quaternaryUpgradeBits;
  }

  set bits(value) {
    player.reality.quaternaryUpgradeBits = value;
  }

  get hasPlayerLock() {
    return (player.reality.reqLock.quaternary & (1 << this.bitIndex)) !== 0;
  }

  set hasPlayerLock(value) {
    if (value) player.reality.reqLock.quaternary |= 1 << this.bitIndex;
    else player.reality.reqLock.quaternary &= ~(1 << this.bitIndex);
  }

  get isLockingMechanics() {
    return this.hasPlayerLock && this.isPossible && !this.isAvailableForPurchase;
  }

  // Required to be changed this way to avoid direct prop mutation in Vue components
  setMechanicLock(value) {
    this.hasPlayerLock = value;
  }

  toggleMechanicLock() {
    this.hasPlayerLock = !this.hasPlayerLock;
  }

  // Note we don't actually show the modal if we already failed or unlocked it
  tryShowWarningModal(specialLockText) {
    if (this.isPossible && !this.isAvailableForPurchase) {
      Modal.upgradeLock.show({
        upgrade: this, isImaginary: false, isDual: false, isQuaternion: true, isEndgame: false, isCelestial: false, specialLockText
      });
    }
  }

  get isAvailableForPurchase() {
    return (player.reality.quaternaryUpgReqs & (1 << this.id)) !== 0;
  }

  get isPossible() {
    return this.config.hasFailed ? !this.config.hasFailed() : true;
  }

  get canBeApplied() {
    return super.canBeApplied;
  }

  tryUnlock() {
    if (!MachineHandler.isQMUnlocked || this.isAvailableForPurchase || !this.config.checkRequirement()) return;
    player.reality.quaternaryUpgReqs |= (1 << this.id);
    GameUI.notify.reality(`You've unlocked a Quaternary Upgrade: ${this.config.name}`);
    this.hasPlayerLock = false;
  }

  onPurchased() {
    EventHub.dispatch(GAME_EVENT.REALITY_UPGRADE_BOUGHT);
  }
}

class RebuyableQuaternaryUpgradeState extends RebuyableMechanicState {
  get currency() {
    return Currency.quaternionMachines;
  }

  get boughtAmount() {
    return player.reality.quaternaryRebuyables[this.id];
  }

  get canBeApplied() {
    return super.canBeApplied;
  }

  set boughtAmount(value) {
    player.reality.quaternaryRebuyables[this.id] = value;
  }

  onPurchased() {
    if (this.id === 7) {
      GameCache.staticGlyphWeights.invalidate();
    }
  }

  bulkPurchase() {
    if (!this.isAffordable) return false;
    this.boughtAmount += getInverseHybridCostScaling(
      Currency.quaternionMachines.value,
      1e15,
      this.config.initialCost,
      this.config.costMult,
      this.config.costMult,
      DC.E309,
      1e3,
      this.config.costMult
    ).sub(player.reality.quaternaryRebuyables[this.id]).toNumber();
    Currency.quaternionMachines.subtract(getHybridCostScaling(
      player.reality.quaternaryRebuyables[this.id] - 1,
      1e15,
      this.config.initialCost,
      this.config.costMult,
      this.config.costMult,
      DC.E309,
      1e3,
      this.config.costMult
    ));
    return true;
  }
}

QuaternaryUpgradeState.index = mapGameData(
  GameDatabase.reality.quaternaryUpgrades,
  config => (config.id <= 10
    ? new RebuyableQuaternaryUpgradeState(config)
    : new QuaternaryUpgradeState(config))
);

export const QuaternaryUpgrade = id => QuaternaryUpgradeState.index[id];

export const QuaternaryUpgrades = {
  all: QuaternaryUpgradeState.index.compact(),
  get totalRebuyables() {
    const rebuyables = player.reality.quaternaryRebuyables;
    let total = 0;
    for (const i in rebuyables) total += rebuyables[i];
    return total;
  },
  get totalSinglePurchase() {
    return this.all.countWhere(u => u.isBought);
  },
  get allBought() {
    return (player.reality.quaternaryUpgradeBits >> 6) + 1 === 1 << (GameDatabase.reality.quaternaryUpgrades.length - 5);
  }
};
