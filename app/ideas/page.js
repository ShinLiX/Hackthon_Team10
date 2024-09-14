'use client';
import React from 'react';
import './page.css';
import { useRouter } from 'next/navigation';

const ideas = [
  {
    title: 'Idea 1',
    description: 'This is the first idea',
    author: 'Author 1',
  },
  {
    title: 'Idea 2',
    description: 'This is the second idea',
    author: 'Author 2',
  },
  {
    title: 'Idea 3',
    description: 'This is the third idea',
    author: 'Author 3',
  },
  {
    title: 'Idea 4',
    description: 'This is the fourth idea',
    author: 'Author 4',
  },
  {
    title: 'Idea 5',
    description: 'This is the fifth idea',
    author: 'Author 5',
  },
  {
    title: 'Idea 6',
    description: 'This is the fifth idea',
    author: 'Author 6',
  },
  {
    title: 'Idea 7',
    description: 'This is the fifth idea',
    author: 'Author 7',
  },
  {
    title: 'Idea 8',
    description: 'This is the fifth idea',
    author: 'Author 8',
  },
  {
    title: 'Idea 9',
    description: 'This is the fifth idea',
    author: 'Author 9',
  },
  {
    title: 'Idea 10',
    description: 'This is the fifth idea',
    author: 'Author 10',
  },
];

const Page = () => {
  const router = useRouter(); // Using Next.js router for navigation

  const handleRedirect = (ideaTitle) => {
    // Create a dynamic route based on the idea title
    const formattedTitle = ideaTitle.toLowerCase().replace(/\s+/g, '-');
    router.push(`/ideas/${formattedTitle}`);
  };

  return (
    <div className=" bg-cream w-screen text-black">
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-2">{idea.title}</h3>
              <p className="text-gray-700 mb-4">{idea.description}</p>
              <div className="text-gray-500 text-sm mb-4">By {idea.author}</div>
              <button
                onClick={() => handleRedirect(idea.title)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Idea
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
