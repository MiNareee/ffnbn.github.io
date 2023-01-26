var checked = [];
$('input:checkbox:checked').each(function() {
	checked.push($(this).val());
});
