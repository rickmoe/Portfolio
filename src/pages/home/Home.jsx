import { A } from "@solidjs/router";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section class="home">
        <section class="heading">
          <h1>Rick Moe</h1>
          <h2>
            Software Engineer
            <br /> <b>-------</b> <br />
            Full Stack Developer
          </h2>
        </section>
        <section class="bio">
          <h3>Who Am I?</h3>
          <p>
            I am a passionate programmer with 7 years of coding experience and a
            natural drive to innovate and optimize! I have a proven work ethic
            (as shown through my <A href="/education">academic success</A>),
            strong interpersonal skills, and experience working on and leading
            an <A href="/robotics">FRC Robotics</A> Software Team.
          </p>
        </section>
      </section>
    </>
  );
};

export default Home;
