
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

// .ready causing problems
//$(document).ready(function() { 

//create function to display the current date using moment.js

function displayCurrentDate() {
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
console.log(currentDate);

}

//runs the function
displayCurrentDate()


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours


//Demo shows work hrs 9am-5pm.  all must be in same array - military time?? MUST CHANGE ARRAY
//

var workHours = [ {hour: "09", time:"9",   amPM: "AM"},
                  {hour: "10", time: "10", amPM: "AM"}, 
                  {hour: "11", time: "11", amPM: "AM"}, 
                  {hour: "12", time: "12", amPM: "PM"}, 
                  {hour: "13", time: "1",  amPM: "PM"}, 
                  {hour: "14", time: "2",  amPM: "PM"},
                  {hour: "15", time: "3",  amPM: "PM"}, 
                  {hour: "16", time: "4",  amPM: "PM"}, 
                  {hour: "17", time: "5",  amPM: "PM"}]

//moved time blocks down here below array. creating grid Here:

//appending grid rows using 'for each' loop to append each row
workHours.forEach(function(hour) {
var timeBlock = $("<form>").attr({"class": "row"});
$(".container").append(timeBlock);

// create text field for time block
var timeField = $("<div>")
.text(hour.time + hour.amPM)
.attr({"class": "col-md-2 hour"});

// create event block
// add if/else to mark past,present,future
var eventBlock = $("<div>").attr({"class": "col-md-9"});
var eventData = $("<textarea>");
eventBlock.append(eventData);

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//WHEN I click into a time block
//THEN I can enter an event

// if/else statement
if (hour.time < moment().format("h")) {
    eventData.attr({"class": "past"})

} else if (hour.time === moment().format("h")) {
    eventData.attr({"class": "present"})

} else if (hour.time > moment().format("h")) {
    eventData.attr({"class": "future"})

}

//create save button with font awesome

var saveBtn =   $("<i class='fas fa-save'></i>") 
var saveEvent = $("<button>").attr({"class": "col-md-1 save"});

saveEvent.append(saveBtn);
timeBlock.append(timeField, eventBlock, saveEvent);

})

//UGH!!! research these!!
 
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage

function saveEvent() { }   //to save to local storage - stringify

//WHEN I refresh the page
//THEN the saved events persist

function postEvent() {}   //keeps event in grid after it is saved of page refreshed

//create a function to keep it on the page

// this?  $(".saveBtn").on("click", function() {  });

// event.preventDefault()  keep from submitting as a form

