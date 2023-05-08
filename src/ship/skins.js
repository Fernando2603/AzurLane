import { ship_skins } from "../data.js";
import { skins as skin_list } from "../dist.js";

export default function skins(gid)
{
  const SHIP = ship_skins[gid];
  const DATA = [];

  for (const skin in SHIP)
  {
    if (skin_list[SHIP[skin].id])
      DATA.push(skin_list[SHIP[skin].id]);
    else
      console.log("dist/skins: missing skin", SHIP[skin].id);
  };

  return DATA;
};
