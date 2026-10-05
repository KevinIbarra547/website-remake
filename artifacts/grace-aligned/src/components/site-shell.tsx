import { Link, useLocation } from 'wouter';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import { SiteOrnament } from '@/components/site-ornament';
import { youtubeChannelUrl } from '@/lib/social-links';

const instagramUrl = 'https://www.instagram.com/grace_aligned/';

const navigation = [
  { href: '/', label: 'Home', testId: 'link-nav-home' },
  { href: '/offerings.html', label: 'Offerings', testId: 'link-nav-offerings' },
  { href: '/about.html', label: 'About', testId: 'link-nav-about' },
  { href: '/contact.html', label: 'Contact', testId: 'link-nav-contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <SiteOrnament />
      <SiteHeader />
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [location] = useLocation();

  return (
    <header className="site-header">
      <Link href="/" className="brand-link" data-testid="link-brand-home">
        <img
          src={logoPath}
          alt="Grace Aligned circular cross and vine emblem"
          className="brand-mark"
          data-testid="img-site-logo"
        />
        <span className="brand-name">Grace Aligned</span>
      </Link>

      <nav className="site-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            aria-current={location === item.href ? 'page' : undefined}
            data-testid={item.testId}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand" data-testid="text-footer-brand">
            © Grace Aligned
          </div>
          <p className="footer-copy" data-testid="text-footer-philosophy">
            Live in truth
          </p>
          <p className="footer-copy" data-testid="text-footer-tagline">
            Find your peace in the Prince of Peace
          </p>
          <p className="disclosure" data-testid="text-affiliate-disclosure">
            Affiliate disclosure: Grace Aligned may earn a commission when you
            purchase through affiliate links, at no extra cost to you. Not every
            vendor link is affiliate-tracked.
          </p>
        </div>

        <div className="footer-links">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-instagram"
          >
            Instagram: grace_aligned
          </a>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-youtube"
          >
            YouTube: Grace Aligned
          </a>
          <Link href="/contact.html" data-testid="link-footer-contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}