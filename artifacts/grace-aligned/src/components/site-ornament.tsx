import { useLocation } from 'wouter';
import { BibleScene } from '@/components/site-ornament-scenes';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const cornerPositions: CornerPosition[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
];

export function SiteOrnament() {
  const [location] = useLocation();

  return (
    <div
      className="site-ornament"
      aria-hidden="true"
      data-testid="site-ornament-frame"
      data-scene={sceneForRoute(location)}
    >
      <div className="site-ornament__outer-line" />
      <div className="site-ornament__inner-line" />
      <GothicOuterArch />
      <FrameRail edge="top" />
      <FrameRail edge="bottom" />
      <SideVine side="left" />
      <SideVine side="right" />
      {cornerPositions.map((position) => (
        <CornerOrnament key={position} position={position} />
      ))}
      <GothicCanopy />
      <ChurchFinial />
      <div className="site-ornament__vignette" data-scene={sceneForRoute(location)}>
        <span className="site-ornament__vignette-inner">
          <BibleScene route={location} />
        </span>
      </div>
    </div>
  );
}

function sceneForRoute(route: string) {
  switch (route) {
    case '/offerings.html':
      return 'loaves-and-fish';
    case '/about.html':
      return 'burning-bush';
    case '/contact.html':
      return 'samaritan-well';
    default:
      return 'nativity';
  }
}

function GothicOuterArch() {
  return (
    <svg
      className="site-ornament__outer-arch"
      viewBox="0 0 1200 200"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 190V112C12 67 183 31 600 5C1017 31 1188 67 1188 112V190" />
      <path d="M28 190V116C28 76 203 47 600 22C997 47 1172 76 1172 116V190" />
      <path d="M12 168H28M1172 168H1188M32 123H48M1152 123H1168M55 190V159M1145 190V159" />
      <path className="site-ornament__arch-glint" pathLength={100} d="M12 190V112C12 67 183 31 600 5C1017 31 1188 67 1188 112V190" />
      <path className="site-ornament__arch-glint" pathLength={100} d="M28 190V116C28 76 203 47 600 22C997 47 1172 76 1172 116V190" />
    </svg>
  );
}

function SideVine({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`site-ornament__vine site-ornament__vine--${side}`}>
      <svg
        className="site-ornament__vine-art"
        viewBox="0 0 100 720"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 713C64 677 36 646 50 607C65 568 36 539 51 501C66 462 35 431 51 393C66 354 35 324 50 286C65 247 35 217 51 177C66 138 39 105 51 70C56 52 52 30 49 12" />
        <path d="M50 615C34 601 24 583 21 561M50 615C67 601 77 584 80 562M50 518C33 502 22 484 19 462M50 518C67 502 77 484 80 462M51 421C35 406 25 387 22 366M51 421C67 405 77 387 79 366M50 324C34 309 24 290 22 269M50 324C66 308 76 290 79 269M50 226C35 211 26 193 25 172M50 226C65 210 75 192 77 172M51 126C38 112 32 96 33 78M51 126C64 111 70 95 69 77" />
        <path d="M20 569C29 565 36 558 36 548C27 548 20 555 20 565M80 569C71 565 64 558 64 548C73 548 80 555 80 565M18 470C27 466 34 459 34 449C25 449 18 456 18 466M80 470C71 466 64 459 64 449C73 449 80 456 80 466M21 374C30 370 37 363 37 353C28 353 21 360 21 370M79 374C70 370 63 363 63 353C72 353 79 360 79 370M21 277C30 273 37 266 37 256C28 256 21 263 21 273M79 277C70 273 63 266 63 256C72 256 79 263 79 273M24 180C33 176 40 169 40 159C31 159 24 166 24 176M77 180C68 176 61 169 61 159C70 159 77 166 77 176M32 85C40 81 45 74 45 65C37 65 31 71 31 80M69 85C61 81 56 74 56 65C64 65 70 71 70 80" />
        <path d="M23 562L31 554M77 562L69 554M21 463L29 455M77 463L69 455M24 367L32 359M76 367L68 359M24 270L32 262M76 270L68 262M27 173L35 165M74 173L66 165M35 80L41 71M66 80L59 71" />
      </svg>
    </div>
  );
}

function GothicCanopy() {
  return (
    <svg
      className="site-ornament__gothic-canopy"
      viewBox="0 0 320 190"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 188V112C12 68 67 36 160 5C253 36 308 68 308 112V188" />
      <path d="M27 188V114C27 75 77 47 160 20C243 47 293 75 293 114V188" />
      <path d="M12 166H27M293 166H308M21 124H36M284 124H299M40 188V161M280 188V161" />
      <path className="site-ornament__canopy-glint" pathLength={100} d="M12 188V112C12 68 67 36 160 5C253 36 308 68 308 112V188" />
      <path className="site-ornament__canopy-glint" pathLength={100} d="M27 188V114C27 75 77 47 160 20C243 47 293 75 293 114V188" />
    </svg>
  );
}

function ChurchFinial() {
  return (
    <svg
      className="site-ornament__finial"
      viewBox="0 0 48 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 4V60M10 19H38M18 12H30V19M18 26H30M14 19V25M34 19V25" />
      <circle cx="24" cy="19" r="3.2" />
      <path d="M19 57L24 62L29 57" />
    </svg>
  );
}

function CornerOrnament({ position }: { position: CornerPosition }) {
  return (
    <svg
      className={`site-ornament__corner site-ornament__corner--${position}`}
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

function FrameRail({ edge }: { edge: 'top' | 'bottom' }) {
  return (
    <svg
      className={`site-ornament__rail site-ornament__rail--${edge}`}
      viewBox="0 0 1000 72"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 36H190C214 36 229 29 244 13C255 2 270 6 270 18C270 28 258 31 251 24M190 36C214 36 229 43 244 59C255 70 270 66 270 54C270 44 258 41 251 48M270 36H337M992 36H810C786 36 771 29 756 13C745 2 730 6 730 18C730 28 742 31 749 24M810 36C786 36 771 43 756 59C745 70 730 66 730 54C730 44 742 41 749 48M730 36H663" />
      <path d="M86 36C98 20 110 20 122 36C110 52 98 52 86 36ZM878 36C890 20 902 20 914 36C902 52 890 52 878 36ZM316 36C326 26 336 26 346 36C336 46 326 46 316 36ZM654 36C664 26 674 26 684 36C674 46 664 46 654 36Z" />
      <circle cx="42" cy="36" r="3" />
      <circle cx="958" cy="36" r="3" />
      <circle cx="365" cy="36" r="2" />
      <circle cx="635" cy="36" r="2" />
    </svg>
  );
}