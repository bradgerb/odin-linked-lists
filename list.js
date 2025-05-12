class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.size++;
    }
}

class Node {
    constructor(value, nextNode) {
      this.value = value;
      this.next = nextNode;
    }
}

const testList = new LinkedList();
testList.prepend(10);
testList.prepend(20);
console.log(testList);
