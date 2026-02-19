
var form = document.querySelector("form");

 form.addEventListener("submit", runEvent);

 function runEvent(e) {
    e.preventDefault(); //this prevents the default behavior of the form submission, which is to reload the page. By calling e.preventDefault(), we can handle the form submission with our own JavaScript code without causing a page refresh.
  console.log("Event Type: " + e.type);

 }