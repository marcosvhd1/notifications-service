import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNotificationResquest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationResquest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationsRepository.countManyByRecipientId(recipientId);

    return {
      count,
    };
  }
}
