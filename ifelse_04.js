// const age =19;
// if(age >= 18){
//     console.log("yes,you can vote")
// }
// else if (age>= 80){
//     console.log("you are adult")
// }
// else{
//     console.log("you cannot vote")
// }

// Ternary Operator
const age =90;
age>= 18 ? console.log('Yes') : console.log('No')
// cond|ternary operator| true cond |false cond

// switch cases
// const option =2

// switch(option){
//     case 1 :
//         console.log("Namste")
//         break;
//     case 2 :
//         console.log("bonjour")
//         break;
//     default:console.log("noo")
    
// }

let a=30;
let opt ='*';
let b=40;

switch(opt){
    case '+' : console.log(a+b);
    break;
    case '-' : console.log(b-a);
    case '*' : console.log(a*b);
    break;
    default : console.log('IDK')
}