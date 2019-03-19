const name = 'Max'; // cannot be changed later
let age = 29; // can be changed but scope is local inside function
const hashobbies = true;

age = 30;

function summarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName +
        ',age is ' + userAge +
        ' and the user has hobbies: ' + userHasHobby
    );
}


console.log(summarizeUser(name, age, hashobbies));