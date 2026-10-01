import './_group.css';

const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const;

export function Current() {
  return (
    <div className="preview-page preview-current">
      <div className="current-frame" aria-hidden="true">
        <div className="current-line current-line--outer" />
        <div className="current-line current-line--inner" />
        {positions.map((position) => (
          <svg
            key={position}
            className={`current-corner current-corner--${position}`}
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 60C5 43 12 31 27 27C17 26 12 18 13 6M4 60C22 59 34 51 37 36C40 47 48 51 60 47M27 27C39 24 46 16 44 5M37 36C47 33 55 25 59 14" />
            <path d="M13 45C18 39 23 37 29 39M31 50C36 54 43 55 50 52M19 17C22 21 26 23 31 23" />
            <circle cx="27" cy="27" r="1.5" />
            <circle cx="37" cy="36" r="1.5" />
          </svg>
        ))}
        <div className="current-vignette">
          <svg viewBox="0 0 96 64" fill="none" stroke="currentColor" strokeWidth="1.35">
            <path d="M13 52V27L48 7L83 27V52M13 27H25M71 27H83" />
            <path d="M48 2V7M39 7L36 3M57 7L60 3M34 2L38 8M62 2L58 8" />
            <circle cx="32" cy="29" r="4" />
            <path d="M26 35C25 40 24 45 22 51H39C39 43 37 37 32 34M28 27C29 23 35 23 37 27" />
            <circle cx="64" cy="29" r="4" />
            <path d="M58 35C54 40 55 46 54 51H73C71 44 70 37 64 34M60 27C61 23 67 23 69 27M62 33L64 36" />
            <circle cx="48" cy="41" r="3.5" />
            <path d="M40 45H56L53 52H43L40 45ZM39 45L48 40L57 45M19 52H77" />
          </svg>
        </div>
      </div>
      <header className="preview-header">
        <span className="preview-brand">Grace Aligned</span>
        <nav className="preview-nav" aria-label="Preview navigation">
          <span>Home</span>
          <span>Offerings</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>
      <main className="preview-main">
        <span className="preview-kicker">Grace Aligned / Gospel Truth</span>
        <h1 className="preview-title">Spreading Gospel Truth Through Scripture &amp; Art</h1>
        <p className="preview-copy">
          A quiet frame around every page, with a small gold illustration of the Nativity.
        </p>
      </main>
    </div>
  );
}