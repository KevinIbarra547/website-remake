import { useRef } from 'react';
import { Link } from 'wouter';
import { useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Mail,
  PlayCircle,
  ShoppingBag,
} from 'lucide-react';
import heroArtPath from '@assets/generated_images/grace-aligned-path-to-hope.png';
import bannerPath from '@assets/image_1790885784515.png';
import vinePanelPath from '@assets/image_1790886740045.png';
import vineFoilPath from '@assets/image_1790886615294.png';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import gospelImagePath from '@/assets/jesus-comforting.png';
import { BookCover } from '@/components/book-cover';
import { GoldDust, Reveal, WordRise, motion } from '@/components/motion';
import { affiliateUrl, products } from '@/data/products';
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

const gospelLines = [
  { lead: 'God has already', strong: 'paid the price.' },
  { lead: 'He has', strong: 'forgiven you.' },
  { lead: 'Jesus wants you to know', strong: 'His love.' },
];

const offerings = [
  {
    icon: Instagram,
    title: 'Instagram Verse Posts',
    copy: 'AI artwork and paintings paired with chosen scripture verses to evoke emotion and showcase biblical truth.',
    image: vineFoilPath,
    href: instagramUrl,
    cta: 'Follow on Instagram',
    external: true,
  },
  {
    icon: PlayCircle,
    title: 'YouTube & Instagram Videos',
    copy: 'Planned videos will share scripture and explain the Gospel, in short and long form.',
    image: vinePanelPath,
    href: youtubeChannelUrl,
    cta: 'Subscribe on YouTube',
    external: true,
  },
  {
    icon: ShoppingBag,
    title: 'Recommended Bibles',
    copy: 'The Bibles and products featured in posts and videos, gathered in one place.',
    image: bannerPath,
    href: '/shop.html',
    cta: 'Browse the shop',
    external: false,
  },
];

