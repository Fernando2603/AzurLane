## Patch 4.6.13
<details>
  <summary>18 June 2024</summary>
  
  - enable auto-update
  - upgrade python 3.10 into 3.11
</details>


## Patch 4.6.12
<details>
  <summary>07 June 2024</summary>
  
  - bump unity@2018 into unity@2020
  - open [AzurAssets](https://github.com/Fernando2603/AzurAssets) into public repository (this only contains raw extracted assets from EN server)
  - update datamine scripts to adapt new painting structure
  - **Note**: actions still down so auto-update are disabled (will fix it later after 1 or 2 weeks after all scripts are stable)
</details>


## Patch 4.5.12
<details>
  <summary>17 May 2024</summary>
  
  - fix datamine script for new preload update.
</details>



## Patch 4.5.11
<details>
  <summary>20 April 2024</summary>
  
  - add [docs/SHIP.md](./SHIP.md)
  - add `ship.json` (prototype only)
  - add `ship_wrapper.json`
  - change `skill.json` description from `lv10` desc into `lv1 (lv10)` desc
</details>

## Patch 4.5.10
<details>
  <summary>17 February 2024</summary>
  
  - change `ship_skin_list.json` `skins` key from `object` to `list` (like old `skins.json`)

  **Note:** after much consideration, i think this needed for code languages that have unordered object like `Javascript`, with this i think both `ship_skin.json` and `ship_skin_list.json` can be used at same time if fast access from key needed, both file combined only have 5mb size, it not that heavy for current year internet usage or memory, so this is reasonable change.
</details>

## Patch 4.5.9
<details>
  <summary>17 February 2024</summary>

  - nationality:
    - add semi-auto update (only refresh assets, need manual for new faction)
    - add `id`, `code` and `prefix` key into `nationality.json`
    - add `nationality_link.json`

  - `images/stats` will be removed in `2025`.
  - add `images/attribute`
  - add `attribute.json` (semi-auto update)
    ```Typescript
    type Link = string | null;

    type Attribute = {
      code: string; // cannon
      name: string; // firepower
      short: string; // FP
      icon: Link; // raw icon asset
      iconbox: Link; // raw icon with 1:1 ratio (padding)
      icon128: Link; // icon 128x128
      icon64: Link; // icon 64x64
      icon32: Linl; // icon 32x32
    };

    type AttributeData = {
      [key: string]: Attribute;
    };
    ```
  - overhaul `images/type` (remove old file)
  - overhaul `hulltype.json` (semi-auto update)
    ```Typescript
    type Link = string | null;

    const LABEL_LIST = [
      "AE", "AR", "BB", "BBV", "BC", "BM",
      "CA", "CB", "CL", "CV", "CVL", "DD", "DDG",
      "IX", "IXM", "IXS", "IXV", "SS", "SSV",
      "BB/BC", "CA/CB", "CL/DD", "CV/CVL", "SS/SSV"
    ];

    type Hulltype = {
      id: number;
      name: string;
      short: string;
      position: string
      icon: Link;
      tech: Link; // text/icon used in fleet tech page
      title: Link; // text/icon used in ship profile
      label: {
        [label_name: string]: Link; // used by gear
      };
    };

    type HulltypeData = {
      [hulltype_id: string]: Hulltype;
    };
    ```
</details>

## Patch 4.4.9
<details>
  <summary>03 February 2024</summary>
  
  - fix minor typo in docs
  - fix data inconsistent default value in `Python`
  
  **Note:** `ship.json` is still in prototype phase, its kinda complicated since `ship.json` aiming for dynamic statistics change, but it will release with mutliple different dataset once the script pass the test, the release time still unknown to this date.
</details>

## Patch 4.4.8
> [!NOTE]
> I am planning to release a new dataset named `ship.json` containing information about ship data in the upcoming patch. Initially, this repository was intended for syncing skin data with `AzurAPI`, but it appears that it is no longer maintained. Due to this, the repository will undergo an overhaul, resulting in some minor breaking changes before the update preceding Patch `5` in `2025`. All data should stabilize by then, assuming the game itself does not undergo major database changes. I sincerely apologize to those who use this repository and will make every effort to minimize any potential disruption.

<details>
  <summary>25 January 2024</summary>

  - Future Changes (starting in 2025):
    - `skins.json` **will not be updated anymore** and will be removed.
    - `skills.json` will continue to receive updates until removal in 2025.
    - `equip_icon.json` will continue to receive updates until removal in 2025.
    - `images/skills` folder will be renamed to `images/skill`.
    - `images/skins` folder will be renamed to `images/skin`.
    - `audio/voicelines` folder will be renamed to `audio/voiceline`.

  - Breaking Changes:
    - change the `id` type from `string` to `number` in `meowfficer.json` and `meowfficer_talent.json`
    - change the structure from `array` or `list` to `object` in `meowfficer.json` and `meowfficer_talent.json`
    - change the structure from `object` to `array` or `list` in `skin_list.json`
    - change `equipment.skill` from `array` or `list` to `object` with `skill_id` as the `key` in `equipment.json`
    ```Typescript
    // equipment.skill before
    type EquipmentData = {
      skill: number[];
      // ..more property
    };

    // equipment.skill after
    type EquipmentSkill = {
      id: number;
      name: string | null;
      desc: string | null;
    };

    type EquipmentData = {
      skill: {
        [skill_id: string]: EquipmentSkill;
      };
      // ..more property
    };
    ```

  - add `versions/{version-type}.txt`
  - add `version.json`
  - add repository size in `README.md`
  - change parser code language from `Javascript/Typescript` to `Python`
  - change sorting algorithm: previously, the skin was sorted by the `id` value itself, but now it is sorted by `gid` and then `skin_id` (currently, this only affects the `skin` and `voiceline` datasets)

  - docs:
    - add [docs/BGM.md](./BGM.md)
    - update [docs/MEOWFFICER.md](./MEOWFFICER.md)
    - update [docs/SKILL.md](./SKILL.md)
    - update [docs/SKIN.md](./SKIN.md)
    **Note:** Since the server parser has changed from `Javascript/Typescript` to `Python`, docs will still use `Typescript` for type/data structure documentation.

  - meowfficer:
    - add `meowfficer_list.json` using the old `meowfficer.json` structure
    - add `meowfficer_talent_list.json` using the old `meowfficer_talent.json` structure

  - skin:
    - add `skin.json` using the old `skin_list.json` structure
    - add `ship_skin.json` (read more in [docs/SKIN.md](./SKIN.md))
    - add `ship_skin_list.json` (read more in [docs/SKIN.md](./SKIN.md))
    - add `background`, `background2`, and `bgm` keys to all skins excluding `skins.json` (read more in [docs/SKIN.md](./SKIN.md))
    - rename skin tag `custombg` into `dynamicbg`
    - add `images/background` folder

  - skill:
    - add `skill.json` (same as `skills.json`)

  - bgm:
    - add `bgm.json`
    - add `bgm_link.json`
    - add `audio/bgm` folder

  - equipment:
    - add `stats.enhance` key in `equipment.json`
    - add `stats.anti_siren` key in `equipment.json`
    - add `equipment_skill.json`
    - add `equipment_icon.json` (same as `equip_icon.json`)
    ```Typescript
    // equipment stats before
    type EquipmentStats = {
      [level: string]: {
        id: number;
        level: number;
        // etc
      };
    };

    // equipment stats after
    type EquipmentStats = {
      [level: string]: {
        id: number;
        level: number;
        enhance: string; // ex: "+0", "+1", "+13"
        anti_siren?: number; // 1 ~ 3
        // etc
      };
    };
    ```
</details>

## Patch 4.3.8
<details>
  <summary>09 January 2024</summary>
  
  - improve `github-actions` runner performance
</details>

## Patch 4.3.7
<details>
  <summary>28 December 2023</summary>
  
  - fix `voiceline` failed to extract
  - preload `github-actions` to remove `banner.json` and `images/skins_old`
  - add `CV`, `L2D`, `PIC`, `BGM`, `CIPHER`, `MANGA` and `PAINTING` version
</details>

## Patch 4.3.6
<details>
  <summary>16 December 2023</summary>
  
  - add `couple_encourage` voiceline
  - fix `hulltype.json` wrong `slang` and `link` for key `7`
  - fix `voiceline` that contains `{namecode:}`
  - fix `voiceline` and `equipment` that have space at start or end
  - fix `voiceline` and `equipment` that have double space
  - fix json non-breaking space (NBSP) <0xa0> into actual space
  - add `EQUIPMENT.md`, `MEOWFFICER.md`, `SKILL.md` and `SKIN.md`
  - add `couple encourage` in [VOICELINE](./VOICELINE.md) docs
  - add `illustrator`, `illustrator2`, `voice_actor` and `voice_actor2` key into `skins.json` and `skin_list.json`
</details>


## Patch 4.3.5
<details>
  <summary>15 December 2023</summary>
  
  - add `dynamic+` skin tag
  - add `docs` (WIP)
  - remove `voicelinks.json` voicekey that contain `null` value
</details>


## Old
<details>
  <summary>12 December 2023</summary>

  - add `oath` or `extra` voiceline
  - remove some skin `voicekey` that bugged and doesn't have any voiceline
  - remove unused file in `audio/voicelines`
</details>

<details>
  <summary>09 December 2023</summary>
  
  - add `voicelines.json` and `voicelinks.json`
  - `voicelines.json` contains voice line and link of ship by `skin_id`
  - `voicelinks.json` only contains link to the file
  - currently the `oath` or `extra` and `couple encourage` voiceline not included, im still working with the script, it will included soon
  - extra: i will add some docs in the future if i have some free time
</details>

<details>
  <summary>31 October 2023</summary>

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
</details>
