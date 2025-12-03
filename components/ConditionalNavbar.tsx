"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Hide navbar on embed page
  if (pathname === "/embed") {
    return null;
  }

  return <Navbar />;
}
