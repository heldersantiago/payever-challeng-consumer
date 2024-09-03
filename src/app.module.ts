import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConsumerController } from './infrastructure/controllers/consumer.controller';
import { EmailService } from './infrastructure/services/email.service';
import { ConsumeSalesReportUseCase } from './application/consume-sales-report.use-case';
import { ConsumerService } from './infrastructure/services/consumer.service';

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [EmailService, ConsumeSalesReportUseCase, ConsumerService],
  exports: [EmailService, ConsumeSalesReportUseCase, ConsumerService],
})
export class AppModule {}
