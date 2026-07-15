"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { logout } from "@/lib/auth";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement | null;
      if (!navbar) return;
      navbar.style.boxShadow =
        window.pageYOffset > 50 ? "0 2px 20px rgba(0,0,0,0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    setMenuOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }

  function handleLogout(e: React.MouseEvent) {
    e.preventDefault();
    logout();
    router.push("/login");
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="navbar">
      <button
        type="button"
        className={`mobile-menu-btn${menuOpen ? " active" : ""}`}
        id="mobileMenuBtn"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span />
      </button>

      <Logo />

      <ul
        className={`nav-links${menuOpen ? " mobile-active" : ""}`}
        id="navLinks"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-icons">
        <a href="#" aria-label="Search" onClick={(e) => e.preventDefault()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </a>
        <a
          href="#"
          id="logoutBtn"
          aria-label="Logout"
          title="Logout"
          onClick={handleLogout}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Cart"
          className="cart-icon"
          onClick={(e) => e.preventDefault()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="cart-badge">2</span>
        </a>
      </div>
    </nav>
  );
}
