import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

// test with mock
test('should be rejected', async () => {
  const err = new Error('Some test error');
  read.mockRejectedValue(err);
  const recived = await GameSavingLoader.load();
  expect(recived).toEqual(err);
});
