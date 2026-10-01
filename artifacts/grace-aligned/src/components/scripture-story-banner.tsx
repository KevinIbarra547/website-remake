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
    <aside
      className="scripture-story-banner"
      aria-label={`Scripture story: ${title}`}
      data-testid="banner-scripture-story"
    >
      <span className="scripture-story-banner__seal" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="21" />
          <path d="M24 17v17m0-13c-3-3-7-4-13-4v15c5 0 10 1 13 4m0-15c3-3 7-4 13-4v15c-5 0-10 1-13 4" />
          <path d="M24 8v5m-2.5-2.5h5" />
        </svg>
      </span>
      <span className="scripture-story-banner__content">
        <span className="scripture-story-banner__eyebrow">A story in Scripture</span>
        <span className="scripture-story-banner__title">{title}</span>
        <span className="scripture-story-banner__summary">{summary}</span>
      </span>
      <span className="scripture-story-banner__reference">{reference}</span>
    </aside>
  );
}