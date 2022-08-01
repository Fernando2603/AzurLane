import fs from "node:fs";

const ShipBanner = JSON.parse(fs.readFileSync("./src/ShipBanner.json"));

fs.writeFile("./ShipBanner.json", JSON.stringify(ShipBanner, null, "\t"), "utf8", function (err)
{
	if (err)
	{
		console.log("An error occured while writing JSON to File");
		return console.log(err);
	};
	console.log("=> ./ShipBanner.json has been updated!");
});
