'use client';
import { SignUpButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setProfiles(data); // Assuming the API returns an array of profiles
      } catch (error) {
        console.error('Failed to fetch profiles:', error);
      }
    }

    fetchProfiles();
  }, []);

  return (
    <div className="bg-cream w-screen min-h-screen p-10 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] border border-black p-6">
            {/* Name and Bio */}
            <div className="flex flex-col gap-4 mb-4">
              <h2 className="text-2xl font-bold">{profile.name}</h2>
              <p className="text-gray-700">{profile.bio}</p>
            </div>
            {/* Role */}
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-olive border border-black text-white px-4 py-1 rounded-full text-sm">
                {profile.role}
              </span>
            </div>
            {/* Skills */}
            <div className="flex gap-2 flex-wrap mb-4">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black border-black border px-4 py-1 rounded-full text-sm">
                  #{skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mr-8 py-6">
        <SignUpButton className="h-8 m-4 bg-olive border boder-black hover:bg-olive text-black font-bold px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
      </div>
    </div>
  );
}
