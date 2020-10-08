// process.env.UV_THREADPOOL_SIZE = 1;
const { pbkdf2 } = require('crypto');

const start = Date.now();

pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
  console.log(`1: Done in ${Date.now() - start}ms`)
);

pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
  console.log(`2: Done in ${Date.now() - start}ms`)
);

pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
  console.log(`3: Done in ${Date.now() - start}ms`)
);

pbkdf2('pwd', 'salt', 100000, 512, 'sha512', () =>
  console.log(`4: Done in ${Date.now() - start}ms`)
);

