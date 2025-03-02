// Contact.jsx
import React from "react";
import styles from "./hire.module.scss";

const Contact = () => {
  const contactInfo = [
    {
      method: "Email",
      value: "email@google.com",
      link: "mailto:xeen@mailfence.com",
    },

    {
      method: "Phone",
      value: "UA +380 00 00 000 000",
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.contactContainer}>
        <h1>Contact Me</h1>
        <div className={styles.contactIntro}>
          <p>
            I'm available for hire and open to new opportunities. 
            Feel free to reach out through any of the methods below!
          </p>
        </div>
        
        <ul className={styles.contactList}>
          {contactInfo.map(({ method, value, link }) => (
            <li key={method} className={styles.contactItem}>
              <div className={styles.method}>
                <span className={styles.methodMarker}>▶</span>
                {method}
              </div>
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.linkMarker}>─</span>
                {value}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.hireNote}>
          <p>Looking forward to discussing your project needs!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;