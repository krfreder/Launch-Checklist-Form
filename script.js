window.addEventListener("load", function() {
   const launchForm = document.getElementById("launchForm");
   // add planet destination
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(showPlanet) {
      showPlanet.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
         `;
      });
   });
// call validation
   launchForm.addEventListener("submit", function() {
      validateAndUpdate();
   });
});

function validateAndUpdate() {
// update shuttle requirements with user input
   let updateShuttleRequirements = function() {
      const launchStatus = document.getElementById("launchStatus");
      const faultyItems = document.getElementById("faultyItems");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      
      pilotStatus.innerHTML = `${pilotName.value} Ready`;
      copilotStatus.innerHTML = `${copilotName.value} Ready`;
   
      if (parseInt(fuelLevel.value, 10) < 10000) {
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = 'Well...looks like you need some more fuel.';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = "red";
         event.preventDefault();
      } else if (parseInt(cargoMass.value, 10) > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = 'Well...looks like you put too much stuff on here. Take some off.';
         launchStatus.innerHTML = 'Shuttle not ready for launch';
         launchStatus.style.color = "red";
         event.preventDefault();
      } else {
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         event.preventDefault();
      }
   }
   
// validation
   const pilotName = document.getElementById("pilotName");
   const copilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");

   if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
      alert("The people at NASA complete their forms. Let's be like the people at NASA and try again.");
      event.preventDefault();
   } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
      alert("Letters only please and thank you.");
      event.preventDefault();
   } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Oh no, you need a number yo!");
      event.preventDefault();
   } else {
      updateShuttleRequirements();    
   }
}




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
