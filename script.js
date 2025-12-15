// Selections for tabs
const tabAll = document.querySelector(".tab1");
const tabActive = document.querySelector(".tab2");
const tabCompleted = document.querySelector(".tab3");
// Selections for tab button
const tabBtn1 = document.querySelector(".tabBtn1");
const tabBtn2 = document.querySelector(".tabBtn2");
const tabBtn3 = document.querySelector(".tabBtn3");

//Selections for input element and add button
const userInput = document.querySelector(".inputEl");
const addTaskBTN = document.querySelector(".addBTN");

//Show The first tab on initial load
tabAll.classList.add("showTab");

tabBtn1.addEventListener("click", function () {
  tabAll.classList.add("showTab");
  tabActive.classList.remove("showTab");
  tabCompleted.classList.remove("showTab");
});

tabBtn2.addEventListener("click", function () {
  tabAll.classList.remove("showTab");
  tabActive.classList.add("showTab");
  tabCompleted.classList.remove("showTab");
});

tabBtn3.addEventListener("click", function () {
  tabAll.classList.remove("showTab");
  tabActive.classList.remove("showTab");
  tabCompleted.classList.add("showTab");
});

function renderTasks(userinput) {
  //Createing Task Left Side
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let pElement = document.createElement("p");
  pElement.textContent = userinput;
  let taskElement = document.createElement("div");
  taskElement.classList.add("taskLeftSide");
  taskElement.appendChild(checkBox);
  taskElement.appendChild(pElement);
  console.log(taskElement);

  //Create Task Right Side
  let editBTN = document.createElement("button");
  editBTN.classList.add("controlBTN");
  editBTN.classList.add("editbutton");
  editBTN.textContent = "✎";

  let deleteDTN = document.createElement("button");
  deleteDTN.classList.add("controlBTN");
  deleteDTN.classList.add("deletebutton");
  deleteDTN.textContent = "🗑";

  let taskElement2 = document.createElement("div");
  taskElement2.classList.add("taskRightSide");
  taskElement2.appendChild(editBTN);
  taskElement2.appendChild(deleteDTN);
  console.log(taskElement2);

  //TASK CHILD DIV
  let taskChildDiv = document.createElement("div");
  taskChildDiv.classList.add("taskchild");
  taskChildDiv.appendChild(taskElement);
  taskChildDiv.appendChild(taskElement2);
  tabAll.appendChild(taskChildDiv);
}

let tasksArray = [];

function addTask() {
  let userInputValue = userInput.value;
  tasksArray.push(userInputValue);
  userInput.value = "";
  console.log(tasksArray);

  //Clearing Existing HTML
  tabAll.innerHTML = "";

  //Loop Through 
  for (let i = 0; i < tasksArray.length; i++) {
    renderTasks(tasksArray[i]);
  }
}

addTaskBTN.addEventListener("click", function () {
  addTask();
});

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
