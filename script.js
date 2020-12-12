
// .ready() function to make sure DOM is loaded brfore running javascript
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
var currentHour = moment().format("hA");

//added event with empty values (" ") for event data/text
var workHours =[{hour: "09", time: "9AM",  eventDetails:" "},
                {hour: "10", time: "10AM", eventDetails:" "}, 
                {hour: "11", time: "11AM", eventDetails:" "}, 
                {hour: "12", time: "12PM", eventDetails:" "}, 
                {hour: "13", time: "1PM",  eventDetails:" "}, 
                {hour: "14", time: "2PM",  eventDetails:" "},
                {hour: "15", time: "3PM",  eventDetails:" "}, 
                {hour: "16", time: "4PM",  eventDetails:" "}, 
                {hour: "17", time: "5PM",  eventDetails:" "}]

 console.log(currentHour);  
               

//creating grid Here:

//appending grid rows using 'for each' loop to append a row for every work hour
workHours.forEach(function(hour) {
var timeBlock = $("<form>").attr({"class": "row"});
$(".container").append(timeBlock);

// create text field for time block
var timeField = $("<div>")
.text(hour.time)
.attr({"class": "col-md-2"});
console.log(hour.time);


// create event block
var eventBlock = $("<div>").attr({"class": "col-md-9 description p-0"});
var eventData = $("<textarea>");
eventBlock.append(eventData);
eventData.attr("id", hour.time);

console.log(eventData); 

//if/else statement to mark past,present,future --- why is 9am always coming up as "future"????
if (hour.time < currentHour) {
    eventData.attr({"class": "past"})

} 
else if (hour.time === currentHour) {
    eventData.attr({"class": "present"})

} 

else if (hour.time > currentHour) {
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
    workHours.forEach(function (hour) {
        $("#hour.id").val(hour.eventDetails);
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
init();
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






