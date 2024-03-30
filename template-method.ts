export abstract class Node {
  abstract calculateSize();
  abstract calculateChildrenSize();
  abstract paintContainer();
  abstract paintNode();

  // скелет алгоритма(шаблонный метод)
  paint() {
    this.calculateSize();
    this.calculateChildrenSize();
    this.paintContainer();
    this.paintNode();
  }
}

class StorageNode extends Node {
  calculateSize() {
    //реализация уже тут
  }
  calculateChildrenSize() {
    //реализация уже тут
  }
  paintContainer() {
    //реализация уже тут
  }
  paintNode() {
    //реализация уже тут
  }
}

class FactoryNode extends Node {
  calculateSize() {
    throw new Error("Method not implemented.");
  }
  calculateChildrenSize() {
    throw new Error("Method not implemented.");
  }
  paintContainer() {
    throw new Error("Method not implemented.");
  }
  paintNode() {
    throw new Error("Method not implemented.");
  }
}

new StorageNode().paint();

function paint(node: Node) {
  node.paint();
}
