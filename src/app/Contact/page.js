import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Contactez-nous</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nom:</label>
          <input type="text" id="nom" placeholder="Entrer votre nom" />
        </div>
        <div className={styles.formGroup}>
          <label>Emaiil:</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez votre adresse e-mail"
          />
        </div>
        <div className={styles.formGroup}>
          <label>Message:</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Votre message"
          ></textarea>
        </div>
      </form>
      <button type="submit">Envoyer</button>
    </div>
  );
};

export default Contact;
