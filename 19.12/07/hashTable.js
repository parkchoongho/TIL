class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }
  get(key) {
    let idx = this._hash(key);
    // console.log(idx);

    if (this.keyMap[idx]) {
      // this.keyMap[idx].forEach(ele => {
      //   if (ele[0] === key) return ele[1];
      // });
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        if (this.keyMap[idx][i] === key) return this.keyMap[idx][i][1];
      }
    }
    return undefined;
  }
}

let hashTable = new HashTable();

hashTable.set("hello world", "goodbye!!");
hashTable.set("dogs", "are cool");
hashTable.set("cats", "are adorable");
hashTable.set("i love", "pizza");
hashTable.set("hi", "bye");

// console.log(hashTable.keyMap);

console.log(hashTable.keyMap);
