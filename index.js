// using module because node-fetch v3 doesnt support commonJS
import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import main from './src/main.js';

const banner_file	= fs.readFileSync("./ShipBanner.json");
const ShipBanner	= JSON.parse(banner_file);

const __dirname		= dirname(fileURLToPath(import.meta.url));

// NOTES: SCRIPT CAN'T HANDLE 2 NEW NON-DEFAULT SKIN AT THE SAME TIME

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/Fernando2603/AzurMine/main/stats.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/Fernando2603/AzurMine/main/equippable.json")
	.then(res => res.json())
]).then(
	([azurAPI, stats, equippable]) => {
		console.log("AzurAPI & ShipBanner Loaded!");
		main(azurAPI, ShipBanner, __dirname);
		fs.writeFile("./stats.json", JSON.stringify(stats), "utf8", function (err) {
			if (err) {
				console.log("An error occured while writing JSON to File");
				return console.log(err);
			};
	        console.log("=> ./stats.json has been updated!");
		});
		fs.writeFile("./equippable.json", JSON.stringify(equippable), "utf8", function (err) {
			if (err) {
				console.log("An error occured while writing JSON to File");
				return console.log(err);
			};
	        console.log("=> ./equippable.json has been updated!");
		});
	},
	(error) => {
		console.log('error: ' + error);
	}
);