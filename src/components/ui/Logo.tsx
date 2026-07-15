import Link from "next/link";

function LogoMark() {
  return (
    <>
      <svg
        className="logo-leaves"
        viewBox="0 0 60 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M22 14 Q24 6 28 8 Q26 14 22 14Z" fill="#e8734a" />
        <path d="M28 12 Q32 4 36 8 Q34 14 28 12Z" fill="#f4a574" />
        <path d="M36 12 Q38 4 42 8 Q40 14 36 12Z" fill="#7a9e6b" />
      </svg>
      <span className="brand-name">Satyasee</span>
      <span className="brand-tagline">✦ ROOTED IN INDIA ✦</span>
    </>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="navbar-logo">
      <LogoMark />
    </Link>
  );
}
