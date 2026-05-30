import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// ৩ এবং ৪ নম্বর লাইনটি পরিবর্তন করে এভাবে লিখুন:
import AppNavbar from "@/components/Navbar";   // <--- মাঝখানে 'app' যুক্ত করা হয়েছে
import AppFooter from "@/components/AppFooter"; // <--- মাঝখানে 'app' যুক্ত করা হয়েছে

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hireloop - Smart Hiring Platform",
  description: "The AI-native career platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* bg-black এবং text-white নিশ্চিত করবে বডি পারফেক্ট ডার্ক মোড হচ্ছে */}
      <body className="min-h-full flex flex-col bg-black text-white">
        <AppNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <AppFooter></AppFooter>
      </body>
    </html>
  );
}