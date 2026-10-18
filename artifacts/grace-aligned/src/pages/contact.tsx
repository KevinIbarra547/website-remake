import { useState } from 'react';
import { Check, Copy, Instagram, Mail, Send } from 'lucide-react';
import { useCreateLead } from '@workspace/api-client-react';
import { Reveal, WordRise, motion } from '@/components/motion';
import {
  contactEmail,
  gmailComposeUrl,
  instagramUrl,
  mailtoUrl,
} from '@/lib/social-links';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = mailtoUrl;
    }
  }
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
        <Reveal className="eyebrow" y={10}>Start a conversation</Reveal>
        <h1 className="display" id="contact-heading">
          <WordRise text="Contact Grace Aligned" />
        </h1>
        <Reveal delay={0.4}>
          <p>
            Have a question about our content, Bible recommendations, or faith
            journey? Send a message below, email directly, or reach out on
            Instagram.
          </p>
        </Reveal>
      </section>

      <section className="contact-layout">
        <Reveal>
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
          <button type="submit" className="button button--shine" disabled={createLead.isPending} data-testid="button-send-message">
            <Send size={15} aria-hidden="true" /> Send Message
          </button>
          {sent && <p className="form-note" role="status">Your message was sent. Thank you for reaching out.</p>}
          {createLead.isError && <p className="form-note form-error" role="alert">Your message could not be sent. Please try again.</p>}
        </form>
        </Reveal>

        <div className="contact-side">
        <Reveal as="aside" className="side-note email-card" delay={0.1} >
          <div data-testid="panel-contact-email">
            <motion.span
              className="email-card__icon"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <Mail size={22} strokeWidth={1.4} />
            </motion.span>
            <p>Email Directly</p>
            <a href={mailtoUrl} className="email-card__address" data-testid="link-contact-email">
              {contactEmail}
            </a>
            <div className="hero-actions">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                data-testid="link-contact-gmail"
                aria-label="Write an email in Gmail; opens in a new tab"
              >
                <Mail size={15} aria-hidden="true" /> Open in Gmail
              </a>
              <button
                type="button"
                className="button secondary"
                onClick={copyEmail}
                data-testid="button-copy-email"
              >
                {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy Address'}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal as="aside" className="side-note" delay={0.2}>
          <div data-testid="panel-contact-details">
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
              <Instagram size={15} aria-hidden="true" /> Message on Instagram
            </a>
          </div>
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}