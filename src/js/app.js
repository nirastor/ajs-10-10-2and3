/* eslint-disable no-console */
import json from './parser';
import read from './reader';

export default class App {
  static init() {
    let resultData;
    (async () => {
      try {
        console.log('index.js started');
        const loaded = await read();
        resultData = await json(loaded);
        console.log(resultData);
      } catch (e) {
        console.log(`Errors here: ${e}`);
      } finally {
        console.log('Print something');
      }
      return false;
    })();
    return resultData;
  }
}
