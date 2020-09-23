export class Stack {
  constructor() {
    this.items = []
  }

  // push(element): 添加一个新元素到栈顶位置
  push(element) {
    this.items.push(element);
  }
  // pop()：移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop();
  }
  // peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
  peek() {
    if(this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  // isEmpty()：如果栈里没有任何元素就返回true，否则就返回false
  isEmpty() {
    return this.items.length === 0;
  }
  // size()：返回栈里面的元素的个数
  size() {
    return this.items.length;
  }

}

export function dec2bin(num) {
  //1.创建Stack
  const stack = new Stack();

  //2.循环取余数
  while(num > 0) {
    let remainder = num % 2;
    num = Math.floor(num / 2);
    stack.push(remainder);
  }

  //3.拼接字符串
  let binString = '';
  while(!stack.isEmpty()) {
    binString += stack.pop();
  }
  return binString;

  // return '1100'
}