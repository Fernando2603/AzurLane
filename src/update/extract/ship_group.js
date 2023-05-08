import { write } from "../../utils.js";

export default function ship_group({
  ship_data_group,
  ship_data_statistics
})
{
  const BUILD = {};

  for (const code in ship_data_group)
  {
    const { group_type } = ship_data_group[code];
    const SHIP_GID = (group_type * 10) + 1;

    if (SHIP_GID in ship_data_statistics)
      BUILD[group_type] = ship_data_statistics[SHIP_GID].name.replaceAll(" ", " ").trim();
  };

  return write("data/extract", "ship_group.json", BUILD);
};
