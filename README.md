# AzurLane
Azur Lane Resources
>Resources from [AzurAPI](https://github.com/AzurAPI/azurapi-js-setup) & [Azur Lane Wiki](https://azurlane.koumakan.jp)

## Message 28 December 2022
next update gonna take 2~6 month because current script cant handle skin sharing patch

## Fetch
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ShipBanner.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/meowfficer.json`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/MeowfficerTalentList.json`


## Replace Missing File (Wild Card)
#### Banner
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownBanner.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Default/Banner.png`
#### Icon
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownIcon.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Default/Icon.png`
#### Chibi
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownChibiIcon.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Default/ChibiIcon.png`
#### Shipyard
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/Unknown/UnknownShipyardIcon.png`
- `https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/000/Default/ShipyardIcon.png`

## Json Structure
**ShipBanner.json**
```Json
[
   {
      "id": "336",
      "name": "Abercrombie",
      "skins": [
         {
            "name": "Default",
            "type": "Default",
            "banner": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Default/Banner.png",
            "icon": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Default/Icon.png",
            "chibi": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Default/ChibiIcon.png",
            "shipyard": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Default/ShipyardIcon.png"
         },
         {
            "name": "Pumpkin Blast!",
            "type": "Halloween",
            "banner": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Pumpkin_Blast/Banner.png",
            "icon": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Pumpkin_Blast/Icon.png",
            "chibi": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Pumpkin_Blast/ChibiIcon.png",
            "shipyard": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Pumpkin_Blast/ShipyardIcon.png"
         },
         {
            "name": "Mischief on the Rocks",
            "type": "Bunny",
            "banner": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Mischief_on_the_Rocks/Banner.png",
            "icon": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Mischief_on_the_Rocks/Icon.png",
            "chibi": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Mischief_on_the_Rocks/ChibiIcon.png",
            "shipyard": "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/336/Mischief_on_the_Rocks/ShipyardIcon.png"
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
