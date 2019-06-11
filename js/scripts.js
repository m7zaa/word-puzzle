$(document).ready(function(){
var vowels = ["a", "e", "i", "o", "u"]
$("#submitButton").click(function() {
  var userInput = $("#userInput").val();
  var newSentence = userInput.split("");
  for(var letter = 0; letter < newSentence.length; letter++) {
    for(vowel = 0; vowel < vowels.length; vowel++) {
      if(newSentence[letter] === vowels[vowel]) {
        //console.log(newSentence[letter] + " is the same as " + vowels[vowel]);
        newSentence[letter] = "-";
      }
    }
  }
  console.log(userInput);
  var finalSentence = newSentence.join('')
  $(".output").text(finalSentence);
  console.log(newSentence);
})
});
