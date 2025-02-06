import React, { useState } from "react";
import "../styles/contact-page.css";
import { useTranslation } from "react-i18next";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../component2/footers/Footer";
import Navbar from "../component2/navbar/navbar";
import SecHero from "../component2/SecHero/SecHero";
import { FloatButton } from "antd";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useTranslation();

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
    <>
      <Navbar />
      <SecHero Title={t("contact_us")} />
      <FloatButton.BackTop
        style={{
          backgroundColor: "#ed068c",
          color: "white",
          borderRadius: "50%",
          fontSize: "20px",
        }}
      />
      <section style={{ backgroundColor: "pink", paddingBottom: "50px" }}>
        <div
          className="contact-cards-container"
          style={{
            marginBottom: "50px",
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <motion.div
            className="contact-cards"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            {[
              {
                icon: <FaPhone className="icon" />,
                title: t("we phone"),
                text: "+962775793104",
              },
              {
                icon: <FaMapMarkerAlt className="icon" />,
                title: t("we location"),
                text: "16 Street, Aqaba, Jordan",
              },
              {
                icon: <FaEnvelope className="icon" />,
                title: t("we Email"),
                text: "SSAcademy@example.com",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="contact-card"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  flex: 1,
                }}
              >
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <h2 className="section-title"> {t("Contact Us")}</h2>
        <div className="contact-form-container">
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
              placeholder={t("Your Message")}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit"> {t("Send Message")}</button>
          </form>
        </div>

        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.3766897665187!2d35.01405673128254!3d29.5345224805374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150071875a9fca41%3A0xf5d61d999f967371!2sOrange%20Digital%20Village%20Aqaba!5e0!3m2!1sar!2sjo!4v1738244601477!5m2!1sar!2sjo"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
