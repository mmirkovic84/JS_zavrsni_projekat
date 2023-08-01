function replace1(hide, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(show).style.display = "block";
}

function replace2() {
  document.getElementById('div2').style.display = "none";
  document.getElementById('div3').style.display = "block";
}

function checkName() {

  var fname = document.querySelector("#input1").value;
  var displayedName = document.querySelector(".ime");
  displayedName.innerHTML = fname;

  if (fname == '' || fname == null) {
    alert("Please enter your name to continue!!!");
  }
  else {
    replace2();
  }
  
}

// dodavanje text boxa ispod radio buttona
function showText(num){
  if (num == 7) { 
    document.getElementById('addTextArea').style.display='block';
  }
  else {
    document.getElementById('addTextArea').style.display='none';
  }
  return;
}

// swichovanje finalnih poruka
function replace3() {
  document.getElementById('div6').style.display = "none";
  document.getElementById('final1').style.display = "block";
}

function FinalMessage() {
  var textFinal = document.querySelector(".Text_final");
  var smileyFinal = document.querySelector(".Smiley_final");
  var rangeResult = document.getElementById("customRange2").value; 

  switch (rangeResult) {
    case "1": 
    replace3();
    textFinal.innerHTML = "Oops, Sorry to disapoint you.";
    smileyFinal.innerHTML = '<i class="bi bi-emoji-frown-fill" style="font-size: 6rem; color: rgb(255, 255, 255);"></i>';
    break;
    case "2": 
    replace3();
    textFinal.innerHTML = "I hope we will be better next time.";
    smileyFinal.innerHTML = '<i class="bi bi-emoji-expressionless-fill" style="font-size: 6rem; color: rgb(255, 255, 255);"></i>';
    break;
    case "3": 
    replace3();
    textFinal.innerHTML = "Golden Middle.";
    smileyFinal.innerHTML = '<i class="bi bi-emoji-smile-fill" style="font-size: 6rem; color: rgb(255, 255, 255);"></i>';
    break;
    case "4": 
    replace3();
    textFinal.innerHTML = "Thanks for the very good rating.";
    smileyFinal.innerHTML = '<i class="bi bi-emoji-laughing-fill" style="font-size: 6rem; color: rgb(255, 255, 255);"></i>';
    break;
    case "5": 
    replace3();
    textFinal.innerHTML = "Perfect. We are glad to meet your requirements.";
    smileyFinal.innerHTML = '<i class="bi bi-emoji-heart-eyes-fill" style="font-size: 6rem; color: rgb(255, 255, 255);"></i>';
    break;
    default:'Error 404. Not Found!';
    break;
  }
}



