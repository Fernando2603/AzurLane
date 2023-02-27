# AzurLane
Azur Lane Resources

> extract/unpack [K0lb3/UnityPy](https://github.com/K0lb3/UnityPy)

> resources [AzurLaneTools/AzurLaneData](https://github.com/AzurLaneTools/AzurLaneData)

## 27 Feburary 2023 Changes
- `ShipBanner.json` is deprecated and will be removed in 2024 use `skins.json` instead
- changes `ShipBanner` folder from skins into skins_old and the unknown images as well
- `id` value in `skins.json` changed from `wiki_id` used by azurapi into `code_id` (in azurapi is `code` key)

## Fetch
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skins.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/MeowfficerTalentList.json`

## Replace Missing File (Wild Card)
#### Banner
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/unknown/banner.png`
#### Chibi
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/unknown/chibi.png`
#### Icon
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/unknown/icon.png`
#### Shipyard
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/unknown/shipyard.png`

## Json Structure
**skins.json**
```Typescript
type skins {
   id: Integer,
   gid: Integer,
   name: String,
   skins: skin[]
}

type skin {
   id: Integer,
   name: String,
   type: String,
   desc: String,
   tag: String[],    // live2d, bg, effect, custombg, bgm, dynamic
   banner: String,   // link
   chibi: String,    // link
   icon: String,     // link
   shipyard: String, // link
   shared?: Integer  // shared contains skin parent gid
}
```

**meowfficer.json**
```Json
[
   {
      "name":"Justice",
      "rarity":"Super Rare",
      "type":"DD",
      "slot":"Command",
      "timer":"10:24:00",
      "faction":"Eagle Union",
      "color":"gold",
      "stats":{
         "logistics":[
            44,
            144
         ],
         "directives":[
            52,
            171
         ],
         "tactics":[
            52,
            171
         ]
      },
      "skill":{
         "name":"31 Knots of Justice",
         "image":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skill/meowfficer/Justice.png",
         "general":{
            "level1":[
               "When assigned to a fleet with 3 DDs",
               "Gives your fleet +1 tile movement on the map."
            ],
            "level2":[
               "When assigned as the Command Cat to a fleet that has at least 1 DD",
               "15% chance to launch a preemptive torpedo strike when engaging any non-Boss fleet on the map."
            ],
            "level3":[
               "When assigned as the Command Cat to a fleet that isn't in combat and has at least 1 DD",
               "Adds an option in the Strategy Menu to switch positions with a friendly fleet in combat if it's directly adjacent to yours."
            ]
         },
         "opsi":{
            "level1":[
               "When assigned to a fleet with 3 DDs",
               "Increases your Vanguard's TRP by a moderate amount based on the Tactics stat."
            ],
            "level2":[
               "When assigned as the Command Cat and the 2nd ship in your Vanguard is a DD",
               "Fires a Lv.1 special barrage."
            ],
            "level3":[
               "None",
               "Upgrades the special barrage to Lv.2."
            ]
         }
      },
      "image":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/meowfficer/Justice/Justice.png",
      "icon":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/meowfficer/Justice/JusticeIcon.png",
      "banner":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/meowfficer/Justice/JusticeBanner.png"
   }
]
```


**MeowfficerTalentList.json**
```Json
[
   {
      "id":"artilleryDestroyer",
      "name":{
         "level1":"Artillery Rookie Destroyer",
         "level2":"Artillery Adept Destroyer",
         "level3":"Artillery Ace Destroyer",
         "format":"Artillery Rookie/Adept/Ace Destroyer"
      },
      "type":"Increase DD Firepower by x",
      "hullType":[
         "DD"
      ],
      "stats":[
         "Firepower"
      ],
      "desc":{
         "level1":"Increase DD Firepower by 3",
         "level2":"Increase DD Firepower by 4",
         "level3":"Increase DD Firepower by 6",
         "format":"Increase DD Firepower by 3/4/6"
      },
      "image":[
         "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/talent/Destroyer_Firepower_1.png",
         "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/talent/Destroyer_Firepower_2.png",
         "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/talent/Destroyer_Firepower_3.png"
      ]
   }
]
```
