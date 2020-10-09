import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    return read().then((data) => json(data));
  }
}
