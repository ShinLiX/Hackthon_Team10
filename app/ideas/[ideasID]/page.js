"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function IdeaDetails() {
  const param = useParams();
  console.log("Param", param);

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

  const userComments = {
    'comment-1': {
        ideaID: 'idea-1',
        userID: 'user-1',
        userName: 'Alice',
        comment: 'Great initiative! I would love to help out.',
    },
    'comment-2': {
        ideaID: 'idea-1',
        userID: 'user-2',
        userName: 'Bob',
        comment: 'I have experience with beach cleanups. Count me in!',
    },
    'comment-3': {
        ideaID: 'idea-2',
        userID: 'user-3',
        userName: 'Charlie',
        comment: 'I am a certified arborist and can help with the tree planting.',
    },
    };

   const currentIdea = ideaDetails[param.ideasID];
   console.log("Current idea", currentIdea);

  if (!currentIdea) {
     return <div>Idea not found!</div>;
  }

  const filteredComments = Object.values(userComments).filter(
    (userComment) => userComment.ideaID === param.ideasID
  );


  // State for the comment form
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCommentClear = (e) => {
    setComment('');
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setComment(''); 
  };

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{currentIdea.title}</h1>
            <p className="text-gray-700 text-lg">{currentIdea.description}</p>
        </section>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Volunteer Skills Needed</h2>
            <ul className="list-disc ml-6 text-gray-700">
            {currentIdea.volunteerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            </ul>
        </section>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8 space-y-8">
        <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
        {submitted ? (
          <p className="text-green-500">Thank you for your comment!</p>
        ) : (
          <form onSubmit={handleCommentSubmit} className="flex items-center space-x-4">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-gray-700"
              type="text"
              placeholder="Add a comment..."
            />
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCommentClear}
            >
              Clear All
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        )}

        <h2 className="text-2xl font-bold mb-0">Comments</h2>
          {filteredComments.length > 0 ? (
            <ul className="space-y-0">
              {filteredComments.map((userComment, index) => (
                <li key={index} className="text-gray-700 border-b pb-0">
                  <text>@{userComment.userName} <br />{userComment.comment}</text>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </section>
      </div>
    </div>
  );
}
