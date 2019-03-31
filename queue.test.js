const Queue = require('./queue');

test('queues and dequeues items', () => {
  const queue = new Queue();
  queue.enqueue(2);
  expect(queue.size).toBe(1);

  queue.enqueue(3);
  expect(queue.size).toBe(2);

  queue.enqueue(5);
  expect(queue.size).toBe(3);

  expect(queue.dequeue()).toBe(2);
  expect(queue.size).toBe(2);

  queue.enqueue(7);
  expect(queue.size).toBe(3);

  queue.enqueue(1);
  expect(queue.size).toBe(4);

  expect(queue.dequeue()).toBe(3);
  expect(queue.size).toBe(3);

  expect(queue.dequeue()).toBe(5);
  expect(queue.size).toBe(2);

  expect(queue.dequeue()).toBe(7);
  expect(queue.size).toBe(1);

  expect(queue.dequeue()).toBe(1);
  expect(queue.size).toBe(0);

  expect(queue.dequeue()).toBe(undefined);
  expect(queue.size).toBe(0);
});

test('returns undefined for dequeue on empty queue', () => {
  const queue = new Queue();
  expect(queue.dequeue()).toBe(undefined);
});

test('queues and dequeues single item', () => {
  const queue = new Queue();
  queue.enqueue(7);
  expect(queue.size).toBe(1);
  expect(queue.dequeue()).toBe(7);
});
