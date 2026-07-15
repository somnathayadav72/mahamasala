"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { isAuthenticated, setRedirectTarget } from "@/lib/auth";

const PUBLIC_PATHS = ["/login"];

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const isPublic = PUBLIC_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  useEffect(() => {
    if (!mounted || isPublic) return;

    if (!isAuthenticated()) {
      setRedirectTarget(pathname || "/");
      router.replace("/login");
    }
  }, [pathname, router, isPublic, mounted]);

  // Avoid SSR/hydration mismatch and flash of protected content
  if (!mounted) return null;

  if (isPublic) return <>{children}</>;

  if (!isAuthenticated()) return null;

  return <>{children}</>;
}
