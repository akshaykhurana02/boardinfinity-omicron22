// Conditionals in JavaScript


// If, Else If, Else


 
/* 

Problem Statment

If age < 10 -> Child
If age > 10 && age < 18 -> Teenager
If age >=18 && age < 60 -> Adult
If age >=60 && age < 100 -> Old
Else -> Invalid Age

*/

// Logical And Operator -> &&

/*
    true && true -> true
    true && false -> false
    false && true -> false
    false && false -> false
*/

// Logical Or Operator -> ||

/*
    true || true -> true
    true || false -> true
    false || true -> true
    false || false -> false
*/


var givenAge = 109;

// if(givenAge < 10) {
//     console.log("Child");
// } else if(givenAge > 10 && givenAge < 18) {
//     console.log("Teenager");
// } else if(givenAge >=18 && givenAge < 60) {
//     console.log("Adult");
// } else if(givenAge >=60 && givenAge < 100) {
//     console.log("Old");
// } else {
//     console.log("Invalid Age");
// }

// if(givenAge < 10) {
//     console.log("Child");
// } else if(givenAge > 10 && givenAge < 18) {
//     console.log("Teenager");
// } else if(givenAge >=18 && givenAge < 60) {
//     console.log("Adult");
// } else if(givenAge >=60 && givenAge < 100) {
//     console.log("Old");
// }


// Nested Else If

/*

Problem Statment

1 <= givenNumber < 5 -> Red
5 <= givenNumber < 10 -> Green
10 <= givenNumber < 15 -> Blue
Else -> Yellow

*/

var givenNumber = 15;

// if(givenNumber >= 1 && givenNumber < 5) {
//     console.log("Red");
// } else if(givenNumber >= 5 && givenNumber < 10) {
//     console.log("Green");
// } else if(givenNumber >= 10 && givenNumber < 15) {
//     console.log("Blue");
// } else {
//     console.log("Yellow");
// }

// if(givenNumber >= 1 && givenNumber < 10) {
//     if(givenNumber < 5) {
//         console.log("Red");
//     } else if(givenNumber >=5 && givenNumber < 10) {
//         console.log("Green")
//     }
// } else if(givenNumber >=10 && givenNumber < 15) {
//     console.log("Blue");
// } else {
//     console.log("Yellow");
// }

// if(givenNumber >= 1 && givenNumber < 15) {
//     if(givenNumber < 5) {
//         console.log("Red");
//     } else if(givenNumber >=5 && givenNumber < 10) {
//         console.log("Green")
//     } else if(givenNumber >=10 && givenNumber < 15) {
//         console.log("Blue");
//     }
// } else {
//     console.log("Yellow");
// }


// Switch Case


/*

    A -> Good Job
    B -> Pretty Good
    C -> Passed
    D -> Not so good
    E -> Failed
    Default -> Invalid Grade

*/

var grade = 'A';
console.log("Entering switch block");
switch (grade) {
    case 'A': {
        console.log("Good job"); 
        break;
    }
    case 'B': {
        console.log("Pretty good"); 
        break;
    }
    case 'C': {
        console.log("Passed"); 
        break;
    }
    case 'D': {
        console.log("Not so good"); 
        break;
    }
    case 'E': {
        console.log("Failed"); 
        break;
    }
    default: {
        console.log("Unknown grade");
    }
}
console.log("Exiting switch block");
