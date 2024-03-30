interface Player {
  play();
  pause();
}

interface Factory {
  createPlayer(): Player;
}

class PlayerFactory1 implements Factory {
  createPlayer(): Player {
    return { play() {}, pause() {} };
  }
}
class PlayerFactory2 implements Factory {
  createPlayer(): Player {
    return { play() {}, pause() {} };
  }
}
class PlayerFactory3 implements Factory {
  createPlayer(): Player {
    return { play() {}, pause() {} };
  }
}
class PlayerFactory4 implements Factory {
  createPlayer(): Player {
    return { play() {}, pause() {} };
  }
}

type PlayCreator = () => Player;

const createShakaPlayer: PlayCreator = () => {
  return { play() {}, pause() {} };
};

const createHlsPlayer: PlayCreator = () => {
  return { play() {}, pause() {} };
};

const createYaspPlayer: PlayCreator = () => {
  return { play() {}, pause() {} };
};

interface Ad {}

interface AdCreator {
  createPreroll(): Ad;
  createMidroll(): Ad;
  createPostPauseRoll(): Ad;
}

class PartnerAdCreator implements AdCreator {
  createPreroll(): Ad {
    return {};
  }
  createMidroll(): Ad {
    return {};
  }
  createPostPauseRoll(): Ad {
    return {};
  }
}

class DeviceAdCreator implements AdCreator {
  createPreroll(): Ad {
    return {};
  }
  createMidroll(): Ad {
    return {};
  }
  createPostPauseRoll(): Ad {
    return {};
  }
}

class SmthAdCreator implements AdCreator {
  createPreroll(): Ad {
    return {};
  }
  createMidroll(): Ad {
    return {};
  }
  createPostPauseRoll(): Ad {
    return {};
  }
}

function planAd(adCreator: AdCreator) {
  adCreator.createMidroll();
  adCreator.createPostPauseRoll();
  adCreator.createPreroll();
}

planAd(new PartnerAdCreator());
planAd(new DeviceAdCreator());
planAd(new SmthAdCreator());
