import { SHIP_RARITY } from "../constant.js";

export default function resolve_ship_rarity(rarity)
{
  if (!SHIP_RARITY[rarity])
  {
    console.log("resolve_ship_rarity: cannot resolve", rarity);
    return rarity;
  }

  return SHIP_RARITY[rarity];
};
