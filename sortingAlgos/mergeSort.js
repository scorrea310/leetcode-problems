/*
steps for mergeSort
1. split array in half
2. Sort left half and then sort right half
2. Merge sorted halves
*/

// Recursive Time complexity = O(N * log(N))
// Recursive Space Complexity = O(N * log(N))

const mergeSort = (arr)=> {
  if(arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, middle)
  const rightHalf = arr.slice(middle)

  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
}

const merge = (arr1, arr2)=> {
  let returnArray = []
  let arr1Index = 0
  let arr2Index = 0

  while(arr1Index < arr1.length && arr2Index < arr2.length) {
    if(arr1[arr1Index] <= arr2[arr2Index]) {
      returnArray.push(arr1[arr1Index])
      arr1Index++
    } else {
      returnArray.push(arr2[arr2Index])
      arr2Index++
    }
  }

  while(arr1Index < arr1.length) {
    returnArray.push(arr1[arr1Index])
    arr1Index++
  }

  while(arr2Index < arr2.length) {
    returnArray.push(arr2[arr2Index])
    arr2Index++
  }

  return returnArray
}

let array = [2, 5, 1, 7, 4, 3]

console.log(mergeSort(array))