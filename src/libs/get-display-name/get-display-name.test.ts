import { getDisplayName } from './get-display-name';

const TestComponent = () => null;

describe('getDisplayName', () => {
  it('get right name', () => {
    expect(getDisplayName(TestComponent)).toBe('TestComponent');
  });
});
