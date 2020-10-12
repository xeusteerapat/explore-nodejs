// const start = new Date();
// setTimeout(() => {
//   const lag = new Date() - start;
//   console.log(`Lag: \t${lag} ms`);
// });

function measureLag(iteration) {
  const start = new Date();
  setTimeout(() => {
    const lag = new Date() - start;
    console.log(`Loop ${iteration} took\t${lag} ms`);
    measureLag(iteration + 1); // Recurse
  });
}
measureLag(1);

const bcrypt = require('bcryptjs');

function hash() {
  const start = Date.now();
  const hashRounds = 10;

  bcrypt.hash('hash me!', hashRounds, () => {
    console.log(`--------- Hashing took ${new Date() - start} ms`);
    setTimeout(hash);
  });
}

hash();
