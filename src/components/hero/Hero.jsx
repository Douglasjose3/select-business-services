import { useEffect, useState } from "react";
import "./hero.css";
import { Container } from "react-bootstrap";
import MyNavbar from "../mynavbar/MyNavbar";
import ScrollToTopButton from "../scrollButton/ScrollButton";

function Hero() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const imgChange = window.innerWidth;
      if (imgChange <= 768) {
        setBgImage("hero_mobile.png");
      } else {
        setBgImage("heroTop.png");
      }
    };

    handleResize(); // Set image on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImage}` }}>
      <Container>
        <MyNavbar />
        <div className="hero-content" id="about">
          <h1>
            Select <br />
            Business <br /> Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a
            eligendi in repudiandae non ut saepe accusantium eum illo minima.
            Similique praesentium sit quidem aliquam magni, voluptatem excepturi
            quaerat facilis?
          </p>
        </div>
        <ScrollToTopButton />
      </Container>
    </div>
  );
}

export default Hero;
