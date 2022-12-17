import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const sendNotificationRequest = {
      recipientId: 'exemple_recipientID',
      content: 'You received a friend request',
      category: 'social',
    };

    const { notification } = await sendNotification.execute(
      sendNotificationRequest,
    );

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
