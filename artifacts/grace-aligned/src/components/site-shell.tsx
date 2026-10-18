import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Menu, X, Youtube } from 'lucide-react';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';
import { motion, ScrollProgress } from '@/components/motion';
import { SiteFrame } from '@/components/site-frame';
import {
  contactEmail,
  instagramUrl,
  mailtoUrl,
  youtubeChannelUrl,
} from '@/lib/social-links';

const navigation = [
  { href: '/', label: 'Home', testId: 'link-nav-home' },
  { href: '/shop.html', label: 'Shop', testId: 'link-nav-shop' },
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
      <SiteFrame />
      <SiteHeader />
      <motion.main
        key={location}
        className="site-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined}>
      <div className="site-header__inner">
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

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  href={item.href}
                  aria-current={location === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-brand" data-testid="text-footer-brand">
            <img src={logoPath} alt="" className="footer-mark" />
            © Grace Aligned
          </div>
          <p className="footer-copy" data-testid="text-footer-philosophy">
            Live in truth
          </p>
          <p className="footer-copy" data-testid="text-footer-tagline">
            Find your peace in the Prince of Peace
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Explore</span>
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <span className="footer-heading">Connect</span>
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
          <Link href="/admin.html" data-testid="link-admin-inbox">
            Admin Inbox
          </Link>
        </div>
      </div>
      <p className="disclosure" data-testid="text-affiliate-disclosure">
        Affiliate disclosure: Grace Aligned may earn a commission when you
        purchase through affiliate links, at no extra cost to you. As an Amazon
        Associate, Grace Aligned earns from qualifying purchases.
      </p>
    </footer>
  );
}
