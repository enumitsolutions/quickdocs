"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/shared/Footer";
import InfoBar from "@/components/shared/InfoBar";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideFooter = ["/generate-docs/ask"].includes(pathname);

  return (
    <>
      {!hideFooter && <InfoBar />}
      {!hideFooter && <Navbar />}
      {children}
      {!hideFooter && <Footer />}
      <Toaster />
    </>
  );
}
