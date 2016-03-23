$(function() {
  $("#blanks form").submit(function(event) {
 	var place1Input = $("input#place1").val();
    var adjective1Input = $("input#adjective1").val();
    var femaleCelebInput= $("input#femaleCeleb").val();
    var bodyPart1Input = $("input#bodyPart1").val();
    var bodyPart2Input = $("input#bodyPart2").val();
    var humanOrgInput = $("input#humanOrg").val();
    var adjective2Input = $("input#adjective2").val();
    var maleCelebInput = $("input#maleCeleb").val();
    var adjective3Input= $("input#adjective3").val();
    var bodyPart3Input = $("input#bodyPart3").val();
    var bodyPart4Input = $("input#bodyPart4").val();
    var place2Input = $("input#place2").val();
    var celebInput = $("input#celeb").val();
    var animalInput = $("input#animal").val();
    var verbInput= $("input#verb").val();
    var numInput = $("input#num").val();
    var bodyPart5Input = $("input#bodyPart5").val();
    var adjective4Input = $("input#adjective4").val();
    var adjective5Input = $("input#adjective5").val();
    var pastVerbInput = $("input#pastVerb").val();

    $(".place1").text(place1Input);
    $(".adjective1").text(adjective1Input);
    $(".femaleCeleb").text(femaleCelebInput);
    $(".bodyPart1").text(bodyPart1Input);
    $(".bodyPart2").text(bodyPart2Input);
    $(".humanOrg").text(humanOrgInput);
    $(".adjective2").text(adjective2Input);
    $(".maleCeleb").text(maleCelebInput);
    $(".adjective3").text(adjective3Input);
    $(".bodyPart3").text(bodyPart3Input);
    $(".bodyPart4").text(bodyPart4Input);
    $(".place2").text(place2Input);
    $(".celeb").text(celebInput);
    $(".animal").text(animalInput);
    $(".verb").text(verbInput);
    $(".num").text(numInput);
    $(".bodyPart5").text(bodyPart5Input);
    $(".adjective4").text(adjective4Input);
    $(".adjective5").text(adjective5Input);
    $(".pastVerb").text(pastVerbInput);
  

    $("#jumbotron").show();
    event.preventDefault();
  });
});