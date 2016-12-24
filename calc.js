/*jshint esversion:6 */
// TODO: creatables is out of scope, create getter, or do something for scope to get the global.

var itrtgCalc= (function() {
	"use strict";
	//Private
	const creatables = Object.freeze({
		"light":[12000,'Light','calcLight'],
		"stone":[12000,'Stone','calcStone'],
		"soil":[6000,'Soil','calcSoil'],
		"air":[4000,'Air','calcAir'],
		"water":[3000,'Water','calcWater'],
		"plant":[2000,'Plant','calcPlant'],
		"tree":[1600,'Tree','calcTree'],
		"fish":[1200,'Fish','calcFish'],
		"animal":[1000,'Animal','calcAnimal'],
		"human":[600,'Human','calcHuman'],
		"river":[0,'River','calcRiver'],
		"mountain":[0,'Mountain','calcMountain'],
		"forest":[0,'Forest','calcForest'],
		"village":[0,'Village','calcVillage'],
		"town":[0,'Town','calcTown'],
		"ocean":[0,'Ocean','calcOcean'],
		"nation":[0,'Nation','calcNation'],
		"continent":[0,'Continent','calcContinent'],
		"weather":[0,'Weather','calcWeather'],
		"sky":[0,'Sky','calcSky'],
		"night":[0,'Night','calcNight'],
		"moon":[0,'Moon','calcMoon'],
		"planet":[0,'Planet','calcPlanet'],
		"earthlike_planet":[0,'Earthlike Planet','calcEarthlike_Planet'],
		"sun":[0,'Sun','calcSun'],
		"solar_system":[0,'Solar System','calcSolar_System'],
		"galaxy":[0,'Galaxy','calcGalaxy'],
		"universe":[0,'Universe','calcUniverse']
	});
	let creations= new Array(creatables.length).fill(0);
	/**
	* @function totalReqs
	* @summary Combines the given arrays into a single array, does some basic checking for different sizes.
	* @todo I feel like this could be tighter, by using the callback to reduce requirements or something
	*/
	function finalize(type, amount) {
		let requirements= [];
		switch (type) {
			case light:
				requirements= calcLight(amount);
				break;
			case stone:
				requirements= calcStone(amount);
				break;
			case soil:
				requirements= calcSoil(amount);
				break;
			case air:
				requirements= calcAir(amount);
				break;
			case water:
				requirements= calcWater(amount);
				break;
			case plant:
				requirements= calcPlant(amount);
				break;
			case tree:
				requirements= calcTree(amount);
				break;
			case fish:
				requirements= calcFish(amount);
				break;
			case animal:
				requirements= calcAnimal(amount);
				break;
			case human:
				requirements= calcHuman(amount);
				break;
			case river:
				requirements= calcRiver(amount);
				break;
			case mountain:
				requirements= calcMountain(amount);
				break;
			case forest:
				requirements= calcForest(amount);
				break;
			case village:
				requirements= calcVillage(amount);
				break;
			case town:
				requirements= calcTown(amount);
				break;
			case ocean:
				requirements= calcOcean(amount);
				break;
			case nation:
				requirements= calcNation(amount);
				break;
			case continent:
				requirements= calcContinent(amount);
				break;
			case weather:
				requirements= calcWeather(amount);
				break;
			case sky:
				requirements= calcSky(amount);
				break;
			case night:
				requirements= calcNight(amount);
				break;
			case moon:
				requirements= calcMoon(amount);
				break;
			case planet:
				requirements= calcPlanet(amount);
				break;
			case earthlike_planet:
				requirements= calcEarthlike_Planet(amount);
				break;
			case sun:
				requirements= calcSun(amount);
				break;
			case solar_system:
				requirements= calcSolar_System(amount);
				break;
			case galaxy:
				requirements= calcGalaxy(amount);
				break;
			case universe:
				requirements= calcUniverse(amount);
				break;
			default:
			// No problems here, totalReqs should fail gracefully.
		}
		totalReqs([requirements,creations]);
	}
	function totalReqs(requirements, creations=Object.keys(creatables).length) {
		let currentTotals= new Array(creations).fill(0);
		currentTotals.forEach(function(value,iter) {
			let sum= 0;
			requirements.forEach((curr,index)=>{if (!isNaN(curr[iter])) {sum+=curr[iter];}});
			currentTotals[iter]+=sum;
		});
		return currentTotals;
	}
	function calcAir(desired) { return calcLight(2*desired); }
	function calcAnimal(desired) {
		let basis= totalReqs([calcWater(15*desired),calcPlant(9*desired),calcFish(3*desired)]);
		return basis;
	}
	function calcContinent(desired) {
		let basis= totalReqs([calcOcean(desired),calcNation(5*desired)]);
		return basis;
	}
	function calcEarthlike_Planet(desired) {
		let basis= totalReqs([calcAir(100000000000*desired),calcSoil(10000000000*desired),calcWater(25000000000*desired),calcPlant(5000000000*desired),calcPlanet(desired)]);
		return basis;
	}
	function calcFish(desired) {
		let basis= totalReqs([calcWater(10*desired),calcPlant(5*desired)]);
		return basis;
	}
	function calcForest(desired) { return calcTree(10000*desired);}
	function calcGalaxy(desired) { return calcSolar_System(5*desired); }
	function calcHuman(desired) {
		let basis= totalReqs([calcWater(100*desired),calcPlant(25*desired),calcFish(25*desired),calcAnimal(15*desired)]);
		return basis;
	}
	function calcLight(desired) { return [desired,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; }
	function calcMoon(desired) {
		let basis= totalReqs([calcStone(150000000000*desired),calcNight(desired)]);
		return basis;
	}
	function calcMountain(desired) { return calcStone(200000*desired); }
	function calcNation(desired) {
		let basis= totalReqs([calcPlant(1000000*desired),calcAnimal(100000*desired),calcRiver(100*desired),calcMountain(3*desired),calcForest(10*desired),calcTown(15*desired)]);
		return basis;
	}
	function calcNight(desired) { return calcSky(2*desired); }
	function calcRiver(desired) { return calcWater(5000*desired); }
	function calcSoil(desired) { return calcStone(desired); }
	function calcStone(desired) { return [0,desired,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; }
	function calcSun(desired) { return calcLight(9999000000000*desired); }
	function calcUniverse(desired) { return calcGalaxy(5*desired); }
	function calcWater(desired) { return calcAir(3*desired); }
	function calcOcean(desired) {
		let basis= totalReqs([calcWater(30000000*desired),calcPlant(5000000*desired),calcFish(1000000*desired),calcRiver(500*desired)]);
		return basis;
	}
	function calcPlanet(desired) {
		let basis= totalReqs([calcStone(300000000000*desired),calcMoon(desired)]);
		return basis;
	}
	function calcPlant(desired) {
		let basis= totalReqs([calcSoil(2*desired),calcWater(2*desired)]);
		return basis;
	}
	function calcSky(desired) {
		let basis= totalReqs([calcLight(100000000*desired),calcAir(3000000000*desired),calcWeather(desired)]);
		return basis;
	}
	function calcSolar_System(desired) {
		let basis= totalReqs([calcPlanet(100*desired),calcEarthlike_Planet(desired),calcSun(10*desired)]);
		return basis;
	}
	function calcTown(desired) {
		let basis= totalReqs([calcStone(250000*desired),calcPlant(10000*desired),calcHuman(5000*desired),calcRiver(desired)]);
		return basis;
	}
	function calcTree(desired) {
		totalReqs([calcSoil(5*desired),calcWater(3*desired)]);
	}
	function calcVillage(desired) {
		totalReqs([calcStone(5000*desired),calcPlant(5000*desired),calcHuman(200*desired),calcRiver(desired),calcForest(desired)]);
	}
	function calcWeather(desired) {
		totalReqs([calcAir(1000000000*desired),calcWater(100000000*desired),calcOcean(5*desired),calcContinent(desired)]);
	}
	//Public
	var exported= {};
	exported.getAchievementReqs= function(name) { return creatables[name][0]; };
	exported.getFunction= function(name) { return creatables[name][2]; };
	exported.getTextName= function(name) { return creatables[name][1]; };

	return exported;
}());
