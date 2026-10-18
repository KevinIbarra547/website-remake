import type { Product } from '@/data/products';

/** Illustrated leather-and-foil cover used as a product preview. */
export function BookCover({ cover }: { cover: Product['cover'] }) {
  return (
    <div
      className="book-cover"
      style={{ '--leather': cover.leather, '--foil': cover.foil } as React.CSSProperties}
      aria-hidden="true"
    >
      <span className="book-cover__spine" />
      <span className="book-cover__frame">
        <svg viewBox="0 0 24 32" className="book-cover__cross">
          <path d="M12 3v26M5 11h14" />
        </svg>
        <span className="book-cover__label">{cover.label}</span>
      </span>
      <span className="book-cover__ribbon" />
      <span className="book-cover__sheen" />
    </div>
  );
}
