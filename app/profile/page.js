export default function Page() {
  // Mock data (could be fetched from an API later)
  const profileData = {
    name: 'Peter Pan',
    bio: 'I am a visionary tech professional specializing in innovative solutions and product development, with a passion for driving technological advancements and improving user experiences.',
    skills: ['React', 'Node.js', 'GraphQL', 'Tailwind CSS'],
    role: 'Full Stack Developer',
  };

  return (
    <div className="bg-cream w-screen min-h-screen p-10 text-black">
      <div className="max-w-4xl mx-auto">
        {/* Card container */}
        <div className="bg-white rounded-[20px] border border-black p-6">
          {/* Name and Bio */}
          <div className="flex flex-col gap-4 mb-4">
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="text-gray-700">{profileData.bio}</p>
          </div>
          {/* Role */}
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="bg-olive border border-black text-white px-4 py-1 rounded-full text-sm">
              {profileData.role}
            </span>
          </div>
          {/* Skills */}
          <div className="flex gap-2 flex-wrap mb-4">
            {profileData.skills.map((skill) => (
              <span
                key={skill}
                className="bg-white text-black border-black border px-4 py-1 rounded-full text-sm">
                #{skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
