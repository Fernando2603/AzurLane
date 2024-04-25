# SHIP

The `ship.json` file is currently **20% complete**. While the structure is somewhat complicated, the parser-side script remains chaotic and not very well-organized because I don't have too much time to organize it, and it's still in the prototype phase.

Additionally, I have released `ship_wrapper.json`. This file contains raw data from the game, wrapped for each ship into a single JSON file. This is the data that the parser script used to create `ship.json`.

**Why did I decide to release this non-completed dataset?**
- Due to my limited free time, I am unable to dedicate as much effort as before. Real-life commitments have kept me busy.

**Will this repository be maintained?**
- Yes, this repository will continue to be maintained, albeit at a slower pace. As a hobby project, I don't foresee abandoning it anytime soon.

**Will `ship.json` receive updates in the foreseeable future?**
- Immediate updates to `ship.json` are not expected. The existing structure is set to remain unchanged for the foreseeable future, which informed my decision to release the dataset in its current, incomplete form. Rest assured, updates are being made to the structure on the backend, but they will not be made public until the dataset reaches a level of completeness that I deem suitable for a full release.

**Concerning the current structure of `ship.json`:**
- Personally, I am of the opinion that a dynamic structure may not be the most suitable for this particular task. While it offers users a greater degree of flexibility, it also introduces a level of complexity that must be navigated before the data can be utilized effectively. For instance, statistics require manual calculation, which, despite granting more freedom as they are not confined to static levels like those found on a wiki (levels 1, 100, 120, 125), significantly increases the complexity of the task. Currently, I am contemplating a simpler structure that focuses on displaying static data in the future update, such as pre-calculated statistics. This would streamline the process, although it would mean foregoing the dynamic data that some users may prefer for simulating game statistics with precision.

**Is there any possibility of making the backend/server code public?**
- I do not believe it would be prudent to release the parser/datamine script/code to the public. The primary concern is that it could be misused by individuals to cheat within the game. Additionally, the parser script is partially integrated with the datamine script, which would necessitate considerable effort to separate them into a monorepo. Given that the script already includes three submodules, introducing more would not be an advisable decision.

**Why is this QnA placed in the ship documentation?**
- Honestly, it's just because I'm feeling a bit lazy.

# Explanation
**What are `id`, `gid`, `cid`, and `sid`?**

- **`id`**: This value is derived from `ship_data_group` and serves as a ship identifier. Each ship has a unique `id`, and the values are sorted into distinct categories. Unlike `gid`, which is somewhat randomized, `id` ensures a unique representation for each ship.

- **`gid`**: Also known as `group_index` or `group_id`, `gid` appears throughout the game data. It is particularly useful because it covers various aspects within the game code. In this repository, we primarily use `gid` as the key.

- **`cid`**: I created this custom ID, where the full name is `category_id`. The values associated with `cid` represent different ship categories:
  - 0: Bulin
  - 1: Normal
  - 2: Research
  - 4: META

- **`sid`**: The `ship_id` corresponds to the current state of a ship. For example:
  - Different limit breaks (e.g., limit break 1 and limit break 2) have distinct `sid` values.
  - Retrofit and DDG modes (whether in the vanguard or main fleet)


**Ship Rarity**
In `ships.json`, the rarities are raw from game data. The game data rarity starts from 2, which is somewhat unusual. Here's the reference table:

| value | rarity              |
|:-----:|---------------------|
| 2     | NORMAL/COMMON       |
| 3     | RARE                |
| 4     | ELITE               |
| 5     | SUPER RARE/PRIORITY |
| 6     | ULTRA RARE/DECISIVE |


**Calculating Ship Stats**

In the `ship.json` file, precalculated stats are absent. Instead, it provides information on `base`, `growth`, and `enhance`. This allows for dynamic calculation of stats using the following formula:

\[ \text{STATS} = \text{retrofit} + \left\lfloor \left( \text{base} + \frac{{\text{growth} \cdot \max(\text{level} - 1, 1)}}{1000} + \text{enhance} \right) \cdot \left(1 + \frac{\text{affinity}}{100}\right) \right\rfloor \]

