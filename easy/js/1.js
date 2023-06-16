var twoSum = function (nums, target) {
  let values = {};

  for (let i = 0; i < nums.length; i++) {
    if (values[nums[i]] !== undefined) {
      let objectValue = values[nums[i]];

      if (Array.isArray(objectValue)) {
        objectValue.push(i);

        console.log("hey");
      } else {
        let objectValue = values[nums[i]];

        values[nums[i]] = [objectValue];
        console.log(values[nums[i]]);

        values[nums[i]].push(i);
      }

      console.log(values);
    } else {
      values[nums[i]] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (values[compliment]) {
      if (Array.isArray(values[compliment])) {
        return values[compliment];
      }
      if (compliment !== nums[i]) {
        return [i, values[compliment]];
      }
    }
  }
};

console.log(twoSum([3, 3], 6));

//time complexity should be 0(n) since we have two for loops not nested. What about hash collisions?
//space complexity coming soon.
