class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] > this.values[parentIdx]) {
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
          this.values[leftChild] > this.values[rightChild] &&
          this.values[leftChild] > this.values[idx]
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
          this.values[leftChild] < this.values[rightChild] &&
          this.values[rightChild] > this.values[idx]
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
      if (this.values[leftChild] > this.values[idx]) {
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

let maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.add(4);
console.log(maxBinaryHeap);
maxBinaryHeap.add(9);
console.log(maxBinaryHeap);
maxBinaryHeap.add(3);
console.log(maxBinaryHeap);
maxBinaryHeap.add(2);
console.log(maxBinaryHeap);
maxBinaryHeap.add(7);
console.log(maxBinaryHeap);
maxBinaryHeap.add(20);
console.log(maxBinaryHeap);
maxBinaryHeap.add(10);
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
maxBinaryHeap.remove();
console.log(maxBinaryHeap);
