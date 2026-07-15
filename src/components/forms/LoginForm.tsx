"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  getRedirectTarget,
  isAuthenticated,
  login,
} from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/");
    }
  }, [router]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    setStatus("loading");

    window.setTimeout(() => {
      const result = login(email, password);
      if (result.success) {
        setStatus("success");
        window.setTimeout(() => {
          router.push(getRedirectTarget());
        }, 600);
      } else {
        setStatus("idle");
        setError(result.message);
        setShake(true);
        window.setTimeout(() => setShake(false), 500);
      }
    }, 800);
  }

  return (
    <form
      className={`login-form${shake ? " shake" : ""}`}
      id="loginForm"
      onSubmit={handleSubmit}
    >
      <div className="input-group">
        <div className="input-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email address or phone number"
          id="email"
          required
        />
      </div>
      <div className="input-group">
        <div className="input-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          id="password"
          required
        />
        <button
          type="button"
          className="toggle-password"
          aria-label="Toggle password visibility"
          onClick={() => setShowPassword((v) => !v)}
        >
          {showPassword ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
      {error ? (
        <p id="loginError" className="login-error">
          {error}
        </p>
      ) : null}
      <div className="form-options">
        <a href="#" className="forgot-link" onClick={(e) => e.preventDefault()}>
          Forgot Password?
        </a>
      </div>
      <div className="login-hint">
        <strong>Demo Credentials</strong>
        admin@satyasee.com &nbsp;/&nbsp; 12345
      </div>
      <button
        type="submit"
        className="login-btn"
        disabled={status === "loading" || status === "success"}
        style={
          status === "loading"
            ? { opacity: 0.7 }
            : status === "success"
              ? {
                  background: "linear-gradient(135deg, #4caf50, #388e3c)",
                }
              : undefined
        }
      >
        {status === "loading"
          ? "Logging in..."
          : status === "success"
            ? "✓ Success!"
            : "Log In"}
      </button>
      <div className="divider">
        <span>or continue with</span>
      </div>
      <div className="social-buttons">
        <button type="button" className="social-btn">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>
        <button type="button" className="social-btn">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          Continue with Phone
        </button>
      </div>
      <p className="signup-link">
        New to Satyasee?{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Create Account
        </a>{" "}
        ›
      </p>
    </form>
  );
}
