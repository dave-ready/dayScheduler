For this week's homework assignment, I created a simple calendar application that allows the user to save events for each hour of the standard workday(9am-5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. 

At the top of the calendar, the application displays the current date and time provided by Moment.js 

Each time slot is one hour long and contains 3 elements, a time block including the hour for which you are scheduling the event; a text field for the user to input the event they want to schedule; and a save button to save the event to local storage.

Each text field is color-coded to reflect whether the time is in the past, the present, or the future.  Past is gray, present is red, and future is green; these will change with each passing hour of day. After an event is saved, it should stay in view after the page is refreshed.
