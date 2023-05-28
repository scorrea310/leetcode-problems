const binarySearch = (arr, target) => {

  // Set integers pointing to the high and low range of possible indices
  let low = 0
  let high = arr.length - 1
  // While high and low indices do not overlap...

  while(low < high) {
    let midpoint = Math.floor((low + high) / 2) 
    if(target === arr[midpoint]) {
        return midpoint
    } else if(target > arr[midpoint]){
        low = midpoint + 1
    } else if(target < arr[midpoint]) {
        high = midpoint - 1
    }
  }
  return -1
}

let arr = [2, 5, 6, 8, 11, 112, 114]
console.log(binarySearch(arr, 5))