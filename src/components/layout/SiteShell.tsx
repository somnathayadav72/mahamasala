"use client";

import { usePathname } from "next/navigation";
import AuthGuard from "@/components/layout/AuthGuard";
import CategoryIconsSprite from "@/components/ui/CategoryIconsSprite";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import ScrollAnimations from "@/components/layout/ScrollAnimations";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const isFullFooter =
    pathname === "/" || pathname.startsWith("/product/");

  if (isLogin) {
    return (
      <AuthGuard>
        {children}
      </AuthGuard>
    );
  }

  return (
    <AuthGuard>
      <CategoryIconsSprite />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer variant={isFullFooter ? "full" : "compact"} />
      <ScrollAnimations />
    </AuthGuard>
  );
}
