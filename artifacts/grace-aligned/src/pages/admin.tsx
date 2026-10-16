import { useClerk } from '@clerk/react';
import { useListLeads } from '@workspace/api-client-react';

export default function AdminInbox() {
  const { signOut } = useClerk();
  const leads = useListLeads();

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
