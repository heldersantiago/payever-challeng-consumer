export class MessageParser {
  static parseRabbitMQMessage(message: MessageDTO): any {
    const contentBuffer = Buffer.from(message.content.data);
    const contentString = contentBuffer.toString('utf-8');

    try {
      return JSON.parse(contentString);
    } catch (error) {
      throw new Error('Failed to parse JSON content');
    }
  }
}
