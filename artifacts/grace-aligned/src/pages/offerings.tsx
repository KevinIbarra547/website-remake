import { Link } from 'wouter';
import { ArrowRight, BookOpen, Instagram, PlayCircle } from 'lucide-react';
import vineFoilPath from '@assets/image_1790886615294.png';
import vinePanelPath from '@assets/image_1790886740045.png';
import bannerPath from '@assets/image_1790885784515.png';
import { Reveal, WordRise } from '@/components/motion';
import { instagramUrl, youtubeChannelUrl } from '@/lib/social-links';

const amazonBiblesUrl =
  'https://www.amazon.com/king-james-bible/s?k=king+james+bible';
const bookmarkAccessoriesUrl =
  'https://www.christianartgifts.com/bible-accessories/bookmarks';

export default function Offerings() {
  return (
    <>
      <section className="page-hero" aria-labelledby="offerings-heading">
        <Reveal className="kicker" y={10}>What Grace Aligned offers</Reveal>
        <h1 className="display-xl" id="offerings-heading">
          <WordRise text="Social Media Content, Videos & Recommended Products" />
        </h1>
        <Reveal delay={0.5}>
          <p className="lede">
            Explore Grace Aligned&apos;s social media content, video channels,
            and affiliate recommended Bibles and products.
          </p>
        </Reveal>
        <Reveal className="btn-row" delay={0.7}>
          <Link href="/shop.html" className="btn btn--gold btn--shine" data-testid="link-offerings-shop-bibles">
            Shop Recommended Bibles <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section className="offering-stack" aria-label="Grace Aligned offerings">
        <Reveal as="article" className="offering-row" data-testid="card-offering-instagram">
          <div className="offering-row__media">
            <img src={vineFoilPath} alt="" />
            <span className="offering-row__num">01</span>
          </div>
          <div className="offering-row__body">
            <span className="kicker"><Instagram size={14} aria-hidden="true" /> Social Media Content · Free to view</span>
            <h2 className="display-md">Instagram Verse Posts</h2>
            <p>
              Instagram posts featuring AI artwork and paintings paired with
              chosen scripture verses to evoke emotion and showcase biblical
              truth.
            </p>
            <span className="details">
              Active on Instagram (grace_aligned); serious tone with black and
              gold branding elements.
            </span>
            <div className="btn-row">
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-testid="link-offering-instagram">
                Follow on Instagram
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="article" className="offering-row offering-row--flip" data-testid="card-offering-videos">
          <div className="offering-row__media">
            <img src={vinePanelPath} alt="" />
            <span className="offering-row__num">02</span>
          </div>
          <div className="offering-row__body">
            <span className="kicker"><PlayCircle size={14} aria-hidden="true" /> Video Content · Free to watch</span>
            <h2 className="display-md">YouTube &amp; Instagram Videos</h2>
            <p>
              Planned videos will share scripture and explain the Gospel.
              Short and long-form video content expanding on scripture, gospel
              messages, and featured Bible recommendations.
            </p>
            <span className="details">
              Planned expansion across YouTube (Grace Aligned) and Instagram;
              contains affiliate links in descriptions.
            </span>
            <div className="btn-row">
              <a href={youtubeChannelUrl} target="_blank" rel="noreferrer" className="btn btn--ghost" data-testid="link-offering-youtube">
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="article" className="offering-row" id="recommended-bibles" data-testid="card-offering-products">
          <div className="offering-row__media">
            <img src={bannerPath} alt="" />
            <span className="offering-row__num">03</span>
          </div>
          <div className="offering-row__body">
            <span className="kicker"><BookOpen size={14} aria-hidden="true" /> Vendor links · Prices set by vendor</span>
            <h2 className="display-md">Affiliate Product Links</h2>
            <p>
              Recommended Bibles and products featured in posts and videos,
              with vendor links provided below.
            </p>
            <span className="details">
              Primary revenue stream through affiliate marketing.
            </span>
            <div className="btn-row">
              <Link href="/shop.html" className="btn btn--gold" data-testid="link-offering-shop">
                Browse all products
              </Link>
              <a href={amazonBiblesUrl} target="_blank" rel="sponsored noopener noreferrer" className="btn btn--ghost" data-testid="link-offering-bibles-amazon">
                King James Bibles
              </a>
              <a href={bookmarkAccessoriesUrl} target="_blank" rel="sponsored noopener noreferrer" className="btn btn--ghost" data-testid="link-offering-bookmarks">
                Bible Bookmarks
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
