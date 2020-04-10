window.addEventListener("load", function() {
   const launchForm = document.getElementById("launchForm");

   launchForm.addEventListener("submit", function() {
      // test code::: alert("submit clicked");
      validate();
   });
});

function validate() {
   const pilotName = document.getElementById("pilotName");
   const copilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");

   // test code::: alert("function was called");
   if (pilotName.value === '' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
      alert("The people at NASA complete their forms. Let's be like the people at NASA and try again.");
      event.preventDefault();
   }
   if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
      alert("Letters only please and thank you.");
   }
   if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Oh no, you need a number yo!");
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
