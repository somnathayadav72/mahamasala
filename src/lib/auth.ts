/**
 * Client-side session auth (sessionStorage only).
 * Preserves original showcase login behaviour — no backend.
 */

const SESSION_KEY = "satyasee_auth";
const REDIRECT_KEY = "satyasee_redirect";
const VALID_EMAIL = "admin@satyasee.com";
const VALID_PASSWORD = "12345";
const SESSION_MS = 2 * 60 * 60 * 1000;

export type AuthResult = { success: boolean; message: string };

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof sessionStorage !== "undefined";
}

export function isAuthenticated(): boolean {
  if (!canUseStorage()) return false;
  const session = sessionStorage.getItem(SESSION_KEY);
  if (!session) return false;
  try {
    const data = JSON.parse(session) as {
      authenticated?: boolean;
      timestamp?: number;
    };
    if (Date.now() - (data.timestamp ?? 0) > SESSION_MS) {
      logout();
      return false;
    }
    return data.authenticated === true;
  } catch {
    return false;
  }
}

export function login(email: string, password: string): AuthResult {
  if (!email || !password) {
    return { success: false, message: "Please fill in all fields." };
  }
  if (email.trim().toLowerCase() !== VALID_EMAIL) {
    return { success: false, message: "Invalid email address." };
  }
  if (password !== VALID_PASSWORD) {
    return { success: false, message: "Incorrect password." };
  }
  if (canUseStorage()) {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        authenticated: true,
        email: email.trim().toLowerCase(),
        timestamp: Date.now(),
      })
    );
  }
  return { success: true, message: "Login successful!" };
}

export function logout(): void {
  if (canUseStorage()) sessionStorage.removeItem(SESSION_KEY);
}

export function setRedirectTarget(path: string): void {
  if (canUseStorage()) sessionStorage.setItem(REDIRECT_KEY, path);
}

export function getRedirectTarget(): string {
  if (!canUseStorage()) return "/";
  const target = sessionStorage.getItem(REDIRECT_KEY);
  sessionStorage.removeItem(REDIRECT_KEY);
  if (!target) return "/";
  // Map legacy .html paths if present
  if (target === "index.html") return "/";
  if (target.endsWith(".html")) {
    return "/" + target.replace(/\.html$/, "").replace(/^product-/, "product/");
  }
  return target.startsWith("/") ? target : `/${target}`;
}
