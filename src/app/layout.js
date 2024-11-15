import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header.jsx";

const poppinsRegular = localFont({
  src: "./fonts/Poppins-Regular.woff",
  variable: "--font-poppins-regular",
  weight: "100 900",
});

export const metadata = {
  title: "Shoply Goods",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.variable} bg-bg  antialiased`}>
        <Header />
        <main className="mx-4 md: lg:mx-20 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
