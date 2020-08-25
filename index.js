let dice1 = document.getElementsByClassName("dice")[0];
let dice2 = document.getElementsByClassName("dice")[1];
var n1;
var n2;
let player1 = prompt("Who is Player 1?");
let player2 = prompt("Who is Player 2?");

document.getElementsByClassName("player1")[0].innerHTML = player1;
document.getElementsByClassName("player2")[0].innerHTML =  player2;

function rollDice(){
  n1 = Math.floor((Math.random()*6)+1);
  n2 = Math.floor((Math.random()*6)+1);
  if (n1 > n2){
     dice1.src=("images/dice"+n1+".png");
     dice2.src=("images/dice"+n2+".png");
    document.querySelector("h1").innerText = player1 + " Wins!";
  }
    else if (n1 === n2) {
       dice1.src=("images/dice"+n1+".png");
       dice2.src=("images/dice"+n2+".png");
      document.querySelector("h1").innerText = "Draw!";
    }
    else {
       dice1.src=("images/dice"+n1+".png");
       dice2.src=("images/dice"+n2+".png");
      document.querySelector("h1").innerText = player2 + " Wins!";
    }
}
