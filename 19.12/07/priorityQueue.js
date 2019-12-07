class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  add(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx].priority > this.values[parentIdx].priority) {
        let temp = this.values[idx];
        this.values[idx] = this.values[parentIdx];
        this.values[parentIdx] = temp;
        idx = parentIdx;
        continue;
      }
      break;
    }
  }
  remove() {
    if (this.values.length === 0) return undefined;

    if (this.values.length === 1) return this.values.pop();

    let poppedValue = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();
    this.sinkDown();
    return poppedValue;
  }
  sinkDown() {
    let idx = 0;
    let leftChild = idx * 2 + 1;
    let rightChild = idx * 2 + 2;
    while (leftChild < this.values.length) {
      if (rightChild < this.values.length) {
        if (
          this.values[leftChild].priority > this.values[rightChild].priority &&
          this.values[leftChild].priority > this.values[idx].priority
        ) {
          let temp = this.values[idx];
          this.values[idx] = this.values[leftChild];
          this.values[leftChild] = temp;
          idx = leftChild;
          leftChild = idx * 2 + 1;
          rightChild = idx * 2 + 2;
          continue;
        }
        if (
          this.values[leftChild].priority < this.values[rightChild].priority &&
          this.values[rightChild].priority > this.values[idx].priority
        ) {
          let temp = this.values[idx];
          this.values[idx] = this.values[rightChild];
          this.values[rightChild] = temp;
          idx = rightChild;
          leftChild = idx * 2 + 1;
          rightChild = idx * 2 + 2;
          continue;
        }
      }
      if (this.values[leftChild].priority > this.values[idx].priority) {
        let temp = this.values[idx];
        this.values[idx] = this.values[leftChild];
        this.values[leftChild] = temp;
        idx = leftChild;
        leftChild = idx * 2 + 1;
        rightChild = idx * 2 + 2;
        continue;
      }
      break;
    }
  }
}

let priorityQueue = new PriorityQueue();

priorityQueue.add("Hash Algorithms", 10);
priorityQueue.add("Binary Heap", 9);
priorityQueue.add("Graph", 11);
priorityQueue.add("Node", 7);
priorityQueue.add("React", 3);
priorityQueue.add("HTTP", 8);
priorityQueue.add("Python", 2);

console.log(priorityQueue);

priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
priorityQueue.remove();
console.log(priorityQueue);
