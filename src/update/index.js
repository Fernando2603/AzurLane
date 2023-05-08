import node_fetch from "node-fetch";
import { write } from "../utils.js";

export const sharecfgdata = [
  "aircraft_template",
  "barrage_template",
  "bullet_template",
  "chapter_template",
  "chapter_template_loop",
  "equip_data_statistics",
  "equip_data_template",
  "expedition_data_template",
  "gametip",
  "item_data_statistics",
  "ship_data_breakout",
  "ship_data_statistics",
  "ship_data_template",
  "ship_skin_words",
  "shop_template",
  "spweapon_data_statistics",
  "task_data_template",
  "weapon_property",
  "world_chapter_template",
  "world_effect_data",
  "world_event_data"
];


const fetch = async (name, link, retry = 10) =>
  node_fetch(link)
    .then(res => res.json())
    .then(idx => idx)
    .catch(() =>
    {
      if (retry)
        return fetch(name, link, retry - 1);

      console.log("failed to fetch", name);

      return false;
    });

export async function update(file, callback)
{
  const { name, link } = file;
  const DATA = await fetch(name, link);

  if (!DATA) return null;

  let build = DATA;

  if (sharecfgdata.includes(name))
  {
    const MERGE = await fetch(name, link.replace("ShareCfg", "sharecfgdata"));

    if (!MERGE) return null;

    build = MERGE;

    if (build.all)
      delete build.all;
  };

  write("data", `${name}.json`, build, callback);
};
