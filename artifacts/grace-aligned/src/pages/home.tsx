import { Link } from 'wouter';
import { BookOpen, Feather, Mail, Palette, Sun } from 'lucide-react';
import { ArtworkFrame } from '@/components/artwork-frame';
import gospelImagePath from '@/assets/jesus-comforting.png';
import { HomeBrandBanner } from '@/components/home-brand-banner';
import {
  GoldDust,
  Parallax,
  Reveal,
  WordRise,
  motion,
} from '@/components/motion';
import {
  contactEmail,
  instagramUrl,
  mailtoUrl,
  youtubeChannelUrl,
} from '@/lib/social-links';

// King James Version — public domain.
const verses = [
  { text: 'Peace I leave with you, my peace I give unto you.', ref: 'John 14:27' },
  { text: 'And ye shall know the truth, and the truth shall make you free.', ref: 'John 8:32' },
  { text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', ref: 'Matthew 11:28' },
  { text: 'His name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.', ref: 'Isaiah 9:6' },
  { text: 'For God so loved the world, that he gave his only begotten Son.', ref: 'John 3:16' },
];

const pillars = [
  {
    icon: BookOpen,
    title: 'Scripture',
    copy: 'Chosen Bible verses made accessible, readable, and emotionally engaging.',
  },
  {
    icon: Palette,
    title: 'Art',
    copy: 'AI artwork and paintings that let the weight of each verse be felt.',
  },
  {
    icon: Sun,
    title: 'Truth',
    copy: 'Loving Jesus, honoring the Trinity, and living in truth.',
  },
];

const gospelLines = [
  { lead: 'God has already ', strong: 'paid the price.' },
  { lead: 'He has ', strong: 'forgiven you.' },
  { lead: 'Jesus wants you to know ', strong: 'His love.' },
];

export default function Home() {
  return (
    <>
      <section className="hero hero--intro" aria-labelledby="home-heading">
        <GoldDust />
        <div>
          <Reveal className="eyebrow eyebrow--glow" y={10}>
            Grace Aligned / Gospel truth
          </Reveal>
          <h1 className="display" id="home-heading">
            <WordRise text="Spreading Gospel Truth Through Scripture & Art" delay={0.15} />
          </h1>
          <Reveal delay={0.7}>
            <p className="hero-copy" data-testid="text-home-introduction">
              Helping young adults find truth, purpose, and freedom through
              emotionally resonant Bible scripture paired with visual AI artwork.
            </p>
          </Reveal>
          <Reveal className="hero-actions" delay={0.9}>
            <Link
              href="/offerings.html"
              className="button button--shine"
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
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noreferrer"
              className="button secondary"
              data-testid="link-home-intro-youtube"
            >
              Follow on YouTube
            </a>
          </Reveal>
        </div>
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-art__halo" aria-hidden="true" />
          <ArtworkFrame
            className="artwork-frame--hero artwork-frame--float"
            caption="Find your peace in the Prince of Peace"
            testId="frame-home-artwork"
          />
        </motion.div>
      </section>

      <VerseMarquee />

      <Reveal y={40}>
        <HomeBrandBanner />
      </Reveal>

      <section className="hero hero--gospel" aria-labelledby="home-message-copy">
        <div>
          <p className="display hero-message-copy" id="home-message-copy">
            {gospelLines.map((line, index) => (
              <motion.span
                key={line.strong}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: index * 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.lead}
                <strong className="gold-sweep" style={{ animationDelay: `${0.6 + index * 0.25}s` }}>
                  {line.strong}
                </strong>
              </motion.span>
            ))}
          </p>
        </div>

        <Parallax className="parallax-wrap">
          <Reveal>
            <figure
              className="artwork-frame artwork-frame--hero artwork-frame--zoom"
              data-testid="frame-home-gospel-artwork"
              aria-label="A message of hope"
            >
              <img
                src={gospelImagePath}
                alt="Jesus comforting a grieving man"
                className="artwork-image"
                data-testid="frame-home-gospel-artwork-image"
              />
            </figure>
          </Reveal>
        </Parallax>
      </section>

      <div className="gold-rule gold-rule--animated" />

      <section className="section" aria-labelledby="home-mission-heading">
        <div className="home-columns">
          <Reveal className="section-heading">
            <div className="eyebrow">Why Grace Aligned exists</div>
            <h2 className="display" id="home-mission-heading">
              Scripture made accessible, readable, and emotionally engaging.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
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
          </Reveal>
        </div>

        <div className="pillars">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} as="article" className="pillar" delay={index * 0.12}>
              <span className="pillar__icon">
                <pillar.icon size={22} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="display">{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="home-channels-heading">
        <Reveal className="section-heading">
          <div className="eyebrow">Stay connected</div>
          <h2 className="display" id="home-channels-heading">
            Instagram and YouTube
          </h2>
          <p>
            Instagram is active for scripture graphics, short videos, and
            direct messages. Planned videos will share scripture and explain
            the Gospel.
          </p>
        </Reveal>
        <Reveal className="hero-actions" delay={0.1}>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-testid="link-home-channel-instagram"
          >
            Instagram: grace_aligned
          </a>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            className="button secondary"
            data-testid="link-home-channel-youtube"
          >
            YouTube: Grace Aligned
          </a>
        </Reveal>
      </section>

      <Reveal as="section" className="cta-band" y={36}>
        <Feather className="cta-band__mark" size={28} strokeWidth={1.2} aria-hidden="true" />
        <div>
          <div className="eyebrow">Reach out directly</div>
          <h2 className="display">Have a question or a prayer request?</h2>
          <p>
            Write to Grace Aligned at{' '}
            <a href={mailtoUrl} className="cta-band__email" data-testid="link-home-email">
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="cta-band__actions">
          <a href={mailtoUrl} className="button button--shine" data-testid="button-home-email">
            <Mail size={16} aria-hidden="true" /> Email Us
          </a>
          <Link href="/contact.html" className="button secondary" data-testid="link-home-contact">
            Contact Page
          </Link>
        </div>
      </Reveal>
    </>
  );
}

function VerseMarquee() {
  const row = verses.map((verse) => (
    <span className="verse-marquee__item" key={verse.ref}>
      <span className="verse-marquee__text">&ldquo;{verse.text}&rdquo;</span>
      <span className="verse-marquee__ref">{verse.ref}</span>
      <span className="verse-marquee__cross" aria-hidden="true">✝</span>
    </span>
  ));
  return (
    <section className="verse-marquee" aria-label="Scripture verses">
      <div className="verse-marquee__track">
        <div className="verse-marquee__row">{row}</div>
        <div className="verse-marquee__row" aria-hidden="true">{row}</div>
      </div>
    </section>
  );
}
