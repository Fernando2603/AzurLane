import {
  ship_data_blueprint,
  ship_data_strengthen,
  ship_strengthen_blueprint,
  ship_strengthen_meta,
  ship_meta_repair,
  ship_meta_repair_effect
} from "../../data.js";

export default function bonus(gid)
{
  const BONUS = {
    health: 0,
    firepower: 0,
    torpedo: 0,
    antiair: 0,
    aviation: 0,
    reload: 0,
    accuracy: 0,
    evasion: 0,
    speed: 0,
    luck: 0,
    asw: 0
  };

  if (ship_data_blueprint.all.includes(gid))
  {
    ship_data_blueprint[gid].strengthen_effect.forEach(efx =>
    {
      const ENHANCE = {
        firepower: 0,
        torpedo: 0,
        aviation: 0,
        reload: 0
      };

      if (ship_strengthen_blueprint.all.includes(efx))
      {
        const DEVS = ship_strengthen_blueprint[efx];

        // enhance
        ENHANCE.firepower += DEVS.effect[0];
        ENHANCE.torpedo   += DEVS.effect[1];
        ENHANCE.aviation  += DEVS.effect[3];
        ENHANCE.reload    += DEVS.effect[4];

        // threshold
        if (DEVS.effect_attr.length)
          DEVS.effect_attr.forEach(attr =>
          {
            if (attr[0] === "durability")
              BONUS.health += attr[1];

            else if (attr[0] === "antiaircraft")
              BONUS.antiair += attr[1];

            else if (attr[0] === "dodge")
              BONUS.evasion += attr[1];

            else
              console.log("src/build/stats/bonus: unknown ship_strengthen_blueprint effect", attr[0]);
          });
      }
      else
        console.log("src/build/stats/bonus: unknown ship_strengthen_blueprint", efx);

      BONUS.firepower += Math.floor(ENHANCE.firepower / 100);
      BONUS.torpedo   += Math.floor(ENHANCE.torpedo / 100);
      BONUS.aviation  += Math.floor(ENHANCE.aviation / 100);
      BONUS.reload    += Math.floor(ENHANCE.reload / 100);
    });

    if (ship_data_blueprint[gid].fate_strengthen.length)
      ship_data_blueprint[gid].fate_strengthen.forEach(fate =>
      {
        const FATE = ship_strengthen_blueprint[fate].effect_attr;

        if (FATE.length)
          FATE.forEach(attr =>
          {
            if (attr[0] === "luck")
              BONUS.luck += attr[1];

            else
              console.log("src/build/stats/bonus: unknown ship_strengthen_blueprint effect_attr", attr[0]);
          });
      });

    return BONUS;
  };

  if (ship_strengthen_meta.all.includes(gid))
  {
    const SHIP_DATA = ship_strengthen_meta[gid];

    const THRESHOLD = [...SHIP_DATA.repair_effect.map(efx => efx[1])];

    THRESHOLD.forEach(efx =>
    {
      if (ship_meta_repair_effect.all.includes(efx))
      {
        ship_meta_repair_effect[efx].effect_attr.forEach(attr =>
        {
          if (attr[0] === "durability")
            BONUS.health += attr[1];

          else if (attr[0] === "antiaircraft")
            BONUS.antiair += attr[1];

          else if (attr[0] === "hit")
            BONUS.accuracy += attr[1];

          else if (attr[0] === "dodge")
            BONUS.evasion += attr[1];

          else
            console.log("src/build/stats/bonus: unknown meta_repair_effect attr", attr[0]);
        });
      }
      else
        console.log("src/build/stats/bonus: unknown meta_repair_effect", efx);
    });

    const ENHANCE = [
      ...ship_strengthen_meta[gid].repair_air,
      ...ship_strengthen_meta[gid].repair_cannon,
      ...ship_strengthen_meta[gid].repair_reload,
      ...ship_strengthen_meta[gid].repair_torpedo
    ];

    ENHANCE.forEach(efx =>
    {
      if (ship_meta_repair.all.includes(efx))
      {
        const EFFECT = ship_meta_repair[efx].effect_attr;

        if (EFFECT[0] === "air")
          BONUS.aviation += EFFECT[1];

        else if (EFFECT[0] === "cannon")
          BONUS.firepower += EFFECT[1];

        else if (EFFECT[0] === "torpedo")
          BONUS.torpedo += EFFECT[1];

        else if (EFFECT[0] === "reload")
          BONUS.reload += EFFECT[1];

        else
          console.log("src/build/stats/bonus: unknown meta_repair effect", EFFECT[0]);
      }
      else
        console.log("src/build/stats/bonus: unknown meta_repair", efx);
    });

    return BONUS;
  };

  if (ship_data_strengthen.all.includes(gid))
  {
    const SHIP_DATA   = ship_data_strengthen[gid].durability;
    const get_enhance = (stats) => Math.floor((10 * stats * 0.1) + 1e-09);

    BONUS.firepower += get_enhance(SHIP_DATA[0]);
    BONUS.torpedo   += get_enhance(SHIP_DATA[1]);
    BONUS.aviation  += get_enhance(SHIP_DATA[3]);
    BONUS.reload    += get_enhance(SHIP_DATA[4]);

    return BONUS;
  };

  console.log("src/build/stats/bonus: cannot resolve", gid);
  return BONUS;
};
