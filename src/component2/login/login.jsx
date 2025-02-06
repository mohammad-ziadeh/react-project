import React from 'react';
import { useState } from 'react';
import './log.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

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
    onSubmit: (values) => {
      const savedUsersData = JSON.parse(localStorage.getItem('usersData')) || [];
      const foundUser = savedUsersData.find((user) => user.email === values.email && user.password === values.password);

      if (foundUser) {
        goToDash();
      } else {
        goToHome();
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
              <button className="subBtn" type="submit">
                log in{' '}
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
