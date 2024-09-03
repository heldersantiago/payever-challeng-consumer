import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumeSalesReportUseCase } from '../../application/consume-sales-report.use-case';

@Controller()
export class ConsumerController {
  private readonly logger = new Logger(ConsumerController.name);
  constructor(
    private readonly consumeSalesReportUseCase: ConsumeSalesReportUseCase,
  ) {}

  async handleSalesReport(report: any) {
    if (typeof report == 'undefined' || !report) {
      this.logger.error('Received undefined or null report');
      return;
    } else {
      this.logger.log('Received sales report:', report);
      await this.consumeSalesReportUseCase.execute(report);
      return 'Sales report consumed successfully';
    }
  }
}
