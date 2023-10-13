export function transposeMatrix(matrix: number[][]) {
  let answerArr: number[][] = [];
  let i = 0;
  let j = 0;
  while (i < matrix[0].length) {
    let elementArr: number[] = [];
    while (j < matrix.length) {
      elementArr.push(matrix[j][i]);
      j++;
    }
    answerArr.push(elementArr);
    i++;
    j = 0;
  }
  return answerArr;
}
