'use client';

import Link from 'next/link';

const blogPosts = [
  {
    title: "The Art of Linear Regression",
    date: "June 13, 2025",
    path: "/blog/linear-regression"
  },
];

export default function Blog() {
  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-200px)] py-12">
      <h1 className="text-4xl font-medium mb-12">Blog</h1>
      <div className="w-full max-w-3xl">
        <ul className="space-y-4">
          {blogPosts.map((post, index) => (
            <li key={index} className="text-lg">
              <Link 
                href={post.path}
                className="text-gray-200 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                • {post.title}
              </Link>
              <span className="text-gray-400 text-sm ml-2">({post.date})</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 