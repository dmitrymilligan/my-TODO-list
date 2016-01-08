$(document).ready(function () {


var date     = new Date(),
allMonths    = ["Янв", "Веф", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
minutes      = date.getMinutes(),
hours        = date.getHours(),
getmonth     = date.getMonth(),
day			 = date.getDate(),
month        = allMonths[getmonth],
getTime      = time(),
getDate		 = getDayFunc(),
doneCount 	 = 0,
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
if (day < 9) {
return "0" + day;
}
else {
return day;
}
}
//$("#end-date").attr("value", new Date().getFullYear() + "-"+ new Date().getMonth()+1 + "-" + getDayFunc())
			 
//minutes = minutes > 9 ? minutes : "0" + minutes;
$("#go").click(function () {  //Start
var newTask = $("#task").val(),
comment     = $("#comment").val(),
endDate		= $("#end-date").val(),
endTime		= $("#end-time").val();
if(endDate === "") {
	endTime = "Без крайнего срока";
}; 
if( (newTask === "") || (newTask === " ") ) {
	return false
}
else {

}
$("#all > table > tbody").append("<tr><td><label><input type='checkbox'><span></span></label></td><td>" + getDate + " " + month + " " + time() + "</td>" + "<td>" + newTask + "</td>" + "<td>" + comment + "</td>" + "<td>" + endDate + " " + endTime + "</td></tr>" );
$("#task, #comment, #end-date, #end-time").val("");
taskCount ++;
$("#allTasksCount").text(taskCount);
addTask();
$("input[type='checkbox']").click(function () {
if($(this).is(":checked")) {
$(this).closest("tr").css("color","red");
complete();
$("#done > table > tbody, #all > table tbody").append($(this).closest("tr"));
doneCount++;
$("#doneCount").text(doneCount);
}
else {
$(this).closest("tr").css("color","")
}
})
}); //END
function addTask () {
	$("#taskAdded").fadeIn("slow").fadeOut(3500);
}
function complete () {
	$("#complete").fadeIn("slow").fadeOut(3500);
}





$('#myTab a').click(function (e) {
	 e.preventDefault();
	 $(this).tab('show');
});

$(function () {
$('#myTab a:last').tab('show');
})

});