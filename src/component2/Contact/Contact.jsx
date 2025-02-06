import React, { useState } from "react";
import "./Contact.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t, i18n } = useTranslation();
  
      const changeLanguage = (lng) => 
        i18n.changeLanguage(lng);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h2 className="section-title">  {t("Contact Us")} </h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={t("Your Name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("Your Email")}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder= {t("Your Message")}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit"> {t("Send Message")}</button>
      </form>
    </div>
  );
}

export default Contact;