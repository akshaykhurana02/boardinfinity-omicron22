/* 

Pattern 1

*
**
***
****
*****


*/

// First Approach

// for(var i = 1; i <= 5; i++) {
//     var valueToBePrinted = "";
//     for(var j = 1; j <= i; j++) {
//         valueToBePrinted = valueToBePrinted + "*";
//     }
//     console.log(valueToBePrinted);
// }

// Second Approach

// var valueToBePrinted = "";
// for(var i = 1; i <= 5; i++) {    
//     valueToBePrinted = valueToBePrinted + "*";    
//     console.log(valueToBePrinted);
// }


/* 

Pattern 2

*
***
*****
*******

*/

// for(var i = 1; i <=8; i++) {
//     var valueToBePrinted = "";
//     if(i%2 != 0) {
//         for(var j = 1; j <=i ; j++) {
//             valueToBePrinted = valueToBePrinted + "*";
//         }
//     } else {
//         continue;
//     }
//     console.log(valueToBePrinted);
// }

/* 

Pattern 3

   *
  ***
 *****
*******

*/

var spaceCounter = 3;

for(var i = 1; i <=7; i++) {
    var valueToBePrinted = "";
    if(i%2 != 0) {
        for(var k = 1; k <= spaceCounter ; k++) {
            valueToBePrinted = valueToBePrinted + " ";
        }
        for(var j = 1; j <=i ; j++) {
            valueToBePrinted = valueToBePrinted + "*";
        }
    } else {
        continue;
    }
    console.log(valueToBePrinted);
    spaceCounter--;
}

