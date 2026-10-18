import { Link } from 'wouter';

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="kicker">Page not found</span>
      <h1 className="display-xl">This path leads nowhere.</h1>
      <p className="lede">
        &ldquo;I am the way, the truth, and the life.&rdquo; John 14:6
      </p>
      <div className="btn-row">
        <Link href="/" className="btn btn--gold">Return home</Link>
      </div>
    </section>
  );
}
