import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Instagram, Mail, Youtube } from 'lucide-react';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import { SiteOrnament } from '@/components/site-ornament';
import { motion, ScrollProgress } from '@/components/motion';
import {
  contactEmail,
  instagramUrl,
  mailtoUrl,
  youtubeChannelUrl,
} from '@/lib/social-links';

const navigation = [
  { href: '/', label: 'Home', testId: 'link-nav-home' },
  { href: '/offerings.html', label: 'Offerings', testId: 'link-nav-offerings' },
  { href: '/about.html', label: 'About', testId: 'link-nav-about' },
  { href: '/contact.html', label: 'Contact', testId: 'link-nav-contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <div className="site-shell">
      <ScrollProgress />
      <SiteOrnament />
      <SiteHeader />
      <motion.main
        key={location}
        className="site-main"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined}>
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
            {location === item.href && (
              <motion.span layoutId="nav-underline" className="nav-underline" />
            )}
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
            <Instagram size={14} aria-hidden="true" /> Instagram: grace_aligned
          </a>
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="link-footer-youtube"
          >
            <Youtube size={14} aria-hidden="true" /> YouTube: Grace Aligned
          </a>
          <a href={mailtoUrl} data-testid="link-footer-email">
            <Mail size={14} aria-hidden="true" /> {contactEmail}
          </a>
          <Link href="/contact.html" data-testid="link-footer-contact">
            Contact
          </Link>
          <Link href="/admin.html" data-testid="link-admin-inbox">
            Admin Inbox
          </Link>
        </div>
      </div>
    </footer>
  );
}