import { write } from "../utils.js";
import {
  resolve_namecode,
  resolve_skin_shop_type,
  resolve_skin_tag
} from "../resolver.js";
import { ship_skin_template, ship_group } from "../data.js";
const BUILD = {};

import check from "./skins/check.js";

for (const idx in ship_skin_template)
{
  const { id, name, desc, painting, ship_group: gid, shop_type_id, tag } = ship_skin_template[idx];

  if (!ship_group[gid]) continue;

  const FILE = {
    banner: null,
    chibi: null,
    icon: null,
    shipyard: null
  };

  const CHECK = await check(id, painting.toLowerCase());

  for (const dest in CHECK)
    FILE[dest] = CHECK[dest];

  BUILD[id] = {
    id: id,
    gid: gid,
    name: resolve_namecode(name),
    type: resolve_skin_shop_type(shop_type_id),
    desc: resolve_namecode(desc),
    tag: resolve_skin_tag(tag),
    ...FILE
  };
};

write("dist", "skins.json", BUILD);
