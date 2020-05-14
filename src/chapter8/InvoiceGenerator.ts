import Order from './Order';
import Invoice from './Invoice';
import InvoiceDao from './InvoiceDao';
import SAP from './SAP';

export default class InvoiceGenerator {
  private dao: InvoiceDao;
  private sap: SAP;

  constructor(invoiceDao: InvoiceDao, sap: SAP) {
    this.dao = invoiceDao;
    this.sap = sap;
  }

  public generate(order: Order): Invoice {
    const invoice = new Invoice(order.client, order.total * 0.94, new Date());
    this.dao.persist(invoice);
    this.sap.send(invoice);
    return invoice;
  }
}
