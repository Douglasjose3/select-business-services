import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import MyMap from "../myMap/MyMap";

function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="contact">
      <hr className="mt-5" />
      <div className="container">
        <section className="mt-5">
          <h3 className="sub-title mb-5" data-aos="fade-right">
            Have a question? Shoot us a message...
          </h3>
          <div className="row">
            <div className="col-sm-5">
              <img
                className="responsive"
                src="./contact.png"
                alt="Ilustração"
              />
            </div>

            <div className="contact-box col-sm-7">
              <div className="card-contact card p-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="icon-contact bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First and last name"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-telephone-fill"></i>
                  </span>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Phone number aplicar máscara"
                    aria-label="Username"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-pencil-fill"></i>
                  </span>
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Message"
                    aria-label="Username"
                  />
                </div>

                <Button variant="success">Submit</Button>
              </div>
            </div>
          </div>
          <hr className="mt-4" />

          <div id="location">
            <h3 className="sub-title mt-5 mb-5" data-aos="fade-right">
              ... or if you prefer, call, email or come to us!
            </h3>
            <div className="row">
              <div className="col-lg-5 d-block">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-telephone-forward-fill"></i>
                  </span>
                  <label
                    className="form-control"
                    type="tel"
                    aria-label="Username"
                  >
                    (510) 525-7419
                  </label>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-envelope-at-fill"></i>
                  </span>
                  <label
                    className="form-control"
                    type="email"
                    aria-label="Username"
                  >
                    nossacalifornia@gmail.com
                  </label>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="icon-contact bi bi-calendar-heart-fill"></i>
                  </span>
                  <label
                    className="form-control"
                    type="email"
                    aria-label="Username"
                  >
                    Open Monday - Friday 9:00 am - 6:00 pm
                  </label>
                </div>
              </div>
              <div className="col-lg-7">
                <div>
                  <MyMap className="myMaps" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
