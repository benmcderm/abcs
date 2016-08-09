// Linked Lists

function LinkedList() {
  let head = null;
}

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
