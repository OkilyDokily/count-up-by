function countUpBy(countBy, countTo){
  var countArray = [];
  for(var i = countBy; i <= countTo; i+=countBy){
    console.log(i);
    countArray.push(i); 
  }
  console.log(countArray)
  return countArray;
}



$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var countBy = parseInt($("#countby").val());
    var countTo = parseInt($("#countto").val());
    countUpBy(countBy,countTo).forEach(x => {
      $("ul").append("<li>" + x + "</li>")
    });
  });
});