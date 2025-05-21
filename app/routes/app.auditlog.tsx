import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  const auditLogs = [
    {
      id: 1,
      action: "Product Update",
      user: "Admin",
      timestamp: new Date().toISOString(),
      details: "Updated product inventory"
    },
    {
      id: 2,
      action: "Order Processing",
      user: "System",
      timestamp: new Date().toISOString(),
      details: "Order #1234 processed"
    }
  ];

  return json({ auditLogs });
};

export default function AppAuditLog() {
  const { auditLogs } = useLoaderData<typeof loader>();

  return (
    <div className="audit-log-container">
      <h1>Audit Log</h1>
      <div className="audit-log-list">
        {auditLogs.map((log) => (
          <div key={log.id} className="audit-log-entry">
            <div className="audit-log-header">
              <span className="action">{log.action}</span>
              <span className="user">{log.user}</span>
              <span className="timestamp">{new Date(log.timestamp).toLocaleString()}</span>
            </div>
            <div className="audit-log-details">
              {log.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
