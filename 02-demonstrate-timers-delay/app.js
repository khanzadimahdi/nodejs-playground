
// in this example the setTimeout callback will be called after more than 200ms

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

(function someWorks() { // this takes 200ms
	console.log('work started');

	while (Date.now() - timeoutScheduled < 200) {
		// do nothing
	}

	console.log('work finished')
})();
