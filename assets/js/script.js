// variables for time
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss a");

// display current day on page
var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(momentNow.format("dddd, MMMM Do"));
}, 100);

// listen for save button click
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    var savedMsg = document.createElement
    localStorage.setItem(time, value);
  });
  
// variable to get current number of hours from moment.js

// loop over time block to identify past future present

// load any save data from localStorage

// button to clear localStorage
