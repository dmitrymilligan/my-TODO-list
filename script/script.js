$(function () {


var date     = new Date(),
arr			 = [],  
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
endTime		= $("#end-time").val(),
obj			= {};
obj.task    = newTask;
obj.comment = comment;
obj.endDate = endDate;
obj.endTime = endTime;

if(endDate === "") {
	endTime = "Без крайнего срока";
}; 
if( (newTask === "") || (newTask === " ") ) {
	return false
}

arr.push(obj);
$("#all > table > tbody").append("<tr><td><label><input type='checkbox'><span></span></label></td><td>" + getDate + " " + month + " " + time() + "</td>" + "<td>" + newTask + "</td>" + "<td>" + comment + "</td>" + "<td>" + endDate + " " + endTime + "</td><td></td></tr>" );

if($("#radio-urgent").is(":checked")) {
	$("#all").find("table > tbody > tr:last-child > td:last-child").text($("input:checked").val());
}
else if($("#radio-current").is(":checked")) {
	$("#all > table > tbody > tr:last-child > td:last-child").text($("input:checked").val());
}
else if($("#radio-trivial").is(":checked")) {
	$("#all").find("table > tbody > tr:last-child > td:last-child").text($("input:checked").val());
}

$("#task, #comment, #end-date, #end-time").val("");
$("#radio-trivial").prop("checked","checked");

console.log(arr);
taskCount ++;
$("#allTasksCount").text(taskCount);
addTask();                 // Вывод: "Задача добавленна"
$("table").find("tbody > tr > td > label > input[type='checkbox']").click(function () {     // Помечаю задачу как выполненную. Чекбокс в положение checked.
if($(this).is(":checked")) {
$(this).closest("tr").css({ background: "#8dc63f",
						    color:      "white" 
});

complete();				// Вывод: "Задача помеченна как выполненная"
$("#all > table tbody").append($(this).closest("tr"));   //#done > table > tbody, 
//$("#done > table > tbody").
doneCount++;
$("#doneCount").text(doneCount);
}
else {
$(this).closest("tr").css({ background: "",
							color: 		""
})
}
}); //$("input[type='checkbox']").click
}); //END
function addTask () {                                     //Объеденить в одну функцию.
	$("#taskAdded").fadeIn("slow").fadeOut(1500);
}
function complete () {
	$("#complete").fadeIn("slow").fadeOut(1500);
}





$('#myTab a').click(function (e) {
	 e.preventDefault();
	 $(this).tab('show');
});

$(function () {
$('#myTab a:last').tab('show');
})

});