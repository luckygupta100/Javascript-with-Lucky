// functions 

function sayNamaste(){
    console.log("Namaste")
}
sayNamaste()

// Parameters
function add(a,b){
    console.log(a+b)
}

add(500,565)

function multiply(a,b){
    return  a*b
}

a = multiply(9,45)
console.log("Dear sir, the multiply of these two numbers will be",a)

// Unlimited Arguments Accept.
function addNumbers (){
    let ans = 0
    for(i=0;i<arguments.length;i++){
        ans=ans+arguments[i]
    }
    return ans
}
let result =addNumbers(565,89,99,88,77,66,55,44,33,22,11)
console.log(result)