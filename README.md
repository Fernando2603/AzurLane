# AzurLane
Azur Lane Resources
>Resources from [AzurAPI](https://github.com/AzurAPI/azurapi-js-setup) & [Azur Lane Wiki](https://azurlane.koumakan.jp)

## Major change 19 March 2022
>Change images/skin/ship folder from ship_name into ship_id (this remove problem with latin link (expample: å) which cause problem to load the images)
>Remove ship_name from image (example: etcBanner.png, etcCasualBanner.png into Banner.png, CasualBanner.png)

## Fetch
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ShipBanner.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/MeowfficerTalentList.json`


## Replace Missing File (Wild Card) || rework 19 march 2022 old link still works
#### Banner
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownBanner.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Banner.png`
#### Icon
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownIcon.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Icon.png`
#### Chibi
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownChibiIcon.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/ChibiIcon.png`
#### Shipyard
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/ShipyardIcon.png`

## Json Structure
**ShipBanner.json**
```Json
[
   {
      "id":"336",
      "name":"Abercrombie",
      "skins":[
         {
            "name":"Default",
            "banner":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Banner.png",
            "icon":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Icon.png",
            "chibi":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/ChibiIcon.png",
            "shipyard":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/ShipyardIcon.png"
         },
         {
            "name":"Pumpkin Blast!",
            "banner":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/HalloweenBanner.png",
            "icon":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/HalloweenIcon.png",
            "chibi":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/HalloweenChibiIcon.png",
            "shipyard":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/HalloweenShipyardIcon.png"
         },
         {
            "name":"Mischief on the Rocks",
            "banner":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/BunnyBanner.png",
            "icon":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/BunnyIcon.png",
            "chibi":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/BunnyChibiIcon.png",
            "shipyard":"https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/BunnyShipyardIcon.png"
         }
      ]
   }
]
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
