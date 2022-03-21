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
		AzurAPI			= azurAPI;
		ShipBanner	= shipBanner;
		console.log("AzurAPI & ShipBanner Loaded!");
		// console.log(shipBanner);
		data_extract(azurAPI, shipBanner);
	},
	(error) => {
		console.log('error: ' + error);
	}
);
// object
// .replace( replace space with underscore )
// .replace( remove non-alphanumerical character ) // in second place because this will remove space
// .replace( replace double underscore with underscore ) // after some non-alphanumeric character removed thus we get some double underscore
// .replace( remove last underscore(many) with nothing ) // * == many that same character 1~infinite in this case is _ (underscore) || $ = last
// object.replace(/ /g, "_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"")

function data_extract(azurapi, ship_banner) {
	azurapi.forEach((ship) => {
		const ship_id = ship.id;
		ship.skins.forEach((skin) => {
			const skin_name = skin.name;
			let skin_alphanumerical = skin_name.replace(/ /g, "_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
			const skin_link = skin.image.replace("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/images/skins/","");
			const skin_path = skin_link.replace(ship_id,"").replace("/image.png","").replace("image.nobg.png","").replace(/\//g,"");
			if (skin_name !== "Default" && skin_name !== "Retrofit") { 
				if ( !/^[A-Za-z\s]*$/.test(skin_name) ) {
					let status = true;
					if(skin_path !== skin_alphanumerical) {status = false};
					console.log(status + " = " + skin_name + " ==> " + skin_path + " ==> " + skin_alphanumerical)
				}
			}
		});
	});
};
