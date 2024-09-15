'use client';
import React, { useState, useEffect } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const [ideas, setIdeas] = useState([]); // State to store fetched ideas

  useEffect(() => {
    // Fetch ideas when component mounts
    const fetchIdeas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/ideas'); // Ensure the URL is correct
        const data = await response.json();
        setIdeas(data); // Assuming the API returns an array of ideas
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch ideas:', error);
      }
    };

    fetchIdeas();
  }, []);

  const handleRedirect = (ideaId) => {
    // Use idea ID to create the route
    router.push(`/ideas/${ideaId}`);
  };

  return (
    <div className="bg-cream w-screen text-black">
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 boder boder-black">
              <h3 className="text-2xl font-semibold mb-2">{idea.title}</h3>
              <p className="text-gray-700 mb-4">{idea.body}</p>
              <div className="text-gray-500 text-sm mb-4">
                By {idea.contactEmail}
              </div>
              <button
                onClick={() => handleRedirect(idea._id)}
                className="bg-white border border-black hover:bg-olive text-black font-bold py-2 px-4 rounded">
                View Idea
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mr-8 py-6">
        <Link
          href="/ideaInput"
          className="text-black bg-olive rounded-md border border-black px-6 py-2">
          Add Idea
        </Link>
      </div>
    </div>
  );
};

export default Page;
