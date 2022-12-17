import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  props: NotificationProps;

  private constructor(props: NotificationProps) {
    this._id = randomUUID();
    this.props = props;
  }

  public static newNotification(
    props: Replace<NotificationProps, { createdAt?: Date }>,
  ): Notification {
    const notification = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };

    return new Notification(notification);
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(value: string) {
    this.props.recipientId = value;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public set readAt(readAt: Date | Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
