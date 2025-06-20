'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface TypewriterTextProps {
  text?: string;
  delay?: number;
}

export default function TypewriterText({ text, delay = 100 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const pathname = usePathname();
  
  const fullText = text || (pathname === '/blog/linear-regression' ? "linear-regression" : pathname.slice(1).replace(/\/$/, ''));
  const typingSpeed = delay || 100;

  useEffect(() => {
    let currentIndex = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    // Reset and start typing
    setDisplayText('');
    currentIndex = 0;
    type();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [pathname, text, fullText, typingSpeed]);

  return (
    <span className="text-gray-200 font-mono">
      {displayText}
    </span>
  );
}
