import type { Invoice } from "~/types/invoice";
import invoicesData from "~/data/data.json"; 
// TODO: make sure your TS config allows JSON imports

let invoices: Invoice[] = invoicesData as Invoice[];

export function getAllInvoices(): Invoice[] {
  return invoices;
}
