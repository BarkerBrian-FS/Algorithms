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
          //Shift pseudo code
    //If there are no nodes in the list return undefined
    //Store the current head property in a variable
    //Set the head property to be the current head's next property
    //Decrement the length by 1
    //Return the value of the node removed
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail=null;
        }
        return currentHead;
    }
    //unshift pseudo code
    //Function should accept a value
    //Create new node with value passed to function
    //If there is no head property on the list set head and tail to newly created node
    //Otherwise set set newly created node's next property to be the current head property on the list
    //Set the head property on the list to be the newly created node
    //Increment the length by 1
    //Return the linked list
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this; 
        
    }
    //get pseudo code
    //Function should accept an index
    //If the index is less than zero or greater than or equal to the length of the list return null
    //Loop through the list until you reach the index and return the node at that specific index
    get(index){
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
        return current
        };
        //set pseudo code
         //Function should accept an index and a value
         // Use get function to find the specific node
         //If node not found return false
         //If node is found set the value of that node to be value passed to the funciton and return true
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    //insert pseudo code
    //Function should accept an index and a value
    //If the index is less than zero or greater than the length return false
    //If the index is the same as the length, push a new node to the end of the list
    //If the index is 0, unshift a new node to the start of the list
    //Otherwise, using the get method, access the node at the index -1
    //Set the next property on that node to be the new node 
    //Set the next property on the new node to be the previous next
    //Increment the length by 1
    //Return true
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val)
        if(index === 0) return this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;

    }
    //remove pseudo code
    //Function should accept an index
    //If the index is less than zero or greater than or equal to the length return undefined
    //If the index is the same as the length -1, pop
    //If the index is 0, shift
    //Otherwise, using the get method, access the node at index -1
    //Set the next property on that node to be the next of the next node
    //Decrement the length by 1 
    //Return the value of the node removed
    remove(index){
        if(index < 0 || index >=  this.length)return undefined;
        if(index === this.length -1)return this.pop();
        if(index === 0)return this.shift();
        let prevNode = this.get(index -1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length --;
        return removed;
    }
    //reverse pseudo code
    //Swap the head and tail
    //Create a variable called next
    //Create a variable called prev
    //Create a variable called node and set it to the head property
    //Loop through the list
        //Set next to be the next property on whatever node is
        //Set the next property on the node to be the prev variable
        //Set prev to be the value of the node variable
        //Set the node variable to be the value of the next variable
    //Set the head to be the prev variable
}
    

let list = new SinglyLinkedList();



