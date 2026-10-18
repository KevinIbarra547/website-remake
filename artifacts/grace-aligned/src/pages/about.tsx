import { Link } from 'wouter';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import { Reveal, WordRise } from '@/components/motion';

export default function About() {
  return (
    <>
      <section className="page-intro" aria-labelledby="about-heading">
        <Reveal className="eyebrow" y={10}>The story behind the work</Reveal>
        <h1 className="display" id="about-heading">
          <WordRise text="About Grace Aligned" />
        </h1>
        <Reveal delay={0.4}>
        <p>
          Grace Aligned was founded out of a transformative experience when
          Jesus saved the owner from the darkness of the world, inspiring a
          passion to help others find truth and purpose.
        </p>
        </Reveal>
      </section>

      <section className="about-layout">
        <div className="prose-block">
          <Reveal className="prose-item" delay={0.0}>
            <h2>Why Grace Aligned exists</h2>
            <p>
              To share gospel truth, make scripture accessible and emotionally
              compelling for young adults overcoming depression, lust, and dark
              worldly paths, and sustain the ministry through ads and affiliate
              marketing.
            </p>
          </Reveal>
          <Reveal className="prose-item" delay={0.12}>
            <h2>What shapes the work</h2>
            <p>
              Personal experience with scripture, content creation using AI art
              tools, and dedication to sharing Christian faith.
            </p>
          </Reveal>
          <Reveal className="prose-item" delay={0.24}>
            <h2>Faith values</h2>
            <p>
              Built on a strong foundation of loving Jesus, honoring the
              Trinity, and living in truth.
            </p>
          </Reveal>
          <Link href="/contact.html" className="button" data-testid="link-about-contact">
            Connect with Us
          </Link>
        </div>

        <Reveal as="aside" className="side-note side-note--seal" delay={0.2}>
          <div data-testid="panel-about-philosophy">
          <span className="seal-ring">
          <img
            src={logoPath}
            alt="Grace Aligned circular emblem"
            className="seal-image"
            data-testid="img-about-logo"
          />
          </span>
          <p>Live In Truth</p>
          <small>
            Grace Aligned is centered on loving Jesus, honoring the Trinity,
            and living in truth.
          </small>
          </div>
        </Reveal>
      </section>
    </>
  );
}