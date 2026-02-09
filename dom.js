
var itemList = document.querySelector('#items');

// parentNode
console.log(itemList.parentNode);
//is used to get the parent of the specified element. In this case, it will return the parent element of the element with the id "items", which is the <div> element with id main.

itemList.parentNode.style.backgroundColor = '#f4f4f4';
//this line of code changes the background color of the parent element of itemList to a light gray color (#f4f4f4). This will affect the appearance of the parent element, which is the <div> element with id main.

