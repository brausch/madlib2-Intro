$(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["place1", "adjective1", "femaleCeleb", "bodyPart1", "bodyPart2", "humanOrg", "adjective2", "maleCeleb", "adjective3", "bodyPart3", "bodyPart4", "place2", "celeb", "animal", "verb", "num", "bodyPart5", "adjective4", "adjective5", "pastVerb"]

    blanks.forEach(function(blank){
      var userInput = $("#" + blank).val();
      $("." + blank).text(userInput);
    });


    $("#jumbotron").show();
    event.preventDefault();
  });
});
