'use client';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import CustomButton from '../components/CustomButton';

export default function OnboardingPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [userType, setUserType] = useState('');
  const [page, setPage] = useState(1);
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [role, setRole] = useState('');

  const roles = [
    'Full stack Developer',
    'Front end Developer',
    'Back end Developer',
    'Graphic Designer',
    'UX Designer',
    'UI Designer',
    'UX/UI Designer',
    'Product Owner',
    'Project Manager',
  ];

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Please sign in to view this page.
      </div>
    );
  }

  const handleSelectUserType = (type) => {
    setUserType(type);
    setPage(2);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ bio, skills, role });
    setPage(3); // Proceed to the next step or show confirmation
  };

  const renderUserSelection = () => (
    <div className="flex gap-4 justify-center">
      <CustomButton
        text="Idea Creator"
        onClick={() => handleSelectUserType('Idea Creator')}
        color="blue"
      />
      <CustomButton
        text="Tech Opp Seeker"
        onClick={() => handleSelectUserType('Tech Opp Seeker')}
        color="green"
      />
    </div>
  );

  const renderForm = () => (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Tell us a bit about yourself..."
        />
      </div>

      {userType === 'Tech Opp Seeker' && (
        <>
          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
              placeholder="Your technical skills..."
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700">
              Desired Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50">
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      <CustomButton text="Submit" color="red" />
    </form>
  );

  return (
    <div className="bg-cream w-screen min-h-screen flex flex-col items-center justify-center p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.fullName}!</h1>
      <p className="text-lg mb-8">
        Lets get started by selecting what describes you best:
      </p>
      {page === 1 ? (
        renderUserSelection()
      ) : page === 2 ? (
        renderForm()
      ) : (
        <p>Thank you for submitting your information!</p>
      )}
    </div>
  );
}
