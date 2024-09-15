'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function IdeaDetails() {
  const param = useParams();
  const [currentIdea, setCurrentIdea] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fetch idea details
  useEffect(() => {
    const fetchIdeaDetails = async () => {
      try {
        const response = await fetch(`/api/ideas/${param.ideasID}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        console.log(data);
        setCurrentIdea(data);
        setComments(data.comments); // Assuming API returns associated comments
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchIdeaDetails();
  }, [param.ideasID]);

  if (!currentIdea) {
    return <div>Idea not found!</div>;
  }

  const handleCommentClear = () => setComment('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Here you can also add an API call to submit the comment
    setSubmitted(true);
    setComment('');
  };

  return (
    <div className="container mx-auto py-8 px-4 space-y-8 text-black">
      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{currentIdea?.title}</h1>
          <p className="text-gray-700 text-lg">{currentIdea?.body}</p>
          <p className="text-gray-700 text-lg">
            Contact: {currentIdea?.contactEmail}
          </p>
        </section>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Volunteer Skills Needed</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {currentIdea?.teamMembers.map((skill, index) => (
              <li key={index}>{skill.role}</li>
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
            <form
              onSubmit={handleCommentSubmit}
              className="flex items-center space-x-4">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-olive p-2 text-gray-700"
                type="text"
                placeholder="Add a comment..."
              />
              <button
                type="button"
                className="bg-white border boder-black hover:bg-olive text-white font-bold py-2 px-4 rounded"
                onClick={handleCommentClear}>
                Clear All
              </button>
              <button
                type="submit"
                className="bg-white border boder-black hover:bg-olive text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          )}

          {/* <h2 className="text-2xl font-bold mb-0">Comments</h2>
          {comments?.length > 0 ? (
            <ul className="space-y-0">
              {comments.map((userComment, index) => (
                <li key={index} className="text-gray-700 border-b pb-0">
                  @{userComment.userName} <br />
                  {userComment.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )} */}
        </section>
      </div>
    </div>
  );
}
