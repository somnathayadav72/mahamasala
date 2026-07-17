"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href="#range">Explore the range <span aria-hidden="true">↗</span></a>
        <button
          ref={triggerRef}
          className={`menu-toggle${open ? " is-open" : ""}`}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu__inner">
          <p className="eyebrow">Satyasee · rooted in India</p>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a href={item.href} key={item.href} onClick={close} style={{ "--menu-delay": `${index * 55}ms` }}>
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
          </nav>
          <p className="mobile-menu__note">A thoughtful spice collection for the food people remember.</p>
        </div>
      </div>
    </header>
  );
}
