var player1Score = Math.floor(Math.random()*6)+1
var player2Score = Math.floor(Math.random()*6)+1

var dice1 = "images/dice"+player1Score+".png"
var dice2 = "images/dice"+player2Score+".png"

var image1 = document.querySelector(".img1")
var image2 = document.querySelector(".img2")

var winner = document.querySelector(".container h1")

image1.setAttribute("src", dice1)
image2.setAttribute("src", dice2)

if(player1Score>player2Score){
    winner.textContent = "🚩 Player 1 Wins!"
} else if (player2Score>player1Score){
    winner.textContent = "Player 2 wins! 🚩"
} else{
    winner.textContent = "Tied"
}

