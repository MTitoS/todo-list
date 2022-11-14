let inputField = document.querySelector("#task-input");
let createTaskBtn = document.querySelector(".create-task-btn");
let taskList = document.querySelector(".task-list-container");

let taskCreator = (inputValue) => {
  createElements(inputValue);
};

let createElements = (inputValue) => {
  let divTaskContainer = document.createElement("div");
  divTaskContainer.classList.add("task-container");
  taskList.appendChild(divTaskContainer);

  let p = document.createElement("p");
  p.innerHTML = inputValue;
  divTaskContainer.appendChild(p);

  let div = document.createElement("div");
  div.classList.add("task-btns-container");
  divTaskContainer.appendChild(div);

  let btnFinish = document.createElement("button");
  btnFinish.innerText = "Finish";
  btnFinish.classList.add("finish-btn");
  div.appendChild(btnFinish);

  let btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete-btn");
  div.appendChild(btnDelete);
};

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("finish-btn")) {
    el.parentElement.parentElement.getElementsByTagName(
      "p"
    ).style.color = "red";
  }

  if (el.classList.contains("delete-btn")) {
    el.parentElement.parentElement.remove();
  }
});

let inputGathering = () => {
  let inputValue = inputField.value;
  inputField.value = "";
  inputField.focus();

  taskCreator(inputValue);
};

createTaskBtn.addEventListener("click", (e) => {
  inputGathering();
});
