const prompt = require('prompt-sync')();

// const prompt = require('prompt-sync')()
// const a = prompt('Enter a number: ')
// if(a>0){
//     console.log('a is positive')
// }
// else{
//     console.log('a is negative')
// }
// const a = parseInt(prompt('Enter the first number: '));
// const b = parseInt(prompt('Enter the second number: '));
// const c = parseInt(prompt('Enter the third number: '));

// let max;

// if (a > b) {
//     if (a > c) {
//         max = a;
//     } else {
//         max = c;speechSynthesis
//     }
// } else {
//     if (b > c) {
//         max = b;
//     } else {
//         max = c;
//     }
// }

// console.log('The maximum number is: ' + max);
const a = parseInt(prompt('Enter the marks: ')) ;
if(a>80){
    console.log('A grade')
}
else if(a<=80 && a>75){
    console.log('B grade')
}
else if(a<=75 && a>70){
    console.log('C grade')
}
else if(a<=70 && a>65){
    console.log('D grade')
}
else if(a<=65 && a>60){
    console.log('E grade')
}
else{
    console.log('F grade')
}