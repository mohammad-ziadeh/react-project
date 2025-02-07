'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

function TeacherProfile() {
  const navigate = useNavigate();
  const goToteacherpro2 = () => navigate('profile');
  const [avatar, setAvatar] = useState('https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg');
  const teacherData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '****'
  };

  // const handleEdit = () => {
  //   window.location.href = '/edit-profile'; // Navigate to edit profile page
  // };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        backgroundColor: '#f9f9f9',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>Teacher Profile</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img style={{ height: '64px', width: '64px', objectFit: 'cover', borderRadius: '50%' }} src={avatar} alt="Avatar" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <strong>First Name:</strong> {teacherData.firstName}
          </div>
          <div>
            <strong>Last Name:</strong> {teacherData.lastName}
          </div>
          <div>
            <strong>Email:</strong> {teacherData.email}
          </div>
          <div>
            <strong>Password:</strong> {teacherData.password}
          </div>
        </div>
      </div>

      <hr style={{ borderColor: '#e0e0e0' }} />

      <Button
        onClick={goToteacherpro2}
        style={{
          borderRadius: '20px',
          border: 'none',
          width: '180px',
          height: '40px',
          backgroundColor: '#e21d48',
          color: 'white',
          fontSize: '15px'
        }}
      >
        Edit Information
      </Button>
    </div>
  );
}

export default TeacherProfile;
