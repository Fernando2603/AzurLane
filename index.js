// using module because node-fetch v3 doesnt support commonJS
import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import main from './src/main.js';

const banner_file	= fs.readFileSync("./src/ShipBanner.json");
const ShipBanner	= JSON.parse(banner_file);

const __dirname		= dirname(fileURLToPath(import.meta.url));

// NOTES: SCRIPT CAN'T HANDLE 2 NEW NON-DEFAULT SKIN AT THE SAME TIME

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json())
]).then(
	([azurAPI]) => {
		console.log("AzurAPI & ShipBanner Loaded!");
		main(azurAPI, ShipBanner, __dirname); 
	},
	(error) => {
		console.log('error: ' + error);
	}
);