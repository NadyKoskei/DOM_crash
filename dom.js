
var select = document.querySelector("select");

select.addEventListener("change", runEvent);
//this will run the function every time the value of the select changes

select.addEventListener("input", runEvent);
//this will run the function every time the value of the select changes, but it will also run when the user types in the select


function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  console.log(`Value: ${e.target.value}`);
}




 
