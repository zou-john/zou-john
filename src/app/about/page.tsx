'use client';

import Image from 'next/image';
import SocialIcons from '../components/SocialIcons';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="relative w-48 h-48 mb-8">
        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src="/zou-john/profile.jpg"
            alt="John Zou"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <h2 className="text-4xl font-medium mb-6">Hi, Im John</h2>
      <div className="max-w-2xl text-left">
        <p className="text-lg leading-relaxed text-gray-200 font-sans mb-4">
          I am a masters student at Brown University studying Computer Science.
          I am currently interning at Ericsson as a machine learning intern.
          I am also doing research on self-supervised learning with Professor Randall Balestriero.
        </p>
        <p className="text-lg leading-relaxed text-gray-200 font-sans">
          Outside of coding, I enjoy going on matcha runs, playing volleyball, and walking.
        </p>
      </div>
      <SocialIcons />
    </main>
  );
} 