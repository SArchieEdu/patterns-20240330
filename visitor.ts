interface Visitor {
  visit(node: Node): void;
}

const PdfBuilder = {
  result: {},

  addStorageInfo(level) {
    this.result.level = level;
  },

  addCarInfo(sign) {
    this.result.sign = sign;
  },

  addFabricInfo(performanceLevel) {
    this.result.performanceLevel = performanceLevel;
  },
};

export class PdfVisitor implements Visitor {
  visit(node: FabricNode | StorageNode | CarNode) {
    if (node instanceof StorageNode) {
      PdfBuilder.addStorageInfo(node.level);
    }
    if (node instanceof CarNode) {
      PdfBuilder.addCarInfo(node.sign);
    }
    if (node instanceof FabricNode) {
      PdfBuilder.addFabricInfo(node.performanceLevel);
    }
  }
}

abstract class Node {
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class StorageNode extends Node {
  level;
  levelWithDetails;
}

class FabricNode extends Node {
  performanceLevel;
}

class CarNode extends Node {
  sign;
}

const tree = [new StorageNode(), new FabricNode(), new CarNode()];

tree.forEach((node) => node.accept(new PdfVisitor()));
PdfBuilder.result;

const OtherBuilder = {
  result: {},

  addStorageInfo(levelWithDetails) {
    this.result.levelWithDetails = levelWithDetails;
  },

  addCarInfo(sign) {
    this.result.sign = sign;
  },

  addFabricInfo(performanceLevel) {
    this.result.performanceLevel = performanceLevel;
  },
};

export class OtherVisitor implements Visitor {
  visit(node: FabricNode | StorageNode | CarNode) {
    if (node instanceof StorageNode) {
      OtherBuilder.addStorageInfo(node.levelWithDetails);
    }
    if (node instanceof CarNode) {
      OtherBuilder.addCarInfo(node.sign);
    }
    if (node instanceof FabricNode) {
      OtherBuilder.addFabricInfo(node.performanceLevel);
    }
  }
}
