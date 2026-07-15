import type { Metadata } from "next";
import LoginForm from "@/components/forms/LoginForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Login",
  description: `Log in to your ${siteConfig.name} account to continue your spice journey.`,
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-visual">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/login.png"
          alt="Satyasee spices — garam masala and coriander pouches with spices"
          className="login-visual-img"
        />
        <div className="login-visual-overlay">
          <h2 className="login-visual-title">Welcome back</h2>
          <p className="login-visual-sub">Log in to continue your spice journey</p>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-form-wrap">
          <div className="login-brand">
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
            <h1 className="brand-name">Satyasee</h1>
            <p className="brand-tagline">✦ ROOTED IN INDIA ✦</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
