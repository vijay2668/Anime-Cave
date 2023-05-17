import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Anime Cave",
  description: "Anime Cave"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/anime-cave-logo.svg" />
      </head>
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
