// Time function
function scheduleTime() {
    var scheduleDate = $("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY, h:mm a");
    scheduleDate.html(date);
  }
  function scheduleFormat() {
    var containerDiv = $(".container");
  
    for (let i = 9; i <= 17; i++) {
      var currentDiv = $("<div " + "style='display:flex;'>" + "</div>");
      if (i <= 11) var labelHour = $("<p id='hourLable'>" + i + ":00" + "</p>");
      else {
        var labelHour = $("<p id='hourLable'>" + i + ":00" + "</p>");
      }
  
      var inputText = $("<input id=" + "txt" + i + " class='inputText'></input>");
      
      var saveBtn = $(`<button id='hour-${i}' class='saveBtn'> Save  </button>`);
  
      currentDiv.append(labelHour);
      currentDiv.append(inputText);
      currentDiv.append(saveBtn);
      containerDiv.append(currentDiv);
    }
    //
    displayStorage();
  }
  
  function saveStorage(hour, textValue) {
    localStorage.setItem(hour, textValue)

  }
  
  //Prints information from local storage
  function displayStorage() {
    if (JSON.parse(localStorage.getItem("todos"))) {
      var todosArray2 = JSON.parse(localStorage.getItem("todos"));
      for (let i = 9; i <= 17; i++) {
        var inputTextId = "#txt" + i;
        $(inputTextId).val(todosArray2[i - 9]);
      }
    }
  }
  
  //every element with this class will call this function using jQuery
  $(document).ready(function() {
    $(".saveBtn").click(function(event) {
      event.preventDefault();
      var saveBtn = $(event.target);
      var userInput = saveBtn.siblings("input").val();
      saveStorage(saveBtn.attr("id"),userInput)
      
    });
  });
  
  scheduleTime();
  scheduleFormat();
  