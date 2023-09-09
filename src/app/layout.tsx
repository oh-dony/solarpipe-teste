import type { Metadata } from "next";

import { ReactNode } from "react";
// Styles
import "@/assets/css/style.css";

export const metadata: Metadata = {
  title: "Solar",
  description:
    "Solução completa de Energia Solar Residencial, Empresarial e Industrial, para todo o Brasil. Fuja dos reajustes e comece a economizar na conta de energia!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
