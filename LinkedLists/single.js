class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        if(!this.head){ 
            this.head = node
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // if first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;
        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; // node before index
            count++;
            current = current.next; // node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let previous;
        let current = this.head;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        } else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.size--;
        }
    }

    // Reverse list
    reverse(){
        let head = this.head;
        let prev = null;
        let current = head;
        let next = null;

        while(current!=null){
            next = current.next; // save next
            current.next = prev; // reverse
            prev = current; // advance prev and current
            current = next;
        }

        this.head = prev;
        return prev; // new head at the end
    }

    reverseRecursive(head){  
        if(head == null || head.next == null){
            return head;
        }
        let reversedListHead = this.reverseRecursive(head.next); //down
        head.next.next = head; // add me
        head.next = null; // add me
        return reversedListHead // up
    }

    // Clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    // Remove First
    // Remove Last
    // Get First
    // Get Last
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
//ll.getAt(10);
//ll.removeAt(2);
ll.reverse();
ll.head = ll.reverseRecursive(ll.head);
//ll.clearList();

ll.printListData();

