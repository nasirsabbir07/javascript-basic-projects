const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(items);

//dynamic date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 7, 21, 11, 30, 0);
//*months are 0 index based, hours are 24h based
// console.log(futureDate);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

//*As we cannot access month and weekdays value form the date function we use the array
let month = futureDate.getMonth();
month = months[month];

let day = futureDate.getDay();
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins}am`;

//future time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);

  const t = futureTime - today;
  // console.log(t);

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
  // console.log(hours);
  // console.log(minutes);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}

//*countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
