/* eslint-disable no-console */
import json from './parser';
import read from './reader';

export default class App {
  static init() {
    (async () => {
      let resultData;
      try {
        console.log('index.js started');
        const loaded = await read();
        resultData = await json(loaded);
        console.log(resultData);
        return resultData;
      } catch (e) {
        console.log(`Errors here: ${e}`);
      } finally {
        console.log('Print something');
      }
      return resultData;
    })();
  }
}
