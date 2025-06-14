'use client';

import { useState } from 'react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-200px)] py-12">
      <div className="w-full max-w-4xl">
        <div className="flex justify-end mb-4">
          <a
            href="https://docs.google.com/document/d/1IGfUK95RvH27w69DHn9MbRnEGOiO81gCszO9ULkL8wI/export?format=pdf"
            download="John_Zou_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-gray-200 hover:text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          )}
          <iframe
            src="https://drive.google.com/file/d/1IGfUK95RvH27w69DHn9MbRnEGOiO81gCszO9ULkL8wI/preview"
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
    </main>
  );
}
