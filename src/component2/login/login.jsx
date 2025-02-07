import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TEACHERS_API_URL = 'http://localhost:5000/teachers';
const STUDENTS_API_URL = 'http://localhost:5000/students';

function App({ handleScrollToSignup }) {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const goToDash = () => {
    navigate('/dashboard');
  };

  const goToHome = () => {
    navigate('/home');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
        .required('Required'),
      password: Yup.string()
        .required('Required')
        .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'Must include one uppercase letter, one number, and be at least 8 characters')
    }),
    onSubmit: async (values) => {
      try {
        const [teachersResponse, studentsResponse] = await Promise.all([axios.get(TEACHERS_API_URL), axios.get(STUDENTS_API_URL)]);

        const teachersData = teachersResponse.data || [];
        const studentsData = studentsResponse.data || [];

        console.log('Teachers:', teachersData);
        console.log('Students:', studentsData);

        const foundTeacher = teachersData.find((user) => user.email === values.email && user.password === values.password);
        const foundStudent = studentsData.find((user) => user.email === values.email && user.password === values.password);

        if (foundTeacher) {
          goToDash();
        } else if (foundStudent) {
          goToHome();
        } else {
          console.error('Invalid email or password');
          setLoginError('Invalid email or password');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setLoginError('Login failed, please try again later');
      }
    }
  });

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <p className="tag">
              <strong>Welcome to your Account </strong>
            </p>
            <form className="form" onSubmit={formik.handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}

              {loginError && <div style={{ color: 'red' }}>{loginError}</div>}

              <button className="subBtn" type="submit">
                Log in
              </button>

              <small>
                <p>
                  Don't have an account?{' '}
                  <button className="changeButton" onClick={handleScrollToSignup}>
                    Click here to sign up!
                  </button>
                </p>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
