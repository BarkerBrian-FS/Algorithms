//

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }

    //push pseudo code
    //Function should accept a value
    //Create new node with value passed to function 
    //If there is no head property on the list, set the head and tail to the new value
    //Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    //Increment the length by one
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
}

let list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
