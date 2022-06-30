var dateTime;
var date;

var update = function () {
    date = moment(new Date())
    dateTime.html(date.format('MMMM Do YYYY, h:mm:ss a'));
}

$(document).ready(function() {
    dateTime = $("#jumboTime")
    update();
    setInterval(update,1000);
})

