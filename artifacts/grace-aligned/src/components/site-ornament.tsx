import { useLocation } from 'wouter';

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
      {cornerPositions.map((position) => (
        <CornerOrnament key={position} position={position} />
      ))}
      <div className="site-ornament__vignette">
        <BibleScene route={location} />
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
      <path d="M4 60C5 43 12 31 27 27C17 26 12 18 13 6M4 60C22 59 34 51 37 36C40 47 48 51 60 47M27 27C39 24 46 16 44 5M37 36C47 33 55 25 59 14" />
      <path d="M13 45C18 39 23 37 29 39M31 50C36 54 43 55 50 52M19 17C22 21 26 23 31 23" />
      <circle cx="27" cy="27" r="1.5" />
      <circle cx="37" cy="36" r="1.5" />
    </svg>
  );
}

function BibleScene({ route }: { route: string }) {
  return (
    <svg
      className="site-ornament__scene"
      viewBox="0 0 96 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {route === '/offerings.html' ? (
        <LoavesAndFishScene />
      ) : route === '/about.html' ? (
        <BurningBushScene />
      ) : route === '/contact.html' ? (
        <SamaritanWellScene />
      ) : (
        <NativityScene />
      )}
    </svg>
  );
}

function NativityScene() {
  return (
    <>
      <path d="M13 52V27L48 7L83 27V52M13 27H25M71 27H83" />
      <path d="M48 2V7M39 7L36 3M57 7L60 3M34 2L38 8M62 2L58 8" />
      <circle cx="32" cy="29" r="4" />
      <path d="M26 35C25 40 24 45 22 51H39C39 43 37 37 32 34M28 27C29 23 35 23 37 27" />
      <circle cx="64" cy="29" r="4" />
      <path d="M58 35C54 40 55 46 54 51H73C71 44 70 37 64 34M60 27C61 23 67 23 69 27M62 33L64 36" />
      <circle cx="48" cy="41" r="3.5" />
      <path d="M40 45H56L53 52H43L40 45ZM39 45L48 40L57 45M19 52H77" />
    </>
  );
}

function LoavesAndFishScene() {
  return (
    <>
      <path d="M9 25C16 17 25 17 32 25C25 33 16 33 9 25ZM9 25L4 20V30L9 25ZM64 22C71 14 80 14 87 22C80 30 71 30 64 22ZM64 22L59 17V27L64 22Z" />
      <circle cx="15" cy="24" r="1" />
      <circle cx="70" cy="21" r="1" />
      <path d="M31 37L37 51H60L66 37M35 37C38 32 43 31 48 35C53 31 59 32 62 37M31 37H66M36 51C42 55 55 55 61 51" />
      <path d="M38 36C38 32 42 29 46 31C48 26 56 28 56 34V37M43 35L44 33M52 34L53 32" />
      <path d="M42 39V48M49 39V48M56 39V48M20 43H27M23 40V46M74 42H84M79 38V47" />
    </>
  );
}

function BurningBushScene() {
  return (
    <>
      <path d="M25 20V54M23 20L27 17M20 54H31" />
      <circle cx="25" cy="23" r="4" />
      <path d="M21 28C16 34 18 44 15 53H34C31 45 33 35 27 28M20 35L15 39M30 34L35 38" />
      <path d="M66 53V39M66 44L57 36M66 45L75 35M62 42L55 42M70 41L78 42M66 38C62 34 63 30 66 27C69 31 71 34 66 38ZM57 36C52 33 53 29 56 27C60 30 61 33 57 36ZM75 35C73 31 76 28 80 28C80 32 79 35 75 35ZM60 52H73" />
      <path d="M51 52C54 48 55 44 54 40M80 52C78 48 78 44 80 41M50 35L48 31M83 37L86 33M66 22V18" />
      <path d="M40 53H89" />
    </>
  );
}

function SamaritanWellScene() {
  return (
    <>
      <path d="M36 39H60L57 53H39L36 39ZM34 39H62M39 43H57" />
      <path d="M48 39V20L55 15M48 22L40 16M48 22L56 26" />
      <circle cx="48" cy="13" r="4" />
      <path d="M43 18C39 23 40 30 38 37M53 18C57 23 57 29 60 37M40 25L34 31M56 25L62 30" />
      <circle cx="24" cy="25" r="4" />
      <path d="M20 30C16 36 18 44 15 53H33C31 45 32 36 27 30M19 37L14 41M29 37L35 40M26 34L35 30" />
      <path d="M13 53H36M60 53H83M35 16C38 13 41 12 44 12" />
    </>
  );
}