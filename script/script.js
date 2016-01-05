var date     = new Date(),
allMonths    = ["Янв", "Веф", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
minutes      = date.getMinutes(),
hours        = date.getHours(),
getmonth     = date.getMonth(),
day			 = date.getDate(),
month        = allMonths[getmonth],
getTime      = time(),
getDate		 = getDayFunc(),
taskCount 	 = 0;
function time () {
if (minutes < 10) { // Используется minutes
return new Date().getHours() + ":" + "0" + new Date().getMinutes(); // Здесь я не кэширую
}
else {
return new Date().getHours() + ":" + new Date().getMinutes(); // Здесь я не кэширую
}
};
function getDayFunc () {
if (day < 10) {
return "0" + day;
}
else {
return day;
}
}
//$("#end-date").attr("value", new Date().getFullYear() + "-"+ new Date().getMonth()+1 + "-" + getDayFunc())
			 
//minutes = minutes > 9 ? minutes : "0" + minutes;
$("#go").click(function () {
var newTask = $("#task").val(),
comment     = $("#comment").val(),
endDate		= $("#end-date").val(),
endTime		= $("#end-time").val();
if( (newTask === "") || (newTask === " ") ) {
	return false
}
else {

}
$("table > tbody").append("<tr><td>" + getDate + " " + month + " " + time() + "</td>" + "<td>" + newTask + "</td>" + "<td>" + comment + "</td>" + "<td>" + endDate + " " + endTime + "</td></tr>" );
$("#task, #comment, #end-date, #end-time").val("");
taskCount ++;
$("#allTasks").text(taskCount);
});