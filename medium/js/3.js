// var lengthOfLongestSubstring = function (s) {
//     let obj = {}
//     let i = 0
//     let c = 1

//     while (i < s.length - 1) {

//         if (obj[i] !== undefined) {

//             if (obj[i].includes(s[c])) {
//                 i = i + 1
//                 c = i + 1
//             } else {
//                 obj[i] = obj[i] + s[c]
//                 if (c < s.length - 1) {
//                     c = c + 1
//                 }

//             }
//         } else {

//             obj[i] = s[i]

//             if (obj[i].includes(s[c])) {
//                 i = i + 1
//                 c = i + 1
//             } else {
//                 obj[i] = obj[i] + s[c]
//                 if (c < s.length - 1) {
//                     c = c + 1
//                 }
//             }
//         }
//     }

//     let arraySubstring = Object.values(obj)

//     let longest = arraySubstring[0]
//     let amount = arraySubstring[0].length

//     for (let i = 0; i < arraySubstring.length; i++) {

//         if (arraySubstring[i].length > amount) {
//             longest = arraySubstring[i]
//             amount = arraySubstring[i].length
//         }
//     }


//     return amount

// };



// console.log(lengthOfLongestSubstring("pww kew"))
console.log("ghg fg".includes(""))