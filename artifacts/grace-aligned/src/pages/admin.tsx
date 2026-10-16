import { useEffect, useRef, useState } from 'react';
import { useClerk } from '@clerk/react';
import {
  getListLeadsQueryKey,
  useListLeads,
} from '@workspace/api-client-react';

export default function AdminInbox() {
  const { signOut } = useClerk();
  const leads = useListLeads({
    query: { queryKey: getListLeadsQueryKey(), refetchInterval: 30_000 },
  });
  const seenLeadIds = useRef<Set<number> | null>(null);
  const [alertNotice, setAlertNotice] = useState('');
  const [notificationPermission, setNotificationPermission] = useState<
    NotificationPermission | 'unsupported'
  >(() =>
    typeof window !== 'undefined' && 'Notification' in window
      ? Notification.permission
      : 'unsupported',
  );

  useEffect(() => {
    if (!leads.data) return;

    if (seenLeadIds.current === null) {
      seenLeadIds.current = new Set(leads.data.map((lead) => lead.id));
      return;
    }

    const newLeads = leads.data.filter((lead) => !seenLeadIds.current?.has(lead.id));
    if (newLeads.length === 0) return;
    newLeads.forEach((lead) => seenLeadIds.current?.add(lead.id));

    const notice =
      newLeads.length === 1
        ? `New message from ${newLeads[0].name}`
        : `${newLeads.length} new messages arrived`;
    setAlertNotice(notice);

    if (
      typeof Notification !== 'undefined' &&
      Notification.permission === 'granted'
    ) {
      const notification = new Notification('New Grace Aligned message', {
        body: newLeads.length === 1 ? `From ${newLeads[0].name}` : notice,
        tag: 'grace-aligned-contact-messages',
      });
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    }
  }, [leads.data]);

  async function enableBrowserAlerts() {
    if (typeof Notification === 'undefined') {
      setNotificationPermission('unsupported');
      return;
    }
    setNotificationPermission(await Notification.requestPermission());
  }

  return (
    <section className="admin-inbox" aria-labelledby="admin-heading">
      <div className="admin-heading">
        <div>
          <div className="eyebrow">Private message inbox</div>
          <h1 className="display" id="admin-heading">Contact Messages</h1>
        </div>
        <button className="button secondary" onClick={() => signOut({ redirectUrl: '/' })}>
          Sign out
        </button>
      </div>
      <div className="admin-alert-settings">
        <div>
          <strong>New message alerts</strong>
          <p>Checks for new messages every 30 seconds while this inbox is open.</p>
        </div>
        {notificationPermission === 'default' && (
          <button className="button secondary" onClick={enableBrowserAlerts}>
            Enable browser alerts
          </button>
        )}
        {notificationPermission === 'granted' && (
          <span className="alert-permission">Browser alerts enabled</span>
        )}
        {notificationPermission === 'denied' && (
          <span className="admin-state">Browser alerts are blocked in browser settings.</span>
        )}
        {notificationPermission === 'unsupported' && (
          <span className="admin-state">This browser does not support notifications.</span>
        )}
      </div>
      {alertNotice && (
        <div className="new-message-alert" role="status" aria-live="polite">
          <span>{alertNotice}</span>
          <button
            className="alert-dismiss"
            type="button"
            aria-label="Dismiss new message alert"
            onClick={() => setAlertNotice('')}
          >
            Dismiss
          </button>
        </div>
      )}
      {leads.isPending && <p className="admin-state">Loading messages…</p>}
      {leads.isError && <p className="admin-state form-error" role="alert">This account is not authorized to view the inbox, or messages could not be loaded.</p>}
      {leads.data?.length === 0 && <p className="admin-state">No messages yet.</p>}
      <div className="admin-message-list">
        {leads.data?.map((lead) => (
          <article className="admin-message" key={lead.id}>
            <div className="admin-message-meta">
              <strong>{lead.name}</strong>
              <time dateTime={lead.createdAt}>{new Date(lead.createdAt).toLocaleString()}</time>
            </div>
            <a href={`mailto:${lead.email}`} className="admin-email">{lead.email}</a>
            <p>{lead.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
