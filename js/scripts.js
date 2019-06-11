$(document).ready(function(){
  //back-end
  var vowels = ["a", "e", "i", "o", "u"]
  $("#submitButton").click(function() {
    var userInput = $("#userInput").val();
    var newSentence = userInput.split("");
    for(var letter = 0; letter < newSentence.length; letter++) {
      for(vowel = 0; vowel < vowels.length; vowel++) {
        if(newSentence[letter] === vowels[vowel]) {
          newSentence[letter] = "-";
        }
      }
    }
    var finalSentence = newSentence.join('')

    //front-end
    $(".output").text(finalSentence);
  });
});
