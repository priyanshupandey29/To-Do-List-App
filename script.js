let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
const dateElement = document.getElementById("date");
var timeElement = document.getElementById("time");
// adding Date
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
//adding time
setInterval(displayTime, 500);
function displayTime() {
  var time = new Date();
  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();

  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  timeElement.innerHTML = hrs + "<br>" + mins + "<br>" + secs;
}

addToDoButton.addEventListener("click", () => {
  addedTasks();
});

function addedTasks() {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
}
inputField.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    addedTasks();
  }
});

