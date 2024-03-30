interface Player {
  play();
  pause();
}

class Shaka {
  play() {}
  pause() {}
}

class HlsPlayer {
  start() {}
  stop() {}
}

export class HlsPlayerAdapter implements Player {
  hlsPlayer: HlsPlayer;

  constructor(player: HlsPlayer) {
    this.hlsPlayer = player;
  }

  play() {
    this.hlsPlayer.start();
  }
  pause() {
    this.hlsPlayer.stop();
  }
}

const Skin = ({ player }: { player: Player }) => {
  player.play();
  player.pause();
  return {};
};

Skin({ player: new Shaka() });
Skin({ player: new HlsPlayerAdapter(new HlsPlayer()) });
