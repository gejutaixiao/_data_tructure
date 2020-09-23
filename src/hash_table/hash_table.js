const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR = 0.25;


export function hashFunc(str, max) {
  //1.定义hashCode
  let hashCode = 0;

  //2.霍纳算法
  for(let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }
  hashCode = hashCode % max;

  return hashCode
}

//算法：性能较低
// export function isPrime(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

export function isPrime(num) {
  //1.获取num的平方根
  let tmp = Math.ceil(Math.sqrt(num));

  //2.循环判断
  for(let i = 2; i <= tmp; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

export class HashTable {
  constructor() {
    this.storage = [];  //数组存储元素
    this.count = 0;  //当前存放了多少个元素
    this.limit = 7;  //总个数
  }

  //哈希函数
  hashFunc(str, max) {
    //1.定义hashCode
    let hashCode = 0;
  
    //2.霍纳算法
    for(let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
  
    return hashCode
  }

  //放入/修改元素: HashMap -> {key, value}
  put(key, value) {
    //1.根据key映射到index
    const index = this.hashFunc(key, this.limit);

    //2.取出数组
    let bucket = this.storage[index];
    if(bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    //3.判断是插入还是修改操作
    let overide = false
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if(tuple[0] === key) {
        tuple[1] = value;
        overide = true;
      }
    }

    //4.如果没有覆盖，那么就是新增
    if(!overide) {
      bucket.push([key, value]);
      this.count++;

      if(this.count > this.limit * MAX_LOAD_FACTOR) {
        let newLimit = this.limit * 2;
        newLimit = this.getPrime(newLimit);
        this.resize(newLimit);
      }
    }
  }

  //根据key获取value
  get(key) {
    //1.根据key获取index
    const index = this.hashFunc(key, this.limit);

    //2.获取bucket
    const bucket = this.storage[index];
    if(bucket === undefined) {
      return null;
    } 

    //3.遍历bucket，一个一个查找
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if(tuple[0] === key) {
        return tuple[1]
      }
    }
    return null;
  }

  //根据key删除元素
  remove(key) {
    //1.根据key获取index
    const index = this.hashFunc(key, this.limit);

    //2.获取bucket
    const bucket = this.storage[index];
    if(bucket === undefined) {
      return null;
    }

    //3.遍历bucket，找到元素，并且将删除的元素返回
    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if(tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;
        if(this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit);
          this.resize(newLimit);
        }
        return tuple[1];
      }
    }
  }

  isEmpty() {
    return this.count == 0;
  }

  size() {
    return this.count;
  }

  resize(newLimit) {
    //1.保存旧的数组中的内容
    let oldStorage = this.storage;

    //2.重置属性
    this.limit = newLimit;
    this.storage = [];
    this.count = 0;

    //3.取出oldStorage所有的元素，重新放入storage里面
    oldStorage.forEach((bucket) => {
      if(bucket === null) {
        reutrn ;
      }

      for(let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    })
  }
  isPrime(num) {
    //1.获取num的平方根
    let tmp = Math.ceil(Math.sqrt(num));
  
    //2.循环判断
    for(let i = 2; i <= tmp; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return true;
  }

  getPrime(num) {
    while(!isPrime(num)) {
      num++;
    }
    return num;
  }
}

