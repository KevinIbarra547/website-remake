import bannerPath from '@assets/image_1790812858324.png';
import animatedBannerPath from '@assets/generated_videos/grace-aligned-panel-highlights.gif';
import logoPath from '@assets/0_Screenshot_2026-09-28_1.17.45_PM_1790729723658.png';

export function HomeBrandBanner() {
  return (
    <div
      className="home-brand-banner"
      role="img"
      aria-label="An ornate gold arch of biblical scenes surrounding the Grace Aligned emblem."
      data-testid="home-brand-banner"
    >
      <picture className="home-brand-banner__picture">
        <source media="(prefers-reduced-motion: reduce)" srcSet={bannerPath} />
        <img
          className="home-brand-banner__art"
          src={animatedBannerPath}
          alt=""
          aria-hidden="true"
        />
      </picture>
      <div
        className="home-brand-banner__logo-wrap"
        aria-hidden="true"
        data-testid="home-brand-banner-logo"
      >
        <div className="home-brand-banner__logo-window">
          <img className="home-brand-banner__logo" src={logoPath} alt="" />
          <span className="home-brand-banner__logo-sheen" />
        </div>
      </div>
    </div>
  );
}