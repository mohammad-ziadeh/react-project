'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TeacherProfile() {
  const navigate = useNavigate();
  const goToteacherpro2 = () => navigate('profile');

  const [teacherData, setTeacherData] = useState(null);
  const [avatar, setAvatar] = useState('https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg');
  const [loading, setLoading] = useState(true); // To handle loading state

  const LAST_LOGGED_IN_TEACHER_API = 'http://localhost:5000/lastLoggedInTeacher';

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await axios.get(LAST_LOGGED_IN_TEACHER_API);
        if (response.data) {
          setTeacherData(response.data);
        }
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
      // Here you could also upload the image to the server if needed.
    }
  };

  if (loading) {
    return <div>Loading teacher profile...</div>; // Simple loading indicator
  }

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
          <img
            style={{ height: '64px', width: '64px', objectFit: 'cover', borderRadius: '50%' }}
            src={avatar}
            alt="Avatar"
            onClick={() => document.getElementById('imageUpload').click()} // Trigger image upload when clicked
          />
          <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Teacher Info */}
          <div>
            <strong>First Name:</strong> {teacherData ? teacherData.firstName : 'No Data'}
          </div>
          <div>
            <strong>Last Name:</strong> {teacherData ? teacherData.lastName : 'No Data'}
          </div>
          <div>
            <strong>Email:</strong> {teacherData ? teacherData.email : 'No Data'}
          </div>
          <div>
            <strong>Password:</strong> {teacherData ? teacherData.password : '****'}
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
