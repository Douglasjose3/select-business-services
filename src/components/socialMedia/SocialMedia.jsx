import Aos from "aos";
import "aos/dist/aos.css";
import "./socialMedia.css";
import { useEffect } from "react";

function SocialMedia() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-socialMedias">
      <div className="container">
        <h3 className="sub-title sub-h3" data-aos="fade-right">
          Social Medias
        </h3>
        <div className="d-flex justify-content-center text-center pb-5">
          <a href="https://facebook.com">
            <i className="icon-social bi bi-facebook"></i>
          </a>

          <a href="https://instagram.com">
            <i className="icon-social bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="icon-social bi bi-twitter-x"></i>
          </a>

          <a href="#">
            <i className="icon-social bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
