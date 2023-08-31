// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

function sortByBits(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  return merge(sortByBits(leftHalf), sortByBits(rightHalf));
}

const merge = (arr1: number[], arr2: number[]) => {
  let returnArray = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    let arr1BinaryNum = arr1[arr1Index].toString(2);
    let arr2BinaryNum = arr2[arr2Index].toString(2);

    if (numOfOnes(arr1BinaryNum) < numOfOnes(arr2BinaryNum)) {
      returnArray.push(arr1[arr1Index]);
      arr1Index++;
    } else if (numOfOnes(arr1BinaryNum) > numOfOnes(arr2BinaryNum)) {
      returnArray.push(arr2[arr2Index]);
      arr2Index++;
    } else {
      if (arr1[arr1Index] > arr2[arr2Index]) {
        returnArray.push(arr2[arr2Index]);
        arr2Index++;
      } else {
        returnArray.push(arr1[arr1Index]);
        arr1Index++;
      }
    }
  }

  while (arr1Index < arr1.length) {
    returnArray.push(arr1[arr1Index]);
    arr1Index++;
  }

  while (arr2Index < arr2.length) {
    returnArray.push(arr2[arr2Index]);
    arr2Index++;
  }

  return returnArray;
};

function numOfOnes(string: string): number {
  let totalOnes = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "1") totalOnes++;
  }
  return totalOnes;
}
