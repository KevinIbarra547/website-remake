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
      <FrameRail edge="top" />
      <FrameRail edge="bottom" />
      <FramePilaster side="left" />
      <FramePilaster side="right" />
      {cornerPositions.map((position) => (
        <CornerOrnament key={position} position={position} />
      ))}
      <GothicCanopy />
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

function FramePilaster({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`site-ornament__pilaster site-ornament__pilaster--${side}`}>
      {[0, 1, 2].map((window) => (
        <svg
          key={window}
          className="site-ornament__lancet"
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

function GothicCanopy() {
  return (
    <svg
      className="site-ornament__gothic-canopy"
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