import { write } from "../../utils.js";

export default function ship_research({
  ship_data_blueprint,
  ship_strengthen_blueprint
})
{
  const BUILD = {};

  for (const gid of ship_data_blueprint.all)
  {
    const DATA = ship_data_blueprint[gid];
    const DEVS = {};

    [...DATA.strengthen_effect, ...DATA.fate_strengthen].forEach(dev =>
    {
      if (ship_strengthen_blueprint.all.includes(dev))
        DEVS[dev] = ship_strengthen_blueprint[dev];

      else
        console.log("src/update/extract/ship_research: strengthen_blueprint", dev, "not found");
    });

    BUILD[gid] = { ...DATA, devs: DEVS };
  };

  BUILD.all = ship_data_blueprint.all;

  return write("data/extract", "ship_research.json", BUILD);
};
