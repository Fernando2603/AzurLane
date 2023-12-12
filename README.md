# AzurLane
![](versions/REPOSITORY.svg)
![](versions/EN.svg)

Azur Lane Resources

## Important Notes
- only `EN` ships are available
- checking update everyday at `23:00 UTC`
- if you found any bug or have some request please let me know
- `ShipBanner.json` is deprecated and will be removed in 2024 use `skins.json` instead

## 12 December 2023 Changes
- add `oath` or `extra` voiceline
- remove some skin `voicekey` that bugged and doesn't have any voiceline
- remove unused file in `audio/voicelines`

## 09 December 2023 Changes
- add `voicelines.json` and `voicelinks.json`
- `voicelines.json` contains voice line and link of ship by `skin_id`
- `voicelinks.json` only contains link to the file
- currently the `oath` or `extra` and `couple encourage` voiceline not included, im still working with the script, it will included soon
- extra: i will add some docs in the future if i have some free time

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
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelines.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelinks.json`

## Replace Missing File (Wild Card)
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/unknown.json`
