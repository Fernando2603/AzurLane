import { write } from "../../utils.js";

import {
  resolve_namecode,
  resolve_skin_shop_type,
  resolve_skin_tag
} from "../../resolver.js";

export default function ship_skins({
  ship_data_group,
  ship_skin_template
})
{
  const BUILD = {};

  for (const code in ship_data_group)
    BUILD[ship_data_group[code].group_type] = [];

  for (const idx in ship_skin_template)
  {
    const SKIN = ship_skin_template[idx];
    const { id, name, desc, painting, ship_group, shop_type_id, tag } = SKIN;

    if (!BUILD[ship_group]) continue;

    BUILD[ship_group].push({
      id: id,
      name: resolve_namecode(name),
      type: resolve_skin_shop_type(shop_type_id),
      desc: resolve_namecode(desc),
      tag: resolve_skin_tag(tag),
      file: painting.toLowerCase()
    });
  };

  return write("data/extract", "ship_skins.json", BUILD);
};
