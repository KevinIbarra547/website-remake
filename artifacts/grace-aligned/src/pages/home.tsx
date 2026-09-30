import { Link } from 'wouter';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';

const instagramUrl = 'https://www.instagram.com/grace_aligned/';

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div>
          <div className="eyebrow">Grace Aligned / Gospel truth</div>
          <h1 className="display" id="home-heading">
            Spreading Gospel Truth Through Scripture &amp; Art
          </h1>
          <p className="hero-copy" data-testid="text-home-introduction">
            Helping young adults find truth, purpose, and freedom through
            emotionally resonant Bible scripture paired with visual AI artwork.
          </p>
          <div className="hero-actions">
            <Link
              href="/offerings.html"
              className="button"
              data-testid="link-home-recommended-bibles"
            >
              View Recommended Bibles
            </Link>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="button secondary"
              data-testid="link-home-instagram"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="seal-panel" data-testid="panel-home-logo">
          <img
            src={logoPath}
            alt="Grace Aligned black and gold circular metallic emblem"
            className="seal-image"
            data-testid="img-home-logo"
          />
          <p className="seal-caption">
            Find your peace in the Prince of Peace
          </p>
        </div>
      </section>

      <div className="gold-rule" />

      <section className="section" aria-labelledby="home-mission-heading">
        <div className="home-columns">
          <div className="section-heading">
            <div className="eyebrow">Why Grace Aligned exists</div>
            <h2 className="display" id="home-mission-heading">
              Scripture made accessible, readable, and emotionally engaging.
            </h2>
          </div>
          <div>
            <p className="statement">
              Grace Aligned shares gospel scripture and AI artwork for young
              adults seeking truth, purpose, and freedom from depression, lust,
              and dark worldly paths.
            </p>
            <p className="body-copy">
              The work is centered on loving Jesus, honoring the Trinity, and
              living in truth. Explore free social content, planned videos, and
              recommended Bibles and products.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-channels-heading">
        <div className="section-heading">
          <div className="eyebrow">Stay connected</div>
          <h2 className="display" id="home-channels-heading">
            Instagram and YouTube
          </h2>
          <p>
            Instagram is active for scripture graphics, short videos, and
            direct messages. Planned videos will share scripture and explain
            the Gospel.
          </p>
        </div>
        <div className="hero-actions">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-testid="link-home-channel-instagram"
          >
            Instagram: grace_aligned
          </a>
          <span className="button secondary pending" data-testid="status-home-youtube">
            YouTube: Grace Aligned [NEEDS DECISION: verified URL]
          </span>
        </div>
      </section>
    </>
  );
}