import type { Metadata } from "next";
import "@/app/globals.css";
import { anekLatinExpanded, ppMonumentExtended } from "@/app/lib/fonts";

export const metadata: Metadata = {
  title: "TYTAN Technologies",
  description:
    "TYTAN specializes in cutting-edge defense products, adapting to the shifts in modern warfare. " +
    "Our focus is safeguarding freedom, peace, and democratic values; thus, our solution combines sleek hardware " +
    "with advanced AI for enhanced speed, range, and cost efficiency, developed collaboratively through lean production.",
  keywords:
    "Tytan Technologies, defense, autonomous drones, interceptor drones, munich defense startup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anekLatinExpanded.variable} ${ppMonumentExtended.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
