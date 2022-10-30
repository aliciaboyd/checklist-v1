// DATE
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const weekday = days[ new Date().getDay() ];
const thisMonth = months[ new Date().getMonth() ];
const todaysDate = new Date().getDate();

const displayWeekday = document.querySelector('[data-weekday]');
const displayMonth = document.querySelector('[data-month]');
const displayDay = document.querySelector('[data-day]');

displayWeekday.innerHTML = weekday;
displayMonth.innerHTML = thisMonth;
displayDay.innerHTML = todaysDate;


// LIST
function newListItem(userTextInput) {
  let listElement = document.createElement('li');
  listElement.classList.add('list-item');

  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  let toDoParagraph = document.createElement('p');
  toDoParagraph.innerHTML = userTextInput.value;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.ariaLabel = 'Delete Item';

  listElement.appendChild(checkBox);
  listElement.appendChild(toDoParagraph);
  listElement.appendChild(deleteButton);
  listGroup.appendChild(listElement);

  userTextInput.value = '';

  deleteButton.addEventListener('click', () => {
    listGroup.removeChild(listElement);
  })
};

const userInputField = document.querySelector('#textbox');
const addItemButton = document.querySelector('#submit');
const listGroup = document.querySelector('.list-group');
const deleteItemButton = document.querySelectorAll('.delete');

addItemButton.addEventListener('click', (event) => {
  event.preventDefault();
  newListItem(userInputField);
});
