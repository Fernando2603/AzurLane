import { write } from "../utils.js";
import {
  resolve_namecode,
  resolve_skin_shop_type,
  resolve_skin_tag
} from "../resolver.js";

export default function extract({
  ship_data_group,
  ship_data_statistics,
  ship_skin_template
})
{
  const GROUP = {};
  const SKINS = {};

  for (const gid of ship_data_group.all)
  {
    const { group_type } = ship_data_group[gid];
    const SHIP_GID = (group_type * 10) + 1;

    if (ship_data_statistics.all.includes(SHIP_GID))
    {
      GROUP[group_type] = ship_data_statistics[SHIP_GID].name.replaceAll(" ", " ").trim();
      SKINS[group_type] = [];
    };
  };

  for (const idx in ship_skin_template)
  {
    const SKIN = ship_skin_template[idx];
    const { id, name, desc, painting, ship_group, shop_type_id, tag } = SKIN;

    if (!SKINS[ship_group]) continue;

    SKINS[ship_group].push({
      id: id,
      name: resolve_namecode(name),
      type: resolve_skin_shop_type(shop_type_id),
      desc: resolve_namecode(desc),
      tag: resolve_skin_tag(tag),
      file: painting.toLowerCase()
    });
  };

  write("data/extract", "ship_group.json", GROUP);
  write("data/extract", "ship_skins.json", SKINS);
};
