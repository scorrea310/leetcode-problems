// https://leetcode.com/problems/to-be-or-not-to-be/
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe(newVal) {
      if (val !== newVal) throw new Error("Not Equal");
      return true;
    },
    notToBe(newVal) {
      if (val !== newVal) return true;
      throw new Error("Equal");
    },
  };
}
