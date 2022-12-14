import { Content } from './content';

describe('Notification Content', () => {
  it('shold be able to create a notification content', () => {
    const content = new Content('I recive a friend notification');

    expect(content).toBeTruthy();
  });

  it('shold not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('Tes')).toThrow();
  });

  it('shold not be able to create a notification with less than 240 characters', () => {
    expect(() => new Content('t'.repeat(241))).toThrow();
  });
});
