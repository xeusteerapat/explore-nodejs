process.env.UV_THREADPOOL_SIZE = 1;
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

// Common thread pool questions
// 1. Can we use the threadpool for JS code or can only node.js function use it?
// - We can write custom JS that uses the thread pool.
// 2. What functions in node.js std library use the threadpool
// - All 'fs', 'crypto' stuff (depends on OS)
// How does this threadpool stuff fit into the event loop?
// - Tasks running in the threadpool are the 'pendingOperations' in our example
