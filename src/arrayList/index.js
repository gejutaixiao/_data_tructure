import {ArrayList} from './arraylist'

let list = new ArrayList();

//插入元素
list.insert(66);
list.insert(88);
list.insert(12);
list.insert(87);
list.insert(66);
list.insert(566);
list.insert(23);
list.insert(5);
// console.log(list);

//验证冒泡排序
// list.bubblesort();
console.log(list);

//验证选择排序
// list.selectionSort();
console.log(list);

//验证希尔排序
// list.shellSort();
console.log(list);

//验证快速排序
list.quickSort();
console.log(list);