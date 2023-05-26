/*
steps for mergeSort
1. split array in half
2. Sort left half and then sort right half
2. Merge sorted halves
*/

function mergesort(arr) {
    if(arr.length <= 1) return arr

    const midpoint = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, midpoint);
    const secondHalf = arr.slice(midpoint);
    
    return merge(mergesort(firstHalf), mergesort(secondHalf)) 
}

function merge(arrA, arrB) {
  // Create an empty return array
  let array = []

  // Point to the first value of each array
  let arrVal1Index = 0
  let arrVal2Index = 0

  while(arrVal1Index < arrA.length && arrVal2Index < arrB.length) {
    if(arrA[arrVal1Index] <= arrB[arrVal2Index]) {
        array.push(arrA[arrVal1Index])
        arrVal1Index++
    } else {
        array.push(arrB[arrVal2Index])
        arrVal2Index++
    }
  }

  if(arrVal1Index < arrA.length) return array.concat(arrA.slice(arrVal1Index))
  // Return the merged array
  return array.concat(arrB.slice(arrVal2Index))
}

let array = [2, 5, 1, 7, 4, 3]

console.log(mergesort(array))

// Recursive Time complexity = O(N * log(N))
// Recursive Space Complexity = O(N * log(N))


