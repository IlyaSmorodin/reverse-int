
let str = '123';

function reverseString(str){
    let revertedStr = "";
    for (let i = 0; i < str.length; i++){
        revertedStr = str[i] + revertedStr;
    }
    return revertedStr;
}

console.log(reverseString('123'))
console.log(reverseString('233'))
console.log(reverseString('535'))
console.log(reverseString('95034'))