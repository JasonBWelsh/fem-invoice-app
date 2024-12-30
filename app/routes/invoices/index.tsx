// app/routes/invoices/index.tsx
// Why? When someone visits exactly /invoices (no /new or /:id), 
// Remix looks for index.tsx inside invoices/.
// Role: Fetch and display the main list of invoices.
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { getAllInvoices } from "~/models/invoice.server";
import type { Invoice } from "~/types/invoice";

export const loader: LoaderFunction = async () => {
  const invoices = getAllInvoices();
  return json<Invoice[]>(invoices);
};

export default function InvoicesIndex() {
  const invoices = useLoaderData<Invoice[]>();
  return (
    <div>
      <h2>All Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <a href={`/invoices/${invoice.id}`}>{invoice.id}</a> — {invoice.clientName}
          </li>
        ))}
      </ul>
    </div>
  );
}
