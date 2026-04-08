import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  style: ['italic', 'normal'] 
})

const geistSans = Geist({ 
  variable: "--font-geist-sans", 
  subsets: ["latin"] 
});

const geistMono = Geist_Mono({ 
  variable: "--font-geist-mono", 
  subsets: ["latin"] 
});

const baskerville = Libre_Baskerville({ 
  variable: "--font-baskerville", 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  style: ["italic", "normal"] 
});

export const metadata: Metadata = {
  title: "The Laboratory | Portfolio",
  description: "Physics, Robotics, and Engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baskerville.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-500">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <Navbar />
          {/* THE FIX: We added a mask-image gradient. 
              It stays transparent for the first 40px, then fades to solid black 
              by 150px. This prevents text from ever touching your navbar.
          */}
          <main className="flex-grow [mask-image:linear-gradient(to_bottom,transparent_40px,black_150px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
