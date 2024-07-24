let userscore = 0;
let compscore = 0;
const showwinner = (userwin) => {
  // let countuser = 0;
  // let countcomp=0;
  if (userwin) {
    console.log("You won");
    let userscorepara = document.getElementById("user-score");
    // countuser++;
    userscore++;
    userscorepara.innerHTML = userscore;
    let msg= document.getElementById("msg");
    msg.innerHTML=("You Win!!");
    msg.style.backgroundColor="green";
  }
  else {
    console.log("you loose"); 
    // countcomp++;
    compscore++;
    let compscorepara = document.getElementById("comp-score");
    compscorepara.innerHTML = compscore;
    let msg= document.getElementById("msg");
    msg.innerHTML = ("You Loose!!");
    msg.style.backgroundColor="red";

  }
}
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const usesrchoice = choice.getAttribute("id");
    playgame(usesrchoice);
  })
});

const drawgame = () => {
  console.log("Game draw");
  let msg = document.getElementById("msg");
  msg.innerHTML=("Game Draw!!");
  msg.style.backgroundColor="black";
}
const compturn = () => {

  let option = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3); // 
  return option[random];
}
const playgame = (usesrchoice) => {
  console.log("User choice is = ", usesrchoice);
  let getcompturn = compturn();
  console.log("Computer Choice is = ", getcompturn);

  if (usesrchoice === getcompturn) {
    // console.log("match tie");
    drawgame();
  }
  else {
    let userwin = true;
    if (usesrchoice === "rock") {
      // comp could be paper and scissor and not rock bcoz it wil tie
      userwin = getcompturn === "paper" ? false : true;
    }
    else if (usesrchoice === "paper") {
      // comp could be scissor and rock
      userwin = getcompturn === "scissor" ? false : true;
    } else {
      userwin = getcompturn === "rock" ? false : true;
    }
    showwinner(userwin);
  }
}


// console.log("hello world")