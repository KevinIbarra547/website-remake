import './_group.css';

export function Story() {
  return (
    <div className="preview-page preview-story">
      <div className="story-frame" aria-hidden="true">
        <div className="story-line story-line--outer" />
        <div className="story-line story-line--inner" />
        <svg className="story-rail" viewBox="0 0 1000 72" fill="none" stroke="currentColor">
          <path d="M8 36H190C214 36 229 29 244 13C255 2 270 6 270 18C270 28 258 31 251 24M190 36C214 36 229 43 244 59C255 70 270 66 270 54C270 44 258 41 251 48M270 36H337M992 36H810C786 36 771 29 756 13C745 2 730 6 730 18C730 28 742 31 749 24M810 36C786 36 771 43 756 59C745 70 730 66 730 54C730 44 742 41 749 48M730 36H663" />
          <path d="M86 36C98 20 110 20 122 36C110 52 98 52 86 36ZM878 36C890 20 902 20 914 36C902 52 890 52 878 36ZM316 36C326 26 336 26 346 36C336 46 326 46 316 36ZM654 36C664 26 674 26 684 36C674 46 664 46 654 36Z" />
        </svg>
        <svg
          className="story-rail story-rail--bottom"
          viewBox="0 0 1000 72"
          fill="none"
          stroke="currentColor"
        >
          <path d="M8 36H190C214 36 229 29 244 13C255 2 270 6 270 18C270 28 258 31 251 24M190 36C214 36 229 43 244 59C255 70 270 66 270 54C270 44 258 41 251 48M270 36H337M992 36H810C786 36 771 29 756 13C745 2 730 6 730 18C730 28 742 31 749 24M810 36C786 36 771 43 756 59C745 70 730 66 730 54C730 44 742 41 749 48M730 36H663" />
          <path d="M86 36C98 20 110 20 122 36C110 52 98 52 86 36ZM878 36C890 20 902 20 914 36C902 52 890 52 878 36ZM316 36C326 26 336 26 346 36C336 46 326 46 316 36ZM654 36C664 26 674 26 684 36C674 46 664 46 654 36Z" />
        </svg>
        <FramePilaster side="left" />
        <FramePilaster side="right" />
        {(['top-left', 'top-right'] as const).map((position) => (
          <svg
            key={position}
            className={`story-corner story-corner--${position}`}
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 61C5 45 10 34 22 28C32 23 38 16 38 5M3 61C20 59 32 53 37 42C42 31 48 25 61 24M22 28C14 27 10 21 11 11M37 42C39 53 47 58 60 56M38 5C48 7 53 13 52 22M61 24C59 14 62 8 61 4" />
            <path d="M8 49C14 41 20 38 28 40M24 57C31 53 34 47 34 39M15 16C20 21 26 23 32 22M47 51C47 43 51 37 58 34M47 12C43 18 39 22 33 25" />
            <path d="M16 34C19 30 24 30 27 34C24 38 19 38 16 34ZM39 31C42 27 47 27 50 31C47 35 42 35 39 31Z" />
            <circle cx="22" cy="34" r="1.3" />
            <circle cx="45" cy="31" r="1.3" />
            <circle cx="37" cy="42" r="1.6" />
          </svg>
        ))}
        <svg
          className="story-canopy"
          viewBox="0 0 280 160"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 158V99C8 61 54 35 140 5C226 35 272 61 272 99V158" />
          <path d="M22 158V101C22 69 65 45 140 18C215 45 258 69 258 101V158" />
          <path d="M8 142H22M258 142H272M18 112H29M251 112H262" />
        </svg>
        <div className="story-vignette">
          <span className="story-vignette-inner">
            <svg
              className="story-scene"
              viewBox="0 0 160 96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 78V39L80 10L145 39V78M15 39H37M123 39H145" />
              <path d="M24 78H136M34 45V76M126 45V76M41 76V46L80 28L119 46V76" />
              <path d="M80 3V8M68 8L63 3M92 8L97 3M62 15L68 19M98 15L92 19" />
              <g className="scene-star">
                <path d="M80 7V24M72 15H88M74 9L86 21M86 9L74 21" />
                <circle cx="80" cy="15" r="7" />
              </g>
              <path d="M27 76C39 68 49 68 59 76M102 76C112 68 122 68 133 76" />
              <circle cx="54" cy="45" r="5" />
              <path d="M49 43C50 37 59 37 60 43M48 51C43 58 43 68 40 76H67C66 64 64 55 58 50M46 57L39 64M62 57L69 64" />
              <path d="M47 43C47 38 51 34 57 34C63 35 65 39 64 45" />
              <circle cx="106" cy="45" r="5" />
              <path d="M101 43C102 37 111 37 112 43M100 51C94 57 93 67 91 76H119C117 65 116 55 110 50M97 57L90 63M114 56L121 62" />
              <path d="M96 44C96 38 101 34 108 34C114 35 117 40 116 46" />
              <path d="M71 69H89L86 79H74L71 69ZM68 69L80 62L92 69M68 66H92" />
              <circle cx="80" cy="59" r="4" />
              <path d="M75 65C77 63 83 63 85 65M69 84H91M73 88H87" />
              <circle cx="54" cy="45" r="9" opacity="0.45" />
              <circle cx="106" cy="45" r="9" opacity="0.45" />
            </svg>
          </span>
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
          The larger engraved frame gives each page its own biblical story, with the Nativity
          gathered beneath a guiding star.
        </p>
      </main>
    </div>
  );
}

function FramePilaster({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`story-pilaster story-pilaster--${side}`}>
      {[0, 1, 2].map((window) => (
        <svg
          key={window}
          className="story-lancet"
          viewBox="0 0 48 100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 96V52C5 30 18 17 24 5C30 17 43 30 43 52V96M10 92V53C10 35 20 25 24 16C28 25 38 35 38 53V92" />
          <circle cx="24" cy="51" r="10" />
          <circle cx="24" cy="51" r="3" />
          <path d="M24 39V63M12 51H36M15.5 42.5L32.5 59.5M32.5 42.5L15.5 59.5M24 61V83M15 68C17 76 20 80 24 83C28 80 31 76 33 68M5 88H43" />
        </svg>
      ))}
    </div>
  );
}