import Order from './Order';
import Invoice from './Invoice';
import InvoiceDao from './InvoiceDao';

export default class InvoiceGenerator {
  public generate(order: Order): Invoice {
    const invoice = new Invoice(order.client, order.total * 0.94, new Date());
    new InvoiceDao().persist(invoice);
    return invoice;
  }
}
