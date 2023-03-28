import { write } from "../utils.js";
import {
  ship_data_statistics,
  ship_data_template,
  ship_group
} from "../data.js";

import bonus from "./stats/bonus.js";

const BUILD = [];

/*
  ship condition to accurate calculation
  normal
  - max limit break
  - level 100

  meta
  - max limit break (minimal level 70)
  - enhance max

  research
  - dev30 (max limit break)
  - level 100

  note:
  - bonus key already include enhance, dev bonus, meta threshold bonus at max
  - calculating ship less than level 100 is not accurate
  - calculating research ship with dev30 or lower is not accurate
  - calculating meta ship without max enhance is not accurate
*/

for (const idx in ship_group)
{
  const GROUP = Math.max(...ship_data_statistics.all.filter(sid => sid.toString().startsWith(idx)));

  const { attrs, attrs_growth, hunting_range, huntingrange_level, oxy_max } = ship_data_statistics[GROUP];
  const { oil_at_end } = ship_data_template[GROUP];

  const STATS = {
    oil: oil_at_end,
    oxygen: oxy_max,
    hunting_range: hunting_range,
    hunting_range_level: huntingrange_level,
    base: {
      health: attrs[0],
      firepower: attrs[1],
      torpedo: attrs[2],
      antiair: attrs[3],
      aviation: attrs[4],
      reload: attrs[5],
      accuracy: attrs[7],
      evasion: attrs[8],
      speed: attrs[9],
      luck: attrs[10],
      asw: attrs[11]
    },
    growth: {
      health: attrs_growth[0],
      firepower: attrs_growth[1],
      torpedo: attrs_growth[2],
      antiair: attrs_growth[3],
      aviation: attrs_growth[4],
      reload: attrs_growth[5],
      accuracy: attrs_growth[7],
      evasion: attrs_growth[8],
      speed: attrs_growth[9],
      luck: attrs_growth[10],
      asw: attrs_growth[11]
    },
    bonus: bonus(parseInt(idx))
  };

  const DATA = {
    gid: idx,
    name: ship_group[idx],
    stats: STATS
  };

  BUILD.push(DATA);
};

write("dist", "stats.json", BUILD);
