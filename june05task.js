// 1. Functions and Expressions
// Scenario: You are developing a system to manage and analyze election data for the 2024 elections.
// Question:
// Write a function expression named calculateVotes that takes three arguments: candidateName, votes, and region.
//  This function should return a formatted string with the candidate's name, the number of votes, and the region.
function calculateVotes(candidateName, votes, region) {
    return candidateName + ' receiveed ' + votes + ' votes in the region ' + region;
};
const result = calculateVotes("sumalatha", 12345, "SOUTH");
console.log(result);
// 2. Recursive Functions
// Scenario: To ensure the election data is accurate, you need to verify the votes from multiple sources.

// Question:
// Write a recursive function named verifyVotes that takes an array of vote counts from different sources and
//  returns the total number of votes.

const votes = [100, 300, 50, 100, 400];
const verifyVotes = function (votesArr) {
    if (votesArr.length === 0) {
        return 0;
    }
    return votesArr[0] + verifyVotes(votesArr.slice(1));
}
const totalVotes = verifyVotes(votes);

console.log(totalVotes);

// 3. Rest Parameters
// Scenario: Sometimes, you receive votes from an unknown number of regions.

// Question:
// Write a function named totalVotes that uses rest parameters to accept any number of arguments
//  representing votes from different regions.
//  The function should return the sum of all the votes.

function sumOfVotes(...params) {
    let sumOfAllVotes = 0;
    for (i = 0; i < params.length; i++) {
        sumOfAllVotes = sumOfAllVotes + params[i]
    }
    return sumOfAllVotes;
}
const total = sumOfVotes(100, 200, 400);
console.log(total);

// 4. Arrow Functions
// Scenario: You need to quickly filter and analyze the election data using modern ES6 features.

// Question:
// Create an arrow function named filterCandidates that takes an array of candidate objects and a threshold number of votes.
//  It should return an array of candidate names who have more votes than the threshold.

const candidates = [
    {
        name: 'reddy',
        votes: 90
    },
    {
        name: 'threya',
        votes: 900
    },
    {
        name: 'suma',
        votes: 990
    }
];
// normal function
// function filterCandidates (candidates,threshold){
//     return candidates.filter((e)=>e.votes>threshold);
// }
// arrow function
const filterCandidates = (candidates, threshold) => {
    return candidates.filter((e) => e.votes > threshold);
}
let filterAllCandidates = filterCandidates(candidates, 500);
console.log(filterAllCandidates);
// 5. Combining Concepts
// Scenario: For a comprehensive analysis, you need to write a function that integrates all the concepts mentioned above.

// Question:
// Write a function named analyzeElection that accepts a threshold number of votes and any number of 
// candidate objects using rest parameters. Each candidate object has a name and votes. Use an arrow function to 
// filter candidates based on the threshold and a recursive function to calculate the total votes of the filtered candidates. 
// The function should return an object containing the filtered candidates' names and the total votes.
function analyzeElection(...params) {
    const threshold = params[0];
    const candidateArr = params[1]
    const filteredCandidates = filterCandidates(candidateArr, threshold);
    const votesArr = filteredCandidates.map(e => e.votes);
    const totalVotes = sumOfVotes(...votesArr);
    const candNames = filteredCandidates.map(e => e.name);
    return {
        names: candNames,
        totalVotes: totalVotes
    }
}

const resultAnalyse = analyzeElection(100, candidates);
console.log(resultAnalyse);