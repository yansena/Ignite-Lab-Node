import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('shold be able to create a notification content', () => {
    const notification = new Notification({
      content: new Content('New friend request'),
      category: 'social',
      recipientId: 'exemple-id',
    });

    expect(notification).toBeTruthy();
  });
});
