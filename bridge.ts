interface Player {
  play();
  pause();
}

export class ShakaPlayer {
  play() {}
  pause() {}
}

class HlsPlayer {
  start() {}
  stop() {}
}

class Skin {
  instance: Player;
  constructor(instance: Player) {
    this.instance = instance;
  }

  togglePlay() {
    this.instance.play();
  }
}
