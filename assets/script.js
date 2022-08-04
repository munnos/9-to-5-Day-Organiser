$(document).ready(function () {

    function getfromStorage() {
        var record = document.querySelectorAll(".row");
        record.forEach((element) => {
            var recordId = element.dataset.time;
            var recordText = localStorage.getItem(recordId);
            element.children[1].textContent = recordText;

        });
    }

    getfromStorage();

    var currentDay = document.querySelector("#currentDay");
    var userHour = moment().hour();
    var m = moment();

    currentDay.textContent = m.format("MMMM Do YYYY, h:mm:ss a");

    function timeCheck() {
        var rowforTime = document.querySelectorAll(".row");
    


    rowforTime.forEach((element) => {
        var rowTime = element.dataset.time;
        var colourArea = element.querySelector(".col-8");

        if (userHour === rowTime) {
            colourArea.classList.add("present");
        } else if (userHour < rowTime) {
            colourArea.classList.add("future");
        } else {
            colourArea.classList.add("past");
}})};

    timeCheck();

    $(".saveBtn").on("click", function () {
        var textInput = $(this).siblings(".col-8").val();
        var textTime = $(this).parent().data("time");
        localStorage.setItem(textTime, textInput);
    })})

