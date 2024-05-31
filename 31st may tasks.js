// 1.Top Scorers Array
// Create an array of objects where each object represents a player with the properties name, team, and runs.
//  Write a function to find the top 3 scorers from this array and return their details.

let playersList = [{
    name: 'sumalatha',
    team: 'rcb',
    runs: 654
},
{
    name: 'latha',
    team: 'csk',
    runs: 460

}, {
    name: 'sree',
    team: 'rr',
    runs: 550
}, {
    name: 'reddy',
    team: 'srh',
    runs: 500
}
];
function getTop3Scorer() {
    let sortedArr = playersList.sort((a, b) => b.runs - a.runs);
    let top3 = [];
    for (let index = 0; index < 3; index++) {
        top3.push(sortedArr[index]);
    }
    return top3;
}

console.log(getTop3Scorer());

// 2. Team Wins JSON
// Given a JSON object representing the number
//  of wins by each team in the IPL 2024 season, write a function to find the team with the maximum wins.

let teamWinsData = {
    teams: [{
        name: 'kohli',
        wins: 4
    }, {
        name: 'dhoni',
        wins: 10
    }, {
        name: 'abhi',
        wins: 8
    }]
};

function maximumWins(data) {
    let sortedArr = data.sort((a, b) => b.wins - a.wins);
    console.log(sortedArr[0]);
}
maximumWins(teamWinsData.teams)

// 3. Player Search by Team
// Create an array of player objects similar to the first question.
//  Write a function that accepts a team name as a parameter and returns an array of players belonging to that team.
function getPlayersByTeamName(teamName) {
    let players = playersList.filter((e) => e.team == teamName)
    return players
}
console.log(getPlayersByTeamName('rcb'));