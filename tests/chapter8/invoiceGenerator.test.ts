import Order from '../../src/chapter8/Order';
import InvoiceGenerator from '../../src/chapter8/InvoiceGenerator';
import InvoiceDao from '../../src/chapter8/InvoiceDao';
import SAP from '../../src/chapter8/SAP';
jest.mock('../../src/chapter8/InvoiceDao');
jest.mock('../../src/chapter8/SAP');
beforeEach(() => {
  (InvoiceDao as any).mockClear();
  (SAP as any).mockClear();
});

describe('Invoice generator class', () => {
  test('Should generate invoice with taxes discounted', () => {
    const invoiceGenerator = new InvoiceGenerator(new InvoiceDao(), new SAP());
    const order = new Order('Felipe', 100, 1);
    const invoice = invoiceGenerator.generate(order);

    expect(invoice.value).toBe(100 * 0.94);
    expect(InvoiceDao).toHaveBeenCalledTimes(1);
    expect(SAP).toHaveBeenCalledTimes(1);
  });

  test('Clear mock is working', () => {
    expect(InvoiceDao).not.toHaveBeenCalled();
    expect(SAP).not.toHaveBeenCalled();
  });
});
