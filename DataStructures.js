// // Linked Lists

// Singly Linked List

function LinkedList() {
  let head = null;
}


// SLL Push

LinkedList.prototype.push = val => {
  const node = {
    value: val,
    next: null,
  };

  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};


// SLL Remove

LinkedList.prototype.remove = val => {
  const current = this.head;
  if (current.val === val) {
    this.head = current.next;
  }
};


// Doubly Linked List

function DoublyLinkedList() {
  this.head = null;
}

// DLL Push

// DLL Remove
