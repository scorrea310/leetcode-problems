// https://leetcode.com/problems/dot-product-of-two-sparse-vectors/description/
// Time: O(n)
// Space: O(1)
class SparseVector {
  vector: number[];
  constructor(nums: number[]) {
    this.vector = nums;
  }

  // Return the dotProduct of two sparse vectors
  dotProduct(vec: SparseVector): number {
    let total = 0;

    for (const i in this.vector) {
      let thisVecNum = this.vector[i];
      let secondVecNum = vec.vector[i];

      total += thisVecNum * secondVecNum;
    }
    return total;
  }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
