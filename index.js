// DOM
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const buttonRef = document.querySelector(".btn-submit");

const dayValue = document.querySelector(".card-content_day span");
const monthValue = document.querySelector(".card-content_month span");
const yearValue = document.querySelector(".card-content_year span");

// current datetime
const date =
  new Date().getDate() > 10
    ? new Date().getUTCDate()
    : "0" + new Date().getUTCDate();
const month =
  new Date().getMonth() + 1 > 10
    ? new Date().getUTCMonth() + 1
    : "0" + (new Date().getUTCMonth() + 1);
const year = new Date().getFullYear();

// input change

let inputValue = ["", "", ""];

const BIG_MONTH = ["1", "3", "5", "7", "8", "10", "12"];
const SMALL_MONTH = ["4", "6", "9", "11"];

dayInput.addEventListener("input", (e) => {
  const day = parseInt(e.target.value);
  if (day > 31 || day <= 0 || isNaN(day)) {
    inputValue[0] = "";
  } else {
    inputValue[0] = `${day}`;
  }
  dayInput.value = inputValue[0];
});

monthInput.addEventListener("input", (e) => {
  const month = parseInt(e.target.value);
  if (month > 12 || month <= 0 || isNaN(month)) {
    inputValue[1] = "";
  } else {
    inputValue[1] = `${month}`;
  }

  monthInput.value = inputValue[1];

  if (SMALL_MONTH.includes(`${month}`) && inputValue[0] === "31") {
    inputValue[0] = "30";
  }
  if (month === 2 && parseInt(inputValue[0]) > 29) {
    inputValue[0] = "29";
  }
  dayInput.value = inputValue[0];
});
