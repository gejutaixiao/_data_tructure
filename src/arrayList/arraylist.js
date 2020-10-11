export function ArrayList() {
  //属性
  this.array = [];
  //方法
  //将数据可以插入到数组中的方法
  ArrayList.prototype.insert = function(item) {
    this.array.push(item);
  }

  //toString
  ArrayList.prototype.toString = function() {
    return this.array.join("-");
  }


  //交换两个位置的数据
  ArrayList.prototype.swap = function (m, n) {
    let tmp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = tmp;
  }

  //实现排序算法

  //冒泡排序
  ArrayList.prototype.bubblesort = function() {
    //1.获取数组的长度
    let length = this.array.length;

    //第一次： j = length -1 ，比较到倒数第一个位置
    //第二次： j = length -2， 比较到倒数第二个位置
    for(let j = length - 1; j >= 0; j--) {
    // 第一次进来：i = 0，比较0和 1 位置的两个数据，如果0位置大于1位置的数据
    // 最后一次进来： i = length - 1，比较length - 2 和 length -1 的两个数据
    for(let i = 0; i < j; i++) {
      if(this.array[i] > this.array[i + 1]) {
        //交换两个数据
        this.swap(i, i + 1);
      }
    }
    }
  }

  //选择排序
  ArrayList.prototype.selectionSort = function () {
    //1.获取数组长度
    let length = this.array.length;

    //2.外层循环： 从0位置开始取数据
    for(let j = 0; j < length - 1; j++) {
      //内层循环：从j+1位置与后面的数据进行比较
      let min = j;
      for(let i = min + 1; i < length; i++) {
        if(this.array[min] > this.array[i]) {
          min = i;
        }
      }
      this.swap(min, j);
    }
  }

  //插入排序
  ArrayList.prototype.insertionSort = function () {
    //1.获取数组长度
    let length = this.array.length;

    //2.外层循环：从第一个位置开始获取数据，向前面局部有序进行插入
    for(let i = 1; i < length; i++) {
      //3.内层循环：获取i位置的元素，和前面的数据依次进行比较
      let tmp = this.array[i];
      let j = i;
      while(this.array[j - 1] > tmp && j > 0) {
        this.array[j] = this.array[j - 1];
        j--;
      }

      //4.将j位置的数据，放置tmp就可以了
      this.array[j] = tmp;
    }
  }
  //希尔排序
  ArrayList.prototype.shellSort = function () {
    //1.获取数组的长度
    let length = this.array.length;

    //2.初始化的增量
    let gap = Math.floor(length / 2);

    //3.while循环（gap不断减小）
    while(gap >= 1) {
      //4.以gap作为间隔进行分组，对分组进行插入排序
      for(let i = gap; i < length; i++) {
        let temp = this.array[i];
        let j = i;
        while(this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        //5.将j位置的元素赋值temp
        this.array[j] = temp;
      }

      //6.增量变化
      gap = Math.floor(gap / 2);
    }
  }

  //快速排序
  //1.选择枢纽
  ArrayList.prototype.median = function (left, right) {
    //1.取出中间位置
    let center = Math.floor((left + right) / 2);

    //2.判断大小，并且进行交换
    if(this.array[left] > this.array[right]) {
      this.swap(left, right);
    }
    if(this.array[center] > this.array[right]) {
      this.swap(left, right);
    }
    if(this.array[left] > this.array[center]) {
      this.swap(left, center);
    }

    //3.将center换到right - 1 的位置
    this.swap(center, right - 1);

    return this.array[right - 1];
  }

  //2.快速排序的实现
  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.array.length - 1);
  }

  ArrayList.prototype.quick = function (left, right) {
    //1.结束条件
    if(left >= right) {
      return;
    }

    //2.获取枢纽
    let privot = this.median(left, right);

    //3.定义变量用于记录当前找到的位置
    let i = left, j = right - 1;

    //4.开始进行交换
    while(true) {
      while(this.array[++i] < privot) {}
      while(this.array[--j] > privot) {}
      if(i < j) {
        this.swap(i, j);
      } else {
        break;
      }
    }

    //6.将枢纽放置在正确的位置，i的位置
    this.swap(i, right - 1);

    //7.分而治之
    this.quick(left, i - 1);
    this.quick(i + 1, right);

  }

}

//我们把一个直接调用自己或通过一系列的调用语句间接地调用自己的函数，称做递归函数。
//迭代和递归的区别是：迭代使用的是循环结构，递归使用的是选择结构