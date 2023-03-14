const userInputField = document.querySelector("#textbox");
const addItemButton = document.querySelector("#submit");
const listGroup = document.querySelector(".list-group");
let listItems;

if (!localStorage.getItem("checklist")) {
  listItems = [];
} else {
  listItems = JSON.parse(localStorage.getItem("checklist"));
}

function onLoadList(list) {
  if (list.length < 1) {
    return;
  }

  for (let i = 0; i < list.length; i++) {
    addElement(list[i]);
  }
}

function newListItem(input) {
  if (input.value === "") {
    return;
  }

  let value = input.value;

  listItems.push(value);
  localStorage.setItem("checklist", JSON.stringify(listItems));

  addElement(value);
  input.value = "";
}

function addElement(value) {
  let listElement = document.createElement("li");
  listElement.classList.add("list-item");

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  let toDoParagraph = document.createElement("p");
  toDoParagraph.innerHTML = value;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.ariaLabel = "Delete Item";

  listElement.appendChild(checkBox);
  listElement.appendChild(toDoParagraph);
  listElement.appendChild(deleteButton);
  listGroup.appendChild(listElement);

  deleteButton.addEventListener("click", () => {
    let currentStorage = JSON.parse(localStorage.getItem("checklist"));
    listItems = currentStorage.filter((element) => element != value);

    localStorage.setItem("checklist", JSON.stringify(listItems));
    listGroup.removeChild(listElement);
  });
}

addItemButton.addEventListener("click", (event) => {
  event.preventDefault();
  newListItem(userInputField);
});

//renders local storage list on load
onLoadList(listItems);