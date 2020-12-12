
//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours -- 9am-5pm
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//WHEN I click into a time block
//THEN I can enter an event
//WHEN I click the save button for that time block
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist


$(document).ready(function() { 

//create function to display the current date using moment.js

function displayCurrentDate() {
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);
console.log(currentDate);

}

//runs the function
displayCurrentDate()





//create variables + array to loop through day calendar and store

var currentHour = moment().format("ddd, HH");

//added event with empty values (" ") for event data/text
var workHours = [ {calRow: "0", hour: "09", time:"9",   amPM: "AM", eventDetails:" "},
                  {calRow: "1", hour: "10", time: "10", amPM: "AM", eventDetails:" "}, 
                  {calRow: "2", hour: "11", time: "11", amPM: "AM", eventDetails:" "}, 
                  {calRow: "3", hour: "12", time: "12", amPM: "PM", eventDetails:" "}, 
                  {calRow: "4", hour: "13", time: "1",  amPM: "PM", eventDetails:" "}, 
                  {calRow: "5", hour: "14", time: "2",  amPM: "PM", eventDetails:" "},
                  {calRow: "6", hour: "15", time: "3",  amPM: "PM", eventDetails:" "}, 
                  {calRow: "7", hour: "16", time: "4",  amPM: "PM", eventDetails:" "}, 
                  {calRow: "8", hour: "17", time: "5",  amPM: "PM", eventDetails:" "}]

 console.log(currentHour);  
               

//creating grid Here:

//appending grid rows using 'for each' loop to append a row for every work hour
workHours.forEach(function(hour) {
var timeBlock = $("<form>").attr({"class": "row"});
$(".container").append(timeBlock);

// create text field for time block
var timeField = $("<div>")
.text(hour.time + hour.amPM)
.attr({"class": "col-md-2"});

// create event block
var eventBlock = $("<div>").attr({"class": "col-md-9 description p-0"});
var eventData = $("<textarea>");
eventBlock.append(eventData);
eventData.attr("id", hour.id);

console.log(eventData); 

//if/else statement to mark past,present,future
if (hour.time <= moment().format("h")) {
    eventData.attr({"class": "past"})

} 
else if (hour.time === moment().format("h")) {
    eventData.attr({"class": "present"})

} 

else if (hour.time > moment().format("h")) {
    eventData.attr({"class": "future"})

}

//create save button with font awesome
var saveBtn =   $("<i class='fas fa-save'></i>") 
var saveEvent = $("<button>").attr({"class": "col-md-1 saveBtn"});

saveEvent.append(saveBtn);
timeBlock.append(timeField, eventBlock, saveEvent);

})

//create saveEvent() function to save to local storage
//JSON.stringify
function saveEvent() {
    localStorage.setItem("workHours", JSON.stringify(workHours));
} 

//create postEvent() function to keep the data on the page
//after it's stored in local storage, this function should set it to eventBlock.
function postEvent() {
    workHours.forEach(function (_thisHour) {
        $("#_thisHour.id").val(_thisHour.eventDetails);
    })
} 
//if there is any data in local storage
function init() {
    var dataStorage = JSON.parse(localStorage.getItem("workHours"));
        if (dataStorage) {
            workHours = dataStorage;
    }


//run saveEvent() + postEvent() functions
 saveEvent()
 postEvent()
}

//.on("click") for functioning save button

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var saveData = $(this).siblings(".description").children(".future").attr("id");
    workHours[saveData].eventDetails = $(this).siblings(".description").children(".future").val();
    console.log(saveData);
    saveEvent();
    postEvent();

    });

})






