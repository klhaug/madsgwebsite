import type { Metadata } from "next";
import {EB_Garamond, Montserrat, Cutive_Mono} from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: "--font-ebGaramond",
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
});
const cutiveMono = Cutive_Mono({
  subsets: ['latin'],
  variable: "--font-cutiveMono",
  weight: '400'
});


export const metadata: Metadata = {
  title: "Mads Gjetmundsen - Hjemmeside",
  description: "Hjemmesiden til artisten Mads Gjetmundsen",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
       },
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nn">
      <body
        className={`${ebGaramond.variable} ${montserrat.variable} ${cutiveMono.variable} lg:overflow-auto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
