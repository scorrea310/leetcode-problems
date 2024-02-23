// https://leetcode.com/problems/design-hashmap/description/
class MyHashMap {
  map: Record<string, number>;
  constructor() {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    return key in this.map ? this.map[key] : -1;
  }

  remove(key: number): void {
    delete this.map[key];
  }
}
