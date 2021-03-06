import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let json_data	= [];

const BANNER_FILE	= fs.readFileSync("./src/ShipBanner.json");
const SHIP_BANNER	= JSON.parse(BANNER_FILE);

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json())
]).then(
	([azurAPI]) =>
	{
		console.log("AzurAPI & ShipBanner Loaded!");
		main(azurAPI, SHIP_BANNER);
	},
	(error) => { console.log('error: ' + error) }
);

const __dirname	= dirname(fileURLToPath(import.meta.url));

function link_remove(file)
{
	const FILE_RETURN	= file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
	return FILE_RETURN;
};

function main(azurapi, ship_banner)
{
	let local_file_list	= [];
	let table_array		= [];
	let missing_array	= [];
	let unknown_array	= [];
	const ABSOLUTE_PATH	= join(__dirname, "/images/skins/");
	fs.readdirSync(ABSOLUTE_PATH).forEach((folder) =>
	{
		const FOLDER_PATH	= join(ABSOLUTE_PATH, folder);
		fs.readdirSync(FOLDER_PATH).forEach((ship) =>
		{
			const SKIN_PATH	= join(FOLDER_PATH, ship);

			if (fs.existsSync(SKIN_PATH) && fs.lstatSync(SKIN_PATH).isDirectory())
			{
				fs.readdirSync(SKIN_PATH).forEach((skin) =>
				{
					const FULL_PATH	= folder + "/" + ship + "/" + skin;
					local_file_list.push(FULL_PATH);
				});
			}
			else
			{
				const FULL_PATH	= folder + "/" + ship;
				local_file_list.push(FULL_PATH);
			};
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
			const SKIN_NAME		= skin.name;
			const SKIN_TYPE		= skin.type;
			const SKIN_BANNER	= link_remove(skin.banner);
			const SKIN_ICON		= link_remove(skin.icon);
			const SKIN_CHIBI	= link_remove(skin.chibi);
			const SKIN_SHIPYARD	= link_remove(skin.shipyard);

			let file_available	= false;
			let file_banner		= false;
			let file_icon		= false;
			let file_chibi		= false;
			let file_shipyard	= false;

			local_file_list.forEach((file) =>
			{
				if (file === SKIN_BANNER)	{ file_available	= true; file_banner		= true };
				if (file === SKIN_ICON)		{ file_available	= true; file_icon		= true };
				if (file === SKIN_CHIBI)	{ file_available	= true; file_chibi		= true };
				if (file === SKIN_SHIPYARD)	{ file_available	= true; file_shipyard	= true };
			});

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

			const UNKNOWN_OBJECT	= ({ id: SHIP_ID, ship: SHIP_NAME, skin: SKIN_NAME, type: SKIN_TYPE });
			if (SKIN_BANNER.includes("000/Default"))
				unknown_array.push({ ...UNKNOWN_OBJECT, file: "Banner"});

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
		console.table(
			unknown_array.map(idx =>
			{
				return {
					"ID": idx.id,
					"SHIP": idx.ship,
					"SKIN": idx.skin,
					"TYPE": idx.type,
					"FILE": idx.file
				};
			})
		);
	}
	else console.log("No missing file");

	console.log("----------------------");
	console.log("Checking unused file");

	let count_v2	= 0;
	let find_list	= [];
	ship_banner.forEach((ship) =>
	{
		ship.skins.forEach((skin) =>
		{
			const SKIN_BANNER	= link_remove(skin.banner);
			const SKIN_ICON		= link_remove(skin.icon);
			const SKIN_CHIBI	= link_remove(skin.chibi);
			const SKIN_SHIPYARD	= link_remove(skin.shipyard);

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

	console.table(table_array.map(idx => { return { "FILE": idx.file } }));
	console.log(`=> Used File = ${count_v2}/${local_file_list.length}`);

	console.log("----------------------");
	console.log("Checking Data Update");
	let new_ship	= [];
	let new_skin	= [];
	azurapi.forEach((ship) =>
	{
		const SHIP_ID		= ship.id;
		const SHIP_NAME		= ship.names.en;
		const SHIP_SKIN		= ship.skins;
		const SHIP_BANNER	= ship_banner.find(idx => idx.id === ship.id);
		if (!SHIP_BANNER)
		{
			new_ship.push(SHIP_NAME);
			SHIP_SKIN.forEach((idx) => new_skin.push(SHIP_NAME + " - " + idx.name));
		}
		else
		{
			const BANNER_SKIN = SHIP_BANNER.skins;
			SHIP_SKIN.forEach((idx) =>
			{
				if (!BANNER_SKIN.find(idx => idx.name === idx.name)) new_skin.push(SHIP_NAME + " - " + idx.name);
			});
		};
	});

	if (new_ship.length)
	{
		console.log("=> Ship Update Available");
		console.log(new_ship);
		console.log();
	} else console.log("=> Ship is up to date!\n");

	if (new_skin.length)
	{
		console.log("=> Skin Update Available");
		console.log(new_skin);
		console.log();
	} else console.log("=> Skin is up to date!\n");

	fs.writeFile("./src/azurapi.json", JSON.stringify(azurapi, null , "\t"), 'utf8', function (err)
	{
		if (err)
		{
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};

		console.log("=> ./azurapi.json has been updated!");
	});
};
