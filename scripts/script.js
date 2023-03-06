const userInputField = document.querySelector('#textbox');
const addItemButton = document.querySelector('#submit');
const listGroup = document.querySelector('.list-group');
let listItems = [];
let storage = localStorage.getItem("checklist-items");


const deleteItemButton = document.querySelectorAll('.delete');

// 1. create storage array 
// 2. iterate through storage array, create elements for page
// 3. add delete button
//    3.5 delete button filters value of element and removes from array.

function newListItem() {
}

addItemButton.addEventListener('click', (event) => {
  event.preventDefault();
  newListItem(userInputField);
});
