// using module because node-fetch v3 doesnt support commonJS
import fs from "node:fs";
import fetch from "node-fetch";
import { dirname } from "path";
import { fileURLToPath } from "url";

import main from "./src/file_check.js";
import hash from "./src/hash.js";

const BANER_FILE  = fs.readFileSync("./ShipBanner.json");
const SHIP_BANNER = JSON.parse(BANER_FILE);

const __dirname = dirname(fileURLToPath(import.meta.url));

// NOTES: SCRIPT CAN'T HANDLE 2 NEW NON-DEFAULT SKIN AT THE SAME TIME

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
		.then(res => res.json())
]).then(
	([azurAPI]) =>
	{
		console.log("AzurAPI & ShipBanner Loaded!");
		main(azurAPI, SHIP_BANNER, __dirname);
		hash();
	},
	(error) => { console.log("error: " + error) }
);
