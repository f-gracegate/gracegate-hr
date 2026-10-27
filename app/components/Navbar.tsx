"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/", active: true },
  { label: "Features", href: "#features", dropdown: ["Core HR", "Payroll", "Time Off", "Performance"] },
  { label: "Solutions", href: "#solutions", dropdown: ["Startups", "Mid-size", "Remote Teams"] },
  { label: "Enterprise", href: "#enterprise" },
];

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link href="/" className="nav-logo" aria-label="Gracegate HR home">
          <Image src="/gracegate-logo.png" alt="GraceGate" width={662} height={120} priority />
        </Link>

        <ul className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <li key={l.label} className={l.dropdown ? "has-dropdown" : undefined}>
              <Link href={l.href} className={l.active ? "active" : undefined}>
                {l.label}
                {l.dropdown && <Chevron />}
              </Link>
              {l.dropdown && (
                <div className="dropdown">
                  {l.dropdown.map((d) => (
                    <a key={d} href={l.href}>{d}</a>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="mobile-only"><a href="#login">Log in</a></li>
        </ul>

        <div className="nav-actions">
          <a href="#login" className="login">Log in</a>
          <a href="#signup" className="btn btn-dark btn-sm">Sign Up Free</a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  );
}
