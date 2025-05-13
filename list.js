class LinkedList {
    constructor() {
    this.head = null;
    this.length = 0;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
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

    at(index) {
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode
    }

    pop() {
        let currentNode = this.head;

        if (currentNode.next){

            if(currentNode.next.next){
                while (currentNode.next.next !== null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = null;
                this.length --;
            } else {
                currentNode.next = null;
                this.length --;
            }

        } else if (this.head){
            this.head = null;
            this.length --;
        }
    }

    contains(value) {
        let isTrue = false
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value){
                isTrue = true;
            }
            currentNode = currentNode.next;
        }

        return isTrue
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
// console.log(testList.size());
// console.log(testList.getHead());
// console.log(testList.getTail());
// console.log(testList.at(2));
// testList.pop();
// testList.pop();
// console.log(testList);
console.log(testList.contains(10));
console.log(testList.contains(4));
