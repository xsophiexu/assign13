var heading; var inputElement; var outputParagraph;
var question;
var r, g, b, r2, g2, b2 = 0; var color1, color2;

window.addEventListener('DOMContentLoaded', function(){
  heading = document.getElementById("title");
  inputElement = document.getElementById("myInput");
  outputParagraph = document.getElementById("outputText");
  question = document.getElementById("hook");
})
// var executeButton = document.getElementById("executeButton");

var gr = ["Howdy", "G'day", "Hey", "Yo", "Sup", "Hiya", "What's crackin", "Alright"]
var nice = ["enjoyable", "pleasant", "pleasurable", "agreeable", "delightful", "satisfying", "gratifying", "acceptable",
"to one's liking", "entertaining", "amusing", "dandy", "marvelous", "sunny", "bonny", "lovely", "great", "neat"]
var time = ["day", "week", "night", "year", "life", "time", "afternoon"]
// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

button.addEventListener("click", greet);

function greet() {
  var nc1 = Math.floor( Math.random() * nice.length);
  var nc2 = Math.floor( Math.random() * nice.length);
  var gRandom = Math.floor( Math.random() * gr.length);
  var tRandom = Math.floor( Math.random() * time.length);

  r = Math.random() * 255;
  g = Math.random() * 255;
  b = Math.random() * 255;
  color1 = "rgb(" + r + "," + g + "," + b + ")";

  r2 = Math.random() * 255;
  g2 = Math.random() * 255;
  b2 = Math.random() * 255;
  color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  var fSize = Math.random() * 3 + 2;
  var le = Math.random() * 20;

  heading.style.color = color1;
  outputText.style.fontSize = fSize + "vw";
  inputElement.style.marginLeft = le, "vw";
  question.classList.toggle("specialTitle");

  // heading.style.textShadow = "0px 0px 10px #fff";
  // heading.style.transform = "rotate(10deg)";
  // console.log("Class list AFTER:");
  // console.log(heading.classList);

  /// Modifying HTML content
  // outputParagraph.innerHTML = "Some new text...";
  var currentInputText = inputElement.value;
  var currentInputAsNumber = parseFloat(currentInputText);
  // console.log(currentInputText / 5.5);
  // console.log(currentInputAsNumber / 5.5);
  outputParagraph.innerHTML = gr[gRandom] + " " + currentInputText + ", have a" + " " + nice[nc1] + ", " + nice[nc2] + " " + time[tRandom] + "!";
  // alert("HIIIIII.");
  // console.log("Hey there...");
  // var inputContents = document.getElementById("myInput").value;
  // alert("You input " + inputContents + "!");
}
