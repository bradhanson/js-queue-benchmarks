# JavaScript Queue Benchmarks

There is no native queue implementation in JavaScript that has O(1) dequeue.

Most JavaScript developers use an `Array` and `Array.prototype.shift()`, but asymptotically this operation takes O(n).

I was curious how much slower `Array.prototype.shift()` was compared to a custom implemented Queue data structure.

https://jsperf.com/array-shift-vs-linked-list-queue

TODO:

- Write more jsperf.com tests
- Benchmark in Node.js
- Try to write faster Queue.js using Array
