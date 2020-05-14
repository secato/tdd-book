import Invoice from './Invoice';
import { ActionAfterInvoiceGeneration } from './InvoicePostGenerateAction';

export default class InvoiceDao implements ActionAfterInvoiceGeneration {
  run(invoice: Invoice): void {
    // persists invoice
  }
  public persist(invoice: Invoice) {
  }
}
