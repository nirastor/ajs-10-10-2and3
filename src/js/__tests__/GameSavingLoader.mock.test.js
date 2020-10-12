import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

// test with mock
test('should be rejected', async () => {
  read.mockRejectedValue(new Error('Some test error'));
  const recived = await GameSavingLoader.load();
  expect(recived).rejects.toThrow('Some test error');
});
