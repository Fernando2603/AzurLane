# AzurLane
![](versions/REPOSITORY.svg)
![](versions/EN.svg)

Azur Lane Resources

## Important Notes
- only `EN` ships are available
- checking update everyday at `23:00 UTC`
- `ShipBanner.json` is deprecated and will be removed in 2024 use `skins.json` instead

## 31 October 2023 Changes
- `meowfficer.json`
  - add automatic update
  - add 3 meowfficer `Drake`, `Kidd`, and `Bellamy`
  - add `talent` key for fixed talent
  - remove `color` key
  - rename `faction` key into `nationality` and changed value from string to number. `nationality.json` to get name and image link.
  - rename `stats.tactics` into `stats.tactic`
  - rename `skill.image` into `skill.icon`

- `meowfficer_talent.json`
  - add automatic update
  - add `group_id` key
  - add `available` key to check if talent is obtainable in game or not
  - remove `hullType` key
  - rename file name in `images/meowfficer/talent/`
  - rework `stats` key, now `stats` contains object of Buff

```TypeScript
  type Hull = 
    | "DD"
    | "CL"
    | "CA"
    | "CB"
    | "BB"
    | "IX"
    | "IXV"
    | "IXM"
    | "SSV"
    | "SS"
    | "BC"
    | "BC"
    | "BBV"
    | "BM"
    | "CV"
    | "CVL"
    | "AE"
    | "AR"
    | "Vanguard"
    | "Main"
    | "Eagle Union"
    | "Royal Navy"
    | "Sakura Empire"
    | "Iron Blood"
    | "Dragon Empery"
    | "Northern Parliament"
    | "Iris Libre"
    | "Vichya Dominion";

  type Stats =
    | "Health"
    | "Firepower"
    | "Evasion"
    | "Reload"
    | "Anti-Submarine Warfare"
    | "Anti-Air"
    | "Aviation"
    | "Torpedo"
    | "Accuracy"
    | "Torpedo Critical Rate"
    | "Speed"
    | "Damage Dealt"
    | "Damage Taken"
    | "Luck"
    | "Main Gun Critical Rate";

  type Buff = {
    apply: Hull[];
    stats: Stats;
    value: number;
    type: string; // value or percentage
  }
```

## Fetch
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skins.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skin_list.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_talent.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skills.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skill_icon.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equip_icon.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/nationality.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/hulltype.json`

## Replace Missing File (Wild Card)
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/unknown.json`
