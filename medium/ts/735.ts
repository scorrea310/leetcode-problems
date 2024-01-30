function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = [];
  let i = 0;

  while (i < asteroids.length) {
    let lastStackEle = stack[stack.length - 1];
    let currAsteriodsEle = asteroids[i];

    if (
      lastStackEle === undefined ||
      (lastStackEle > 0 && currAsteriodsEle > 0) ||
      (lastStackEle < 0 && currAsteriodsEle > 0) ||
      (lastStackEle < 0 && currAsteriodsEle < 0)
    ) {
      stack.push(currAsteriodsEle);
      i++;
    } else {
      let absLastStackEle = Math.abs(lastStackEle);
      let abscurrAsteriodsEle = Math.abs(currAsteriodsEle);

      if (
        lastStackEle > 0 &&
        currAsteriodsEle < 0 &&
        absLastStackEle !== abscurrAsteriodsEle
      ) {
        if (abscurrAsteriodsEle > absLastStackEle) {
          while (stack.length > 0) {
            let lastEleAbs = Math.abs(stack[stack.length - 1]);
            if (
              stack[stack.length - 1] > 0 &&
              lastEleAbs < abscurrAsteriodsEle
            ) {
              stack.pop();
              continue;
            } else if (
              stack[stack.length - 1] > 0 &&
              lastEleAbs === abscurrAsteriodsEle
            ) {
              stack.pop();
              i++;
              break;
            } else {
              if (stack[stack.length - 1] < 0) {
                stack.push(currAsteriodsEle);
              }
              i++;
              break;
            }
          }
          if (stack.length === 0 && i < asteroids.length) {
            stack.push(asteroids[i]);
            i++;
          }
        } else {
          i++;
        }
      } else if (absLastStackEle === abscurrAsteriodsEle) {
        stack.pop();
        i++;
      }
    }
  }
  return stack;
}
