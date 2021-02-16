const tableStandings = document.querySelector("#standings");


const matchPlayedTable = document.querySelector("#matches-played");
const tbody = matchPlayedTable.querySelector("tbody");

// const point = document.querySelector("#pts1");
// const goals = document.querySelector("#gf1");
// const draw = document.querySelector("#d1");
// const lose = document.querySelector("#l1");
// const played = document.querySelector("#mp1");
// const against = document.querySelector("#ga1");
// const differ = document.querySelector("#gd1");
// const win = document.querySelector("#w1");

// const point2 = document.querySelector("#pts2");
// const played2 = document.querySelector("#mp2");
// const lose2 = document.querySelector("#l2");
// const draw2 = document.querySelector("#d2");
// const against2 = document.querySelector("#ga2");
// const differ2 = document.querySelector("#gd2");
// const win2 = document.querySelector("#w2");
// const goals2 = document.querySelector("#gf2");
// const score = document.querySelector(".scores");

const team1Score = document.querySelector("#team--wale");
const team2Score = document.querySelector("#team--kola");

// const dt = document.querySelector("#dt"),
//     tm1 = document.querySelector("#tm1"),
//     tm2 = document.querySelector("#tm2"),
//     sc1 = document.querySelector("#sc1"),
//     sc2 = document.querySelector("#sc2"),
//     del = document.querySelector("#del");
// const tn1 = document.querySelector("#tn1");
// const tn2 = document.querySelector("#tn2");
// const name1 = document.querySelector("#name1");
// const name2 = document.querySelector("#name2");

let counter = 1;

const setScoreFunc = (team1, team2, score1, score2) => {
    let team1Row = document.querySelector(`#${team1}`);
    let team2Row = document.querySelector(`#${team2}`);
    let matchPlayedTeam1 = team1Row.querySelector("td:nth-child(3)");
    let matchPlayedTeam2 = team2Row.querySelector("td:nth-child(3)");
    let winTeam1 = team1Row.querySelector("td:nth-child(4)");
    let winTeam2 = team2Row.querySelector("td:nth-child(4)");
    let drawTeam1 = team1Row.querySelector("td:nth-child(5)");
    let drawTeam2 = team2Row.querySelector("td:nth-child(5)");
    let loseTeam1 = team1Row.querySelector("td:nth-child(6)");
    let loseTeam2 = team2Row.querySelector("td:nth-child(6)");
    let goalsForTeam1 = team1Row.querySelector("td:nth-child(7)");
    let goalsForTeam2 = team2Row.querySelector("td:nth-child(7)");
    let goalsAgainstTeam1 = team1Row.querySelector("td:nth-child(8)");
    let goalsAgainstTeam2 = team2Row.querySelector("td:nth-child(8)");
    let goalDiffTeam1 = team1Row.querySelector("td:nth-child(9)");
    let goalDiffTeam2 = team2Row.querySelector("td:nth-child(9)");
    let pointsTeam1 = team1Row.querySelector("td:nth-child(10)");
    let pointsTeam2 = team2Row.querySelector("td:nth-child(10)");


    // MATCH PLAYED
    matchPlayedTeam1.textContent = Number(matchPlayedTeam1.textContent) + 1;
    matchPlayedTeam2.textContent = Number(matchPlayedTeam2.textContent) + 1;

    if(score1 > score2){
        winTeam1.textContent = Number(winTeam1.textContent) + 1;
        loseTeam2.textContent = Number(loseTeam2.textContent) + 1;
        pointsTeam1.textContent = Number(pointsTeam1.textContent) + 3;
    } else if (score1 < score2){
        winTeam2.textContent = Number(winTeam2.textContent) + 1;
        loseTeam1.textContent = Number(loseTeam1.textContent) + 1;
        pointsTeam2.textContent = Number(pointsTeam2.textContent) + 3;
    } else {
        drawTeam1.textContent = Number(drawTeam1.textContent) + 1;
        drawTeam2.textContent = Number(drawTeam2.textContent) + 1;
        pointsTeam1.textContent = Number(pointsTeam1.textContent) + 1;
        pointsTeam2.textContent = Number(pointsTeam2.textContent) + 1;
    }

    let gf1 = Number(goalsForTeam1.textContent) + score1;
    let gf2 = Number(goalsForTeam2.textContent) + score2;
    goalsForTeam1.textContent = gf1;
    goalsForTeam2.textContent = gf2;

    let ga1 = Number(goalsAgainstTeam1.textContent) + score2;
    let ga2 = Number(goalsAgainstTeam2.textContent) + score1;
    goalsAgainstTeam1.textContent = ga1;
    goalsAgainstTeam2.textContent = ga2;

    goalDiffTeam1.textContent = gf1-ga1;
    goalDiffTeam2.textContent = gf2-ga2;
};
// setScoreFunc("Chelsea", "Liverpool")

const setScore = document.querySelector("#set-scores");

setScore.addEventListener("click", (e) => {

    setScoreFunc(name1.value, name2.value, Number(team1Score.value), Number(team2Score.value));

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateFig = date.getDate();
    let dateString = `${dateFig}/${month}/${year}`

    let team1Name = name1.value;
    tn1.textContent = team1Name;

    let team2Name = name2.value;
    tn2.textContent = team2Name;

    $(tbody).append(`<tr>
                    <td class="sn">${counter + 1}</td>
                     <td> ${dateString} </td>
                      <td> ${team1Name} </td> 
                      <td> ${Number(team1Score.value)} </td> 
                      <td> ${Number(team2Score.value)} </td>
                       <td> ${team2Name} </td>
                        <td class="red" id="del">X</td>
                    < /tr>`);
    let result = positioner();
    $('#standings tbody').html('');
    $('#standings tbody').append(result);

    
    counter++;
    changeSerial("sn");
    changeSerial("mn");
});


// DELETING A ROW
tbody.addEventListener('click', (e) => {
    if(e.target.getAttribute("id") == "del"){
        e.target.parentNode.remove()
    }
    changeSerial();
});

// CHANGING THE SERIAL NUMBER
const changeSerial = (element) => {
    let sn = document.querySelectorAll(`.${element}`);
    sn.forEach((item, i) => {
        item.textContent = i + 1;
    })
}

const positioner = () => {
    let teamRowsList = tableStandings.querySelectorAll("tbody tr");
    let abc = Array.from(teamRowsList).sort((a, b) => {
        a = Number(a.querySelector("td:last-child").textContent);
        b = Number(b.querySelector("td:last-child").textContent);
        return b-a;
    })
    return abc;
}