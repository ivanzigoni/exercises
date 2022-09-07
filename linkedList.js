class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
  }

  clear() {
    this.head = null;
  }
  
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
  }

  getFirst() {
    return this.head;
  }

  add(element) {
    const node = new ListNode(element);
 
    let current;
 
    if (this.head == null){
      this.head = node;
    } else {
        current = this.head;
 
        while (current.next) {
            current = current.next;
        }
 
        current.next = node;
    }
    this.size++;
}
}

