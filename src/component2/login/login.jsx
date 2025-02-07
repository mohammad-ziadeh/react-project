import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './log.css';

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
      // قراءة بيانات المعلمين من ملف JSON
      fetch('/teachers.json')
        .then(response => response.json())
        .then(usersData => {
          const foundUser = usersData.find((user) => user.email === values.email && user.password === values.password);
          if (foundUser) {
            // إذا تم العثور على المعلم في البيانات
            goToDash();
          } else {
            // إذا لم يتم العثور عليه
            goToHome();
          }
        })
        .catch(error => {
          console.error("Error loading users data: ", error);
          goToHome(); // في حال فشل تحميل البيانات
        });
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
