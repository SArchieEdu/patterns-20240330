interface Cloneable<Entity> {
  clone(): Entity;
}

class Player implements Cloneable<Player> {
  play() {}
  pause() {}

  clone(): Player {
    throw new Error("Method not implemented.");
  }
}

export class Storage implements Cloneable<Storage> {
  limit: number = 100;
  level: number = 0;

  clone(): Storage {
    const storage = new Storage();
    storage.limit = this.limit;

    return storage;
  }
}

const storage1 = new Storage();
storage1.limit = 60;
storage1.level = 50;

const storage2 = storage1.clone();

function duplicate<Entity>(entity: Cloneable<Entity>): Entity {
  return entity.clone();
}
