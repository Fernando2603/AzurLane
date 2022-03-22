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
		data_extract(azurAPI, shipBanner); 
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

		// replace name because azurapi names.en output is hiryu.meta & royal.meta
		if ( ship_id === "30001" ) { ship_name = "Hiryuu META" };
		if ( ship_id === "30002" ) { ship_name = "Ark Royal META" };

		// check banner exist or not
		let banner_get	= ship_banner.find( banner => banner.id === ship_id );
		let skin_output	= [];

		if ( banner_get ) {
			ship_skin.forEach((skin) => {
				const skin_name			= skin.name;
				let skin_availability	= false;
				let banner_skin_get 	= "";
				banner_get.skins.forEach((banner_skin_data) => {
					if ( banner_skin_data.name === skin_name ) {
						banner_skin_get		= banner_skin_data;
						skin_availability	= true;
					};
				});

				if ( skin_availability ) {
					// both azurapi/shipbanner have this skin
					const skin_banner	= banner_skin_get.banner;
					const skin_icon		= banner_skin_get.icon;
					const skin_chibi	= banner_skin_get.chibi;
					const skin_shipyard	= banner_skin_get.shipyard;
					skin_output.push({
						name: skin_name,
						banner: skin_banner,
						icon: skin_icon,
						chibi: skin_chibi,
						shipyard: skin_shipyard
					})
				} else {
					// new skin that shipbanner doesnt have
					// assuming we have the file
					console.log("New skin " + ship_name + " ==> " + skin_name)
					const skin_folder		= skin_name.replace(/ /g, "_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
					const skin_library		= skin_link + ship_id + "/" + skin_folder + "/";

					const new_skin_banner	= skin_library + "Banner.png";
					const new_skin_icon		= skin_library + "Icon.png";
					const new_skin_chibi	= skin_library + "ChibiIcon.png";
					const new_skin_shipyard	= skin_library + "ShipyardIcon.png"; 

					skin_output.push({
						status: "new skin",
						name: skin_name,
						banner: new_skin_banner,
						icon: new_skin_icon,
						chibi: new_skin_chibi,
						shipyard: new_skin_shipyard
					});
				};
			});
		};

		let ship_json_builder	= ({
			id: ship_id,
			name: ship_name,
			skins: skin_output
		});

		if ( !banner_get ) {
			// new ship
			// assuming we have the file
			let unknown_skin_get = []; 

			ship_skin.forEach((skin) => {
				const skin_name			= skin.name;
				console.log("New Ship" + ship_name + " =>> " + skin_name);

				const skin_folder		= skin_name.replace(/ /g, "_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
				const skin_library		= skin_link + ship_id + "/" + skin_folder + "/";

				const new_skin_banner	= skin_library + "Banner.png";
				const new_skin_icon		= skin_library + "Icon.png";
				const new_skin_chibi	= skin_library + "ChibiIcon.png";
				const new_skin_shipyard	= skin_library + "ShipyardIcon.png"; 

				unknown_skin_get.push({
					status: "new ship",
					name: skin_name,
					banner: new_skin_banner,
					icon: new_skin_icon,
					chibi: new_skin_chibi,
					shipyard: new_skin_shipyard
				});
			});

			ship_json_builder = ({
				status: "new ship",
				name: ship_name,
				id: ship_id,
				skins: unknown_skin_get
			});
		};

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