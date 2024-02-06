# SKIN

- [Overview](#overview)
- [Future Planning](#future-planning)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview
The skin dataset is nearly complete in the patch 4.4.8 update. It contains all the necessary elements to synchronize with other datasets like `voiceline` and, hopefully, `ship.json` (which is in the planning phase for future updates).

There are two types of structures and datasets for skins. The first type uses `object`, while the other uses `list` or `array`. Specifically, `skin.json` and `ship_skin.json` use the `object` structure, whereas `skin_list.json` and `ship_skin_list.json` utilize the `list` or `array` structure. The distinction between `skin.json` and `ship_skin.json` lies in how the skins are grouped. In `skin.json`, skins are combined and sorted by `gid` and then `skin_id`, while in `ship_skin.json`, skins are grouped by ship and sorted by `gid`, as detailed in the [Data Structure](#data-structure) section. In simple terms, `skin.json` is essentially an unpacked version of `ship_skin.json`.

The painting on the skins have two keys: `painting` and `painting_n`. The default is `painting`, which is always available for all skins. On the other hand, `painting_n` is a painting without a special background attached to the skin itself and this not always available, the sample are provided below so you can see the difference between `painting` and `painting_n`.
> [!TIP]
> The choice of using the keys `painting` and `painting_n` aligns with the in-game asset names. This also simplifies code on the server side by maintaining the same keys as the asset names.

> [!IMPORTANT]
> The painting extracted using [nobbyfix/painting_reconstruct.py](https://gist.github.com/nobbyfix/fb535462acc897ab1f39e5e9981e4645).
> A special thanks to nobbyfix for creating this script, which not only extracts the skin but also resizes the image to max 2048px if it's too large, resulting in smaller file size.

Certain skins may have up to two types of background or no background at all. Not gonna explain too far into the details of why some skins have backgrounds and others don't, as that requires further research. The background in skin is used when available in-game. Otherwise, the `background2` serves as the background for skins that have a special background attached to the painting/L2D/skin itself. This can be toggled on (`painting`) or off (`painting_n`) when available, and `background2` is mostly a blurred image.

In `ship_skins.json`, there is a special key called `shared`, which indicates when a skin is shared from another alter-ship. The `shared` key contains the `gid` of the original ship with a `string` type. This key is exclusive to shared skins. You can differentiate shared skins without `shared` key by comparing the `gid` of the skin with the original, the `shared` key just simplifies identifying shared skins. The type of the `shared` key is `string` to facilitate direct access in code languages like `Python` that strictly require object key types to be `string`.

Currently, the assets available in the skin dataset that can be accessed by key include bgm, background, background2, painting, painting_n, banner, chibi, icon, and shipyard. Sample images are provided below, as markdown cannot play audio files bgm sample are not provided.
<details>
  <summary>background</summary>
  
  <p align='center'>
    <img src="/images/background/109.png" alt="background">
  </p>
</details>
<details>
  <summary>background2</summary>
  
  <p align='center'>
    <img src="/images/background/1101.png" alt="background2">
  </p>
</details>
<details>
  <summary>painting</summary>

  <p align="center">
    <img src="/images/skins/701042/painting.png" alt="painting">
  </p>
</details>
<details>
  <summary>painting_n</summary>

  <p align="center">
    <img src="/images/skins/701042/painting_n.png" alt="painting_n">
  </p>
</details>
<details>
  <summary>banner</summary>

  <p align="center">
    <img src="/images/skins/701042/banner.png" alt="banner">
  </p>
</details>
<details>
  <summary>chibi</summary>

  <p align="center">
    <img src="/images/skins/701042/chibi.png" alt="chibi">
  </p>
</details>
<details>
  <summary>icon</summary>

  <p align="center">
    <img src="/images/skins/701042/icon.png" alt="icon">
  </p>
</details>
<details>
  <summary>qicon</summary>

  <p align="center">
    <img src="/images/skins/701042/qicon.png" alt="qicon">
  </p>
</details>
<details>
  <summary>shipyard</summary>

  <p align="center">
    <img src="/images/skins/701042/shipyard.png" alt="shipyard">
  </p>
</details>

> [!TIP]
> The skin dataset is actively maintained, especially in comparison to others. The skin dataset are the reason this repository was initially created, which for syncing with `AzurAPI`. In the early patches, certain features like background music, background images, and complete ship paintings/images weren't included, as `AzurAPI` already covered these aspects. However, `AzurAPI` seems doesn't maintaned anymore these features have been added into the skin dataset.

> [!IMPORTANT]
> Starting from Patch 4.4.8, the version when these docs were released, `skins.json` won't receive updates anymore and is planned for removal in 2025. It's suggested to use `ship_skin.json` or `ship_skin_list.json` moving forward, as they are upgraded versions of `skins.json` with some minor structural changes explained in the [Data Structure](#data-structure) section.

> [!NOTE]
> This docs are still incomplete and will updated in the future.


# Future Planning
There are some unreleased skin features/assets, such as painting faces and skin costs. The addition of painting faces is still in the planning phase, primarily due to the complexities introduced by image resizing in painting. Calculating and replacing faces in resized images pose challenges. The other options is including every painting with different faces is impractical, as it would significantly increase the repository size. Releasing paintings without resizing is currently the preferred option, with a final decision to be made in the future.

In other hand determining the cost of a skin is not feasible within the game itself, third-party sites like wikis are necessary. Skin costs are not always available in-game, disappearing when the skin is not on sale. Additionally, discounts further complicate tracking.

> [!TIP]
> There is also consideration about chibi or L2D animation feasibility, as binding animations solely with JSON is a complex task and feasibility remains unknown.

> [!IMPORTANT]
> This is still in the "planning" phase, and its availability in the future is not guaranteed.


# Data Structure
```Typescript
type Link = string | null;

// model/vo/shipskin.lua
enum SkinTag {
  Live2D      = "live2d",    // 1
  BG          = "bg",        // 2 
  Effect      = "effect",    // 3 
  DynamicBG   = "dyanmicbg", // 4 
  BGM         = "bgm",       // 5 
  Dynamic     = "dynamic",   // 6 
  DyanmicPlus = "dyanmic+"   // 7 
};

type Skin = {
  id: number;
  gid: number;
  name: string;
  type: string;
  desc: string;
  tag: SkinTag[]; // string[]
  illustrator: number; // default -1
  illustrator2: number; // default -1
  voice_actor: number; // default -1
  voice_actor2: number; // default -1
  bgm: Link;
  background: Link;
  background2: Link;
  painting: Link;
  painting_n: Link;
  banner: Link;
  chibi: Link;
  icon: Link;
  shipyard: Link;
  // shread only available in ShipSkin
  // shared contain gid of owner of the skin
  shared?: string;
};

// skin.json
type SkinData = {
  [skin_id: string]: Skin;
};

// skin_list.json
type SkinListData = Skin[];

// ship_skin.json
type ShipSkinData = {
  [ship_gid: string]: {
    gid: number;
    name: string;
    skins: SkinData;
  };
};

// ship_skin_list.json
type ShipSkinListData = ShipSkin[];
```


# Fetch
- [skin.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skin.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skin.json
```

- [skin_list.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skin_list.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/skin_list.json
```

- [ship_skin.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ship_skin.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ship_skin.json
```

- [ship_skin_list.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ship_skin_list.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ship_skin_list.json
```