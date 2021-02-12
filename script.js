const table = document.querySelector("#t1");
const matchPlayedTable = document.querySelector("#matches-played");
const tbody = matchPlayedTable.querySelector("tbody");
console.log(tbody);

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

const wk = document.querySelector("#wk"),
    dt = document.querySelector("#dt"),
    tm1 = document.querySelector("#tm1"),
    tm2 = document.querySelector("#tm2"),
    sc1 = document.querySelector("#sc1"),
    sc2 = document.querySelector("#sc2"),
    del = document.querySelector("#del");
const tn1 = document.querySelector("#tn1");
const tn2 = document.querySelector("#tn2");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");



const setScore = document.querySelector("#set-scores");

setScore.addEventListener("click", (e) => {
    let newScore1 = Number(team1.value);
    let newScore2 = Number(team2.value);

    let matchPlayed = Number(played.textContent);

    played.textContent = matchPlayed + 1;

    let matchPlayed2 = Number(played2.textContent);

    played2.textContent = matchPlayed2 + 1;
    let newWin = Number(win.textContent);

    // let weekcount = Number(weekly.textContent);
    // weekly.textContent = weekcount(Number(length + 1));
    // console.log(weekly.textContent);




    if (newScore1 > newScore2) {
        let newWin = Number(win.textContent);
        win.textContent = newWin + 1;

        let newloss2 = Number(lose2.textContent);
        lose2.textContent = newloss2 + 1;
    } else if (newScore1 == newScore2) {
        let draw1 = Number(draw.textContent);
        draw.textContent = draw1 + 1;

        let draw11 = Number(draw2.textContent);
        draw2.textContent = draw11 + 1;
    }
    if (newScore1 < newScore2) {
        let newWin3 = Number(win2.textContent);
        win2.textContent = newWin3 + 1;

        let newLoss = Number(lose.textContent);
        lose.textContent = newLoss + 1;
    }
    // goals for
    let goalfor1 = Number(goals.textContent);
    goals.textContent = Number(newScore1) + Number(goals.textContent);

    let goalfor2 = Number(goals2.textContent);
    goals2.textContent = Number(newScore2) + Number(goals2.textContent);
    // goal against
    let goalA = Number(against.textContent);
    against.textContent = Number(newScore2) + Number(against.textContent);
    let goalB = Number(against2.textContent);
    against2.textContent = Number(newScore1) + Number(against2.textContent);
    //  goals difference
    let goalDiff = Number(differ.textContent);
    differ.textContent = Number(goals.textContent) - Number(against.textContent);

    let goalDiff2 = Number(differ2.textContent)
    differ2.textContent = Number(goals2.textContent) - Number(against2.textContent);
    // points
    let victory = Number(point.textContent);
    point.textContent = (Number(win.textContent) * 3) + (Number(draw.textContent));
    let victory2 = Number(point2.textContent);
    point2.textContent = (Number(win2.textContent) * 3) + (Number(draw2.textContent));

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateFig = date.getDate();
    let dateString = `${dateFig}/${month}/${year}`

    // wk.textContent = 1;
    // dt.textContent = dateString;
    // tm1.textContent = "Team 1";
    // tm2.textContent = "Team 2";
    // sc1.textContent = newScore1;
    // sc2.textContent = newScore2;
    // let tr = document.createElement("tr");

    // for(let i=0; i<7; i++){
    //     let td = document.createElement("td");
    //     td.textContent = `Believe ${i}`;
    //     tr.append(td);
    // }

    let newName = tn1.textContent;
    tn1.textContent = name1.value;
    console.log(newName);

    let newName2 = tn2.textContent;
    tn2.textContent = name2.value;
    console.log(newName2);




    $(tbody).append(`<tr>
                    <td > 1 </td>
                     <td> ${dateString} </td>
                      <td> ${newName} </td> 
                      <td> ${newScore1} </td> 
                      <td> ${newScore2} </td>
                       <td> ${newName2} </td>
                        <td> x </td>
                    < /tr>`);


})