//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//create function to display the current date (moment.js??)

function displayCurrentDate()

var currentDate = 


//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours

//Create time blocks - style.css looks like it already has the styled elements -
//do I create div/column/row/etc. element classes/id's for them to style??

var timeBlock =  ;

//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
var past = ;
var present = ;
var future =  ;

//if (timeBlock < currentDate) {"past"}
//else if (timeBlock === currentDate) {"present"}
//else {future}

//WHEN I click into a time block
//THEN I can enter an event

function createEvent()
 
//WHEN I click the save button for that time block

//THEN the text for that event is saved in local storage


//create saveBTN

function saveEvent()

//WHEN I refresh the page
//THEN the saved events persist'

//how do I make sure it stays??