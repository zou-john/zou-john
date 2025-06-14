'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'about', path: '/about' },
    { name: 'resume', path: '/resume' },
    { name: 'projects', path: '/projects' },
    { name: 'blog', path: '/blog' }
  ];

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`font-extralight text-sm hover:text-gray-600 transition-colors ${
            pathname === item.path ? 'text-gray-800' : 'text-gray-400'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
} 