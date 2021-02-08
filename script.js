const table = document.querySelector("#t1");
const point = document.querySelector("#pts1");
const goals = document.querySelector("#gf1");
const draw = document.querySelector("#d1");
const lose = document.querySelector("#l1");
const played = document.querySelector("#mp1");
const against = document.querySelector("#ga1");
const differ = document.querySelector("#gd1");
const win = document.querySelector("#w1");

const point2 = document.querySelector("#pts2");
const played2 = document.querySelector("#mp2");
const lose2 = document.querySelector("#l2");
const draw2 = document.querySelector("#d2");
const against2 = document.querySelector("#ga2");
const differ2 = document.querySelector("#gd2");
const win2 = document.querySelector("#w2");
const goals2 = document.querySelector("#gf2");
const score = document.querySelector(".scores");

const team1 = document.querySelector("#team--wale");
const team2 = document.querySelector("#team--kola");
console.log(team1);
console.log(team2);

const setScore = document.querySelector("#set-scores");
console.log(setScore);

setScore.addEventListener("click", (e) =>{
    console.log("Button was clicked!");
    let newScore1 = Number(team1.value);
    console.log(newScore1);
    let newScore2 = Number(team2.value);
    console.log(newScore2);

    let matchPlayed = Number(played.textContent);
    console.log(matchPlayed); 

    played.textContent = matchPlayed + 1;
    console.log(played.textContent);
    
    let matchPlayed2 = Number(played2.textContent);
    console.log(matchPlayed2);
    
    played2.textContent = matchPlayed2 + 1;
    console.log(played2.textContent);
    
})

