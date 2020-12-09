//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//create function to display the current date (moment.js??)

function displayCurrentDate() {
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDate);
console.log(currentDate);

}

displayCurrentDate()



//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours

//Create time blocks - style.css looks like it already has the styled elements -
//do I create div/column/row/etc. element classes/id's for them to style??

//var amHours = ["1:00am", "2:00am", "3:00am", "4:00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00am"];
//var pmHours = ["1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm", "10:00pm", "11:00pm", "12:00pm"];
//var timeBlock =  ;

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//var past = ;
//var present = ;
//var future =  ;

//if (timeBlock < currentDate) {"past"}
//else if (timeBlock === currentDate) {"present"}
//else {future}

//WHEN I click into a time block
//THEN I can enter an event

//function createEvent()
 
//WHEN I click the save button for that time block

//THEN the text for that event is saved in local storage


//create saveBTN

//function saveEvent()

//WHEN I refresh the page
//THEN the saved events persist'

//how do I make sure it stays??