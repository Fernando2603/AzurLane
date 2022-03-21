import fs from 'node:fs';
import fetch from 'node-fetch';

let AzurAPI		= [];
let ShipBanner	= [];
let json_data	= [];

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ShipBanner.json")
	.then(res => res.json())
]).then(
	([azurAPI, shipBanner]) => {
		AzurAPI		= azurAPI;
		console.log("AzurAPI & ShipBanner Loaded!");
		ShipBanner	= shipBanner;
		// disabled for security reason
		// data_extract(azurAPI, shipBanner); 
	},
	(error) => {
		console.log('error: ' + error);
	}
);

function data_extract(azurapi, ship_banner) {
	azurapi.forEach((ship) => {
		let ship_name	= ship.names.en;
		const ship_id	= ship.id;
		const skin_link	= "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/";
		const ship_skin	= ship.skins; // array

		if ( ship_id === "30001" ) { ship_name = "Hiryuu META" };
		if ( ship_id === "30002" ) { ship_name = "Ark Royal META" };

		let banner_id	= ship_banner.find( banner => banner.id === ship_id );

		if ( !banner_id ) { 
			banner_id = ({
				name: ship_name,
				id: ship_id,
				skins: [
					{
						name: "Default",
						banner: skin_link + "000/Banner.png",
						icon: skin_link + "000/Icon.png",
						chibi: skin_link + "000/ChibiIcon.png",
						shipyard: skin_link + "000/ShipyardIcon.png"
					}
				]
			});
		}; 
		let skin_output	= [];
		ship_skin.forEach((azurapi_skin) => {
			const skin_name	= azurapi_skin.name;

			// 19032022
			// using azurapi check which skin is missing / new skin update
			// parse missing/unfilled skin into variable
			// check skin is available in local folder

			// if skin file available change the file name and move using fs.rename
			// and checking skin folder if valid check which file is unused
			// use that file to fill into missing/unfilled skin 

			// else if skin file is not available return unknown skin variable
			// finally using script to fill and parse json
			// and check it manually with modified script

			// note: current function just for change old skin name into new format
			banner_id.skins.forEach((skin) => {
				if ( skin_name === skin.name ) {

					const skin_banner	= skin.banner;
					const skin_icon		= skin.icon;
					const skin_chibi	= skin.chibi;
					const skin_shipyard	= skin.shipyard;

					let ship_replace	= ship_name.replace(/ /g,"_");

					let library_name	= ship_replace;
					let image_name		= ship_replace;

					if ( ship_replace.includes("_μ") || ship_replace.includes("_µ") ) { 
						library_name 	= ship_replace.replace("_μ","").replace("_µ","");
						image_name	= ship_replace.replace("_μ","_µ");
						console.log(ship_replace)
					};
					if ( ship_replace.includes("-chan") ) { library_name = ship_replace.replace("-chan",""); console.log(ship_replace) };

					if ( skin_banner.includes("/Kizuna_AI/") ) { library_name	= "Kizuna_AI"; console.log(ship_replace) };
					if ( skin_banner.includes("/META/") ) { library_name = "META" };

					if ( ship_name === "Ōkami Mio" ) { image_name = "Ookami_Mio" };
					if ( ship_name === "Kaga(BB)" ) { library_name = "Kaga"; image_name = "Kaga_(Battleship)" };
					if ( ship_name === "Kasumi" ) { library_name = "Kasumi_Venus_Vacation"; image_name = "Kasumi_(Venus_Vacation)" };
					if ( ship_name === "Kasumi Retrofit" ) { library_name = "Kasumi"; image_name = "Kasumi" };
					if ( ship_id === "Collab001" ) { library_name = "Neptune_Neptunia"; image_name = "Neptune_(Neptunia)"}
					if ( ship_name === "Pamiat' Merkuria" ) { library_name = "Pamiat_Merkuria"; image_name = "Pamiat_Merkuria" };

					function skin_replace(skin) {
						const skin_value = skin
							.replace(`/${library_name}/`, `/${ship_id}/`)
							.replace(image_name, "")
							.replace("/Unknown/","/000/")
							.replace("Unknown",'')
						return skin_value
					};

					let skin_banner_final 	= skin_replace(skin_banner);
					let skin_icon_final 	= skin_replace(skin_icon);
					let skin_chibi_final 	= skin_replace(skin_chibi);
					let skin_shipyard_final = skin_replace(skin_shipyard);

					const skin_parse	= ({
						name: skin_name,
						banner: skin_banner_final,
						icon: skin_icon_final,
						chibi: skin_chibi_final,
						shipyard: skin_shipyard_final
					});
					skin_output.push(skin_parse);
				};
			});

		});

		const ship_json_builder	= ({
			id: ship_id,
			name: ship_name,
			skins: skin_output
		});
		json_data.push(ship_json_builder);
	});
	const json_content = JSON.stringify(json_data, null , "\t");
	fs.writeFile("./main.json", json_content, 'utf8', function (err) {
		if (err) {
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};

		console.log("=> ./main.json has been updated!");
	});
}