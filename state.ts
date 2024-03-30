interface Stage {
  play(): Stage;
  pause(): Stage;
  skip(): Stage;
}

const Pause: Stage = {
  play() {
    // начинаем играть
    return Play;
  },
  pause() {
    return Pause;
  },
  skip() {
    // перематываем
    return Skip;
  },
};

const Play: Stage = {
  play() {
    return Play;
  },
  pause() {
    // ставим на паузу
    return Pause;
  },
  skip() {
    // перематываем
    return Skip;
  },
};

const Skip: Stage = {
  play() {
    // начинаем играть
    return Play;
  },
  pause() {
    // ставим на паузу
    return Pause;
  },
  skip() {
    return Skip;
  },
};

export const Player: {
  state: Stage;
  play(): void;
  pause(): void;
  skip(): void;
} = {
  state: Pause,

  play() {
    this.state = this.state.play();
  },
  pause() {
    this.state = this.state.pause();
  },
  skip() {
    this.state = this.state.skip();
  },
};
