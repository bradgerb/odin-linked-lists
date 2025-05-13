class LinkedList {
    constructor() {
    this.head = null;
    this.length = 0;
    }

    prepend(value) {
        console.log('ran prepend');
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    append(value) {
        console.log('ran append');
        let currentNode = this.head;

        if (this.head === null) {
            this.prepend(value);
        } else {

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value, null);
        
        this.length++;
        }
    }

    size() {
        return this.length
    }

    getHead() { 
        return this.head
    }

    getTail() {
        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode
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
testList.append(20);
testList.append(30);
testList.prepend(0);

console.log(testList);
console.log(testList.size());
console.log(testList.getHead());
console.log(testList.getTail());
