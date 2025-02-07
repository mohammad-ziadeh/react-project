'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { TextField } from './TextField';
import { Alert } from './Alert';

function AccountSettings() {
  const [avatar, setAvatar] = useState('https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear errors on change
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = () => {
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

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
        <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>Account</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <img
              style={{
                height: '64px',
                width: '64px',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
              src={avatar}
              alt="Avatar"
            />
            <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <TextField label="First name" style={{ flex: 1, borderRadius: '8px' }} error={errors.firstName}>
            <TextField.Input name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChange} />
          </TextField>
          <TextField label="Last name" style={{ flex: 1, borderRadius: '8px' }} error={errors.lastName}>
            <TextField.Input name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleChange} />
          </TextField>
        </div>

        <TextField label="Email" style={{ width: '100%', borderRadius: '8px' }} error={errors.email}>
          <TextField.Input name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} />
        </TextField>
      </div>

      <hr style={{ borderColor: '#e0e0e0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField label="Current password" style={{ width: '100%', borderRadius: '8px' }} error={errors.currentPassword}>
          <TextField.Input name="currentPassword" type="password" placeholder="Enter current password" onChange={handleChange} />
        </TextField>
        <TextField
          label="New password"
          helpText="Your password must have at least 8 characters, include one uppercase letter, and one number."
          style={{ width: '100%', borderRadius: '8px' }}
          error={errors.newPassword}
        >
          <TextField.Input name="newPassword" type="password" placeholder="Enter new password" onChange={handleChange} />
        </TextField>
        <TextField style={{ width: '100%', borderRadius: '8px' }} error={errors.confirmPassword}>
          <TextField.Input name="confirmPassword" type="password" placeholder="Re-type new password" onChange={handleChange} />
        </TextField>
        <Button
          onClick={handleSubmit}
          style={{
            borderRadius: '20px',
            border: 'none',
            width: '150px',
            height: '40px',
            backgroundColor: '#e21d48',
            color: 'white',
            fontSize: '15px'
          }}
        >
          Change password
        </Button>
      </div>

      <hr style={{ borderColor: '#e0e0e0' }} />
      {/* 
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <Alert
          variant="error"
          title="Delete account"
          description="Permanently remove your account. This action is not reversible."
          actions={<Button variant="destructive-secondary">Delete account</Button>}
        />
      </div> */}
    </div>
  );
}

export default AccountSettings;
