import "./index.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <section className="links">
        <a href="mailto:rmoe02@gmail.com" className="email" target="_blank">
          {/* Image credit to https://icons8.com/icon/1669/at-sign */}
          <img src="/icons8-email.webp" />
          <p>Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/rmoe"
          className="linkedin"
          target="_blank"
        >
          {/* Image credit to https://icons8.com/icon/447/linkedin */}
          <img src="/icons8-linkedin.webp" />
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/rickmoe" className="github" target="_blank">
          {/* Image credit to https://icons8.com/icon/12598/github */}
          <img src="/icons8-github.webp" />
          <p>GitHub</p>
        </a>
      </section>
    </section>
  );
};

export default Contact;
