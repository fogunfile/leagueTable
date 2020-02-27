$(document).ready(async ()=>{
    $.getJSON("/api/match", (data)=> {

        const table         = document.querySelector("#matches-played tbody");

        data.forEach((oneMatch) => {

            let sn = table.querySelectorAll("tr"),
                serialNumber = document.createElement("td"),
                date = document.createElement("td"),
                pstWaleText = document.createElement("td"),
                pstWaleScore = document.createElement("td"),
                pstKolaScore = document.createElement("td"),
                pstKolaText = document.createElement("td"),
                del = document.createElement("td");

            let datePlayed = new Date(oneMatch.date),
                dateFormat = `${datePlayed.getDate()}/${(datePlayed.getMonth() + 1).toString().padStart(2, "0")}/${datePlayed.getFullYear().toString().slice(2)}`

            serialNumber.append(sn.length + 1);
            date.setAttribute("data-id", oneMatch._id);
            date.append(dateFormat);
            pstWaleText.append("Pst Wale");
            pstWaleScore.append(`\u00A0\u00A0\u00A0${oneMatch.team1Score}\u00A0`);
            pstKolaScore.append(`\u00A0${oneMatch.team2Score}\u00A0\u00A0\u00A0`);
            pstKolaText.append("Pst Kola");
            del.setAttribute("class", "red")
            del.append("X")
            let insertTableRow = document.createElement("tr")
            insertTableRow.append(serialNumber, date, pstWaleText, pstWaleScore, pstKolaScore, pstKolaText, del);
            table.append(insertTableRow);


        //  AFFECT THE STANDINGS ON THE TABLE
            let team1Score = Number(oneMatch.team1Score),
                team2Score = Number(oneMatch.team2Score),

                mp1 = team1.querySelector("td:nth-of-type(10n+3)"),
                w1 = team1.querySelector("td:nth-of-type(10n+4)"),
                d1 = team1.querySelector("td:nth-of-type(10n+5)"),
                l1 = team1.querySelector("td:nth-of-type(10n+6)"),
                gf1 = team1.querySelector("td:nth-of-type(10n+7)"),
                ga1 = team1.querySelector("td:nth-of-type(10n+8)"),
                gd1 = team1.querySelector("td:nth-of-type(10n+9)"),
                pts1 = team1.querySelector("td:nth-of-type(10n+10)"),

                mp2 = team2.querySelector("td:nth-of-type(10n+3)"),
                w2 = team2.querySelector("td:nth-of-type(10n+4)"),
                d2 = team2.querySelector("td:nth-of-type(10n+5)"),
                l2 = team2.querySelector("td:nth-of-type(10n+6)"),
                gf2 = team2.querySelector("td:nth-of-type(10n+7)"),
                ga2 = team2.querySelector("td:nth-of-type(10n+8)"),
                gd2 = team2.querySelector("td:nth-of-type(10n+9)"),
                pts2 = team2.querySelector("td:nth-of-type(10n+10)");

            mp1.innerHTML = Number(mp1.innerHTML) + 1;
            mp2.innerHTML = Number(mp2.innerHTML) + 1;

            if (team1Score > team2Score) {
                pts1.innerHTML = Number(pts1.innerText) + 3;
                w1.innerHTML = Number(w1.innerHTML) + 1;
                l2.innerHTML = Number(l2.innerHTML) + 1;
                gf1.innerHTML = Number(gf1.innerHTML) + Number(team1Score);
                gf2.innerHTML = Number(gf2.innerHTML) + Number(team2Score);
                ga2.innerHTML = Number(ga2.innerHTML) + Number(team1Score);
                ga1.innerHTML = Number(ga1.innerHTML) + Number(team2Score);
                gd1.innerHTML = (gf1.innerHTML - ga1.innerHTML);
                gd2.innerHTML = (gf2.innerHTML - ga2.innerHTML);

            } else if (team2Score > team1Score) {
                pts2.innerHTML = Number(pts2.innerHTML) + 3;
                w2.innerHTML = Number(w2.innerHTML) + 1;
                l1.innerHTML = Number(l1.innerHTML) + 1;
                gf2.innerHTML = Number(gf2.innerHTML) + Number(team2Score);
                gf1.innerHTML = Number(gf1.innerHTML) + Number(team1Score);
                ga1.innerHTML = Number(ga1.innerHTML) + Number(team2Score);
                ga2.innerHTML = Number(ga2.innerHTML) + Number(team1Score);
                gd2.innerHTML = (gf2.innerHTML - ga2.innerHTML);
                gd1.innerHTML = (gf1.innerHTML - ga1.innerHTML);

            } else if (team1Score == team2Score) {
                pts1.innerHTML = Number(pts1.innerHTML) + 1;
                pts2.innerHTML = Number(pts2.innerHTML) + 1;
                d1.innerHTML = Number(d1.innerHTML) + 1;
                d2.innerHTML = Number(d2.innerHTML) + 1;
                gf1.innerHTML = Number(gf1.innerHTML) + Number(team1Score);
                gf2.innerHTML = Number(gf2.innerHTML) + Number(team1Score);
                ga1.innerHTML = Number(ga1.innerHTML) + Number(team2Score);
                ga2.innerHTML = Number(ga2.innerHTML) + Number(team1Score);
            }
        })
        
        prioritizeTeams();

    })
});


// const prioritizeTeams = () => {
//     const allTeams = tableStandings.querySelector("tbody");
//     let pts1 = team1.querySelector("td:nth-of-type(10n+10)"),
//         pts2 = team2.querySelector("td:nth-of-type(10n+10)"),
//         gd1 = team1.querySelector("td:nth-of-type(10n+9)"),
//         gd2 = team2.querySelector("td:nth-of-type(10n+9)");



//     let priorityTeam1, priorityTeam2;
//     if (team1 != null) {
//         priorityTeam1 = team1;
//     }
//     if (team2 != null) {
//         priorityTeam2 = team2;
//     }

//     if (Number(pts1.innerHTML) > Number(pts2.innerHTML)) {
//         allTeams.textContent = "";
//         allTeams.append(priorityTeam1);
//         allTeams.append(priorityTeam2);
//     } else if (Number(pts2.innerHTML) > Number(pts1.innerHTML)) {
//         allTeams.textContent = "";
//         allTeams.append(priorityTeam2);
//         allTeams.append(priorityTeam1);
//     } else if (Number(pts2.innerHTML) == Number(pts1.innerHTML)) {
//         if (Number(gd1.innerHTML) > Number(gd2.innerHTML)) {
//             allTeams.textContent = "";
//             allTeams.append(priorityTeam1);
//             allTeams.append(priorityTeam2);
//         } else if (Number(gd2.innerHTML) > Number(gd1.innerHTML)) {
//             allTeams.textContent = "";
//             allTeams.append(priorityTeam2);
//             allTeams.append(priorityTeam1);
//         }
//     }
//     let serialN2 = tableStandings.querySelectorAll("tbody tr td:nth-child(10n+1)");

//     let arrSn2 = Array.from(serialN2)
//     arrSn2.forEach((elem, i) => {
//         serialN2[i].innerText = i + 1;
//     });
// }