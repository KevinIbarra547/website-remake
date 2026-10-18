import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Info } from 'lucide-react';
import { BookCover } from '@/components/book-cover';
import { Reveal, WordRise, motion } from '@/components/motion';
import {
  type ProductCategory,
  affiliateUrl,
  categories,
  products,
} from '@/data/products';

type Filter = 'All' | ProductCategory;

export default function Shop() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <section className="page-hero" aria-labelledby="shop-heading">
        <Reveal className="kicker" y={10}>Recommended by Grace Aligned</Reveal>
        <h1 className="display-xl" id="shop-heading">
          <WordRise text="Bibles & tools for your walk" />
        </h1>
        <Reveal delay={0.4}>
          <p className="lede">
            The Bibles and products featured in Grace Aligned posts and videos,
            gathered in one place. Every pick is chosen to help you read,
            study, and live in truth.
          </p>
        </Reveal>
        <Reveal delay={0.55} className="disclosure-chip">
          <Info size={15} aria-hidden="true" />
          <span data-testid="text-shop-disclosure">
            As an Amazon Associate, Grace Aligned earns from qualifying
            purchases, at no extra cost to you. Prices are set by each vendor.
          </span>
        </Reveal>
      </section>

      <div className="filter-bar" role="tablist" aria-label="Filter products">
        {(['All', ...categories] as Filter[]).map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={filter === option}
            className="filter-chip"
            onClick={() => setFilter(option)}
            data-testid={`filter-${option.toLowerCase()}`}
          >
            {filter === option && (
              <motion.span layoutId="filter-pill" className="filter-chip__pill" />
            )}
            <span>{option}</span>
          </button>
        ))}
      </div>

      <motion.section layout className="product-grid" aria-label="Recommended products">
        <AnimatePresence mode="popLayout">
          {visible.map((product, index) => (
            <motion.article
              layout
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              data-testid={`card-product-${product.id}`}
            >
              <div className="product-card__stage">
                <BookCover cover={product.cover} />
              </div>
              <div className="product-card__body">
                <span className="product-card__meta">
                  {product.category} · {product.vendor}
                </span>
                <h2>{product.name}</h2>
                <p>{product.why}</p>
                <a
                  href={affiliateUrl(product.url)}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn btn--ghost"
                  data-testid={`link-product-${product.id}`}
                  aria-label={`View ${product.name} on ${product.vendor}; opens in a new tab`}
                >
                  View on {product.vendor} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
