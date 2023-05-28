/*
Time complexity O(N * log(N)) on average
worst case is O(n^2)
*/

let arr = [2, 1, 0, 5, 4]
const quickSort = (arr)=> {
    if(arr.length <= 1) return arr

    const pivot = arr[0]
    let leftSmallArr = []
    let rightLargerArr = []

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= pivot) {
          leftSmallArr.push(arr[i])
        } else {
           rightLargerArr.push(arr[i]) 
        }
    }

    return [...quickSort(leftSmallArr), pivot, ...quickSort(rightLargerArr)]
}

console.log(quickSort(arr))



