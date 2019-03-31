function Queue() {
  this.start = null;
  this.end = null;
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  const newNode = new Node(value);
  this.size++;

  if (this.start === null) {
    this.start = newNode;
    this.end = this.start;
    return;
  }

  this.end.next = newNode;
  this.end = newNode;
};

Queue.prototype.dequeue = function() {
  if (this.size === 0) {
    return undefined;
  }

  const node = this.start;
  this.start = this.start.next;
  if (this.start === null) {
    this.end = null;
  }
  this.size--;
  return node.value;
};

function Node(value) {
  this.value = value;
  this.next = null;
}

module.exports = Queue;
