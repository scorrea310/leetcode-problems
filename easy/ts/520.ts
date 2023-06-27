// https://leetcode.com/problems/detect-capital/description/
// Time Complexity: O(n)
// Space Complexity: O(1)

function isCapital(character: string): boolean {
    return character === character.toUpperCase()
}
function detectCapitalUse(word: string): boolean {
    if(word.length === 1) return true
    if(isCapital(word[0]) && isCapital(word[1])) {
        for(let i = 2; i < word.length; i++) {
            if(!isCapital(word[i])) return false
        }
        return true
    } else if(isCapital(word[0]) && !isCapital(word[1])) {
        for(let i = 2; i < word.length; i++) {
            if(isCapital(word[i])) return false
        }
        return true
    } else {
        for(let i = 0; i < word.length; i++) {
            if(isCapital(word[i])) return false
        }
        return true
    }
};