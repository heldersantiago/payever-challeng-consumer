import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { connect } from 'amqplib';
import { report } from 'process';
import { ConsumeSalesReportUseCase } from 'src/application/consume-sales-report.use-case';
import { MessageParser } from 'src/application/helpers/message-parser';

@Injectable()
export class ConsumerService implements OnModuleInit {
  private readonly logger = new Logger(ConsumerService.name);

  constructor(
    private readonly consumeSalesReportUseCase: ConsumeSalesReportUseCase,
  ) {}

  async onModuleInit() {
    const connection = await connect(process.env.RABBITMQ_URI);
    const channel = await connection.createChannel();

    const queue = 'daily_sales_report';

    await channel.assertQueue(queue, { durable: true });

    channel.consume(
      queue,
      (msg) => {
        if (msg !== null) {
          this.consumeSalesReportUseCase.execute(msg);
          channel.ack(msg);
        }
      },
      { noAck: false },
    );

    this.logger.debug(`Listening for messages on ${queue} queue`);
  }
}
