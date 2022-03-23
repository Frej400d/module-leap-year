import "./style.css";

import isLeapYear from "leap-year";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Hello");
  document.querySelector(".calculate").addEventListener("click", findYear);
}

function findYear() {
  let year = document.querySelector("#year-picker").value;
  let numberYear = parseInt(year);
  checkingYear(numberYear);
}

function checkingYear(numberYear) {
  let checkedYear = isLeapYear(numberYear);
  showResult(checkedYear);
}

function showResult(checkedYear) {
  if (checkedYear === true) {
    document.querySelector("#result").textContent = "This is a leap year";
  } else {
    document.querySelector("#result").textContent = "This is not a leap year";
  }
}
