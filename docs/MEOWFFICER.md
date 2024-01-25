# MEOWFFICER

- [Overview](#overview)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview
The meowfficer has two types of structures: `meowfficer.json` and `meowfficer_list.json`. The `meowfficer_list.json` uses an old structure that employs an array or list to access the data, while `meowfficer.json` is the new one using an `id` for access. This change also applies to `meowfficer_talent.json`, and you can find more details in the [Data Structure](#data-structure) section.

The `type`, `slot`, and `timer` are manually created and not derived from in-game data. The `type` serves as the key for the `hulltype` of the ship that matches this `meowfficer`, `slot` indicates the best-fit skill slot for this `meowfficer`, and the `timer` represents the `meowfficer` build time, formatted as a string like `hh:mm:ss`. For `type` and `slot`, refer to [Data Structure](#data-structure) for the `MeowfficerType` and `MeowfficerSlot` enums, listing all available values.

The `rarity` value is a `string` instead of a `number`, unlike `nationality`, for intuitive reasons. In Azur Lane, rarity starts at value 2, not 0 or 1. The `meowfficer` only has "Rare," "Elite," and "Super Rare" rarities, to date.

The aaset available in this section dataset include full character images, character banners, character icons, skill icons, and talent icons. Here are some samples:
<details>
  <summary>Character Image</summary>

  <p align="center">
    <img src="/images/meowfficer/character/10011/image.png" alt="image">
  </p>
</details>
<details>
  <summary>Character Banner</summary>

  <p align="center">
    <img src="/images/meowfficer/character/10011/banner.png" alt="banner">
  </p>
</details>
<details>
  <summary>Character Icon</summary>

  <p align="center">
    <img src="/images/meowfficer/character/10011/icon.png" alt="icon">
  </p>
</details>
<details>
  <summary>Skill Icon</summary>

  <p align="center">
    <img src="/images/meowfficer/skill/1001.png" alt="skill">
  </p>
</details>
<details>
  <summary>Talent Icon</summary>

  <p align="center">
    <img src="/images/meowfficer/talent/special_one.png" alt="talent">
  </p>
</details>


# Data Structure
```Typescript
type Link = string | null;

enum MeowfficerType {
  BB  = 'BB',
  BBV = 'BBV',
  BC  = 'BC',
  CA  = 'CA',
  CB  = 'CB',
  CL  = 'CL',
  CV  = 'CV',
  CVL = 'CVL',
  DD  = 'DD',
  IXM = 'IXM',
  IXS = 'IXS',
  IXV = 'IXV',
  SS  = 'SS',
  SSV = 'SSV'
};

enum MeowfficerSlot {
  General = 'General',
  Command = 'Command',
  Staff   = 'Staff'
};

type MeowfficerStats = {
  command: number;
  support: number;
  tactic: number;
};

type MeowfficerSkill = {
  name: string;
  icon: Link;
  level: {
    [skill_level: string]: {
      id: number;
      desc: string;
      opsi: string;
    };
  };
};

type Meowfficer = {
  id: number;
  name: string;
  rarity: string;
  type: MeowfficerType[];
  slot: MeowfficerSlot | null;
  timer: string | null;
  nationality: number;
  stats: MeowfficerStats;
  skill: MeowfficerSkill;
  image: Link;
  icon: Link;
  banner: Link;
  talent: number[];
};


// meowfficer.json
type MeowfficerData = {
  [meowfficer_id: string]: Meowfficer;
};

// meowfficer_list.json
type MeowfficerListData = Meowfficer[];


enum MeowfficerTalentStats {
  Accuracy             = "Accuracy",
  AntiAir              = "Anti-Air",
  AntiSubmarineWarfare = "Anti-Submarine Warfare",
  Aviation             = "Aviation",
  DamageDealt          = "Damage Dealt",
  DamageTaken          = "Damage Taken",
  Evasion              = "Evasion",
  Firepower            = "Firepower",
  Health               = "Health",
  Luck                 = "Luck",
  MainGunCriticalRate  = "Main Gun Critical Rate",
  Reload               = "Reload",
  Speed                = "Speed",
  Torpedo              = "Torpedo",
  TorpedoCriticalRate  = "Torpedo Critical Rate"
};

enum MeowfficerTalentType {
  DD                 = "DD",
  CL                 = "CL",
  CA                 = "CA",
  CB                 = "CB",
  BB                 = "BB",
  IX                 = "IX",
  IXV                = "IXV",
  IXM                = "IXM",
  SSV                = "SSV",
  SS                 = "SS",
  BC                 = "BC",
  BB                 = "BB",
  BBV                = "BBV",
  BM                 = "BM",
  CV                 = "CV",
  CVL                = "CVL",
  AE                 = "AE",
  AR                 = "AR",
  Vanguard           = "Vanguard",
  Main               = "Main",
  EagleUnion         = "Eagle Union",
  RoyalNavy          = "Royal Navy",
  SakuraEmpire       = "Sakura Empire",
  IronBlood          = "Iron Blood",
  DragonEmpery       = "Dragon Empery",
  NorthernParliament = "Northern Parliament",
  IrisLibre          = "Iris Libre",
  VichyaDominion     = "Vichya Dominion"
};

type MeowfficerTalentStatistics = {
  apply: MeowfficerTalentType[];
  stats: MeowfficerTalentStats;
  value: number;
  type: 'value' | 'percentage';
};

type MeowfficerTalentData = {
  id: number;
  group_id: number;
  name: string;
  desc: string;
  stats: MeowfficerTalentStatistics;
  level: number;
  next: number;
  image: Link;
  available: boolean;
};

// meowfficer_talent.json
type MeowfficerTalent = {
  [talent_id: string]: MeowfficerTalentData;
};

// meowfficer_talent_list.json
type MeowfficerTalentList = MeowfficerTalentData[];
```

# Fetch
- [meowfficer.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json
```

- [meowfficer_list.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_list.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_list.json
```

- [meowfficer_talent.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_talent.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_talent.json
```

- [meowfficer_talent_list.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_talent_list.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer_talent_list.json
```
