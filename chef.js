function getCheckedCheckBoxes() {
  var selectedCheckBoxes = document.querySelectorAll('input.checkbox:checked');

  var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

  console.log(checkedValues);

  return checkedValues; // для использования в нужном месте
}
