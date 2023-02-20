var checked = [];
$('input:checkbox:checked').each(function() {
	checked.push($(this).val());
	});
function alerted(){
	alert(checked);
}
	  
