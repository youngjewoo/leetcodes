//approach: double-linked list, map. Since Double-linked List has O(1) insert and delete and Map has O(1) search.
//so we need to think how we can acheive the Cache logic,
//let say you open 'setting' then 'contact' then 'tiktok' your phone
//we know each are running in the background of your phone, so those apps will be stacked on top of each other, 
//'setting' being the bottom one, then 'contact', then 'tiktok', and let's say your phone can only run 3 apps at a time in the background
//now if you try to open 'facebook', one of those above has to be off, so this is when the 'Cache logic' comes in, the first opened is the one to go, 
//so then, the 3 apps that will be running in the background will be, 'contact', 'tiktok' then 'facebook'. 
//if you then open, 'note' app, the order of the app running in the background will be 'tiktok', 'facebook' then 'note'
//BUT then you open 'facebook' again, then 'facebook' will be on top of the stack of all those app, order being 'tiktok', 'note', 'facebook'
//and if you open 'youtube' app then the order will be 'note', 'facebook', 'youtube'
//
//in a simple words: just remove the one you interact less with or the one last in the stack of 'nodes'
//
//so to know which one is last, which one is in the front(or ineracting more) we make use of 'tail' and 'head'
//everytime we put the (key,value), we will make sure to update the head of the linkedlist
//
//so basically, we create a node, then store the node in the map, with the key(key number) and value(being the node)
//if we get put(...), we check the node in the linked list,
//if the node is not in the linkedlist, then we just create a node and point the head to it, 
//if the node is in the linkedlist, then we delete the node from the linked list and then create the node with the same, key value and have head point to it
//if the size becomes full, then we remove the last node, which the tail is pointing towards
//if we get get(...), it has been the recent interaction, so,
//we find the node in the linked list, if there none return -1
//else, just delete the node in the linked list and create a new node with same (key value) and have the head point to it

class Node{
    constructor(key, val, next, prev){
        this.key = (key === undefined ? 0 : key);
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.prev = (prev === undefined ? null : prev);
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    addNode(node){
      if(this.size == 0){
        this.head = node;
        this.tail = node;
      }else{
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    
    removeNode(node){
        if(node == this.head){                                   //if node is the same as the head
          this.head.prev=null;
          this.head = this.head.next;
          node.next = null;
        }else if(node == this.tail){                             //if node is the same as the tail
          this.tail = this.tail.prev;
          node.prev = null;
          this.tail.next = null;
        }else if(node != this.head && node != this.tail){       //if node is in the middle of the head and tail
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
          }
        this.size--;
    }

    getSize(){
      return this.size;
    }
    
    removeTailNode(){
        let val = this.tail.key;    //storing the key number as we need this later to delete the (key,value) related to this key in the map, once we delete the node
        if(this.size == 1){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.tail.prev;
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next=null;
        }
        
        this.size--;
        return val;
    }
}


class LRUCache{
    constructor(capacity){
        this.capacity = (capacity === undefined ? 0 : capacity);
        this.map = new Map();
        this.node = new DoubleLinkedList();
    }
    
    get(key){
        if(!this.map.has(key)) return -1;
        
        let val = this.map.get(key).val;
        this.put(key, val);
        return val;
    }
    
    put(key, value){
        //doesnt matter if the map has the key or not
        //we will move the head to this new node
        let node = new Node(key,value);
        
        if(this.map.has(key)){
          this.node.removeNode(this.map.get(key));
          this.map.delete(key);
        }else{
          if(this.node.getSize() == this.capacity)
            this.map.delete(this.node.removeTailNode());   //first deletes the tail node, then deletes the map (key,value) related to that tail node
        }
        
        this.node.addNode(node);     //adding the node 
        this.map.set(key,node);        //setting the key and value(value being the new created node)
    }
}
