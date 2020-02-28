$(document).ready(async ()=>{
    $.getJSON("/api/match", (data)=> {
        data.forEach((oneMatch) => {
            appendTableRow(oneMatch);
            let team1Score = Number(oneMatch.team1Score),
            team2Score = Number(oneMatch.team2Score);
            addTeamPoints(team1Score, team2Score);
        })
        prioritizeTeams();
    })
});



setScores.addEventListener("click", () => {
    addTeamPoints(pWale.value, pKola.value);
    $.ajax({
        //Post Scores
        type: "POST",
        url: "/api/match",
        data: {
            team1Score: pWale.value,
            team2Score: pKola.value
        },
        success: (data) => {
            appendTableRow(data);
        }
    })
    prioritizeTeams();
});



// REMOVE OR DELETE A MATCH
tableMP.addEventListener("click", (e) => {
    if (e.target.getAttribute("class") == "red") {
        let thisClickedRow = e.target.parentNode;
        thisClickedRow.remove();
        let team1Score = Number(thisClickedRow.querySelector("td:nth-of-type(7n+4)").innerText);
        let team2Score = Number(thisClickedRow.querySelector("td:nth-of-type(7n+5)").innerText);

        reduceTeamPoints(team1Score, team2Score);

        //  NUMBER TEAMS IN TABLE APPROPRIATELY
        let serialN = tableMP.querySelectorAll("tr td:nth-child(7n+1)");
        let arrSn = Array.from(serialN)
        arrSn.forEach((elem, i) => {
            serialN[i].innerText = i + 1;
        });

        prioritizeTeams();

        //  DELETE MATCH RECORD FROM DATABASE
        let thisMatchId = thisClickedRow.querySelector("td:nth-of-type(7n+2)").dataset.id;
        let deleteUrl = `/api/match/${thisMatchId}`
        $.ajax({
            method: 'DELETE',
            url: deleteUrl
        }, () => {
            console.log("about to delete");
        })

    }
});