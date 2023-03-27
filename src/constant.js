import { path } from "./utils.js";

export const REPOSITORY_LINK = "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/";

export const SHIP_IMAGE = {
  banner: path("unpack/banner"),
  chibi: path("unpack/chibi"),
  icon: path("unpack/icon"),
  shipyard: path("unpack/shipyard")
};

export const UNKNOWN_IMAGE = {
  banner: "images/unknown/banner.png",
  chibi: "images/unknown/chibi_icon.png",
  icon: "images/unknown/icon.png",
  shipyard: "images/unknown/shipyard_icon.png"
};

export const SHIP_NATIONALITY = {
  0: "Universal",
  1: "Eagle Union",
  2: "Royal Navy",
  3: "Sakura Empire",
  4: "Iron Blood",
  5: "Dragon Empery",
  6: "Sardegna Empire",
  7: "Northern Parliament",
  8: "Iris Libre",
  9: "Vichya Dominion",
  96: "Tempesta",
  97: "META",
  98: "Universal",
  101: "Neptunia",
  102: "Bilibili",
  103: "Utawarerumono",
  104: "Kizuna AI",
  105: "Hololive",
  106: "Venus Vacation",
  107: "The Idolmaster",
  108: "SSSS",
  109: "Atelier Ryza"
};

export const PROPERTY_HEXAGON = {
  E: 0,
  D: 1,
  C: 2,
  B: 3,
  A: 4,
  S: 5
};

export const SKIN_TAG = {
  1: "live2d",
  2: "bg",
  3: "effect",
  4: "custombg",
  5: "bgm",
  6: "dynamic"
};

export const SHIP_RARITY = {
  1: "Normal",
  2: "Rare",
  3: "Elite",
  4: "Super Rare",
  5: "Ultra Rare"
};
