// A Promise in JavaScript is an object
// representing the eventual completion
// (or failure) of an asynchronous operation
// and its resulting value

const prom = new Promise((resolve, reject) => {
  if (false) {
    resolve(3);
  } else {
    reject("There was an error!!!!!");
  }
});

const waitAsyncAndAwait = async () => {
  try {
    const result = await prom;
    console.log(result);
  } catch (e) {
    console.log(e, "Aysnc and Await");
  }
};

waitAsyncAndAwait();

const waitThenAndCatch = () => {
  prom
    .then((data) => console.log(data))
    .catch((err) => console.log(err, ".Then and .Catch"));
};

waitThenAndCatch();
