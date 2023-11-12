// var areOccurrencesEqual = function(s) {
//     let text = s.split(" ")

//     for (let index = 0; index < text.length; index++) {
//         if(text.charCodeAt(text[index]) !== text.charCodeAt(text[index + 1])){

//          return text
//         }
        
//     }
    
// };

// const s = "abacbc"
// console.log(areOccurrencesEqual(s))


var areOccurrencesEqual = function(s) {
    const charCount = new Map();

  
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }


    const uniqueCounts = new Set(charCount.values());


    return uniqueCounts.size === 1;
}
const s = "abacbc";
console.log(areOccurrencesEqual(s)); 
