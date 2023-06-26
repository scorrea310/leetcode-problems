// https://leetcode.com/problems/valid-palindrome/description/

// Time Complexity: O(n)
// Space Complexity: O(n)
function isPalindrome(s: string): boolean {
    let alphanumericRegex = /^[a-z0-9]+$/i
    let alphanumericString: string[] = []
    for(let i = 0; i < s.length; i++) {
        if(alphanumericRegex.test(s[i])) {
            alphanumericString.push(s[i].toLowerCase())
        }
    }

    let left = 0
    let right = alphanumericString.length - 1

    while(left < right) {
        if(alphanumericString[left] !== alphanumericString[right]) return false
        left++
        right--
    }

    return true
};