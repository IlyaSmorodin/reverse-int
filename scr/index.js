
function reverseString(num){
    let revertedStr = "";
    const str = String(num)
    for (let i = 0; i < str.length; i++){
        revertedStr = str[i] + revertedStr;
    }
    return Number(revertedStr);
}

console.log(reverseString('123'))
console.log(reverseString('233'))
console.log(reverseString('535'))
console.log(reverseString('95034'))
 module.exports = reverseString