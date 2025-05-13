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

    size() {
        return this.size
    }

    head() { 
        return this.head
    }

    tail() {
        return this.head

        // let currentNode = this.head;
        // console.log(currentNode);
        // return currentNode

        // while (currentNode.next !== null) {
        //     currentNode = currentNode.next;
        // }
        // return currentNode
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

// console.log(testList);
// console.log(testList.size);
console.log(testList.tail);
