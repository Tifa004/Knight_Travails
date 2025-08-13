class Node{
    constructor(value){
        this.val=value;
        this.next=null
    }
    
}

class linkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size = 0;
    }

    enqueue(val){
         const newNode = new Node(val);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;  
            this.tail = newNode;       
        }
        this.size++;
    }


    dequeue() {
        if (this.size === 0) return null;      

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;  
        }

        return removedNode.val;

    }



}

module.exports = {linkedlist};
