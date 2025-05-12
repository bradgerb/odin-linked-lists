class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
    }

    append(value) {
        let currentNode = this.head;

        if (this.head === null) {
            this.prepend(value);
        } else {

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value, null);
        
        this.size++;
        }
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
testList.append(10);
testList.append(20);

console.log(testList);
