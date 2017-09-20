import timeStore from './timeStore';
import scoreStore from './scoreStore';

const stores = {
  timeStore: new timeStore(),
  scoreStore: new scoreStore(),
};

export default stores;
