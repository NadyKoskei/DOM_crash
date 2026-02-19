



//keyboard and input events

var itemInput = document.querySelector('input[type="text"]'); //selects the first input element with type text

var form = document.querySelector('form'); //selects the first form element

itemInput.addEventListener('keypress', runEvent);
//this will run the runEvent function every time a key is pressed in the input field
itemInput.addEventListener('keydown', runEvent);
//this will run the runEvent function every time a key is released in the input field
itemInput.addEventListener('keyup', runEvent);
//this will run the runEvent function every time a key is released in the input field

itemInput.addEventListener('focus', runEvent);
//this will run the runEvent function every time the input field gains focus
itemInput.addEventListener('blur', runEvent);
//this will run the runEvent function every time the input field loses focus

itemInput.addEventListener('cut', runEvent);
//this will run the runEvent function every time text is cut from the input field
itemInput.addEventListener('paste', runEvent);
//this will run the runEvent function every time text is pasted into the input field

itemInput.addEventListener('input', runEvent);
//this will run the runEvent function every time the value of the input field changes (this includes cut, paste, and any other input method)

function runEvent(e){
    console.log('Event Type: ' + e.type);
    console.log(e.target.value); //logs the current value of the input field
    document.getElementById('outputA').innerHTML = '<h3>' + e.target.value + '</h3>'; //displays the current value of the input field in the element with id outputA
}

