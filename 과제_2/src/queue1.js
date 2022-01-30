class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(data) {
    this.store.push(data);
  }

  dequeue() {
    return this.store.shift();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();

queue.enqueue(4);
queue.dequeue();

console.log(queue); // [3, 4]
