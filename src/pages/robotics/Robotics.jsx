import robot from "../../assets/robotics-robot.webp";
import climb from "../../assets/robotics-climb.webp";
import comp from "../../assets/robotics-comp.webp";
import "./Robotics.css";
import ImageWithModal from "../../components/ImageWithModal";

const Robotics = () => {
  return (
    <section class="robotics">
      <h1>Robotics</h1>
      <h2>FRC Team 4296: Trident Robotics</h2>
      <p>Member for three years</p>
      <p>Software Team Leader for one year</p>
      <p>Leader of Computer Vision for one year</p>
      <p>Received training for Electrical and Software teams</p>
      <p>
        In 2019, the team won our regional, qualified for the world
        championships, and reached the semifinals of our division in the world
        championships!
      </p>
      {/* TODO: Add modal for larger image display on click */}
      <section class="img-box">
        <ImageWithModal src={robot} alt="robot picture" />
        <ImageWithModal src={climb} alt="robot climbing" />
        <ImageWithModal src={comp} alt="robotics team at a competition" />
      </section>
    </section>
  );
};

export default Robotics;
