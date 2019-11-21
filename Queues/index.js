// https://www.youtube.com/watch?v=1AJ4ldcH2t4

/* // stack
const stack = [];

//push
stack.push('dog');
stack.push('cat');
stack.push('bear');

// pop
stack.pop();

// peek
stack[stack.length-1]; */

/* const queue = [];
queue.push('seahorse');
queue.push('dolphin');
queue.push('whale shark');
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue); */


class Stack{
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element){
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const stack = new Stack();
stack.push('dog');
stack.push('cat');
stack.push('bear');

console.log('stack: '+ stack.size);
console.log('stack pop: '+ stack.pop());
console.log('stack: '+ stack.size);
console.log('stack peek: '+ stack.peek());

const queue = new Queue();
queue.enqueue('seahorse');
queue.enqueue('dolphin');
queue.enqueue('whale shark');
console.log(queue);

console.log(queue.dequeue());
console.log(queue);

console.log(queue.dequeue());
console.log(queue);
