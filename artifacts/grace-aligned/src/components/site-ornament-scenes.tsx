export function BibleScene({ route }: { route: string }) {
  const scene =
    route === '/offerings.html'
      ? 'loaves-and-fish'
      : route === '/about.html'
        ? 'burning-bush'
        : route === '/contact.html'
          ? 'samaritan-well'
          : 'nativity';

  return (
    <svg
      className="site-ornament__scene"
      viewBox="0 0 160 96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-scene={scene}
    >
      {scene === 'loaves-and-fish' ? (
        <LoavesAndFishScene />
      ) : scene === 'burning-bush' ? (
        <BurningBushScene />
      ) : scene === 'samaritan-well' ? (
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
      <path d="M75 65C77 63 83 63 85 65" />
      <path d="M69 84H91M73 88H87M34 83L39 80M126 83L121 80" />
      <circle cx="54" cy="45" r="9" opacity="0.45" />
      <circle cx="106" cy="45" r="9" opacity="0.45" />
    </>
  );
}

function LoavesAndFishScene() {
  return (
    <>
      <path d="M12 76C34 65 53 69 71 76M89 76C107 67 126 66 148 76" />
      <path className="scene-water" d="M13 84C24 79 35 79 46 84C57 89 68 89 79 84C90 79 101 79 112 84C123 89 134 89 147 83" />
      <g className="scene-fish">
        <path d="M9 34C20 22 35 22 47 34C35 46 20 46 9 34ZM10 34L3 27V41L10 34Z" />
        <circle cx="19" cy="33" r="1.3" fill="currentColor" />
      </g>
      <g className="scene-fish">
        <path d="M111 30C123 18 138 18 150 30C138 42 123 42 111 30ZM150 30L157 23V37L150 30Z" />
        <circle cx="140" cy="29" r="1.3" fill="currentColor" />
      </g>
      <circle cx="80" cy="35" r="6" />
      <path d="M73 43C67 50 67 61 65 71H95C93 60 93 50 87 43M71 51L62 59M89 51L98 58M73 43C76 39 84 39 87 43" />
      <path d="M78 42L80 54L82 42M80 54L74 61M80 54L86 61" />
      <path d="M67 74L72 57H88L93 74H67ZM64 74H96M70 71C76 75 84 75 90 71" />
      <path d="M72 56C73 51 78 49 81 53C85 48 91 51 90 56" />
      <path d="M73 52C76 47 84 47 88 52M77 49C79 45 84 45 86 49" />
      <circle cx="28" cy="60" r="4" />
      <circle cx="45" cy="55" r="4" />
      <circle cx="115" cy="56" r="4" />
      <circle cx="132" cy="61" r="4" />
      <path d="M22 72C23 66 25 64 28 64C32 64 34 67 35 72M39 69C40 62 42 59 45 59C49 59 51 63 52 69M109 70C110 63 112 60 115 60C119 60 121 64 122 70M126 74C127 68 129 65 132 65C136 65 138 69 139 74" />
      <path d="M70 37L73 34M90 37L87 34" />
      <path d="M14 52H30M22 45V59M130 48H146M138 41V55" opacity="0.8" />
    </>
  );
}

function BurningBushScene() {
  return (
    <>
      <path d="M13 82H147M28 77C46 71 57 72 70 78M89 78C105 71 120 71 137 78" />
      <path d="M46 75L57 34M51 57L37 43M54 46L67 34" />
      <circle cx="53" cy="42" r="5" />
      <path d="M47 41C48 34 58 33 60 41M48 49C42 56 38 64 35 73L57 76C60 66 63 56 58 49M43 56L35 63M58 56L67 59M38 73L31 80M55 76L62 80" />
      <path d="M44 52C48 57 55 59 61 55M44 53L31 38" />
      <path d="M36 38L30 31M28 80L34 80M60 80L66 80" />
      <path d="M102 79V60M102 70L90 60M103 70L116 58M97 65L88 67M108 65L119 67M101 61L95 54M106 60L113 52" />
      <path d="M91 79C94 71 93 66 89 61M118 78C116 70 118 65 123 61M88 59L82 55M121 58L128 54" />
      <g className="scene-flame">
        <path d="M102 58C94 51 94 42 101 36C100 29 105 25 109 20C112 29 119 33 116 42C124 48 118 56 111 60M101 50C99 46 101 42 104 39M111 52C115 48 115 44 112 40M106 56C103 51 105 47 108 43" />
        <path d="M102 46C105 40 106 35 105 30M111 44C111 38 113 34 116 31" opacity="0.75" />
      </g>
      <path d="M100 20V13M91 25L86 20M119 24L124 19M96 31L89 29M116 31L123 29" />
      <path d="M22 80L18 75M75 80L79 74M132 80L138 74" />
    </>
  );
}

function SamaritanWellScene() {
  return (
    <>
      <path d="M11 82H149M18 76C30 70 39 71 50 76M110 76C121 70 134 70 145 76" />
      <path d="M59 59H101L96 81H64L59 59ZM56 59H104M62 64H98M66 71H94" />
      <path className="scene-water" d="M68 76C73 73 78 73 83 76C88 79 93 79 98 76" />
      <path d="M80 58V31M80 35L70 25M80 37L90 27" />
      <path d="M68 24C73 20 87 20 92 24" />
      <circle cx="42" cy="39" r="5" />
      <path d="M36 39C37 32 47 31 49 39M37 46C31 53 29 64 27 74H54C53 62 50 52 46 46M34 54L25 61M49 53L59 58M37 46C41 49 46 49 49 46" />
      <path d="M34 37C32 32 36 27 42 27C48 27 52 32 51 38M36 31C39 27 46 27 49 32" />
      <circle cx="118" cy="38" r="5" />
      <path d="M112 38C113 31 123 30 125 38M113 45C107 52 106 63 105 74H132C131 61 128 51 122 45M110 53L101 59M126 52L136 59M113 45C117 48 122 48 125 45" />
      <path d="M110 36C108 30 113 25 119 25C125 26 129 31 128 38M112 29C117 25 123 26 126 30" />
      <path d="M59 57L54 52M101 57L106 52M80 29C74 24 72 18 76 14C81 17 84 23 80 29Z" />
      <path d="M72 14C75 11 78 10 81 10M88 17L94 14M68 21L63 18" opacity="0.72" />
      <path d="M73 81C77 84 84 84 88 81" />
    </>
  );
}