import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit'; // تأكد من استيراد هذه المكونات

import './profile.css';
import NavBar from '../../component2/navbar/navbar';
import Footer from '../../component2/footers/Footer';

export default function PersonalProfile() {
  const [profileImage, setProfileImage] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp');

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
          <MDBCol lg="9" className="mb-4 mb-lg-10">
            <MDBCard
              className="mb-3"
              style={{
                borderRadius: '.5rem',
                maxWidth: '1000px',
                width: '1000px',
                height: '500px'
              }}
            >
              <MDBRow className="g-0">
                <MDBCol
                  md="20"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: '.5rem',
                    borderBottomLeftRadius: '.5rem'
                  }}
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
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                </MDBCol>
                <MDBCol md="15">
                  <MDBCardBody className="p-5">
                    <MDBTypography tag="h4">Information</MDBTypography>
                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="mb-2">
                          <MDBIcon fas icon="envelope" className="me-2" />
                          Email
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="mb-2">
                          <MDBIcon fas icon="phone" className="me-2" />
                          phone
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="pt-3">
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="mb-2">
                          <MDBIcon fas icon="birthday-cake" className="me-2" />
                          Age
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">5</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-4">
                        <MDBTypography tag="h6" className="mb-2">
                          <MDBIcon fas icon="map-marker-alt" className="me-2" />
                          Address
                        </MDBTypography>
                        <MDBCardText className="text-muted fs-6">street 10</MDBCardText>
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
