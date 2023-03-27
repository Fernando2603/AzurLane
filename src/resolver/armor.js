export default function resolve_ship_armor(armor)
{
  if (armor === 1)
    return "light";

  if (armor === 2)
    return "medium";

  if (armor === 3)
    return "heavy";

  console.log("resolve_armor: cannot resolve", armor);
  return armor;
};
