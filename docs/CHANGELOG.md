## Patch 4.3.8 (09 January 2024)
- improve `github-actions` runner performance


## Patch 4.3.7 (28 December 2023)
- fix `voiceline` failed to extract
- preload `github-actions` to remove `banner.json` and `images/skins_old`
- add `CV`, `L2D`, `PIC`, `BGM`, `CIPHER`, `MANGA` and `PAINTING` version

## Patch 4.3.6 (16 December 2023)
- add `couple_encourage` voiceline
- fix `hulltype.json` wrong `slang` and `link` for key `7`
- fix `voiceline` that contains `{namecode:}`
- fix `voiceline` and `equipment` that have space at start or end
- fix `voiceline` and `equipment` that have double space
- fix json non-breaking space (NBSP) <0xa0> into actual space
- add `EQUIPMENT.md`, `MEOWFFICER.md`, `SKILL.md` and `SKIN.md`
- add `couple encourage` in [VOICELINE](https://github.com/Fernando2603/AzurLane/blob/main/docs/VOICELINE.md) docs
- add `illustrator`, `illustrator2`, `voice_actor` and `voice_actor2` key into `skins.json` and `skin_list.json`

## Patch 4.3.5 (15 December 2023)
- add `dynamic+` skin tag
- add `docs` (WIP)
- remove `voicelinks.json` voicekey that contain `null` value

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