> [!TIP]
> The `enhance` value combines stats from `enhance`, `devs`, `fate_simulation`, `meta_enhance`, etc.
> The default value represents the maximum achievable stats for that ship. Keep in mind that dynamic calculations for ships below level 100, especially for normal ships, may lead to some miscalculations due to the enhance values being based on at least level 100 for normal ships and level 70 for research/PR ships.

> [!NOTE]
> `speed` and `luck` are not affected by affinity.
> retrofit are stats from `retrofit.bonus`


**Skill Structure**
Skill structures are not completed, this is the lastest change i made before this dataset released.

The following skill structures provide information on ship skills, including how they can be obtained or upgraded. Each entry contains the following attributes:

- **`id`**: The unique identifier for the skill.
- **`parent`**: Refers to the skill parent, like the first appear (can be itself).
- **`upgrade`**: Indicates the skill's upgraded version (if applicable).
- **`downgrade`**: Specifies the skill's downgraded version (if applicable).
- **`requirement`**: Describes the conditions or requirements for obtaining or upgrading the skill.

### Example: Hakuryuu Skill

To explore all of Hakuryuu's skills, search for upgrades with a `null` value. This signifies that the skill is fully upgraded. The structure below is inspired by my old repository, [CS-React](https://celestialsparkz.github.io/#/ship/Hakuryuu):
```JSONC
{
  "19380": {
    "id": 19380,
    "parent": 19380,
    "upgrade": 18380,
    "downgrade": null,
    "requirement": "Default"
  },
  "19390": {
    "id": 19390,
    "parent": 19390,
    "upgrade": null,
    "downgrade": null,
    "requirement": "Default"
  },
  "19400": {
    "id": 19400,
    "parent": 19400,
    "upgrade": 18400,
    "downgrade": null,
    "requirement": "Default"
  },
  "19000": {
    "id": 19000,
    "parent": 19000,
    "upgrade": 19001,
    "downgrade": null,
    "requirement": "Devs 10"
  },
  "19001": {
    "id": 19001,
    "parent": 19000,
    "upgrade": 19002,
    "downgrade": 19000,
    "requirement": "Devs 20"
  },
  "19002": {
    "id": 19002,
    "parent": 19000,
    "upgrade": null,
    "downgrade": 19001,
    "requirement": "Devs 30"
  },
  "18400": {
    "id": 18400,
    "parent": 19400,
    "upgrade": null,
    "downgrade": 19400,
    "requirement": "Fate Simulation 3"
  },
  "18380": {
    "id": 18380,
    "parent": 19380,
    "upgrade": null,
    "downgrade": 19380,
    "requirement": "Fate Simulation 5"
  }
}
```

# Data Structure
```Typescript
type Stats = {
  health: number;
  firepower: number;
  torpedo: number;
  antiair: number;
  aviation: number;
  reload: number;
  accuracy: number;
  evasion: number;
  speed: number;
  luck: number;
  asw: number;
};

interface Ship {
  id: number;
  gid: number;
  cid: number;
  sid: number[];
  name: string;
  codename: string;
  class: string;
  nationality: number;
  obtain: string[];
  type: number; // hulltype
  rarity: number;
  armor: number;
  hexagon: string[];
  share_group: number[]; // for skin sharing
  breakout: string[][];
  devs?: {
    [devs_stage: string]: string[];
  };
  retrofit?: {
    id: number;
    level: number;
    bonus: {
      [stats: string]: number;
    };
    skill: number; // 0 if no retrofit skill
    skin: number; // retrofit skin id
    armor: number;
    hexagon: string[];
  };
  equipment: {
    [slot: string]: {
      default: number | null;
      slot: number;
      type: number[];
      mount: number;
      preload: number;
      efficiency: number; // float
    };
  };
  base: {
    [sid: string]: Stats;
  };
  growth: {
    [sid: string]: Stats;
  };
  enhance: Stats;
  skill: {
    [skill_id: string]: {
      id: number;
      parent: number;
      upgrade: number | null;
      downgrade: number | null;
      requirement: string;
    };
  };
};
```


