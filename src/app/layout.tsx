import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Echelon 25",
  description:
    "Mechanical Engineering career fair organized by the Department of Mechanical Engineering, University of Moratuwa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <main>
          <Header />
          {children}
          <div id="footer">
            <Footer />
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
