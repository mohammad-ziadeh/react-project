import React from "react";
import  {useState , useEffect} from "react" ;
import "./log.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App({ handleScrollToLogin }) {
  const [usersData, setUsersData] = useState([]);

  
  useEffect(() => {
    const savedUsersData = JSON.parse(localStorage.getItem("usersData")) || [];
    setUsersData(savedUsersData);
  }, []);
  const handleSaveUserData = (newUserData) => {
    const updatedUsersData = [...usersData, newUserData];
    setUsersData(updatedUsersData);

 
    localStorage.setItem("usersData", JSON.stringify(updatedUsersData));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Z])(?=.*\d).{8,}$/,
          "Must include one uppercase letter, one number, and be at least 8 characters"
        ),
    }),
    onSubmit: (values) => {
      handleSaveUserData({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      handleScrollToLogin();
    },
  });
  return (
    <div>
      <section className="showcase">
        <div className="overlay">
          <article>
            <p className="tag">
              <strong>Creat Your Account </strong>
            </p>
            <form className="form" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="err" style={{ color: "red" }}>
                  {formik.errors.firstName}
                </div>
              ) : null}
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div style={{ color: "red" }}>{formik.errors.lastName}</div>
              ) : null}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}

              <button className="subBtn" type="submit">
                Sign up{" "}
              </button>

              <small>
                <p>
                  Already have an account?{" "}
                  <button
                    className="changeButton"
                    onClick={handleScrollToLogin}
                  >
                    Click here to login!
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