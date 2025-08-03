const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function updateClock() {
  //Date() in js is built-in object which consists of various methods like current date,time,day,month,year,hours,seconds,minutes,etc.
  const now = new Date();

  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  date.innerHTML = (now.getDate() < 10 ? "0" : "") + now.getDate();
  day.innerHTML = allDays[now.getDay()];
  month.innerHTML = allMonths[now.getMonth()];
  year.innerHTML = now.getFullYear();

  let hrs = now.getHours();
  const ampm = hrs >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  //.padStart("no of digits required","to add in front of it")
  //.toString() to convert numerical value to String by padStart
  hours.innerHTML = hrs.toString().padStart(2, "0");
  minutes.innerHTML = ":" + now.getMinutes().toString().padStart(2, "0");
  seconds.innerHTML =
    ":" + now.getSeconds().toString().padStart(2, "0") + " " + ampm;
}

updateClock();
//To run fucn after each 1 second
setInterval(updateClock, 1000);
