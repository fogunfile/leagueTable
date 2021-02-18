const tableStandings = document.querySelector("#standings");

const matchPlayedTable = document.querySelector("#matches-played");
const tbody = matchPlayedTable.querySelector("tbody");

const team1Score = document.querySelector("#team--wale");
const team2Score = document.querySelector("#team--kola");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

let counter = 1;

const getElements = (parent, position) => {
    return parent.querySelector(`td:nth-child(${position})`);
};

const modifyTextContent = (element, operation, num) => {
    if (operation == "add"){
        return element.textContent = Number(element.textContent) + num;
    } else if(operation == "subtract") {
        return element.textContent = Number(element.textContent) - num;
    }
};
// CHANGING THE SERIAL NUMBER
const changeSerial = (element) => {
    let sn = document.querySelectorAll(`.${element}`);
    sn.forEach((item, i) => {
        item.textContent = i + 1;
    })
}

// CHANGE STATS ON TABLE
const changeMatchStats = (team1Id, team2Id, score1, score2, operation, addToTable) => {
    let team1Row = document.querySelector(`#${team1Id}`);
    let team2Row = document.querySelector(`#${team2Id}`);

    modifyTextContent(getElements(team1Row, 3), operation, 1);
    modifyTextContent(getElements(team2Row, 3), operation, 1);
    
    if(score1 !== score2){
        let winner = team1Row;
        let loser = team2Row;
        if(score1 < score2){
            winner = team2Row;
            loser = team1Row;
        }
        modifyTextContent(getElements(winner, 4), operation, 1);
        modifyTextContent(getElements(loser, 6), operation, 1);
        modifyTextContent(getElements(winner, 10), operation, 3);
    } else {
        modifyTextContent(getElements(team1Row, 5), operation, 1)
    modifyTextContent(getElements(team2Row, 5), operation, 1)
    modifyTextContent(getElements(team1Row, 10), operation, 1)
    modifyTextContent(getElements(team2Row, 10), operation, 1)
    }

    // Goals For
    let gf1, gf2 = 0;
    if (addToTable) {
        gf1 = Number(getElements(team1Row, 7).textContent) + score1;
        gf2 = Number(getElements(team2Row, 7).textContent) + score2;
    } else {
        gf1 = Number(getElements(team1Row, 7).textContent) - score1;
        gf2 = Number(getElements(team2Row, 7).textContent) - score2;
    }
    getElements(team1Row, 7).textContent = gf1;
    getElements(team2Row, 7).textContent = gf2;

    // Goals Against
    let ga1, ga2 = 0;
    if (addToTable){
        ga1 = Number(getElements(team1Row, 8).textContent) + score2;
        ga2 = Number(getElements(team2Row, 8).textContent) + score1;
    } else {
        ga1 = Number(getElements(team1Row, 8).textContent) - score2;
        ga2 = Number(getElements(team2Row, 8).textContent) - score1;
    }
    getElements(team1Row, 8).textContent = ga1;
    getElements(team2Row, 8).textContent = ga2;

    // Goal Difference
    getElements(team1Row, 9).textContent = gf1-ga1;
    getElements(team2Row, 9).textContent = gf2-ga2;
}

// POSITION TEAMS BY POINTS or GOAL DIFFERENCE
const positioner = () => {
    let teamRowsList = tableStandings.querySelectorAll("tbody tr");
    let sortedTeams = Array.from(teamRowsList).sort((a, b) => {
        let pointsTeam1 = Number(a.querySelector("td:last-child").textContent);
        let pointsTeam2 = Number(b.querySelector("td:last-child").textContent);
        if(pointsTeam2-pointsTeam1 == 0){
            //Work with Goal difference
            pointsTeam1 = Number(a.querySelector("td:nth-child(9)").textContent);
            pointsTeam2 = Number(b.querySelector("td:nth-child(9)").textContent);
        }
        return pointsTeam2-pointsTeam1;
    })
    return sortedTeams;
}

// const setScoreFunc = (team1Id, team2Id, score1, score2) => {
//     changeMatchStats(team1Id, team2Id, score1, score2, "add", true);
// };

const setScore = document.querySelector("#set-scores");


setScore.addEventListener("click", (e) => {

    changeMatchStats(name1.value, name2.value, Number(team1Score.value), Number(team2Score.value), "add", true);


    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateFig = date.getDate();
    let dateString = `${dateFig}/${month}/${year}`;

    $(tbody).append(`<tr>
                        <td class="sn">${counter + 1}</td>
                        <td>${dateString}</td>
                        <td data-id=${name1.value}>${name1.options[name1.selectedIndex].textContent}</td> 
                        <td>${Number(team1Score.value)}</td> 
                        <td>${Number(team2Score.value)}</td>
                        <td data-id=${name2.value}>${name2.options[name1.selectedIndex].textContent}</td>
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
        let removed = e.target.parentNode;
        e.target.parentNode.remove();
        // Ready to change or subtract
        let team1 = removed.querySelector("td:nth-child(3)");
        let team2 = removed.querySelector("td:nth-child(6)");
        let team1Id = team1.dataset.id;
        let team2Id = team2.dataset.id;
        let score1 = Number(removed.querySelector("td:nth-child(4)").textContent);
        let score2 = Number(removed.querySelector("td:nth-child(5)").textContent);

        changeMatchStats(team1Id, team2Id, score1, score2, "subtract", false)
    }
    changeSerial("sn");
    changeSerial("mn");
});


name1.addEventListener("change", (e)=> {
    let selected = e.target;
    let selected2 = name2.options[name2.options.selectedIndex];
    if (selected.value == selected2.value){
        let index = name2.options.length - 1;
        name2.options.selectedIndex == index ? name2.options.selectedIndex = 0 : name2.options.selectedIndex++;
    }
    Array.from(name2.options).filter((item) => item.value == selected ? item.disabled = true : item.disabled = false );
});
