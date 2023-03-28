import { write } from "../../utils.js";

export default function ship_group({
  ship_data_group,
  ship_data_statistics
})
{
  const BUILD = {};

  for (const gid of ship_data_group.all)
  {
    const { group_type } = ship_data_group[gid];
    const SHIP_GID = (group_type * 10) + 1;

    if (ship_data_statistics.all.includes(SHIP_GID))
      BUILD[group_type] = ship_data_statistics[SHIP_GID].name.replaceAll(" ", " ").trim();
  };

  return write("data/extract", "ship_group.json", BUILD);
};
