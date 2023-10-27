// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDayEl = $('#currentDay');
currentDayEl.append(dayjs().format('dddd, MMMM D, YYYY, HH:mm'));

var hours = dayjs().format("HH");

//Enter event, save event to local storage, event stays when refreshed.

$(function () {
  var textArea = document.querySelectorAll("textarea");
  var h3 = document.querySelector("h3");

  $(".saveBtn").on("click", saveEvent);

  function saveEvent() {
    let eventDescription = $(this).siblings(".description").val();
    let eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, eventDescription);
    
  };
// array of values// all the times up to 5pm
  var keyArray = ["9AM","10AM", "11AM", "12PM","1PM","2PM","3PM","4PM","5pm"];
  for (let index = 0; index < textArea.length; index++) {
    textArea[index].value = localStorage.getItem(keyArray[index]);
  };

// each timeblock is color coded to indicate whether it is in the past, present, or future

var pastPresentFutureEL = document.querySelectorAll(".row");
var textArea = $("textarea");
console.log(pastPresentFutureEL, textArea);
for(var i = 9; i <18 ; i++){
  var id = "#hour-"+ i
  if(i < hours){
    $(id).children("textarea").addClass("past");
    }
  else if(i == hours){
  $(id).children("textarea").addClass("present");
  }
  else {
  $(id).children("textarea").addClass("future");
  };
}
});
