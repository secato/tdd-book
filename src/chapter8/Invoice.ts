export default class Invoice {
  client: string;
  value: number;
  date: Date;

  constructor(client: string, value: number, date: Date) {
    this.client = client;
    this.value = value;
    this.date = date;
  }

}
