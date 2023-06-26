// https://leetcode.com/problems/verifying-an-alien-dictionary/description/
// Time Complexity: O(n) where n is length of Array
// Space Complexity: O(1) because our map is always 26 in length even as n increases.
function isAlienSorted(words: string[], order: string): boolean {
    let map = {}
    for(let i = 0; i < order.length; i++) {
        map[order[i]] = i
    }

    for(let i = 0; i < words.length - 1; i++) {
        for(let j = 0; i < words[i + 1].length; j++) {
            if(words[i][j] === undefined || map[words[i + 1][j]] >  map[words[i][j]]) {
                break
            }
            if(map[words[i + 1][j]] <  map[words[i][j]] || map[words[i + 1][j]] === undefined) {
                return false
            }
        }

    }
    return true
};