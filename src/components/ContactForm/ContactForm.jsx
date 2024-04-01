import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
         setName(e.target[0].value)
         setEmail(e.target[1].value);
         setText(e.target[2].value);
    }


  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.form}`}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoIosMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name="text" rows={5}/>
          </div>
          <div className= {styles.last_btn}>
            <Button text="Submit" />
          </div>

          <div>
            {name + '' + email +'' + text}

          </div>
        </form>
      </div>
      <div className={`${styles.image}`}>
        <img src="images\Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
