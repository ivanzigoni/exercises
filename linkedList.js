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




/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
  if (!list1 && !list2) return null;
  if (!list1 && list2) return list2;
  if (list1 && !list2) return list1;
  
  const valArray = [];
  
  let list1Node = list1;
  let list2Node = list2;
  
  
  while (list1Node !== null || list2Node !== null) {
      
      
      const val1 = list1Node ? list1Node.val || list1Node.val === 0 ? list1Node.val : null : null
      const next1 = list1Node ? list1Node.next : null
      
      const val2 = list2Node ? list2Node.val || list2Node.val === 0 ? list2Node.val : null : null
      
      const next2 = list2Node ? list2Node.next : null
      
      if (val1 || val1 === 0) {
          valArray.push(val1)
      }
       
      if (val2 || val2 === 0) {
          valArray.push(val2)
      }
      
      list1Node = next1
      list2Node = next2
  }

  const sortedVals = valArray
      .sort((a, b) => a - b)
      .map((val: number) => new ListNode(val));
      
  
  for (let i = 0; i < sortedVals.length; i += 1) {
      if (sortedVals[i + 1]) {
          sortedVals[i].next = sortedVals[i + 1]
      }
  }

  return sortedVals[0]
};