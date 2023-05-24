import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={`${inter.className} m-0 p-0 bg-base-200 min-w-screen min-h-screen`}>
        <div className="mx-2">
        <Nav />
        </div>
        {children}
      </body>
    </html>
  );
}
