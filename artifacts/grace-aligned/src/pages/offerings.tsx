import { youtubeChannelUrl } from '@/lib/social-links';

const instagramUrl = 'https://www.instagram.com/grace_aligned/';
const amazonBiblesUrl =
  'https://www.amazon.com/king-james-bible/s?k=king+james+bible';
const bookmarkAccessoriesUrl =
  'https://www.christianartgifts.com/bible-accessories/bookmarks';

export default function Offerings() {
  return (
    <>
      <section className="page-intro" aria-labelledby="offerings-heading">
        <div className="eyebrow">What Grace Aligned offers</div>
        <h1 className="display" id="offerings-heading">
          Social Media Content, Videos &amp; Recommended Products
        </h1>
        <p>
          Explore Grace Aligned&apos;s social media content, video channels, and
          affiliate recommended Bibles and products.
        </p>
        <div className="hero-actions">
          <a
            href={amazonBiblesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            data-testid="link-offerings-shop-bibles"
            aria-label="Shop recommended King James Bibles on Amazon; opens in a new tab"
          >
            Shop Recommended Bibles
          </a>
        </div>
      </section>

      <section className="offering-list" aria-label="Grace Aligned offerings">
        <article
          className="offering"
          data-testid="card-offering-instagram"
        >
          <div className="offering-number">01</div>
          <div>
            <h2>Instagram Verse Posts</h2>
            <p>
              Instagram posts featuring AI artwork and paintings paired with
              chosen scripture verses to evoke emotion and showcase biblical
              truth.
            </p>
            <span className="details">
              Active on Instagram (grace_aligned); serious tone with black and
              gold branding elements.
            </span>
            <div className="hero-actions">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
                data-testid="link-offering-instagram"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
          <div className="offering-meta">Social Media Content<br />Free to view</div>
        </article>

        <article className="offering" data-testid="card-offering-videos">
          <div className="offering-number">02</div>
          <div>
            <h2>YouTube &amp; Instagram Videos</h2>
            <p>
              Planned videos will share scripture and explain the Gospel.
              Short and long-form video content expanding on scripture, gospel
              messages, and featured Bible recommendations.
            </p>
            <span className="details">
              Planned expansion across YouTube (Grace Aligned) and Instagram;
              contains affiliate links in descriptions.
            </span>
            <div className="hero-actions">
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
                data-testid="link-offering-youtube"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
          <div className="offering-meta">Video Content<br />Free to watch</div>
        </article>

        <article
          className="offering"
          id="recommended-bibles"
          data-testid="card-offering-products"
        >
          <div className="offering-number">03</div>
          <div>
            <h2>Affiliate Product Links</h2>
            <p>
              Recommended Bibles and products featured in posts and videos,
            with vendor links provided below.
            </p>
            <span className="details">
            Primary revenue stream through affiliate marketing. Affiliate
            tracking is not confirmed for the supplied vendor URLs.
            </span>
            <div className="hero-actions">
            <a
              href={amazonBiblesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
              data-testid="link-offering-bibles-amazon"
              aria-label="Shop King James Bibles on Amazon; opens in a new tab"
            >
              Shop Recommended Bibles
            </a>
            <a
              href={bookmarkAccessoriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
              data-testid="link-offering-bookmarks"
              aria-label="Browse Bible bookmarks at Christian Art Gifts; opens in a new tab"
            >
              Bible Bookmarks
            </a>
            </div>
          </div>
          <div className="offering-meta">
          Vendor links<br />Prices set by vendor
          </div>
        </article>
      </section>
    </>
  );
}