const Team = require("../models/team")

class AddMatch {
    constructor(homeTeamScore, homeTeamId, awayTeamScore, awayTeamId){
        this.homeTeamScore = homeTeamScore;
        this.homeTeamId = homeTeamId;
        this.awayTeamScore = awayTeamScore;
        this.awayTeamId = awayTeamId;
        console.log(homeTeamScore, homeTeamId, awayTeamScore, awayTeamId)
    }
    
    async getTeams (){
        this.homeTeam = await Team.findById({_id: this.homeTeamId});
        this.awayTeam = await Team.findById({_id: this.awayTeamId});
    }

    matchPlayed(){
        this.homeTeam.matchPlayed++;
        this.awayTeam.matchPlayed++;
    }

    isHomeTeamWin(){
        if(this.homeTeamScore > this.awayTeamScore){
            return true
        } else if(this.awayTeamScore > this.homeTeamScore){
            return false
        } else {
            return null;
        }
    }

    winLoseOrDraw(){
        if(this.isHomeTeamWin() === null){
            this.homeTeam.draw++;
            this.awayTeam.draw++;
        } else if(this.isHomeTeamWin()){
            this.homeTeam.win++;
            this.awayTeam.lose++;
        } else {
            this.homeTeam.lose++;
            this.awayTeam.win++;
        }
    }

    goalsFor(){
        this.homeTeam.goalsFor += this.homeTeamScore;
        this.awayTeam.goalsFor += this.awayTeamScore;
    }

    goalsAgainst(){
        this.homeTeam.goalsAgainst -= this.awayTeamScore;
        this.awayTeam.goalsAgainst -= this.homeTeamScore;
    }

    goalDifference(){
        this.homeTeam.goalDifference = this.homeTeam.goalsFor + this.homeTeam.goalsAgainst;
        this.awayTeam.goalDifference = this.awayTeam.goalsFor + this.awayTeam.goalsAgainst;
    }

    points(){
        if(this.isHomeTeamWin() == null){
            this.homeTeam.points++;
            this.awayTeam.points++;
        } else if(this.isHomeTeamWin()){
            this.homeTeam.points += 3;
        } else {
            this.awayTeam.points += 3;
        }
    }

    async executeMatch(){
        await this.getTeams();
        this.matchPlayed();
        this.isHomeTeamWin();
        this.winLoseOrDraw();
        this.goalsFor();
        this.goalsAgainst();
        this.goalDifference();
        this.points();
        const homeTeam = await Team.findByIdAndUpdate({_id: this.homeTeamId}, this.homeTeam, {new: true});
        const awayTeam = await Team.findByIdAndUpdate({_id: this.awayTeamId}, this.awayTeam, {new: true});
        console.log(homeTeam, awayTeam)
        return {homeTeam, awayTeam};
    }
}

module.exports = AddMatch;