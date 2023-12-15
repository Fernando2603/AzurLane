# VOICELINE

The voiceline section contains Azur Lane ships voice and words from the `EN` server only.

- [Overview](#overview)
- [List of voicekeys](#list-of-voicekeys)
- [Couple encourage](#couple-encourage)
- [Extra voicekey](#extra-voicekey)
- [Special voicekey](#special-voicekey)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview

The Voiceline structure design is focused on integration with the `skins.json`, which can be accessed by `skin_id` obtained from the `skins.json` itself. 

The keys to access the voiceline are called `voicekey`. The name `voicekey` is inspired by the game data itself in [ship_skin_words](https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/sharecfgdata/ship_skin_words.json). The only difference is the `main` key. The `main` key in the game data contains voicelines separated by `|`. We modified the `main` key into `main{number}` to make it more structured and easier to access.

Unlike skins that replace the voicekey in default, `oath` gives an extra key ending like `battle_ex`, but it only stay at the skin (mostly on default) that have the `_ex` and doesn't appear in other skins that doesn't have that extra voicekey.

The `drop_descrip` does not have any audio but it does have voiceline, so the link is always `null`.

Missing voiceline list can be found [here](https://github.com/Fernando2603/AzurLane/blob/main/docs/MISSING_VOICELINE.md).


# List of voicekeys
| voicekey           | in game expression   |
|--------------------|----------------------|
| `battle`           | Flagship fight       |
| `detail`           | View details         |
| `drop_descrip`     | Drop description     |
| `expedition`       | Commision complete   |
| `feeling1`         | Upset                |
| `feeling2`         | Stranger             |
| `feeling3`         | Friendly             |
| `feeling4`         | Crush                |
| `feeling5`         | Love                 |
| `headtouch`        | Rub                  |
| `home`             | Return to port       |
| `hp_warning`       | Low HP               |
| `login`            | Log in               |
| `lose`             | Defeat               |
| `mail`             | Mail remainder       |
| `main{number}`     | Main screen {number} |
| `mission`          | Mission reminder     |
| `mission_complete` | Mission complete     |
| `profile`          | Biography            |
| `propose`          | Promise              |
| `skill`            | Skills               |
| `touch`            | Normal touch         |
| `touch2`           | Special touch        |
| `unlock`           | Receive              |
| `upgrade`          | Enhancing complete   |
| `win_mvp`          | Victory              |


# Couple encourage
Work in progress.


# Extra voicekey
Extra voicekeys can be obtained from `oath`, and they look like this: `{voicekey}_ex`. They are mostly attached to the `default` skin. When not using the `default` skin, the extra key disappears.

The `main` has two different extra, `normal` and `extend`.
- In `normal`, the key is behave like other extra `voicekey`, from the normal key (like `main1`) into `main1_ex`.
- In `extend`, a new main key is added. For example, if a ship only has 2 main keys, it will add `main3_ex` even without `main3`.

Known extra keys at `2023-12-15` are:
`battle_ex`, `detail_ex`, `expedition_ex`, `feeling1_ex`, `feeling5_ex`, `headtouch_ex`, `home_ex`, `hp_warning_ex`, `login_ex`, `lose_ex`, `mail_ex`, `main1_ex`, `main2_ex`, `main3_ex`, `main4_ex`, `main5_ex`, `main6_ex`, `main7_ex`, `main8_ex`, `main9_ex`, `main10_ex`, `mission_complete_ex`, `mission_ex`, `skill_ex`, `touch_ex`, `touch2_ex`, `unlock_ex`, `upgrade_ex`, `win_mvp_ex`.

The only known skins that have an extra key at `2023-12-15` are:
- `207052 - Formidable - Timeless Classics`
- `999011 - Gascogne μ - Tropical Environs Acclimation Service Equipment`


# Special voicekey
Every `Ryza Atelier` has the following key: `ryza_item1`, `ryza_item2`, `ryza_item3`, `ryza_item4`, `ryza_item5`. Which can be accessed in game expression of `Obtained material {number}`.


Only `10900020 - Klaudia Valentz` has the following key: `ryza_shop1`, `ryza_shop2`, `ryza_shop3`, `ryza_shop4`, `ryza_shop5`. Which can be accessed in game with expression of `Shop {number}`.


# Data Structure
```Typescript
  type Link = string | null;

  type Voiceline = {
    [voicekey: string]: {
      line: string;
      link: Link;
    };
  };

  type voicelines = {
    [skin_id: string]: Voiceline;
  };


  type Voicelink = {
    [voicekey: string]: Link;
  }

  type voicelinks = {
    [skin_id: string]: Voicelink;
  }
```

# Fetch
- [voicelines.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelines.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelines.json
```

- [voicelinks.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelinks.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/voicelinks.json
```
