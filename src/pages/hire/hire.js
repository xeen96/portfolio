import React from "react";
import styles from "./hire.module.scss";
import CopyTextField from "../../components/copy_text_field/copy_text_field";

const Hire = () => {
  const contactInfo = [
    {
      method: "Email",
      value: process.env.REACT_APP_EMAIL,
      link: `mailto:${process.env.REACT_APP_EMAIL}`,
    },
    {
      method: "Phone",
      value: process.env.REACT_APP_PHONE,
    },
    {
      method: "CV",
      value: "View | Download (Redirect to Google Drive)",
      link: process.env.REACT_APP_CV,
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.contactContainer}>
        <h1>Contact Me</h1>
        <div className={styles.contactIntro}>
          <p>
            I'm available for hire and open to new opportunities. Feel free to
            reach out through any of the methods below!
          </p>
        </div>

        <ul className={styles.contactList}>
          {contactInfo.map(({ method, value, link }) => (
            <li key={method} className={styles.contactItem}>
              <div className={styles.method}>
                <span className={styles.methodMarker}>▶</span>
                {method}
              </div>
              <div className={styles.contactValueWrapper}>
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    <span className={styles.linkMarker}>─</span>
                    {value}
                  </a>
                ) : (
                  <div className={styles.contactLink}>
                    <span className={styles.linkMarker}>─</span>
                    {value}
                  </div>
                )}
                {method !== "CV" && (
                  <CopyTextField
                    text={value}
                    containerClassName={styles.copyContainerCustom}
                  />
                )}
              </div>
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

export default Hire;