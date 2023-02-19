$('button').click(function(){
  //создаём массив для значений флажков
  var checkboxes = [];
  $('input:checkbox:checked').each(function(){
    //добавляем значение каждого флажка в этот массив
    checkboxes.push(this.value);
  });
  /*объединяем массив в строку с разделителем-запятой. Но лучше подобные вещи хранить в массиве. Для наглядности - вывод в консоль.*/
  console.log(checkboxes.join(','));
})
