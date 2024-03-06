import "./index.css";

const Home = () => {
  return (
    <section className="home">
      <section className="name-and-job">
        <h1>Rick Moe</h1>
        <h2>
          Software Engineer
          <br /> & <br />
          Full Stack Developer
        </h2>
      </section>
      <section className="bio">
        <h4>Why Hire Me?</h4>
        <p>
          I have been passionately programming for 7 years in a variety of
          languages and environments. I have a proven work ethic, as shown
          through my academic success. I am a strong communicator and a team
          player at heart. I have experience working on and leading a software
          development team of an FRC robotics team.
        </p>
      </section>
    </section>
  );
};

export default Home;
