randomNumber1 = Math.round(Math.random()*6);
randomImageSource = "images/dice"+randomNumber1+".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",randomImageSource);


randomNumber2 = Math.round(Math.random()*6);
randomImageSource = "images/dice"+randomNumber2+".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src",randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}   
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
