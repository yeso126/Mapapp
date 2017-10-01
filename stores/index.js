import gameStore from './gameStore';
import scoreStore from './scoreStore';

const stores = {
  gameStore: new gameStore(),
  scoreStore: new scoreStore(),
};

export default stores;
