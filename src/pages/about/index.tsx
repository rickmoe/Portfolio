import ImageCarousel from "../../components/ImageCarousel";
// import CourseTable from "../../components/CourseTable";
import "./index.css";

const ROBOTICS_IMAGES = [
  "/robotics-comp.webp",
  "/robotics-robot.webp",
  "/robotics-climb.webp",
];

const About = () => {
  return (
    <section className="about">
      <h1>About</h1>
      <section className="academics">
        <h4>Academics</h4>
        <p>Future 2024 Graduate of the University of Wisconsin-Madison</p>
        <p>4.0 Cumulative GPA</p>
        <p>Bachelor's Degrees:</p>
        <ul>
          <li>Computer Sciences, B.S.</li>
          <li>Mathematics for Programming and Computing, B.S.</li>
          <li>Data Science, B.S.</li>
          <li>Psychology, B.S.</li>
        </ul>
      </section>
      <section className="robotics">
        <h4>Robotics</h4>
        <p>
          Former Software Leader of FRC Team 4296, who qualified for the
          world-championships
        </p>
        <ImageCarousel imagePaths={ROBOTICS_IMAGES} />
      </section>
      {/* <section className="coursework">
        <h4>Coursework:</h4>
        <CourseTable />
      </section> */}
    </section>
  );
};

export default About;
