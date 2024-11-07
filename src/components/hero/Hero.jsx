/* eslint-disable react/no-unescaped-entities */
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
            Since 2002, we’ve been helping the Brazilian community stay
            connected with their loved ones by providing fast, reliable, and
            affordable money remittance services to Brazil. Whether you're
            sending money for family support, business, or other personal
            reasons, we’ve built a reputation for delivering your funds with
            care and efficiency.
          </p>
          <p>
            We understand the importance of trust and reliability when it comes
            to your financial transactions. That's why we’ve been the go-to
            choice for thousands of families and individuals over the years.{" "}
          </p>
          <p>
            In addition to our remittance services, we’re proud to serve the
            Brazilian community through our Brazilian Store Bossa Nova Brasil,
            offering a variety of authentic Brazilian products. From groceries
            to unique cultural items, we’re your one-stop shop for all things
            Brazil.
          </p>
        </div>
        <ScrollToTopButton />
      </Container>
    </div>
  );
}

export default Hero;
