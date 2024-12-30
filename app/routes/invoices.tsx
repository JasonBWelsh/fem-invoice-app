// Parent route for `/invoice` route
// app/routes/invoices.tsx
// This file is named exactly invoices.tsx (no folder around it). 
// Remix sees this and pairs it with any folder named invoices/ containing child route files.
import { Outlet } from "@remix-run/react";

// Optional: a loader here if have shared data for all child routes
// export const loader: LoaderFunction = async () => { ... }

export default function InvoicesLayout() {
  return (
    <div className="invoices-layout">
      <header>
        <h1>Invoices</h1>
        {/* A "Create New" button linking to /invoices/new, etc. */}
      </header>

      <main>
        {/* Child routes (index.tsx, new.tsx, $invoiceId.tsx) will appear here */}
        <Outlet />
      </main>
    </div>
  );
}
