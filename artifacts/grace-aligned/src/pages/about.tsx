import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import heroArtPath from '@assets/generated_images/grace-aligned-path-to-hope.png';
import { Reveal, WordRise } from '@/components/motion';

const values = [
  {
    title: 'Why Grace Aligned exists',
    copy: 'To share gospel truth, make scripture accessible and emotionally compelling for young adults overcoming depression, lust, and dark worldly paths, and sustain the ministry through ads and affiliate marketing.',
  },
  {
    title: 'What shapes the work',
    copy: 'Personal experience with scripture, content creation using AI art tools, and dedication to sharing Christian faith.',
  },
  {
    title: 'Faith values',
    copy: 'Built on a strong foundation of loving Jesus, honoring the Trinity, and living in truth.',
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-heading">
        <img src={heroArtPath} alt="" className="about-hero__bg" />
        <div className="about-hero__shade" />
        <div className="about-hero__content">
          <Reveal className="kicker" y={10}>The story behind the work</Reveal>
          <h1 className="display-xl" id="about-heading">
            <WordRise text="About Grace Aligned" />
          </h1>
          <Reveal delay={0.4}>
            <p className="lede">
              Grace Aligned was founded out of a transformative experience when
              Jesus saved the owner from the darkness of the world, inspiring a
              passion to help others find truth and purpose.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-grid">
        <ol className="timeline">
          {values.map((value, index) => (
            <Reveal as="li" key={value.title} className="timeline__item" delay={index * 0.12}>
              <span className="timeline__dot" aria-hidden="true" />
              <h2>{value.title}</h2>
              <p>{value.copy}</p>
            </Reveal>
          ))}
          <Reveal as="li" className="timeline__item timeline__item--cta" delay={0.4}>
            <Link href="/contact.html" className="btn btn--gold" data-testid="link-about-contact">
              Connect with Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </ol>

        <Reveal as="aside" className="seal-card" delay={0.2} data-testid="panel-about-philosophy">
          <span className="seal-ring">
            <img
              src={logoPath}
              alt="Grace Aligned circular emblem"
              className="seal-image"
              data-testid="img-about-logo"
            />
          </span>
          <p className="display-md">Live In Truth</p>
          <small>
            Grace Aligned is centered on loving Jesus, honoring the Trinity,
            and living in truth.
          </small>
        </Reveal>
      </section>
    </>
  );
}
