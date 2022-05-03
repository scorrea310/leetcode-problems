// let array = [1];
// let msg = "hey";

// function gg(array, msg) {
//   array[1] = 2;
//   msg = "no";
// }

// gg(array, msg);
// console.log(array);
// console.log(msg);

// const x = {};
// x["foo"] = "bar";
// x.bar = {
//   first: 100,
//   second: 200,
// };

// console.log(x.bar["first"] + x["bar"].second);

let obj = {
  1: "one",
  2: "two",
};

let message = "no";

const func1 = (obj1, msg) => {
  obj1[1] = "hey";
  msg = "yes";
  message = 100;
  console.log(msg);
  console.log();
};

func1(obj, message);
console.log(obj, message);
