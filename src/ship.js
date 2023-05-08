import { ship_data_group } from "./data.js";
import { metadata } from "./dist.js";
import { write } from "./utils.js";

import skins from "./ship/skins.js";

// ships
const SHIPS = {};

for (const code in ship_data_group)
{
  if (isNaN(code))
    continue;

  const {
    group_type,
    share_group_id
  } = ship_data_group[code];

  const SHIP = {
    ...metadata[group_type],
    skins: skins(group_type)
  };

  if (share_group_id.length > 0)
    SHIP.share_group_id = share_group_id;

  SHIPS[group_type] = SHIP;
};

// this make the ships sorted by id
// and prevent missing skin sharing
const BUILD = [];

for (const ship in SHIPS)
{
  const DATA = { ...SHIPS[ship] };
  const SKIN = [ ...DATA.skins ];

  if (!DATA.share_group_id)
  {
    BUILD.push(DATA);
    continue;
  };

  for (const shared_id of DATA.share_group_id)
  {
    if (!SHIPS[shared_id]) continue;

    for (const shared_skin of SHIPS[shared_id].skins)
      if (!["Default", "Retrofit", "Oath"].includes(shared_skin.type))
        SKIN.push({ ...shared_skin, shared: shared_id });
  };

  DATA.skins = SKIN;
  delete DATA.share_group_id;
  BUILD.push(DATA);
};

write("dist", "ships.json", BUILD);
write("dist", "ship_skins.json",
  BUILD.map(ship =>
  {
    return {
      id: ship.id,
      gid: ship.gid,
      name: ship.name,
      skins: ship.skins
    };
  })
);
