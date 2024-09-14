"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function IdeaDetails() {
  const { idea } = useParams();

  const ideaDetails = {
    'idea-1': {
      title: 'Clean the Beach',
      description: 'A community-driven beach cleanup initiative.',
      volunteerSkills: ['Environmental awareness', 'Teamwork', 'Physical endurance'],
      contact: { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    },
    'idea-2': {
      title: 'Tree Planting',
      description: 'Join us in planting trees in local parks to help reforest the area.',
      volunteerSkills: ['Gardening', 'Environmental science', 'Team leadership'],
      contact: { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    },
  };

  const currentIdea = ideaDetails[idea];
  console.log("Current idea", idea);

  if (!currentIdea) {
    return <div>Idea not found!</div>;
  }

  // State for the comment form
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setComment(''); 
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Section 1: Specific Idea Details */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{currentIdea.title}</h1>
        <p className="text-gray-700 text-lg">{currentIdea.description}</p>
      </section>

      {/* Section 2: Volunteer Skills Needed */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Volunteer Skills Needed</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {currentIdea.volunteerSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Section 3: Contact Information & Comment Submission */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-700">
          <strong>Name:</strong> {currentIdea.contact.name} <br />
          <strong>Email:</strong> {currentIdea.contact.email} <br />
          <strong>Phone:</strong> {currentIdea.contact.phone}
        </p>
      </section>

      {/* Comment Submission Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        {submitted ? (
          <p className="text-green-500">Thank you for your comment!</p>
        ) : (
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="5"
              placeholder="Write your comment here"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </section>
    </div>
  );
}