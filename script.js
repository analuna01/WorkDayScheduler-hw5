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
        if (i <= 11)
            var labelHour = $("<p id='hourLable'>" + (i) + ":00" + "</p>");

        else {
            var labelHour = $("<p id='hourLable'>" + (i) + ":00" + "</p>");
        }

        var inputText = $("<input id=" + "txt" + i + " class='inputText'></input>");
        var saveBtn = $("<button id='+i+' class='saveBtn'> Save  </button>");

        currentDiv.append(labelHour);
        currentDiv.append(inputText);
        currentDiv.append(saveBtn);
        containerDiv.append(currentDiv);
    }
//
    displayStorage();
}

function saveStorage(index, textValue) {
    //pull array
    if (JSON.parse(localStorage.getItem("todos")))
        var todosArray = JSON.parse(localStorage.getItem("todos"))
    else
        var todosArray = [8];
    todosArray[index - 9] = textValue;

    //save array
    localStorage.setItem("todos", JSON.stringify(todosArray));
    console.log();
}

//Prints information from local storage
function displayStorage() {
    if (JSON.parse(localStorage.getItem("todos"))){
        var todosArray2 = JSON.parse(localStorage.getItem("todos"));
        for (let i = 9; i <= 17; i++) {
          var inputTextId = ("#txt" + i);
          $(inputTextId).val(todosArray2[i-9]);
        }
      }
    
    }
      
    
//every element with this class will call this function using jQuery
$(document).ready(function () {
    $(".saveBtn").click(function (event) {
        event.preventDefault();
        var textId = ("#txt" + this.id)
        var textInput = $(textId).val();
        console.log(textInput);
        console.log(textId);
        console.log(this.id);
        saveStorage(this.id, textInput);
    });

});

scheduleTime();
scheduleFormat();


