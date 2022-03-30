import React from "react";
import "./contactme.css";
import { HiOutlineMail, HiChatAlt, HiUser } from "react-icons/hi";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eyevpd9",
        "template_xjsrnf8",
        form.current,
        "v9SjzHqQZj6p2D7sw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact Me">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>mmower777@gmail.com</h5>
            <a href="mailto:mmower777@gmail.com">Send an Email!</a>
          </article>
          <article className="contact-option">
            <HiChatAlt className="contact-option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>McKay Mower</h5>
            <a href="https://m.me/mckay.mower" target="_blank" rel="noreferrer">
              Send a Facebook Message
            </a>
          </article>
          <article className="contact-option">
            <HiUser className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>McKay Mower</h5>
            <a
              href="https://www.linkedin.com/in/mmower777"
              target="_blank"
              rel="noreferrer"
            >
              Connect With Me on LinkedIn
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
