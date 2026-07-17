import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link className={`brand-logo${light ? " brand-logo--light" : ""}`} href="/" aria-label="Satyasee home">
      <span className="brand-logo__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="brand-logo__name">Satyasee</span>
      <span className="brand-logo__tagline">Rooted in India</span>
    </Link>
  );
}
