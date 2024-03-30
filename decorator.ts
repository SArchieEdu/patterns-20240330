export class Player {
  play() {}
  pause() {}
}

class PLayerWithMonitoring {
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  play() {
    this.log("play");
    this.player.play();
  }

  pause() {
    this.log("pause");
    this.player.pause();
  }

  log(message) {
    console.log(message);
  }
}
