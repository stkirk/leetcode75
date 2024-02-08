// Implement the functionality of a first in first out (FIFO) queue using only two stacks
/**
 * MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MyQueue {
  public stack1: number[] = [];
  public stack2: number[] = [];

  constructor() {}

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number | undefined {
    // need first element in stack 1 to be removed and returned
    // loop over stack1 and pop each item from the back onto stack 2
    let numberofItems = this.stack1.length;
    for (let i = 0; i < numberofItems; i++) {
      const curItem = this.stack1.pop();
      curItem && this.stack2.push(curItem);
    }
    // will reverse order and last item will be the item at front of queue
    // pop that item off stack2 and save it
    const frontOfQueue = this.stack2.pop();
    // loop over stack2 and pop each item back onto stack1
    numberofItems = this.stack2.length;
    for (let i = 0; i < numberofItems; i++) {
      const curItem = this.stack2.pop();
      curItem && this.stack1.push(curItem);
    }
    // return saved item from front of queue
    return frontOfQueue;
  }

  peek(): number {
    return this.stack1[0];
  }

  empty(): boolean {
    return !this.stack1.length;
  }
}

const q = new MyQueue();
q.push(1);
console.log(q.stack1);
q.push(2);
console.log(q.stack1);
console.log(q.peek());
console.log("pop", q.pop());
console.log(q.stack1);
