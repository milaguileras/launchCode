//Exercise 4.9//
// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;


// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);



// Code your solution to exercises 3 and 4 here:
    //Mars Mission//
let milesToMars = distanceToMars*milesPerKm
let hoursToMars = milesToMars/shuttleSpeed
let daysToMars = hoursToMars/24
    //Results//
console.log(shuttleName, "will take", daysToMars, "days to reach Mars.")

    //Moon Mission//
let milesToMoon = distanceToMoon*milesPerKm
let hoursToMoon = milesToMoon/shuttleSpeed
let daysToMoon = hoursToMoon/24
    //Results//
console.log(shuttleName, "will take", daysToMoon, "days to reach Mars.")

// Code your solution to exercise 5 here:
//4.10

// 1. Declare and assign the variables here:
let date = "Monday 2019-03-18";
let time	= "10:05:34 AM";
const input = require('readline-sync');
let astronautCount =	input.question("How Many?");
let astronautStatus =	"ready";
let averageAstronautMassKg =	80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg =	74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius =	-225;
let fuelLevel =	'100%';
let weatherStatus = 'clear';
let divider = '-------------------------------------'
let form = "> LC04 - LAUNCH CHECKLIST"

console.log(divider+"\n"+ form +"\n"+divider+"\n"+"Date: "+date+"\n"+"Time: "+time+"\n"+"\n"+divider+"\n"+"> ASTRONAUT INFO"+"\n"+divider+"\n"+"count: "+Number(astronautCount)+"\n"+"status: "+astronautStatus+"\n"+"\n"+divider+"\n"+"> FUEL DATA"+"\n"+divider+"\n"+"* Fuel temp celsius: "+fuelTempCelsius+" C"+"\n"+"* Fuel level: "+fuelLevel+"\n"+"\n"+divider+"\n"+"> MASS DATA"+"\n"+divider+"\n"+"* Crew Mass: "+crewMassKg+ "kg"+"\n"+"* Fuel mass: "+fuelMassKg+" kg"+"\n"+"* Shuttle Mass: "+shuttleMassKg+ " kg"+"\n"+"* Total mass: "+totalMassKg+" kg"+"\n"+"\n"+divider+"\n"+"> FLIGHT PLAN"+"\n"+divider+"\n"+"* weather: "+weatherStatus+"\n"+"\n"+divider+"\n"+"> OVERALL STATUS"+"\n"+divider+"\n"+"* Clear for takeoff: YES")