/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
if(s.length == 1) return 1

let longest = 0
let startIndex = 0
let sessionLongest = 0
let endIndex = 0
let mySet = new Set()

while(startIndex < s.length && endIndex < s.length) {
    let c = s[endIndex]
    if(!mySet.has(c)) {
        mySet.add(s[endIndex])
        sessionLongest++
        endIndex++
    } else {
        if(sessionLongest > longest) {
            longest = sessionLongest
        }
        startIndex++
        sessionLongest = 0
        endIndex = startIndex
        mySet.clear()
  }

}

if(sessionLongest > longest) {
    longest = sessionLongest
}

return longest
};

/*
Time Complexity: O(N * log(n)):

-for every n we go until we have a repeating char.
-between O(N) and O(N^2)

Space Complexity
*/

