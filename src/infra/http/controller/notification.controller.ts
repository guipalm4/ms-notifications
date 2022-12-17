import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationRequest } from '../dto/create-notification-request';

@Controller('notification')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async createNotification(@Body() body: CreateNotificationRequest) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });
    return { notification };
  }
}
