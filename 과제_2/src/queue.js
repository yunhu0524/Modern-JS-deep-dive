class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tmp = this.head;

      while (tmp.next) {
        tmp = tmp.next;
      }

      tmp.next = node;
    }
  }

  pop() {
    const tmp = this.head;
    this.head = this.head.next;

    return tmp;
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
queue.push(6);
queue.push(7);

queue.pop();
queue.pop();

console.log(queue.head);