const gallery = [
  { src: heroArtPath, alt: 'A stone path leads through shadow toward golden dawn and a cross on a distant ridge.' },
  { src: gospelImagePath, alt: 'Jesus comforting a grieving man' },
  { src: bannerPath, alt: 'An ornate gold arch of biblical scenes.' },
  { src: vinePanelPath, alt: 'Gold grapevines climbing on black.' },
  { src: vineFoilPath, alt: 'Gold foil vine pattern on black paper.' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <VerseMarquee />
      <GospelStory />
      <Seal />
      <OfferingsSection />
      <FeaturedPicks />
      <Gallery />
      <Mission />
      <EmailCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="cine-hero" aria-labelledby="home-heading">
      <motion.div className="cine-hero__bg" style={{ y: imageY }}>
        <img
          src={heroArtPath}
          alt="A stone path leads through shadow toward golden dawn and a cross on a distant ridge."
          data-testid="frame-home-artwork-image"
        />
      </motion.div>
      <div className="cine-hero__shade" aria-hidden="true" />
      <GoldDust count={34} />

      <motion.div className="cine-hero__content" style={{ y: contentY, opacity: fade }}>
        <Reveal className="kicker" y={10} delay={0.1}>
          Grace Aligned · Gospel truth
        </Reveal>
        <h1 className="display-hero" id="home-heading">
          <WordRise text="Spreading Gospel Truth" delay={0.25} />
          <WordRise text="Through Scripture & Art" delay={0.55} className="display-hero__gold" />
        </h1>
        <Reveal delay={1}>
          <p className="lede" data-testid="text-home-introduction">
            Helping young adults find truth, purpose, and freedom through
            emotionally resonant Bible scripture paired with visual AI artwork.
          </p>
        </Reveal>
        <Reveal className="btn-row" delay={1.2}>
          <Link href="/shop.html" className="btn btn--gold btn--shine" data-testid="link-home-recommended-bibles">
            View Recommended Bibles <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-testid="link-home-instagram">
            <Instagram size={16} aria-hidden="true" /> Instagram
          </a>
          <a href={youtubeChannelUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-testid="link-home-intro-youtube">
            <PlayCircle size={16} aria-hidden="true" /> YouTube
          </a>
        </Reveal>
      </motion.div>

      <motion.div className="scroll-cue" style={{ opacity: fade }} aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
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

function GospelStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05]);

  return (
    <section ref={ref} className="story" aria-labelledby="home-message-copy">
      <div className="story__art">
        <div className="story__frame" data-testid="frame-home-gospel-artwork">
          <motion.img
            src={gospelImagePath}
            alt="Jesus comforting a grieving man"
            style={{ scale }}
            data-testid="frame-home-gospel-artwork-image"
          />
        </div>
      </div>
      <div className="story__copy">
        <Reveal className="kicker">The message</Reveal>
        <p className="story__lines" id="home-message-copy">
          {gospelLines.map((line, index) => (
            <motion.span
              key={line.strong}
              className="story__line"
              initial={{ opacity: 0.12, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.9, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
            >
              {line.lead} <strong className="gold-text">{line.strong}</strong>
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Seal() {
  return (
    <section
      className="seal-banner"
      role="img"
      aria-label="An ornate gold arch of biblical scenes surrounding the Grace Aligned emblem."
      data-testid="home-brand-banner"
    >
      <Reveal y={40}>
        <div className="seal-banner__art">
          <img src={bannerPath} alt="" />
          <motion.div
            className="seal-banner__logo"
            initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            data-testid="home-brand-banner-logo"
          >
            <img src={logoPath} alt="" />
            <span className="seal-banner__sheen" />
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

function OfferingsSection() {
  return (
    <section className="block" aria-labelledby="home-channels-heading">
      <Reveal className="block__head">
        <span className="kicker">What you'll find</span>
        <h2 className="display-lg" id="home-channels-heading">
          Free scripture content, and the Bibles behind it
        </h2>
      </Reveal>
      <div className="offer-cards">
        {offerings.map((item, index) => {
          const content = (
            <>
              <img src={item.image} alt="" className="offer-card__bg" />
              <span className="offer-card__shade" />
              <span className="offer-card__icon">
                <item.icon size={22} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="offer-card__cta">
                {item.cta} <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </>
          );
          return (
            <Reveal key={item.title} delay={index * 0.12}>
              {item.external ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="offer-card" data-testid={`link-home-offer-${index}`}>
                  {content}
                </a>
              ) : (
                <Link href={item.href} className="offer-card" data-testid={`link-home-offer-${index}`}>
                  {content}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedPicks() {
  const featured = products.filter((p) => p.featured);
  return (
    <section className="block block--panel" aria-labelledby="home-picks-heading">
      <Reveal className="block__head block__head--row">
        <div>
          <span className="kicker">Featured picks</span>
          <h2 className="display-lg" id="home-picks-heading">Recommended for your walk</h2>
        </div>
        <Link href="/shop.html" className="btn btn--ghost" data-testid="link-home-shop">
          See all products <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Reveal>
      <div className="pick-row">
        {featured.map((product, index) => (
          <Reveal key={product.id} delay={index * 0.12}>
            <a
              href={affiliateUrl(product.url)}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="pick"
              data-testid={`link-home-pick-${product.id}`}
            >
              <div className="pick__stage">
                <BookCover cover={product.cover} />
              </div>
              <span className="product-card__meta">{product.vendor}</span>
              <h3>{product.name}</h3>
              <p>{product.why}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['6%', '-28%']);
  return (
    <section ref={ref} className="gallery" aria-label="Grace Aligned artwork">
      <Reveal className="block__head gallery__head">
        <span className="kicker">The art</span>
        <h2 className="display-lg">Scripture you can feel</h2>
      </Reveal>
      <motion.div className="gallery__track" style={{ x }}>
        {gallery.map((item) => (
          <figure key={item.src} className="gallery__item">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </motion.div>
    </section>
  );
}

function Mission() {
  return (
    <section className="block mission" aria-labelledby="home-mission-heading">
      <Reveal className="block__head">
        <span className="kicker">Why Grace Aligned exists</span>
        <h2 className="display-lg" id="home-mission-heading">
          Scripture made accessible, readable, and emotionally engaging.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="statement">
          Grace Aligned shares gospel scripture and AI artwork for young adults
          seeking truth, purpose, and freedom from depression, lust, and dark
          worldly paths.
        </p>
        <p className="body-copy">
          The work is centered on loving Jesus, honoring the Trinity, and
          living in truth. Explore free social content, planned videos, and
          recommended Bibles and products.
        </p>
        <div className="btn-row">
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn btn--gold" data-testid="link-home-channel-instagram">
            Instagram: grace_aligned
          </a>
          <a href={youtubeChannelUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-testid="link-home-channel-youtube">
            YouTube: Grace Aligned
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function EmailCta() {
  return (
    <Reveal as="section" className="cta-band" y={36}>
      <div>
        <span className="kicker">Reach out directly</span>
        <h2 className="display-lg">Have a question or a prayer request?</h2>
        <p>
          Write to Grace Aligned at{' '}
          <a href={mailtoUrl} className="text-link" data-testid="link-home-email">
            {contactEmail}
          </a>
        </p>
      </div>
      <div className="btn-row">
        <a href={mailtoUrl} className="btn btn--gold btn--shine" data-testid="button-home-email">
          <Mail size={16} aria-hidden="true" /> Email Us
        </a>
        <Link href="/contact.html" className="btn btn--ghost" data-testid="link-home-contact">
          Contact Page
        </Link>
      </div>
    </Reveal>
  );
}
