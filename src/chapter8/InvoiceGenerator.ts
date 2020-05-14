import Order from './Order';
import Invoice from './Invoice';

import { ActionAfterInvoiceGeneration } from './InvoicePostGenerateAction';

export default class InvoiceGenerator {
  private actions: ActionAfterInvoiceGeneration[];

  constructor(...actions: ActionAfterInvoiceGeneration[]) {
    this.actions =  actions
  }

  public generate(order: Order): Invoice {
    const invoice = new Invoice(order.client, order.total * 0.94, new Date());

    for (const action of this.actions) {
      action.run(invoice)
    }

    return invoice;
  }
}
