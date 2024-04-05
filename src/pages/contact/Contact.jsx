import emailIcon from "../../assets/email-icon.webp";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <section class="contact">
      <h1>Contact Me</h1>
      <section class="links">
        <a href="mailto:rmoe02@gmail.com" target="_blank">
          {/* Image credit to https://icons8.com/icon/1669/at-sign */}
          <img src={emailIcon} alt="email me" />
          <p>Email</p>
        </a>
        <a href="https://www.linkedin.com/in/rmoe" target="_blank">
          {/* Image credit to https://icons8.com/icon/447/linkedin */}
          <img src={linkedinIcon} alt="find me on LinkedIn" />
          <p>LinkedIn</p>
        </a>
        {/* <a href="https://github.com/rickmoe" target="_blank">
          {/* Image credit to https://icons8.com/icon/12598/github *}
          <img src="/icons8-github.webp" alt="see my github" />
          <p>GitHub</p>
        </a> */}
      </section>
    </section>
  );
};

export default Contact;
