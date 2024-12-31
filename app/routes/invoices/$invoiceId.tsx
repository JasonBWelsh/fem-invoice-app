// app/routes/invoices/$invoiceId.tsx
import { useLoaderData, Form } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getInvoice, updateInvoice, deleteInvoice } from "~/models/invoice.server";
import type { Invoice } from "~/types/invoice";

export const loader: LoaderFunction = async ({ params }) => {
  const invoiceId = params.invoiceId;
  if (!invoiceId) throw new Error("No invoice ID");
  const invoice = getInvoice(invoiceId);
  if (!invoice) {
    throw new Response("Not Found", { status: 404 });
  }
  return json(invoice);
};

export const action: ActionFunction = async ({ request, params }) => {
  const invoiceId = params.invoiceId;
  if (!invoiceId) throw new Error("No invoice ID");

  const formData = await request.formData();
  const _method = formData.get("_method");

  if (_method === "delete") {
    deleteInvoice(invoiceId);
    return redirect("/invoices");
  }
  
  // Otherwise, update logic:
  const updatedData = {
    clientName: formData.get("clientName") as string,
    // ...other fields
  };
  updateInvoice(invoiceId, updatedData);
  return redirect(`/invoices/${invoiceId}`);
};

export default function InvoiceDetailPage() {
  const invoice = useLoaderData<Invoice>();

  return (
    <div>
      <h2>Invoice {invoice.id}</h2>
      <p>Status: {invoice.status}</p>
      <p>Client: {invoice.clientName}</p>
      {/* Edit form */}
      <Form method="post">
        <label>
          Client Name:
          <input name="clientName" defaultValue={invoice.clientName} />
        </label>
        <button type="submit">Update</button>
      </Form>
      <Form method="post">
        <input type="hidden" name="_method" value="delete" />
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
