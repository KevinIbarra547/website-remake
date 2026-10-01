import { HomeBrandBanner } from '@/components/home-brand-banner';

type ScriptureStoryBannerProps = {
  title: string;
  reference: string;
  summary: string;
};

export function ScriptureStoryBanner({
  title,
  reference,
  summary,
}: ScriptureStoryBannerProps) {
  return (
    <figure className="scripture-story-banner" data-testid="banner-scripture-story">
      <HomeBrandBanner testId="scripture-story-banner-artwork" />
      <figcaption className="scripture-story-banner__caption">
        <span className="scripture-story-banner__content">
          <span className="scripture-story-banner__eyebrow">A story in Scripture</span>
          <span className="scripture-story-banner__title">{title}</span>
          <span className="scripture-story-banner__summary">{summary}</span>
        </span>
        <span className="scripture-story-banner__reference">{reference}</span>
      </figcaption>
    </figure>
  );
}