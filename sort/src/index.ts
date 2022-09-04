import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedListCollection';

const characterCollection = new CharacterCollection('BAsermsdbsui');

console.log(
  `Character collection  data before sorting : ${characterCollection.data}`
);
console.log('Sorting...');
characterCollection.sort();
console.log(
  `Character collection  data after sorting : ${characterCollection.data}`
);

console.log('Creating Linked list...');

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(-212);
linkedList.add(66);
linkedList.add(0);
linkedList.add(-45);
linkedList.add(19);

console.log(`Linked List collection  data before sorting : `);
linkedList.print();
console.log('Sorting linked list.....');
console.log(`Linked List collection  data afer sorting : `);
linkedList.sort();
linkedList.print();
