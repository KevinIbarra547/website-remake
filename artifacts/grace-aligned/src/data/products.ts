/**
 * Grace Aligned recommended products.
 *
 * To add a product, copy one entry and change its fields. `url` can be any
 * vendor link; Amazon links automatically get the Associates tag below
 * appended, so every click is credited.
 */

// TODO: set to the owner's Amazon Associates tracking ID (e.g. "gracealigned-20").
export const amazonAssociateTag = '';

export type ProductCategory = 'Bibles' | 'Study' | 'Accessories';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  vendor: string;
  url: string;
  why: string;
  /** Colors for the illustrated cover shown in place of a product photo. */
  cover: { leather: string; foil: string; label: string };
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'kjv-classic',
    name: 'King James Bible',
    category: 'Bibles',
    vendor: 'Amazon',
    url: 'https://www.amazon.com/s?k=king+james+bible',
    why: 'The translation Grace Aligned quotes from. Timeless language, reverent tone.',
    cover: { leather: '#1b1712', foil: '#d9b970', label: 'Holy Bible' },
    featured: true,
  },
  {
    id: 'kjv-large-print',
    name: 'KJV Large Print Bible',
    category: 'Bibles',
    vendor: 'Amazon',
    url: 'https://www.amazon.com/s?k=kjv+large+print+bible',
    why: 'Easier on the eyes for long reading sessions and daily devotion.',
    cover: { leather: '#3a1f1a', foil: '#e2c27f', label: 'Holy Bible' },
  },
  {
    id: 'kjv-study',
    name: 'KJV Study Bible',
    category: 'Study',
    vendor: 'Amazon',
    url: 'https://www.amazon.com/s?k=kjv+study+bible',
    why: 'Notes and context alongside the text, for going deeper into each verse.',
    cover: { leather: '#14202a', foil: '#d6c08a', label: 'Study Bible' },
    featured: true,
  },
  {
    id: 'journaling-bible',
    name: 'KJV Journaling Bible',
    category: 'Study',
    vendor: 'Amazon',
    url: 'https://www.amazon.com/s?k=kjv+journaling+bible',
    why: 'Wide margins to write prayers, reflections, and what God is teaching you.',
    cover: { leather: '#2b2a24', foil: '#cdb579', label: 'Journal' },
  },
  {
    id: 'bookmarks',
    name: 'Bible Bookmarks',
    category: 'Accessories',
    vendor: 'Christian Art Gifts',
    url: 'https://www.christianartgifts.com/bible-accessories/bookmarks',
    why: 'Keep your place and carry a favorite verse with you.',
    cover: { leather: '#201a14', foil: '#d9b970', label: 'Bookmark' },
    featured: true,
  },
  {
    id: 'highlighters',
    name: 'Bible Highlighters',
    category: 'Accessories',
    vendor: 'Amazon',
    url: 'https://www.amazon.com/s?k=bible+highlighters+no+bleed',
    why: 'No-bleed highlighters made for thin Bible pages.',
    cover: { leather: '#191c18', foil: '#d2bd84', label: 'Highlight' },
  },
];

export const categories: ProductCategory[] = ['Bibles', 'Study', 'Accessories'];

/** Appends the Associates tag to Amazon links so purchases are credited. */
export function affiliateUrl(url: string) {
  if (!amazonAssociateTag) return url;
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.endsWith('amazon.com')) return url;
    parsed.searchParams.set('tag', amazonAssociateTag);
    return parsed.toString();
  } catch {
    return url;
  }
}
