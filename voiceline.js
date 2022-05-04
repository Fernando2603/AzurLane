import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let AzurAPI		= [];
let ShipBanner	= [];
let json_data	= [];

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/sharecfgdata/ship_skin_words.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/ship_skin_words.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/ship_skin_template.json")
	.then(res => res.json())
]).then(
	([azurAPI, voiceline, skin_id, skin_template]) => {
		AzurAPI		= azurAPI;
		ShipBanner	= voiceline;
		console.log("AzurAPI & VoiceLine Loaded!");
		data_extract(azurAPI, voiceline, skin_id.all, skin_template);
	},
	(error) => {
		console.log('error: ' + error);
	}
);

const __dirname	= dirname(fileURLToPath(import.meta.url));

function ship_normalize(data) {
	const data_return	= data
		.toLowerCase()
		.replace(/\s+/g, "_")
		.replace("μ","muse")
		.replace(".","")
		.replace("'","")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
	return data_return
};

function data_extract(azurapi, voiceline, skin_id, skin_template) {
	let ship_skin_list_id	= [];

	// looping keys
	var voiceline_keys = [
		"battle",
		"couple_encourage",
		"detail",
		"drop_descrip",
		"expedition",
		"feeling1",
		"feeling2",
		"feeling3",
		"feeling4",
		"feeling5",
		"headtouch",
		"home",
		"hp_warning",
		"login",
		"lose",
		"mail",
		"main",
		"mission",
		"mission_complete",
		"profile",
		"propose",
		"skill",
		"touch",
		"touch2",
		"unlock",
		"upgrade",
		"win_mvp"
	];
    // skin_id.forEach((idx) => {
    // 	Object.keys(voiceline[idx]).forEach(function(key){
    // 		const keys_find	= keys.find(idx => idx === key);
    // 		if ( !keys_find ) keys.push(key);
    // 	});
    // });
    // console.log(keys);

	azurapi.forEach((ship) => {
		const ship_name	= ship.names.en;
		const ship_gid	= ship._gid;
		let skin_list	= [];

		skin_id.forEach((idx) => {
			const skin_index	= idx.toString();
			let ship_group		= "";
			if ( skin_template[skin_index] ) {
				ship_group	= skin_template[skin_index].ship_group;
			};
			if ( ship_group === ship_gid ) {
				skin_list.push(skin_index);
			};
		});

		let skin_output	= [];
		if ( skin_list.length !== 0 ) {
			skin_list.forEach((skin) => {
				let skin_name	= skin_template[skin].name;
				if ( ship_normalize(skin_name) === ship_normalize(ship_name) ) {
					skin_name	= "Default";
				};
				if ( String(skin).slice(-1) === "9" ) { skin_name	= "Retrofit" };
				const skin_get	= ({
					id: skin,
					name: skin_name
				});
				skin_output.push(skin_get);
			});
		} else { console.log(ship.names.en + " E404-NULL VOICE_LINE EN") };

		const ship_output	= ({
			id: ship.id,
			gid: ship._gid,
			name: ship.names.en,
			skins: skin_output
		});
		ship_skin_list_id.push(ship_output);
		
	});

	const save_to_json	= JSON.stringify(ship_skin_list_id, null, "\t");
	fs.writeFile("./voiceline.json", save_to_json, "utf8", function (err) {
		if (err) {
			return console.log(err);
		};
        console.log("good");
	});

	// structure json
	const exampleStructure	= [
		{
			"id": "prototype.ship.id",
			"gid": "prototype.ship._gid",
			"name": "prototype.ship.names.en",
			"skins": [
				{
					"id": "prototype.ship.skin.id",
					"name": "prototype.skin.name",
					"voiceline": {
						"battle": "",
					    "couple_encourage": [],
					    "detail": "",
					    "drop_descrip": "",
					    "expedition": "",
					    "feeling1": "",
					    "feeling2": "",
					    "feeling3": "",
					    "feeling4": "",
					    "feeling5": "",
					    "headtouch": "",
					    "home": "",
					    "hp_warning": "",
					    "id": 100001, // unused
					    "login": "",
					    "lose": "",
					    "mail": "",
					    "main": "",
					    "mission": "",
					    "mission_complete": "",
					    "profile": "",
					    "propose": "",
					    "skill": "",
					    "touch": "",
					    "touch2": "",
					    "unlock": "",
					    "upgrade": "",
					    "voice_key": 0, // this unused
					    "voice_key_2": -1, // this unused too
					    "vote": "", // unused
					    "win_mvp": ""
					},
					"extra": {

					}
				}
			]
		}
	];
	// ship_skin_words.json get all voiceline and match id;
	// ship_skin_template is where ship_group id stored

	// const json_content = JSON.stringify(json_data, null , "\t");
	// fs.writeFile("./skin_path.json", json_content, 'utf8', function (err) {
	// 	if (err) {
	// 		console.log("An error occured while writing JSON to File");
	// 		return console.log(err);
	// 	};

	// 	console.log("=> ./skin_path.json has been updated!");
	// });
};
