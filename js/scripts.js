function countUpBy(countBy, countTo){
  var countArray = [];
  for(var i = 1; !(i === countTo); i+=countUpBy){
    countArray.push(i);
  }
  return countArray;
}



$(document).ready(function(){
  $("form").submit(function(e){
    var countBy = $("#countby").val();
    var countTo = $("#countTo").val();
    countUpBy(countBy,countTo).forEach(x => {
      $("ul").append("")
    });
  });
});