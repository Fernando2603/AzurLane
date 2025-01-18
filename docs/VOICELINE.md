# VOICELINE

- [Overview](#overview)
- [List of voicekeys](#list-of-voicekeys)
- [Couple encourage](#couple-encourage)
- [Extra voicekey](#extra-voicekey)
- [Special voicekey](#special-voicekey)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview
The Voiceline structure design is focused on integration with the `skin.json`, which can be accessed by `skin_id` obtained from the `skin.json` itself. 

The keys to access the voiceline are called `voicekey`. The name `voicekey` is inspired by the game data itself in [ship_skin_words](https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/sharecfgdata/ship_skin_words.json). The only modified `voicekey` is the `main` key and `couple_encourage`.

The `main` key in the game data contains voiceline separated by `|`. In contrast, the `couple_encourage` key contains voiceline within an `Array`. The `main` key is transformed into `main{number}` and `couple_encourage` key transformed into `couple_encourage{number}`, to enhance accessbility and maintain structural consistency.

The `couple_encourage` voicekey introduces additional key compared to the standard `voicekey`. For a more detailed explanation, refer to the [Couple encourage](#couple-encourage) section.

Unlike skins that replace the default `voicekey`, `oath` introduces an additional key ending, such as `battle_ex`. However, this extra key is exclusive to skins with the `_ex` suffix and doesn't manifest in other skins lacking this particular `voicekey`.

> [!CAUTION]
> The `drop_descrip` does not have any audio but it does have voiceline, so the link is always `null`.

> [!TIP]
> Missing voiceline list can be found [here](./MISSING_VOICELINE.md).


# List of voicekeys
| voicekey                   | in game expression         |
|----------------------------|----------------------------|
| `battle`                   | Flagship fight             |
| `couple_encourage{number}` | Battle {number}            |
| `detail`                   | View details               |
| `drop_descrip`             | Drop description           |
| `expedition`               | Commision complete         |
| `feeling1`                 | Upset                      |
| `feeling2`                 | Stranger                   |
| `feeling3`                 | Friendly                   |
| `feeling4`                 | Crush                      |
| `feeling5`                 | Love                       |
| `headtouch`                | Rub                        |
| `home`                     | Return to port             |
| `hp_warning`               | Low HP                     |
| `login`                    | Log in                     |
| `lose`                     | Defeat                     |
| `mail`                     | Mail remainder             |
| `main{number}`             | Main screen {number}       |
| `mission`                  | Mission reminder           |
| `mission_complete`         | Mission complete           |
| `profile`                  | Biography                  |
| `propose`                  | Promise                    |
| `skill`                    | Skills                     |
| `touch`                    | Normal touch               |
| `touch2`                   | Special touch              |
| `unlock`                   | Receive                    |
| `upgrade`                  | Enhancing complete         |
| `win_mvp`                  | Victory                    |
| `ryza_item {number}`       | Obtained material {number} |
| `ryza_shop {number}`       | Shop {number}              |


# Couple encourage
Not every ship in Azur Lane has a couple encourage, and it's tied to specific skins. When using a skin, the ship retains the couple encourage from the `default` skin. However, triggering couple encourage requires additional keys, so `type`, `list`, and `count` is added in the `couple_encourage{number}` to fit more information compared to the standard `voicekey`.

- `type`: Denotes the type contained in the `list`.
- `list`: The container of type that can trigger the voiceline.
- `count`: The minimum count needed in the list to trigger (min 1).

Check [AzurLaneTools/AzurLaneLuaScripts](https://github.com/AzurLaneTools/AzurLaneLuaScripts/blob/main) repository, under [mod/battle/data/battleconst](https://github.com/AzurLaneTools/AzurLaneLuaScripts/blob/main/EN/mod/battle/data/battleconst.lua), for the `CPChatType` that defines couple encourage triggers.

| type | name        | description                                                     |
|:----:|-------------|-----------------------------------------------------------------|
| 0    | GROUP_ID    | `gid` can be found in all skin dataset like `skin.json`         |
| 1    | SHIP_TYPE   | `hulltype` id can be found at `hulltype.json`                   |
| 2    | RARE        | `rarity` from value 2 (N) to 6 (UR), see table below            |
| 3    | NATIONALITY | `nationality` can be found at `nationality.json`                |
| 4    | ILLUSTRATOR | `illustrator` can be found in all skin dataset like `skin.json` |
| 5    | TEAM        | no `couple_encourage` is used with this value yet.              |


Refer to [model/const/shiprarity](https://github.com/AzurLaneTools/AzurLaneLuaScripts/blob/main/EN/model/const/shiprarity.lua) for ship rarity.

| value | rarity              |
|:-----:|---------------------|
| 2     | NORMAL/COMMON       |
| 3     | RARE                |
| 4     | ELITE               |
| 5     | SUPER RARE/PRIORITY |
| 6     | ULTRA RARE/DECISIVE |


**Example:**
```jsonc
{
  "301210": { // Hatsuharu
    "couple_encourage1": {
      "line": "F-follow me!",
      "link": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/audio/voiceline/301210/couple_encourage1.ogg",
      "type": 0, // ship gid
      "list": [
        30126, // Yuugure
        30113  // Shiratsuyu
      ],
      "count": 1 // only need 1 in same fleet to trigger, Yuugure or Shiratsuyu
    }
  },
  "605010": { // Vittorio Veneto
    "couple_encourage1": {
      "line": "It is reassuring to have the backing of such capable allies.",
      "link": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/audio/voiceline/605010/couple_encourage1.ogg",
      "type": 1, // hulltype
      "list": [
        7 // Aircraft Carrier (CV)
      ],
      "count": 2 // need atleast 2 Aircraft Carrier (CV) in fleet to trigger
    }
  }
}
```

> [!NOTE]
> Some skins modify and add new couple encourage lines, available only when the skin is used. As of `2023-12-15`, known skins that modify or add lines include:
> - `102124 - Honolulu - Among the Stalls` modify `couple_encourage1`
> - `202029 - Achilles - Achilles (Retrofit)` modify `couple_encourage1`
> - `202123 - Belfast - The Noble Attendant` modify `couple_encourage1` to `couple_encourage5` (all)
> - `301189 - Shiranui - Shiranui (Retrofit)` modify `couple_encourage1`
> - `303019 - Furutaka - Furutaka (Retrofit)` add `couple_encourage1`
> - `307073 - Taihou - Enraptured Companion` add `couple_encourage1`


# Extra voicekey
Extra voicekeys can be obtained from `oath`, and they look like this: `{voicekey}_ex`. They are mostly attached to the `default` skin. When not using the `default` skin, the extra key disappears.

The `main` has two different extra, `normal` and `extend`.
- In `normal`, the key is behave like other extra `voicekey`, from the normal key (like `main1`) into `main1_ex`.
- In `extend`, a new main key is added. For example, if a ship only has 2 main keys, it will add `main3_ex` even without `main3`.

> [!TIP]
> Known extra keys at `2023-12-15` are:
> `battle_ex`, `detail_ex`, `expedition_ex`, `feeling1_ex`, `feeling5_ex`, `headtouch_ex`, `home_ex`, `hp_warning_ex`, `login_ex`, `lose_ex`, `mail_ex`, `main1_ex`, `main2_ex`, `main3_ex`, `main4_ex`, `main5_ex`, `main6_ex`, `main7_ex`, `main8_ex`, `main9_ex`, `main10_ex`, `mission_complete_ex`, `mission_ex`, `skill_ex`, `touch_ex`, `touch2_ex`, `unlock_ex`, `upgrade_ex`, `win_mvp_ex`.

> [!NOTE]
> The only known non-default skin that have an extra key at `2023-12-15` are:
> - `207052 - Formidable - Timeless Classics`
> - `999011 - Gascogne μ - Tropical Environs Acclimation Service Equipment`


# Special voicekey
`10900010 - Reisalin Stout`, `10900020 - Klaudia Valentz`, `10900030 - Patricia Abelheim`, `10900040 - Lila Decyrus` and `10900050 - Serri Glaus` has the following key: `ryza_item1`, `ryza_item2`, `ryza_item3`, `ryza_item4`, `ryza_item5`. Which can be accessed in game expression of `Obtained material {number}`.

Only `10900020 - Klaudia Valentz` has the following key: `ryza_shop1`, `ryza_shop2`, `ryza_shop3`, `ryza_shop4`, `ryza_shop5`. Which can be accessed in game with expression of `Shop {number}`.


# Data Structure
```Typescript
  type Link = string | null;

  type Voiceline = {
    [voicekey: string]: {
      line: string;
      link: Link;
    };
    [couple_encourage: string]?: {
      line: string;
      link: Link;
      type: number;
      list: number[];
      count: number;
    };
  };

  type Voicelink = {
    [voicekey: string]: Link;
    [couple_encourage: string]?: Link;
  };

  // voiceline.json
  type VoicelineData = {
    [skin_id: string]: Voiceline;
  };

  // voicelink.json
  type VoicelinkData = {
    [skin_id: string]: Voicelink;
  };
```

# Fetch
- [voiceline.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voiceline.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voiceline.json
```

- [voicelinks.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelinks.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelinks.json
```
