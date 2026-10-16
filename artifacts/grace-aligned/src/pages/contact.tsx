import { Link } from 'wouter';
import { useState } from 'react';
import { useCreateLead } from '@workspace/api-client-react';

const instagramUrl = 'https://www.instagram.com/grace_aligned/';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const createLead = useCreateLead();

  function submitMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    const form = event.currentTarget;
    const values = new FormData(form);
    createLead.mutate(
      {
        data: {
          name: String(values.get('name') ?? ''),
          email: String(values.get('email') ?? ''),
          message: String(values.get('message') ?? ''),
        },
      },
      {
        onSuccess: () => {
          form.reset();
          setSent(true);
        },
      },
    );
  }

  return (
    <>
      <section className="page-intro" aria-labelledby="contact-heading">
        <div className="eyebrow">Start a conversation</div>
        <h1 className="display" id="contact-heading">
          Contact Grace Aligned
        </h1>
        <p>
          Have a question about our content, Bible recommendations, or faith
          journey? Send a message below or reach out directly on Instagram.
        </p>
      </section>

      <section className="contact-layout">
        <form
          className="contact-form"
          onSubmit={submitMessage}
          data-testid="form-contact"
        >
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" required data-testid="input-contact-name" />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" required data-testid="input-contact-email" />
          </div>
          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required data-testid="input-contact-message" />
          </div>
          <button type="submit" className="button" disabled={createLead.isPending} data-testid="button-send-message">
            Send Message
          </button>
          {sent && <p className="form-note" role="status">Your message was sent. Thank you for reaching out.</p>}
          {createLead.isError && <p className="form-note form-error" role="alert">Your message could not be sent. Please try again.</p>}
        </form>

        <aside className="side-note" data-testid="panel-contact-details">
          <p>Instagram Direct Messages</p>
          <small>
            Reach out directly on Instagram: <strong>grace_aligned</strong>.
            Response expectation: As available. Service area: Global / Online.
          </small>
          <div className="hero-actions">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="button secondary"
              data-testid="link-contact-instagram"
            >
              Message on Instagram
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}