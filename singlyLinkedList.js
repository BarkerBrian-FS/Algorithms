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
    //pop pseudo code
    //If there are no nodes in list return undefined
    //loop through the list until you reach the tail 
    //set the next property of the second to last node to be null
    //set the tail to be the second to last node 
    //decrement the length by 1
    //return the value of the node removed 
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
        }
    }
    

let list = new SinglyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
console.log(list.pop);




