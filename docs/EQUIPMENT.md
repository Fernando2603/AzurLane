# EQUIPMENT

- [Overview](#overview)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview
The current structure in `equipment.json` is a bit unclear because it contains data for all equipment, and Azur Lane has many types of gear, making it a bit tricky. Right now, the structure might change how equipment is set up a lot or maybe not change it at all, as figuring out the best way can be confusing. Will try to make these adjustments once `ship.json` is out, maybe after patch 5 and some free time.

# Data Structure
```Typescript
type Link = string | null;

enum Rarity {
  N  = 2,
  R  = 3,
  E  = 4,
  SR = 5,
  DR = 6
};

type EquipmentSkill = {
  id: number;
  name: string | null;
  desc: string | null;
};

type EquipmentStats = {
  id: number;
  level: number;
  enhance: string; // ex: "+0", "+1", "+13"
  air?: number;
  anti_siren?: number; // 1 ~ 3
  antiaircraft?: number;
  antisub?: number;
  cannon?: number;
  damage?: string; // "5 x 3"
  dodge?: number;
  durability?: number;
  hit?: number;
  luck?: number;
  oxy_max?: number;
  raid_distance?: number;
  reload?: number;
  speed?: number;
  torpedo?: number;
  weapon_id?: number[];
};

type Equipment = {
  name: string;
  desc: string | null;
  label: string[];
  rarity: Rarity | null; // number | null
  nationality: number | null;
  type: number | null;
  skill: {
    [skill_id: string]: EquipmentSkillData;
  };
  icon: Link;
  stats: {
    [level: string]: EquipmentStats;
  };
};

// equipment.json
type EquipmentData = {
  [equipment_id: string]: Equipment;
};

// equipment_icon.json
type EquipmentIconData = {
  [equipment_id: string]: Link;
};

// equipment_skill.json
type EquipmentSkillData = {
  [skill_id: string]: EquipmentSkill;
};
```

# Fetch
- [equipment.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment.json
```

- [equipment_icon.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment_icon.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment_icon.json
```

- [equipment_skill.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment_skill.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/equipment_skill.json
```
