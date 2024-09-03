import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from 'src/infrastructure/services/email.service';

@Injectable()
export class ConsumeSalesReportUseCase {
  constructor(private readonly emailService: EmailService) {}

  async execute(report) {
    Logger.debug(report['properties']);
    // const body =
    //   `Total Sales: ${report.totalSales}\n\nItem Sales Summary:\n` +
    //   Object.keys(report.itemSalesSummary)
    //     .map(
    //       (sku) =>
    //         `SKU: ${sku}, Quantity Sold: ${report.itemSalesSummary[sku]}`,
    //     )
    //     .join('\n');

    //await this.emailService.sendEmail('admin@example.com', subject, body);
  }
}
