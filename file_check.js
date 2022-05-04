import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let AzurAPI		= [];
let json_data	= [];

const banner_file	= fs.readFileSync("./ShipBanner.json");
const ShipBanner	= JSON.parse(banner_file);

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json())
]).then(
	([azurAPI]) => {
		AzurAPI		= azurAPI;
		console.log("AzurAPI & ShipBanner Loaded!");
		data_extract(azurAPI, ShipBanner);
	},
	(error) => {
		console.log('error: ' + error);
	}
);

const __dirname	= dirname(fileURLToPath(import.meta.url));

function data_extract(azurapi, ship_banner) {
	let count = 0;
	let local_file_list	= [];
	let table_array		= [];
	let missing_array	= [];
	let unknown_array	= [];
	const absolute_path	= join(__dirname, "/images/skins/");
	fs.readdirSync(absolute_path).forEach((folder) => {
		const folder_path	= join(absolute_path, folder);
		fs.readdirSync(folder_path).forEach((ship) => {
			const skin_path	= join(folder_path, ship);

			if ( fs.existsSync(skin_path) && fs.lstatSync(skin_path).isDirectory() ) {
				fs.readdirSync(skin_path).forEach((skin) => {
					const full_path	= folder + "/" + ship + "/" + skin;
					local_file_list.push(full_path);
				});
			} else {
				const full_path	= folder + "/" + ship;
				local_file_list.push(full_path);
			};
		});
	});
	console.log("Checking local file");
	ship_banner.forEach((ship) => {
		const ship_name	= ship.name;
		const ship_id	= ship.id;
		const ship_skin	= ship.skins;

		ship_skin.forEach((skin) => {
			const skin_name		= skin.name;
			const skin_type		= skin.type;
			const skin_banner	= skin.banner;
			const skin_icon		= skin.icon;
			const skin_chibi	= skin.chibi;
			const skin_shipyard	= skin.shipyard;

			function link_remove(file) {
				const file_return = file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
				return file_return
			};

			let banner_file 	= link_remove(skin_banner);
			let icon_file		= link_remove(skin_icon);
			let chibi_file		= link_remove(skin_chibi);
			let shipyard_file	= link_remove(skin_shipyard);

			let file_available	= false;
			let file_banner		= false;
			let file_icon		= false;
			let file_chibi		= false;
			let file_shipyard	= false;

			local_file_list.forEach((file) => {
				if ( file === banner_file )		{ count++; file_available	= true; file_banner		= true };
				if ( file === icon_file )		{ count++; file_available	= true; file_icon		= true };
				if ( file === chibi_file )		{ count++; file_available	= true; file_chibi		= true };
				if ( file === shipyard_file )	{ count++; file_available	= true; file_shipyard	= true };
			});

			if ( !file_available ) {
				if ( file_banner )		{ missing_array.push(banner_file) };
				if ( file_icon )		{ missing_array.push(icon_file) };
				if ( file_chibi )		{ missing_array.push(chibi_file) };
				if ( file_shipyard )	{ missing_array.push(shipyard_file) };
			};

			if ( banner_file.includes("000/Default") ) {
				unknown_array.push({
					id: ship_id,
					ship: ship_name,
					skin: skin_name,
					type: skin_type,
					file: "Banner"
				});
			};
			if ( icon_file.includes("000/Default") ) {
				unknown_array.push({
					id: ship_id,
					ship: ship_name,
					skin: skin_name,
					type: skin_type,
					file: "Icon"
				});
			};
			if ( chibi_file.includes("000/Default") ) {
				unknown_array.push({
					id: ship_id,
					ship: ship_name,
					skin: skin_name,
					type: skin_type,
					file: "ChibiIcon"
				});
			};
			if ( shipyard_file.includes("000/Default") ) {
				unknown_array.push({
					id: ship_id,
					ship: ship_name,
					skin: skin_name,
					type: skin_type,
					file: "ShipyardIcon"
				});
			};
		});

	});
	console.log("File count => " + count);
	if ( missing_array.length > 0 ) {
		console.log("File not found in local database")
		missing_array.forEach((file) => console.log("=> " + file));
	};
	console.log("----------------------");
	console.log("Checking missing file");
	if ( unknown_array.length > 0 ) {
		console.table(
			unknown_array.map(idx => {
				return {
					"ID": idx.id,
					"SHIP": idx.ship,
					"SKIN": idx.skin,
					"TYPE": idx.type,
					"FILE": idx.file
				};
			})
		);
	} else { console.log("No missing file") };

	console.log("----------------------");
	console.log("Checking unused file");
	let count_v2 = 0;
	local_file_list.forEach((file) => {
		let status_quo = false;
		ship_banner.forEach((ship) => {
			ship.skins.forEach((skin) => {
				const skin_name		= skin.name;
				const skin_banner	= skin.banner;
				const skin_icon		= skin.icon;
				const skin_chibi	= skin.chibi;
				const skin_shipyard	= skin.shipyard;

				function link_remove(file) {
					const file_return = file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
					return file_return
				};

				let banner_file 	= link_remove(skin_banner);
				let icon_file		= link_remove(skin_icon);
				let chibi_file		= link_remove(skin_chibi);
				let shipyard_file	= link_remove(skin_shipyard);

				if (file === banner_file) {count_v2++; status_quo = true};
				if (file === icon_file) {count_v2++; status_quo = true};
				if (file === chibi_file) {count_v2++; status_quo = true};
				if (file === shipyard_file) {count_v2++; status_quo = true};

			});
		});
		if ( !status_quo ) {
			table_array.push({ file: file });
		};
	});

	console.table( table_array.map(idx => { return { "FILE": idx.file } }) );
	console.log(count_v2);

	// const json_content = JSON.stringify(json_data, null , "\t");
	// fs.writeFile("./skin_path.json", json_content, 'utf8', function (err) {
	// 	if (err) {
	// 		console.log("An error occured while writing JSON to File");
	// 		return console.log(err);
	// 	};

	// 	console.log("=> ./skin_path.json has been updated!");
	// });
};
