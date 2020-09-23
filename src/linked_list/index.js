import {LinkedList} from './linked_list'
import {DoublyLinkedList} from './doubly_linked_list'

const linkList = new DoublyLinkedList();

linkList.append("aaa");
linkList.append("bbb");
linkList.append("ccc");
linkList.append("ddd");
console.log(linkList);

linkList.insert(0, "abc");
linkList.insert(1, "npc");
linkList.insert(3, "cba");

console.log(linkList);
console.log(linkList.get(1));
console.log(linkList.get(0));
console.log(linkList.get(3));

console.log(linkList.indexOf("aaa"));
console.log(linkList.indexOf("npc"));
console.log(linkList.indexOf("cba"));

console.log(linkList.removeAt(3));
console.log(linkList.removeAt(0));
console.log(linkList);

console.log(linkList.updata(0, "nnn"));
console.log(linkList.updata(1, "mmm"));
console.log(linkList);

console.log(linkList.remove("mmm"));
console.log(linkList.remove("nnn"));
console.log(linkList);

// console.log(linkList.removeAt(3));


// const linkList = new LinkedList();

// linkList.append("aaa");
// linkList.append("bbb");
// linkList.append("ccc");
// linkList.append("ddd");
// // linkList.append("aaa");
// console.log(linkList);

// linkList.insert(1, "abc");
// linkList.insert(3, "cba");
// console.log(linkList);

// console.log(linkList.get(1));
// console.log(linkList.get(3));

// console.log(linkList.indexOf("abc"));
// console.log(linkList.indexOf("cba"));
// console.log(linkList.indexOf("npc"));

// console.log(linkList.removeAt(3));
// console.log(linkList.removeAt(1));

// console.log(linkList);

// console.log(linkList.updata(1, "npc"))
// console.log(linkList);

// linkList.remove("aaa");
// console.log(linkList);

// console.log(linkList.isEmpty());
// console.log(linkList.size())
