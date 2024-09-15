'use client';
import React, { useState } from 'react';
import './IdeaInputForm.css'; // Import the CSS file

const IdeaInputForm = () => {
  const [idea, setIdea] = useState({
    title: '',
    body: '',
    teamMembers: [{ role: 'Front-End Developer', count: 0 }],
    contactEmails: [''],
    contactLinks: ['']
  });

  // Handle input changes for idea title and body
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
    const updatedMembers = idea.teamMembers.filter((_, i) => i !== index);
    setIdea({ ...idea, teamMembers: updatedMembers });
  };

  // Handle email and link changes
  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...idea[field]];
    updatedContacts[index] = value;
    setIdea({ ...idea, [field]: updatedContacts });
  };

  // Add a new email or link input
  const addContactField = (field) => {
    setIdea({ ...idea, [field]: [...idea[field], ''] });
  };

  // Remove an email or link input
  const removeContactField = (field, index) => {
    const updatedContacts = idea[field].filter((_, i) => i !== index);
    setIdea({ ...idea, [field]: updatedContacts });
  };

  // Handle form submission
  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(idea);
    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(idea)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Idea created successfully:', data);
    } catch (error) {
      console.error('Error creating idea:', error);
    }
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
            />

            <label2>People</label2>

            <button type="button" onClick={addTeamMember}>+</button>
            {index > 0 && (
              <button
                type="button"
                className="minus-button"
                onClick={() => removeTeamMember(index)}
              >
                -
              </button>
            )}
          </div>
        ))}

        {/* Contact Info Section */}
        <div className="contact-info-row">
          <label>Contact Info:</label>
          {idea.contactEmails.map((email, index) => (
            <div key={index} className="contact-info-row">
              <input
                type="email"
                value={email}
                onChange={(e) => handleContactChange(index, 'contactEmails', e.target.value)}
                placeholder="Email"
              />
              <button type="button" onClick={() => addContactField('contactEmails')}>+</button>
              {index > 0 && (
                <button
                  type="button"
                  className="minus-button"
                  onClick={() => removeContactField('contactEmails', index)}
                >
                  -
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="contact-info-row">
          <label>Insert Link:</label>
          {idea.contactLinks.map((link, index) => (
            <div key={index} className="contact-info-row">
              <input
                type="url"
                value={link}
                onChange={(e) => handleContactChange(index, 'contactLinks', e.target.value)}
                placeholder="Link"
              />
              <button type="button" onClick={() => addContactField('contactLinks')}>+</button>
              {index > 0 && (
                <button
                  type="button"
                  className="minus-button"
                  onClick={() => removeContactField('contactLinks', index)}
                >
                  -
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit">Post</button>
    </form>
  );
};

export default IdeaInputForm;
