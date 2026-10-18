import grapeVineStrip from '@/assets/grape-vine-side.png';

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const corners: Corner[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

/**
 * Gold line-art frame fixed to the edges of the viewport: thin double border,
 * filigree corners, and the grapevine strips down each side. Purely
 * decorative — it never takes pointer events or affects layout.
 */
export function SiteFrame() {
  const vine = { '--vine': `url("${grapeVineStrip}")` } as React.CSSProperties;

  return (
    <div className="site-frame" aria-hidden="true" data-testid="site-ornament-frame">
      <div className="site-frame__line site-frame__line--outer" />
      <div className="site-frame__line site-frame__line--inner" />
      {(['left', 'right'] as const).map((side) => (
        <div key={side} className={`site-frame__vine site-frame__vine--${side}`} style={vine}>
          <div className="site-frame__vine-art" />
          <div className="site-frame__vine-glint" />
        </div>
      ))}
      {corners.map((position) => (
        <CornerOrnament key={position} position={position} />
      ))}
    </div>
  );
}

function CornerOrnament({ position }: { position: Corner }) {
  return (
    <svg
      className={`site-frame__corner site-frame__corner--${position}`}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 61C5 45 10 34 22 28C32 23 38 16 38 5M3 61C20 59 32 53 37 42C42 31 48 25 61 24M22 28C14 27 10 21 11 11M37 42C39 53 47 58 60 56M38 5C48 7 53 13 52 22M61 24C59 14 62 8 61 4" />
      <path d="M8 49C14 41 20 38 28 40M24 57C31 53 34 47 34 39M15 16C20 21 26 23 32 22M47 51C47 43 51 37 58 34M47 12C43 18 39 22 33 25M52 57C52 51 55 47 61 44" />
      <path d="M16 34C19 30 24 30 27 34C24 38 19 38 16 34ZM39 31C42 27 47 27 50 31C47 35 42 35 39 31Z" />
      <circle cx="22" cy="34" r="1.3" />
      <circle cx="45" cy="31" r="1.3" />
      <circle cx="37" cy="42" r="1.6" />
    </svg>
  );
}
