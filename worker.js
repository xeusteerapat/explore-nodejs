const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // In the main thread and not in the worker thread

  // create worker thread
  const worker = new Worker(__filename);

  // listen for the message from the worker and print
  worker.on('message', msg => console.log(msg));
} else {
  // Executed in the worker thread not main
  parentPort.postMessage(`Hello, I'm in the WORKER!`);
}
