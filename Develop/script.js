// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var saveButtonEl = $(".saveBtn");
  saveButtonEl.on("click", function () {
    var key = $(this).parent().attr("id");
    var description = $(this).siblings("textarea").val();
    localStorage.setItem(key, description);
    key.children("textarea").val(localStorage.getItem(key));
  })

  var day = dayjs().day();
  var weekday = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  console.log(day);
  var now = dayjs().format('MM/DD/YYYY');
  var hour = dayjs().hour();
  $("#currentDay").text(weekday[day] + ", " + now);
  // $("#currentTime").text(hour);
  
  //sets the background colors based on if its past, present, or future depending on the current time
  for (i = 9; i < 20; i++) {
    if (i < hour) {
      $("#hour-" + i).attr("class", "past row time-block");
    } else if (hour === i) {
      $("#hour-" + i).attr("class", "present row time-block");
    } else {
      $("#hour-" + i).attr("class", "future row time-block");
    }
  }

  //grabs the values from local storage and sets them to text area
  for (i = 9; i < 20; i++) {
    var div = $("#hour-" + i);
    div.children("textarea").val(localStorage.getItem("hour-" + i));
  }
});




 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.