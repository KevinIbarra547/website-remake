import artworkPath from '@assets/generated_images/grace-aligned-path-to-hope.png';

type ArtworkFrameProps = {
  className: string;
  caption: string;
  testId: string;
};

export function ArtworkFrame({
  className,
  caption,
  testId,
}: ArtworkFrameProps) {
  return (
    <figure
      className={`artwork-frame ${className}`}
      data-testid={testId}
      aria-label="Grace Aligned artwork"
    >
      <img
        src={artworkPath}
        alt="A stone path leads through shadow toward golden dawn and a cross on a distant ridge."
        className="artwork-image"
        data-testid={`${testId}-image`}
      />
      <figcaption className="artwork-caption">{caption}</figcaption>
    </figure>
  );
}