import Invoice from './Invoice';

export interface ActionAfterInvoiceGeneration {
  run(invoice: Invoice): void;
}
