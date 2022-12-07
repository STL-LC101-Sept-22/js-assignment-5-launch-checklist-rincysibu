// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let planetInfo=document.getElementById("missionTarget")
   planetInfo.innerHTML=`           <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
   
}


function validateInput(testInput) {       
    if(testInput === ""){
        return "Empty"
    }else if(isNaN(testInput)){
        return "Not a Number";
    }else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let validateCargoLevel = validateInput(cargoLevel);
    let validateFuelLevel = validateInput(fuelLevel);
    // list.style.visibility='hidden';
    if(validateFuelLevel === 'Not a Number' || validateCargoLevel === 'Not a Number'){
        alert("Make sure to enter valid information for each field!");
    } else {
        
        list.style.visibility = "visible";
        let header = document.getElementById("launchStatus");
        let pilotName = document.getElementById("pilotStatus");
        pilotName.innerHTML = `Pilot ${pilot} is ready for launch`
        let coPilotName = document.getElementById("copilotStatus");
        let fuelLvlElement = document.getElementById("fuelStatus");
        fuelLvlElement.innerHTML = 'Fuel level high enough for launch';
        let cargoLvlElement = document.getElementById("cargoStatus");
        coPilotName.innerHTML = `Co-pilot ${copilot} is ready for launch`
        if(fuelLevel < 10000){
            fuelLvlElement.innerHTML = 'Fuel level too low for launch';
            header.innerHTML = 'Shuttle Not Ready for Launch';
            header.style.color = 'rgb(199, 37, 78)';
        }else if (cargoLevel > 10000){
            cargoLvlElement.innerHTML = 'Cargo mass too heavy for launch'
            header.innerHTML = 'Shuttle Not Ready for Launch'
            header.style.color = 'rgb(199, 37, 78)'
        } else {
            header.innerHTML = 'Shuttle is Ready for Launch'
            header.style.color = 'rgb(65, 159, 106)'
            fuelLvlElement.innerHTML = 'Fuel level high enough for launch'
            cargoLvlElement.innerHTML = 'Cargo mass low enough for launch'
        }
        
    }
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        return response.json();
    });
    
    return planetsReturned;
}


function pickPlanet(planets) {
    
        let planet=Math.floor(Math.random()*planets.length);
        return planets[planet];
    }
    

    
  

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
