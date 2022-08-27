import fs from "node:fs";
import { join } from "path";

const link_remove = (file) =>
	file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/", "");

export default function main(azurapi, ship_banner, __dirname)
{
	// eslint-disable-next-line no-console
	console.time("=> Check Runtime");
	let local_file_list = [];
	let table_array     = [];
	let missing_array   = [];
	let unknown_array   = [];

	const ABSOLUTE_PATH = join(__dirname, "/images/skins/");
	fs.readdirSync(ABSOLUTE_PATH).forEach((folder) =>
	{
		const FOLDER_PATH = join(ABSOLUTE_PATH, folder);
		fs.readdirSync(FOLDER_PATH).forEach((ship) =>
		{
			const SKIN_PATH = join(FOLDER_PATH, ship);

			if (fs.existsSync(SKIN_PATH) && fs.lstatSync(SKIN_PATH).isDirectory())
			{
				fs.readdirSync(SKIN_PATH).forEach((skin) =>
					local_file_list.push(folder + "/" + ship + "/" + skin));
			}
			else local_file_list.push(folder + "/" + ship);
		});
	});

	console.log("Checking local file");
	ship_banner.forEach((ship) =>
	{
		const SHIP_NAME	= ship.name;
		const SHIP_ID	= ship.id;
		const SHIP_SKIN	= ship.skins;

		SHIP_SKIN.forEach((skin) =>
		{
			const SKIN_NAME     = skin.name;
			const SKIN_TYPE     = skin.type;
			const SKIN_BANNER   = link_remove(skin.banner);
			const SKIN_ICON     = link_remove(skin.icon);
			const SKIN_CHIBI    = link_remove(skin.chibi);
			const SKIN_SHIPYARD = link_remove(skin.shipyard);

			let file_available = false;
			let file_banner    = false;
			let file_icon      = false;
			let file_chibi     = false;
			let file_shipyard  = false;

			local_file_list.forEach((file) =>
			{
				if (file === SKIN_BANNER)
					file_banner = true;

				if (file === SKIN_ICON)
					file_icon = true;

				if (file === SKIN_CHIBI)
					file_chibi = true;

				if (file === SKIN_SHIPYARD)
					file_shipyard = true;
			});

			if ([file_banner, file_icon, file_chibi, file_shipyard].includes(true))
				file_available = true;

			if (!file_available)
			{
				if (file_banner)
					missing_array.push(SKIN_BANNER);

				if (file_icon)
					missing_array.push(SKIN_ICON);

				if (file_chibi)
					missing_array.push(SKIN_CHIBI);

				if (file_shipyard)
					missing_array.push(SKIN_SHIPYARD);
			};

			const UNKNOWN_OBJECT = ({ id: SHIP_ID, ship: SHIP_NAME, skin: SKIN_NAME, type: SKIN_TYPE });
			if (SKIN_BANNER.includes("000/Default"))
				unknown_array.push({ ...UNKNOWN_OBJECT, file: "Banner" });

			if (SKIN_ICON.includes("000/Default"))
				unknown_array.push({ ...UNKNOWN_OBJECT, file: "Icon" });

			if (SKIN_CHIBI.includes("000/Default"))
				unknown_array.push({ ...UNKNOWN_OBJECT, file: "ChibiIcon" });

			if (SKIN_SHIPYARD.includes("000/Default"))
				unknown_array.push({ ...UNKNOWN_OBJECT, file: "ShipyardIcon" });
		});
	});

	console.log("File count => " + local_file_list.length);

	if (missing_array.length > 0)
	{
		console.log("File not found in local database");
		missing_array.forEach((file) => console.log("=> " + file));
	};

	console.log("----------------------");
	console.log("Checking missing file");

	if (unknown_array.length > 0)
	{
		// eslint-disable-next-line no-console
		console.table(
			unknown_array.map(idx =>
			{
				return {
					ID: idx.id,
					SHIP: idx.ship,
					SKIN: idx.skin,
					TYPE: idx.type,
					FILE: idx.file
				};
			})
		);
	}
	else console.log("No missing file");

	console.log("----------------------");
	console.log("Checking unused file");

	let count_v2  = 0;
	let find_list = [];
	ship_banner.forEach((ship) =>
	{
		ship.skins.forEach((skin) =>
		{
			const SKIN_BANNER   = link_remove(skin.banner);
			const SKIN_ICON     = link_remove(skin.icon);
			const SKIN_CHIBI    = link_remove(skin.chibi);
			const SKIN_SHIPYARD = link_remove(skin.shipyard);

			if (!skin.type)
				console.log("=> " + ship.name + " skin.type = " + skin.type);

			if (local_file_list.find(idx => idx === SKIN_BANNER))
				find_list.push(SKIN_BANNER);

			if (local_file_list.find(idx => idx === SKIN_ICON))
				find_list.push(SKIN_ICON);

			if (local_file_list.find(idx => idx === SKIN_CHIBI))
				find_list.push(SKIN_CHIBI);

			if (local_file_list.find(idx => idx === SKIN_SHIPYARD))
				find_list.push(SKIN_SHIPYARD);
		});
	});

	local_file_list.forEach((file) =>
	{
		if (!find_list.find(idx => idx === file))
			table_array.push({ file: file });
		else count_v2++;
	});

	// eslint-disable-next-line no-console
	console.table(table_array.map(idx => { return { FILE: idx.file } }));
	console.log(`=> Used File = ${count_v2}/${local_file_list.length}`);

	console.log("----------------------");
	console.log("Checking Data Update");
	let new_ship = [];
	let new_skin = [];
	azurapi.forEach((ship) =>
	{
		const SHIP_NAME   = ship.names.en;
		const SHIP_SKIN   = ship.skins;
		const BANNER_DATA = ship_banner.find(idx => idx.id === ship.id);
		if (!BANNER_DATA)
		{
			new_ship.push(SHIP_NAME);
			SHIP_SKIN.forEach((azurapi_skin) => new_skin.push(SHIP_NAME + " - " + azurapi_skin.name));
		}
		else
		{
			const BANNER_SKIN = BANNER_DATA.skins;
			SHIP_SKIN.forEach((azurapi_skin) =>
			{
				if (!BANNER_SKIN.find(banner_skin => banner_skin.name === azurapi_skin.name))
					new_skin.push(SHIP_NAME + " - " + azurapi_skin.name);
			});
		};
	});

	if (new_ship.length)
	{
		console.log("=> Ship Update Available");
		console.log(new_ship);
		console.log();
	}
	else console.log("=> Ship is up to date!\n");

	if (new_skin.length)
	{
		console.log("=> Skin Update Available");
		console.log(new_skin);
		console.log();
	}
	else console.log("=> Skin is up to date!\n");

	fs.writeFile("./src/azurapi.json", JSON.stringify(azurapi, null, "\t"), "utf8", function (err)
	{
		if (err)
		{
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};

		console.log("=> ./azurapi.json has been updated!");
	});
	// eslint-disable-next-line no-console
	console.timeEnd("=> Check Runtime");
};
