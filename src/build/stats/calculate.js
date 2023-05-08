export default function calculate(stats, level, affinity)
{
  const BUILD = {};
  const STATS = [
    "health",
    "firepower",
    "torpedo",
    "antiair",
    "aviation",
    "reload",
    "accuracy",
    "evasion",
    "speed",
    "luck",
    "asw"
  ];

  STATS.forEach(idx =>
  {
    const BASE   = stats.base[idx];
    const GROWTH = stats.growth[idx];
    const BONUS  = stats.bonus[idx];

    if (["speed", "luck"].includes(idx))
      BUILD[idx] = Math.floor((BASE + ((GROWTH * (level - 1)) / 1000) + BONUS));
    else
      BUILD[idx] = Math.floor((BASE + ((GROWTH * (level - 1)) / 1000) + BONUS) * affinity);
  });

  return BUILD;
};
