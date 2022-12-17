import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
   
   it('should be able to create a notification', () => {

      const notification = Notification.newNotification({
         content: new Content('You received a friend request'),
         category: 'social',
         recipientId: 'exemple-recipientId'
      })
   
      expect(notification).toBeTruthy();
   });
});
