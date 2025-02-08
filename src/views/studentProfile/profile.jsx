import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import './profile.css';
import NavBar from '../../component2/navbar/navbar';
import Footer from '../../component2/footers/Footer';

const LAST_LOGGED_IN_STUDENT_API = 'http://localhost:5000/lastLoggedInStudent';

export default function PersonalProfile() {
  const [profileImage, setProfileImage] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp');
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLastLoggedInStudent = async () => {
      try {
        const response = await axios.get(LAST_LOGGED_IN_STUDENT_API);
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching last logged-in student:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLastLoggedInStudent();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div>
      <NavBar />
      <MDBContainer style={{ marginTop: '100px' }}>
        <MDBRow>
          <MDBCol lg="9" className="mb-4">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem', maxWidth: '1000px', width: '1000px', height: '500px' }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                >
                  <MDBCardImage
                    src={profileImage}
                    alt="Avatar"
                    className="my-5"
                    style={{
                      backgroundColor: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}
                    fluid
                    onClick={() => document.getElementById('imageUpload').click()}
                  />
                  <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                  <MDBTypography tag="h5">{loading ? 'Loading...' : studentData?.name || 'No Data'}</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-5">
                    <MDBTypography tag="h4">Information</MDBTypography>
                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6">
                          <MDBIcon fas icon="envelope" className="me-2" />
                          Email
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">{loading ? 'Loading...' : studentData?.email || 'N/A'}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6">
                          <MDBIcon fas icon="phone" className="me-2" />
                          Phone
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">{loading ? 'Loading...' : studentData?.phone || 'N/A'}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6">
                          <MDBIcon fas icon="birthday-cake" className="me-2" />
                          Age
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">{loading ? 'Loading...' : studentData?.age || 'N/A'}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6">
                          <MDBIcon fas icon="map-marker-alt" className="me-2" />
                          Address
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">{loading ? 'Loading...' : studentData?.address || 'N/A'}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
