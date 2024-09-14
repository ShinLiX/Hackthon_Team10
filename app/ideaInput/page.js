'use client';

import React, { useState } from 'react';
import './IdeaInputForm.css'; // Import the CSS file

const IdeaInputForm = () => {
  const [idea, setIdea] = useState({
    title: '',
    body: '',
    teamMembers: [{ role: 'Front-End Developer', count: 0 }],
    contactEmail: '',
    contactLink: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIdea({ ...idea, [name]: value });
  };

  // Handle team member role and count change
  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = idea.teamMembers.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setIdea({ ...idea, teamMembers: updatedMembers });
  };

  // Add a new team member row
  const addTeamMember = () => {
    setIdea({
      ...idea,
      teamMembers: [...idea.teamMembers, { role: 'Front-End Developer', count: 0 }]
    });
  };

  // Remove a team member row
  const removeTeamMember = (index) => {
    setIdea({
      ...idea,
      teamMembers: idea.teamMembers.filter((_, i) => i !== index)
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(idea);
    // Perform API call to submit the idea
  };

  return (
    <form className="idea-input-form" onSubmit={handleSubmit}>
      {/* Idea Title and Body */}
      <div className="idea-section">
        <label htmlFor="title">Idea Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={idea.title}
          onChange={handleInputChange}
          placeholder="Enter the idea title"
        />

        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          value={idea.body}
          onChange={handleInputChange}
          placeholder="Describe your idea..."
          rows="5"
        />
      </div>

      {/* What I Need Section */}
      <div className="idea-what-we-need">
        <h3>What I Need</h3>

        {idea.teamMembers.map((member, index) => (
          <div className="team-member-row" key={index}>
            <label>Team Members:</label>

            <select
              value={member.role}
              onChange={(e) => handleTeamMemberChange(index, 'role', e.target.value)}
            >
              <option value="Front-End Developer">Front-End Developer</option>
              <option value="Back-End Developer">Back-End Developer</option>
              <option value="UX/UI Designer">UX/UI Designer</option>
            </select>

            <input
              type="number"
              value={member.count}
              onChange={(e) => handleTeamMemberChange(index, 'count', e.target.value)}
              placeholder="# of people"
              min="0"
            />
            <span> people</span>

            <button type="button" onClick={addTeamMember}>+</button>
            {idea.teamMembers.length > 1 && (
              <button
                type="button"
                className="remove-member-button"
                onClick={() => removeTeamMember(index)}
              >
                -
              </button>
            )}
          </div>
        ))}

        {/* Contact Info */}
        <div className="contact-info-row">
          <label>Contact Info:</label>
          <input
            type="email"
            name="contactEmail"
            value={idea.contactEmail}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>

        {/* Insert Link */}
        <div className="contact-info-row">
          <label>Insert Link:</label>
          <input
            type="url"
            name="contactLink"
            value={idea.contactLink}
            onChange={handleInputChange}
            placeholder="Link"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit">Post</button>
    </form>
  );
};

export default IdeaInputForm;
