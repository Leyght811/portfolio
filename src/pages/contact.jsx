import React from "react";
import "../styles/style.css";
import "../styles/contact.css";
import { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [bodyText, setBody] = useState("");

  console.log(subject, "sadjfkldsahfkhsadkld", bodyText)
  return (
    <div className="contact-page">
      <div className="contact-page-content">
        <div className="contact-page-form">
          <div className="contact-header text">
            <i>Contact Me</i>
          </div>
          <div className="contact-form-subject">
            <span className="text contact-form-label">
              <b>
                <i>Subject: </i>
              </b>
            </span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="contact-form-body">
            <span className="text contact-form-label">
              <b>
                <i>Body: </i>
              </b>
            </span>
            <textarea
              value={bodyText}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="contact-form-submission">
            <a
              href={
                "mailto:wesleyhamish@hotmail.com?subject=" +
                subject +
                "&body=" +
                bodyText
              }
            >
              <div className="contact-form-submission-button">
                <i>
                  <b>Send</b>
                </i>
              </div>
            </a>
          </div>
        </div>
        <div className="contact-page-text">
          <div className="contact-header text">
            <i>Details</i>
          </div>
          <div className="contact-text-info text">
            <i>
              <b>Phone:</b> 022 471 1842 <br />{" "}
              <b>Email: wesleyhamish@hotmail.com</b>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
