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


const weekly = document.querySelector("#week");
const dat = document.querySelector("#dat");
const t11 = document.querySelector("#tea1");
const t12 = document.querySelector("#tea2");
const scoresheet = document.querySelector("#scoretd")
console.log(team1);
console.log(team2);
console.log(typeof Number(team1.value));

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
    let newWin = Number(win.textContent);
    console.log(win.textContent);

    // let weekcount = Number(weekly.textContent);
    // weekly.textContent = weekcount(Number(length + 1));
    // console.log(weekly.textContent);

    
    

    if(newScore1 > newScore2 ){
        let newWin =Number(win.textContent);
        win.textContent =newWin +1;

        let newloss2 = Number(lose2.textContent);
        lose2.textContent =newloss2 +1;
    }
    else if(newScore1 == newScore2){
        let draw1 =Number(draw.textContent);
        draw.textContent =draw1 +1;
        
        let draw11 = Number(draw2.textContent);
        draw2.textContent =draw11 +1;
    }
    if(newScore1 < newScore2){
        let newWin3 = Number(win2.textContent);
        win2.textContent =newWin3+1;
        
        let newLoss = Number(lose.textContent);
        lose.textContent =newLoss +1;
    }
    // goals for
    let goalfor1 = Number(goals.textContent);
    goals.textContent = Number(newScore1) + Number(goals.textContent);
    console.log(goalfor1);

    let goalfor2 = Number(goals2.textContent);
    goals2.textContent= Number(newScore2) +  Number(goals2.textContent);
    console.log(goals2);
    // goal against
    let goalA = Number(against.textContent);
    against.textContent = Number(newScore2) + Number(against.textContent);
     console.log(goalA);
     let goalB = Number(against2.textContent);
     against2.textContent = Number(newScore1) + Number(against2.textContent);
    //  goals difference
    let goalDiff = Number(differ.textContent);
    differ.textContent = Number(goals.textContent) - Number(against.textContent);

    let goalDiff2 = Number(differ2.textContent)
    differ2.textContent = Number(goals2.textContent) - Number(against2.textContent);
    console.log(goalDiff2);
    // points
    let victory = Number(point.textContent);
    point.textContent = (Number(win.textContent) *3) + (Number(draw.textContent));
    let victory2 = Number(point2.textContent);
    point2.textContent =(Number(win2.textContent)*3) +(Number(draw2.textContent));

    // let weekly = Number(week.textContent);
    // week.textContent = weekly + 1;
    // console.log(week.textContent);

    
})



    