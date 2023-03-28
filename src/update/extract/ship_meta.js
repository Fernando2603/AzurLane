import { write } from "../../utils.js";

export default function ship_meta({
  ship_meta_repair,
  ship_meta_repair_effect,
  ship_strengthen_meta
})
{
  const BUILD = {};

  for (const gid of ship_strengthen_meta.all)
  {
    const DATA = ship_strengthen_meta[gid];
    const REPAIR = {};
    const EFFECT = {};

    [
      ...DATA.repair_cannon,
      ...DATA.repair_reload,
      ...DATA.repair_torpedo,
      ...DATA.repair_air
    ].sort((a, b) => parseInt(b) - parseInt(a)).forEach(repair =>
    {
      if (ship_meta_repair.all.includes(repair))
        REPAIR[repair] = ship_meta_repair[repair];

      else
        console.log("src/update/extract/ship_meta: meta_repair", repair, "not found");
    });

    DATA.repair_effect.forEach(efx =>
    {
      if (ship_meta_repair_effect.all.includes(efx[1]))
        EFFECT[efx[1]] = ship_meta_repair_effect[efx[1]];

      else
        console.log("src/update/extract/ship_meta: meta_repair_effect", efx, "not found");
    });

    BUILD[gid] = {
      ...DATA,
      repair: REPAIR,
      effect: EFFECT
    };
  };

  return write("data/extract", "ship_meta.json", BUILD);
};
