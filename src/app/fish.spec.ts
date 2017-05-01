import {Fish} from './fish';

describe('Fish', () => {
  it('should create an instance', () => {
    expect(new Fish()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let fish = new Fish({
      id: '1',
      name: 'Salmon'
    });
    expect(fish.id).toEqual('1');
    expect(fish.name).toEqual('Salmon');
  });
});
