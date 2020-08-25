let dice1 = document.getElementsByClassName("dice")[0];
let dice2 = document.getElementsByClassName("dice")[1];
var n1;
var n2;

function rollDice(){
  n1 = Math.floor((Math.random()*6)+1);
  n2 = Math.floor((Math.random()*6)+1);
  if (n1 > n2){
     dice1.src=("images/dice"+n1+".png");
     dice2.src=("images/dice"+n2+".png");
    document.querySelector("h1").innerText = "Player 1 Wins!";
  }
    else if (n1 === n2) {
       dice1.src=("images/dice"+n1+".png");
       dice2.src=("images/dice"+n2+".png");
      document.querySelector("h1").innerText = "Draw!";
    }
    else {
       dice1.src=("images/dice"+n1+".png");
       dice2.src=("images/dice"+n2+".png");
      document.querySelector("h1").innerText = "Player 2 Wins!";
    }
}
