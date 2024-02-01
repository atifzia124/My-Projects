import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Projects</h1>
          <p>
            Experienced Full Stack Developer with 3+ years, adept in end-to-end
            lifecycle management of large-scale web platforms. Proficient in
            HTML5, CSS, JavaScript, ReactJS, TypeScript, NextJS, NodeJS,
            ExpressJS and skilled in integrating MongoDB and MySQL for robust
            data solutions. Committed to delivering high-quality, responsive web
            applications through analytical thinking and creative
            problem-solving.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
