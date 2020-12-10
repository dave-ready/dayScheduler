//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

// .ready causing problems
//$(document).ready(function() { 

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

//found Bootstrap grid. hours: col-md-2; timeBlock: col-md-9; saveBtn: col-md-1

//Can i create a for loop to run through the hours and append a new row for each?

//<div class="row">
//  <div class="col-md-2 hour">.col-md-2</div>  
//  <div class="col-md-9 event">.col-md-9</div>
//  <div class="col-md-1 save">.col-md-1</div>
//</div>

//var timeBlock =  ;





//Demo shows work hrs 9am-5pm.  all must be in same array - military time?? MUST CHANGE ARRAY
//

var workHours = [ {hour: "09", time:"9",  amPM: "AM"},
                  {hour: "10", time: "10", amPM: "AM"}, 
                  {hour: "11", time: "11", amPM: "AM"}, 
                  {hour: "12", time: "12", amPM: "PM"}, 
                  {hour: "13", time: "1", amPM: "PM"}, 
                  {hour: "14", time: "2", amPM: "PM"},
                  {hour: "15", time: "3", amPM: "PM"}, 
                  {hour: "16", time: "4", amPM: "PM"}, 
                  {hour: "17", time: "5", amPM: "PM"}]

//moved time blocks down here below array. creating grid Here:

//appending grid rows using for each loop

 
workHours.forEach(function(thisHour) {

    
    var timeBlock = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeBlock);

    // create text field for time block

    var hourField = $("<div>")
        .text(thisHour.time + thisHour.amPM)
        .attr({
            "class": "col-md-2 hour"
    });

    

//this function isnt working - Console logging 1300, not 1PM. need new strategy!!! UGH!!

//function timeConvert() {
//     if (workHours < 1200) {
//   workHours === workHours + "AM"
//     } else {
//         workHours === workHours - 1200 + "PM"
//    }
//}

//timeConvert()
//for (var i = 0; i < workHours.length; i++);
//console.log(workHours[4]);

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

//create saveBtn with font awesome

//var saveBtn = $("<i class="fas fa-save"></i>")

//function saveEvent()

//WHEN I refresh the page
//THEN the saved events persist'

//how do I make sure it stays??//