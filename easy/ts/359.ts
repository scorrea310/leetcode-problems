// https://leetcode.com/problems/logger-rate-limiter/description/
// Time: O(1)
// Space: O(M) map storage for unique messages
class Logger {
  map: any;
  constructor() {
    this.map = {};
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (!this.map[message]) {
      this.map[message] = timestamp + 10;
      return true;
    } else {
      if (timestamp >= this.map[message]) {
        this.map[message] = 10 + timestamp;
        return true;
      } else {
        return false;
      }
    }
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
