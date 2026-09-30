import { Link } from 'wouter';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';

export default function About() {
  return (
    <>
      <section className="page-intro" aria-labelledby="about-heading">
        <div className="eyebrow">The story behind the work</div>
        <h1 className="display" id="about-heading">
          About Grace Aligned
        </h1>
        <p>
          Grace Aligned was founded out of a transformative experience when
          Jesus saved the owner from the darkness of the world, inspiring a
          passion to help others find truth and purpose.
        </p>
      </section>

      <section className="about-layout">
        <div className="prose-block">
          <div>
            <h2>Why Grace Aligned exists</h2>
            <p>
              To share gospel truth, make scripture accessible and emotionally
              compelling for young adults overcoming depression, lust, and dark
              worldly paths, and sustain the ministry through ads and affiliate
              marketing.
            </p>
          </div>
          <div>
            <h2>What shapes the work</h2>
            <p>
              Personal experience with scripture, content creation using AI art
              tools, and dedication to sharing Christian faith.
            </p>
          </div>
          <div>
            <h2>Faith values</h2>
            <p>
              Built on a strong foundation of loving Jesus, honoring the
              Trinity, and living in truth.
            </p>
          </div>
          <Link href="/contact.html" className="button" data-testid="link-about-contact">
            Connect with Us
          </Link>
        </div>

        <aside className="side-note" data-testid="panel-about-philosophy">
          <img
            src={logoPath}
            alt="Grace Aligned circular emblem"
            className="seal-image"
            data-testid="img-about-logo"
          />
          <p>Living in truth is my MO</p>
          <small>
            Grace Aligned is centered on loving Jesus, honoring the Trinity,
            and living in truth.
          </small>
        </aside>
      </section>
    </>
  );
}