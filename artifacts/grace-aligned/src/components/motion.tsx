import { Fragment, type ReactNode, useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'article' | 'aside' | 'li';
  id?: string;
  'data-testid'?: string;
};

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      {...rest}
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/** Splits a heading into words that rise in one after another. */
export function WordRise({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="word-rise" aria-hidden="true">
            <motion.span
              className="word-rise__inner"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.8, delay: delay + index * 0.07, ease }}
            >
              {word}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </span>
  );
}

/** Gives a framed artwork a gentle scroll parallax. */
export function Parallax({
  children,
  className,
  distance = 40,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [distance, -distance]),
    { stiffness: 80, damping: 20 },
  );
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/** Thin gold bar across the top of the page that tracks reading progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
  );
}

/** Slow-drifting golden motes of light for hero backgrounds. */
export function GoldDust({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="gold-dust" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => {
        // Deterministic spread so the layout is stable between renders.
        const left = (index * 37) % 100;
        const size = 2 + ((index * 7) % 4);
        const duration = 9 + ((index * 5) % 9);
        const delay = -((index * 3.3) % duration);
        return (
          <span
            key={index}
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export { motion };
