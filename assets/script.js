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

    