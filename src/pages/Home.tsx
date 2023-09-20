import "./Home.css";

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
        <h4>What You're Getting:</h4>
        <p>
          7 years of programming in various languages and environments, a
          perfect GPA while pursuing 4 majors, strong interpersonal skills, and
          experience working on (and leading) a software development team.
        </p>
      </section>
    </section>
  );
};

export default Home;
