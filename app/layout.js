import { Playfair_Display, Manrope } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import PageBackground from "../components/PageBackground";

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Аура Дент — Естетична дентална медицина във Варна",
  description:
    "Съвременна дентална грижа с 3D прецизност. Запазете час онлайн.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg" className={`${serif.variable} ${sans.variable}`}>
     <body className="relative">
        <PageBackground />
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}