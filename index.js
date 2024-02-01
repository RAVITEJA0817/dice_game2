var randomNumber = Math.floor(Math.random()*6)+1;
var randomDiceImg = "dice"+randomNumber+".png";
var source = "Images/"+ randomDiceImg;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src" , source)

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice"+randomNumber2+".png";
var source2 = "Images/"+randomDiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", source2)

var winner = document.getElementById("greet")
if(randomNumber>randomNumber2){
    winner.innerHTML="✔Player 1 won"
}
else if(randomNumber<randomNumber2){
    winner.innerHTML="Player 2 won✔"
}
else{
    winner.innerHTML="Match is tie"
}

function funct(){
    window.location.reload();
}