function isValidSubsequence(array, sequence) {
  
    let arrayIndex = 0
    let sequenceIndex = 0

    while(sequenceIndex < sequence.length && arrayIndex < array.length) {
        let sequenceNumber = sequence[sequenceIndex]
        let arrayNumber = array[arrayIndex]

        if(sequenceIndex == sequence.length - 1 && sequenceNumber == arrayNumber) {
            return true
        }

       if(sequenceNumber == arrayNumber) {
        // console.log(sequenceIndex)
        arrayIndex++
        sequenceIndex++
       } else {
        arrayIndex++
       }
    }

    return false
}

//sample output
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 8, 10, 99]

console.log(isValidSubsequence(array,sequence))

/*
Time Complexity: O(N)
Space Complexity: O(N)

can be reduced to O(1) Space Complexity if I don't assign sequenceNumber and arrayNumber
*/