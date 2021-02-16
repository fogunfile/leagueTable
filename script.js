const tableStandings = document.querySelector("#standings");

const matchPlayedTable = document.querySelector("#matches-played");
const tbody = matchPlayedTable.querySelector("tbody");

const team1Score = document.querySelector("#team--wale");
const team2Score = document.querySelector("#team--kola");

let counter = 1;

const setScoreFunc = (team1Id, team2Id, score1, score2) => {
    let team1Row = document.querySelector(`#${team1Id}`);
    let team2Row = document.querySelector(`#${team2Id}`);
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

    // Goals For
    let gf1 = Number(goalsForTeam1.textContent) + score1;
    let gf2 = Number(goalsForTeam2.textContent) + score2;
    goalsForTeam1.textContent = gf1;
    goalsForTeam2.textContent = gf2;

    // Goals Against
    let ga1 = Number(goalsAgainstTeam1.textContent) + score2;
    let ga2 = Number(goalsAgainstTeam2.textContent) + score1;
    goalsAgainstTeam1.textContent = ga1;
    goalsAgainstTeam2.textContent = ga2;

    // Goal Difference
    goalDiffTeam1.textContent = gf1-ga1;
    goalDiffTeam2.textContent = gf2-ga2;
};

const setScore = document.querySelector("#set-scores");

setScore.addEventListener("click", (e) => {
    let name1 = document.querySelector("#name1");
    let name2 = document.querySelector("#name2");
    // console.log(name1, name2);
    // console.log(name1.value, name2.value);
    setScoreFunc(name1.value, name2.value, Number(team1Score.value), Number(team2Score.value));

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateFig = date.getDate();
    let dateString = `${dateFig}/${month}/${year}`

    $(tbody).append(`<tr>
                        <td class="sn">${counter + 1}</td>
                        <td>${dateString}</td>
                        <td>${name1.options[name1.selectedIndex].textContent}</td> 
                        <td>${Number(team1Score.value)}</td> 
                        <td>${Number(team2Score.value)}</td>
                        <td>${name2.options[name1.selectedIndex].textContent}</td>
                        <td class="red" id="del">X</td>
                    </tr>`);
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

// POSITION TEAMS BY POINTS or GOAL DIFFERENCE
const positioner = () => {
    let teamRowsList = tableStandings.querySelectorAll("tbody tr");
    let abc = Array.from(teamRowsList).sort((a, b) => {
        let thisA = Number(a.querySelector("td:last-child").textContent);
        let thisB = Number(b.querySelector("td:last-child").textContent);
        if(thisB-thisA == 0){
            thisA = Number(a.querySelector("td:nth-child(9)").textContent);
            thisB = Number(b.querySelector("td:nth-child(9)").textContent);
        }
        return thisB-thisA;
    })
    return abc;
}