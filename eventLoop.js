//----- Totally FAKE code -----//

// node myFile.js

// Tasks
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runSomething();

// helper function determine that event loop should continue run or not
// this fucntion expect to return truthy or falsy
function shouldContinue() {
  // 1st check: Any pending 'setTimeout', 'setInterval', 'setImmediate'?
  // 2nd check: Any pending OS tasks? (Like server listening to port)
  // 3rd check: Any pending long running operations? (fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// enter event loop
while (shouldContinue()) {
  // The entire body executes in one 'tick'
  // 1) Node looks at pendingTimers (timeout, interval) and sees if any functions are ready to be called
  // 2) Node looks at pendingOSTasks and pendingOperations and call relevant callbacks
  // 3) Pause execution (temporarily) and Continue when...
  // - a new pendingOSTasks is done
  // - a new pendingOperation is done
  // - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) Handle any 'close' event
}

// exit back to terminal
