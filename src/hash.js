import fs from "node:fs";
import { sha256 } from "crypto-hash";

const BANNER_DATA = fs.readFileSync("./shipBanner.json");
const SHIP_BANNER = JSON.parse(BANNER_DATA);

const link_remove = (file) =>
	file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main", ".");

const getHash = async (data) => await sha256(data);

let container = [];

async function getSkin(skin)
{
	const SKIN_BANNER   = link_remove(skin.banner);
	const SKIN_ICON     = link_remove(skin.icon);
	const SKIN_CHIBI    = link_remove(skin.chibi);
	const SKIN_SHIPYARD = link_remove(skin.shipyard);

	const BANNER_FILE   = fs.readFileSync(SKIN_BANNER);
	const ICON_FILE     = fs.readFileSync(SKIN_ICON);
	const CHIBI_FILE    = fs.readFileSync(SKIN_CHIBI);
	const SHIPYARD_FILE = fs.readFileSync(SKIN_SHIPYARD);

	const BANNER_HASH   = await getHash(BANNER_FILE);
	const ICON_HASH     = await getHash(ICON_FILE);
	const CHIBI_HASH    = await getHash(CHIBI_FILE);
	const SHIPYARD_HASH = await getHash(SHIPYARD_FILE);

	return ({
		name: skin.name,
		type: skin.type,
		banner: BANNER_HASH,
		icon: ICON_HASH,
		chibi: CHIBI_HASH,
		shipyard: SHIPYARD_HASH
	});
};

for (let i = 0; i < SHIP_BANNER.length; i++)
{
	let skin_container = [];
	for (let x = 0; x < SHIP_BANNER[i].skins.length; x++)
		skin_container.push(await getSkin(SHIP_BANNER[i].skins[x]));

	container.push({
		id: SHIP_BANNER[i].id,
		name: SHIP_BANNER[i].name,
		skins: skin_container
	});
};

fs.writeFileSync(
	"./src/hash.json",
	JSON.stringify(container, null, "\t"),
	"utf8",
	(err) => err ? console.log(err) : null
);
