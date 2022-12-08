// Write your JavaScript code here!


 
window.addEventListener("load", function() {
    let button = document.getElementById("formSubmit");
    let div = document.getElementById("faultyItems");
    div.style.visibility="hidden";
    button.addEventListener("click", function(event){
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let coPilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        if(pilotName == "" || coPilotName== "" || fuelLevel == "" || cargoMass== ""){
             alert("All fields Are Required");
        }else{
            formSubmission(document,div,pilotName, coPilotName, fuelLevel, cargoMass);
        }
        event.preventDefault();
        
    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(">>",listedPlanets);
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
   
});