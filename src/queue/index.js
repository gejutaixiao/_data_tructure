import {Queue, passGame, PriorityQueue} from './queue';

// const queue = new Queue();

// queue.enqueue("abc");
// queue.enqueue("cba");
// queue.enqueue("npc");
// queue.enqueue("mba");

// console.log(queue.items);
// console.log(queue.dequeue());
// console.log(queue.items);
// console.log(queue.front());
// console.log(passGame(["why", "tome", "lilei", "lucy"], 3))

const queue = new PriorityQueue();

queue.enqueue("aaa", 100);
queue.enqueue("bbb", 150);
queue.enqueue("ccc", 120);
queue.enqueue("ddd", 90);
queue.items.forEach(item => {
  console.log(item.element, item.priority);
})

console.log(queue.dequeue());

// queue.enqueue("aaa", 100);
