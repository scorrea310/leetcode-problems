// https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
// Time complexity: O(n)
// Space Complexity: O(1)
function checkStraightLine(coordinates: number[][]): boolean {
    const [x0, y0] = coordinates[0], [x1, y1] = coordinates[1];
    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        if ((x- x0) * (y1 - y0) !== (y - y0) * (x1 - x0)) return false;
    }
    return true;
};
