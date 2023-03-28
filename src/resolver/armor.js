export default function resolve_ship_armor(armor)
{
  if (armor === 1)
    return "Light";

  if (armor === 2)
    return "Medium";

  if (armor === 3)
    return "Heavy";

  console.log("resolve_armor: cannot resolve", armor);
  return armor;
};
