// For in Loop

const person = {
    fname: "John",
    lname: "Doe", 
    age: 25,
    country: {
        state: "UP"
    },
    mobileNumber: "+919556778899"
};

let text = "";

for (let x in person) {    
    if(typeof(person[x]) === 'object') {
        for(let y in person[x]) {
            text += person[x][y] + " ";
        }
    } else {
        text += person[x] + " ";
    }
}

console.log("Result : ", text);
