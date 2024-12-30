export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
  }
  
  export interface InvoiceItem {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }
  
  export type InvoiceStatus = "draft" | "pending" | "paid";
  
  export interface Invoice {
    id: string;
    createdAt: string;     // Should this be Date if I parse it?
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: InvoiceStatus;
    senderAddress: Address;
    clientAddress: Address;
    items: InvoiceItem[];
    total: number;
  }
  