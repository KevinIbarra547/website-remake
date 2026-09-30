import { Link } from 'wouter';

const instagramUrl = 'https://www.instagram.com/grace_aligned/';

export default function Contact() {
  return (
    <>
      <section className="page-intro" aria-labelledby="contact-heading">
        <div className="eyebrow">Start a conversation</div>
        <h1 className="display" id="contact-heading">
          Reach out with what&apos;s on your heart.
        </h1>
        <p>
          Have a question about our content, Bible recommendations, or faith
          journey? Send a message below or reach out directly on Instagram.
        </p>
      </section>

      <section className="contact-layout">
        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
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
          <button type="submit" className="button" data-testid="button-send-message">
            Send Message
          </button>
          <p className="form-note" data-testid="text-contact-phase-note">
            Contact submission is not active yet. Form behavior belongs to Phase
            4.
          </p>
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
            <Link href="/" className="button secondary" data-testid="link-contact-home">
              Return Home
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}