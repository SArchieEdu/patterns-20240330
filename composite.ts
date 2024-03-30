export abstract class Node {
  calculateSize() {
    //
  }

  abstract paint(): void;
}

abstract class ContainerNode extends Node {
  abstract add(node: Node);
}

class StorageNode extends ContainerNode {
  children: Node[] = [];

  paint(): void {
    this.children.forEach((child) => child.paint());
    this.calculateSize();
  }

  add(node: Node) {
    this.children.push(node);
  }
}

class CarNode extends Node {
  paint(): void {}
}

const rootStorage = new StorageNode();
const storage1 = new StorageNode();
const storage2 = new StorageNode();
const car = new CarNode();
const car1 = new CarNode();
const car2 = new CarNode();
const car3 = new CarNode();
const car4 = new CarNode();
const car5 = new CarNode();
const car6 = new CarNode();
const car7 = new CarNode();

rootStorage.add(car);
rootStorage.add(car1);
rootStorage.add(car2);
rootStorage.add(car3);
rootStorage.add(car4);
storage1.add(car5);
storage2.add(car6);
storage2.add(car7);
rootStorage.add(storage1);
storage2.add(storage2);

function paintGraph(node: Node) {
  node.paint();
}

paintGraph(rootStorage);
