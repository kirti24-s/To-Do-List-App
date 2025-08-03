let inputBox = document.querySelector("#inputTask");
let list = document.querySelector("#list");
let btn = document.querySelector("#submitbtn");

btn.addEventListener("click", () => {
  console.log("Yes");
  addTask();
});

function addTask() {
  const tasks = document.querySelectorAll("ul li");
  if (tasks.length >= 3 ) {
    alert(
      "Only 3 tasks allowed. Please complete or delete one before adding another."
    );
    return;
  }

  if (inputBox.value === "") {
    alert("Enter some task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputBox.value = " ";
  saveData();
  updateTaskCount();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
      updateTaskCount();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
      updateTaskCount();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
  updateTaskCount();
}

function updateTaskCount() {
  const tasks = document.querySelectorAll("ul li");
  const total = tasks.length;
  const completed = document.querySelectorAll("ul li.checked").length;
  const pending = total - completed;

  document.getElementById(
    "taskCount"
  ).innerText = `Total: ${total} | Completed: ${completed} | Pending: ${pending}`;
}
showTask();
