const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.quaternaryRebuyables[props.id],
    1e15,
    props.initialCost,
    props.costMult,
    props.costMult,
    DC.E309,
    1e3,
    props.costMult
  );
  const { effect } = props;
  if (props.isDecimal) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, player.reality.quaternaryRebuyables[props.id]);
  else if (props.isLinear) props.effect = () => player.disablePostReality ? 1 : effect * player.reality.quaternaryRebuyables[props.id];
  else props.effect = () => player.disablePostReality ? 1 : Math.pow(effect, player.reality.quaternaryRebuyables[props.id]);
  if (!props.formatEffect) props.formatEffect = value => `${formatX(value, 2, 2)}`;
  props.formatCost = value => format(value, 2, 0);
  return props;
};

export const quaternaryUpgrades = [
  rebuyable({
    name: "Temporal Reinforcement",
    id: 1,
    initialCost: 1,
    costMult: 42,
    description: () => `Increase Temporal Aeromagnifier multiplier by ${formatX(1.1, 1, 1)}`,
    effect: 1.1
  }),
  rebuyable({
    name: "Replicative Reinforcement",
    id: 2,
    initialCost: 2,
    costMult: 56,
    description: () => `Increase Replicative Aeromagnifier multiplier by ${formatX(1.1, 1, 1)}`,
    effect: 1.1
  }),
  rebuyable({
    name: "Eternal Reinforcement",
    id: 3,
    initialCost: 6,
    costMult: 30,
    description: () => `Increase Eternal Aeromagnifier multiplier by ${formatX(1.1, 1, 1)}`,
    effect: 1.1
  }),
  rebuyable({
    name: "Superluminal Reinforcement",
    id: 4,
    initialCost: 24,
    costMult: 72,
    description: () => `Increase Superluminal Aeromagnifier multiplier by ${formatX(1.1, 1, 1)}`,
    effect: 1.1
  }),
  rebuyable({
    name: "Boundless Reinforcement",
    id: 5,
    initialCost: 120,
    costMult: 20,
    description: () => `Increase Boundless Aeromagnifier multiplier by ${formatX(1.1, 1, 1)}`,
    effect: 1.1
  }),
  rebuyable({
    name: "NYI",
    id: 6,
    initialCost: Infinity,
    costMult: Infinity,
    description: () => `NYI`,
    effect: 1,
    formatEffect: value => `${formatX(value)}`
  }),
  rebuyable({
    name: "NYI",
    id: 7,
    initialCost: Infinity,
    costMult: Infinity,
    description: () => `NYI`,
    effect: 1,
    formatEffect: value => `${formatX(value)}`
  }),
  rebuyable({
    name: "NYI",
    id: 8,
    initialCost: Infinity,
    costMult: Infinity,
    description: () => `NYI`,
    effect: 1,
    formatEffect: value => `${formatX(value)}`
  }),
  rebuyable({
    name: "NYI",
    id: 9,
    initialCost: Infinity,
    costMult: Infinity,
    description: () => `NYI`,
    effect: 1,
    formatEffect: value => `${formatX(value)}`
  }),
  rebuyable({
    name: "NYI",
    id: 10,
    initialCost: Infinity,
    costMult: Infinity,
    description: () => `NYI`,
    effect: 1,
    formatEffect: value => `${formatX(value)}`
  }),
  {
    name: "NYI",
    id: 11,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 12,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 13,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 14,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 15,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 16,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 17,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 18,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 19,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 20,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 21,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 22,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 23,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 24,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "NYI",
    id: 25,
    cost: new Decimal(Infinity),
    requirement: () => `NYI`,
    hasFailed: () => false,
    checkRequirement: () => false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "NYI",
    effect: () => 1,
    formatEffect: value => `${formatX(value)}`
  },
];
