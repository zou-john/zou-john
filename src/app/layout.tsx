'use client';

import { Crimson_Pro } from "next/font/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TypewriterText from './components/TypewriterText';
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  weight: ['200', '500'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentPath = pathname === '/' ? 'about' : pathname.slice(1);

  return (
    <html lang="en">
      <body 
        className={`${crimsonPro.variable} antialiased font-medium`}
        style={{
          color: '#ffffff',
          fontSize: '20px',
          lineHeight: 1.6,
          margin: 0,
          minHeight: '100%',
          overflowWrap: 'break-word'
        }}
      >
        <div className="min-h-screen p-8">
          <div className="max-w-4xl mx-auto">
            <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <h1 style={{ margin: 0, padding: 0 }} className="text-3xl font-medium">
                /home/zou-john/<TypewriterText key={currentPath} text={currentPath} delay={150} />
              </h1>
              <nav className="flex gap-8">
                <Link 
                  href="/about" 
                  className={`text-white transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === '/' || pathname === '/about' ? 'after:scale-x-100' : ''
                  }`}
                >
                  about
                </Link>
                <Link 
                  href="/resume" 
                  className={`text-white transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === '/resume' ? 'after:scale-x-100' : ''
                  }`}
                >
                  resume
                </Link>
                <Link 
                  href="/projects" 
                  className={`text-white transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === '/projects' ? 'after:scale-x-100' : ''
                  }`}
                >
                  projects
                </Link>
                <Link 
                  href="/blog" 
                  className={`text-white transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    pathname === '/blog' ? 'after:scale-x-100' : ''
                  }`}
                >
                  blog
                </Link>
              </nav>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
