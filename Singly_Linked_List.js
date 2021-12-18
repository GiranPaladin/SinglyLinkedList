
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
    pop() {
    if(!this.head) return undefined
        var current  = this.head
        var newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(this.length === 0)return undefined
        let currHead = this.head
        this.head = currHead.next
        this.length--;
          if(this.length === 0){
            this.tail = null;
        }
        return currHead;
    }
    unshift(val) {
        let newHead  = new Node(val)
        if(this.head === null) {
            this.head = newHead
            this.tail = newHead
        }else{
             newHead.next = this.head
             this.head = newHead
       }
        this.length++;
        return this;
    }
    traverse(){
        var current = this.head;
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }
    get(index){
       if(index < 0 || index > this.length) return null
        let counter = 0;
       let current = this.head
        while(counter !== index) {
            current = current.next;
            counter++
        }
        return current
    }
    set(index, value){
       var foundNode = this.get(index)
       if(foundNode){
           foundNode.val = value;
           return true
       }
       return false
    }
    insert(index, value){
        
        if(index < 0 || index > this.length) return false
        if(index === this.length) !!this.push(value)
        if (index === 0) !!this.unshift(value)
        else {
            let newNode = new Node(value)
            let foundNode = this.get(index - 1)
            let prevNext = foundNode.next
            foundNode.next = newNode
            newNode.next = prevNext
            this.length++;
            return true
        }   
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined
        if(index === this.length-1) return this.pop()
        if(index === 0)return this.shift()
        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--;

        return removedNode;
    }
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
   reverse(){
        let node = this.head;
       this.head = this.tail;
       this.tail = node;
       let next;
       let prev = null;
    for(var i = 0; i < this.length; i++){
    next = node.next
    node.next = prev;
    prev = node;
    node = next;
    }
    return this
   }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
