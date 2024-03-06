import "./index.css";

const Robotics = () => {
  return (
    <section className="robotics">
      <h1>Robotics</h1>
      <h4>FRC Team 4296: Trident Robotics</h4>
      <p>Member for three years</p>
      <p>Software Team Leader for one year</p>
      <p>Leader of Computer Vision for one year</p>
      <p>Received training for Electrical and Software teams</p>
      <p>
        In 2019, the team won our regional, qualified for the world
        championships, and reached the semifinals of our division in the world
        championships!
      </p>
      <section className="img-box">
        <img src="/robotics-robot.webp" />
        <img src="/robotics-climb.webp" />
        <img src="/robotics-comp.webp" />
      </section>
    </section>
  );
};

export default Robotics;
