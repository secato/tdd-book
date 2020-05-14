import Invoice from "./Invoice";
import { ActionAfterInvoiceGeneration } from "./InvoicePostGenerateAction";

export default class SAP implements ActionAfterInvoiceGeneration {
    run(invoice: Invoice): void {
        // send invoice to SAP
    }
}