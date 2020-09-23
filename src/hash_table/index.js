import {hashFunc, HashTable, isPrime} from './hash_table'

// console.log(hashFunc("name", 11));
// console.log(hashFunc("abc", 11));
// console.log(hashFunc("cba", 11));
// console.log(hashFunc("npc", 11));
// console.log(hashFunc("mba", 11));


const hashTable = new HashTable();

// hashTable.put("name", "why");
// hashTable.put("age", 18);
// hashTable.put("height", 1.88);
// hashTable.put("address", "china");

// hashTable.put("address", "CHINA")

// console.log(hashTable.storage);

// console.log(hashTable.get("abc"));
// console.log(hashTable.get("age"));
// console.log(hashTable.get("name"));
// console.log(hashTable.get("address"));

// console.log(hashTable.remove("age"));
// console.log(hashTable);

// console.log(hashTable.isEmpty());
// console.log(hashTable.size());

hashTable.put("aaa", 111);
hashTable.put("bbb", 111);
hashTable.put("ccc", 111);
hashTable.put("ddd", 111);
hashTable.put("fff", 111);
hashTable.put("eee", 111);

console.log(hashTable);

// hashTable.put("mmm", 222);
// console.log(hashTable);

// console.log(isPrime(10));
// console.log(isPrime(11));
// console.log(isPrime(111));
// console.log(isPrime(82));
