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
      alert("We can't launch this thing without all necessary information, please complete the form.");
      event.preventDefault();
   }
   if (!isNaN(pilotName) || !isNaN(copilotName)) {
      alert("Hooray! Stringy-stringy-string");
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
