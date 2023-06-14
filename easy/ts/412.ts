// https://leetcode.com/problems/fizz-buzz/description/
// Time Complexity: O(n)
// Space Complexity: O(1) because output array is not additional space.
function fizzBuzz(n: number): string[] {
    let array: string[] = []
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
          array.push("FizzBuzz")
        } else if (i % 3 === 0) {
          array.push("Fizz")
        } else if (i % 5 === 0) {
          array.push("Buzz")
        } else {
          array.push((i).toString())
        }
    }
    return array
};