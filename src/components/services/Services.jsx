import Aos from "aos";
import "aos/dist/aos.css";
import "./services.css";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="services-section">
      <div className="container" id="services">
        <div className="services-content">
          <h2
            className="sub-title mt-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            What we do!
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>International Money Transfers</h4>
                  <p>
                    We offer a fast and secure international money transfer
                    service, enabling you to send money anywhere in the world.
                    With competitive rates and a simple process, we ensure your
                    funds reach the recipient quickly and without complications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="zoom-in">
                  <h4>Check Cashing</h4>
                  <p>
                    Our check cashing service is ideal for those who need to
                    convert checks into cash quickly and reliably. We provide a
                    fast and transparent process, ensuring you receive the value
                    securely and hassle-free, with fair and clear fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Financial Consulting</h4>
                  <p>
                    We provide specialized financial consulting, helping our
                    clients understand the best options for remittance and
                    investment. Our experienced professionals offer personalized
                    guidance, ensuring you make informed decisions about your
                    transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Fast Money Transfers</h4>
                  <p>
                    With our fast transfer service, you can send funds abroad in
                    minutes. We use advanced technology to ensure your money
                    reaches the recipient efficiently, ideal for urgent
                    situations where time is critical.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="zoom-in">
                  <h4>Transaction Monitoring</h4>
                  <p>
                    We offer a real-time transaction monitoring system, allowing
                    you to track the status of your remittances and check
                    cashing transactions easily. With notifications at each
                    step, you will have full control and security over your
                    operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Multilingual Support</h4>
                  <p>
                    Our customer service is multilingual, ensuring clients from
                    different nationalities can communicate easily. We offer
                    support in multiple languages, making the experience even
                    more accessible and comfortable, no matter where you are in
                    the world.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Easy Access</h4>
                  <p>
                    Our company is located in an easily accessible area, with
                    spacious private parking. This ensures that our clients can
                    arrive quickly, without concerns about transportation or
                    parking. We prioritize your convenience to make your
                    experience even smoother.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="zoom-up">
                  <h4>Security and Confidentiality</h4>
                  <p>
                    We prioritize the security of your data and transactions.
                    With modern encryption systems and constant monitoring, we
                    ensure that your information is always protected. Our
                    confidentiality policy guarantees that all your operations
                    are handled with complete discretion.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Competitive Rates</h4>
                  <p>
                    We offer highly competitive exchange rates and remittance
                    fees, providing our clients with the best financial
                    experience. Our services are transparent, with no hidden
                    fees, so you know exactly what you’re paying and can
                    maximize the value of your transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Personalized Service</h4>
                  <p>
                    Our team of professionals is trained to offer personalized
                    service, understanding your specific needs. We are always
                    ready to answer questions and provide guidance, ensuring
                    that you feel secure and well-informed at every step of the
                    process.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="zoom-in">
                  <h4>Transaction Speed</h4>
                  <p>
                    We value your time. Our remittances are processed quickly
                    and efficiently, ensuring that your funds reach their
                    destination in a timely manner. With cutting-edge
                    technology, we reduce wait times, making your day-to-day
                    life more practical and efficient.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Service Variety</h4>
                  <p>
                    In addition to international remittances, we also offer
                    check-cashing services, adapting to your financial needs.
                    With a diversified portfolio, we ensure you’ll find
                    everything you need to manage your finances effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Personal & Commercial Lines</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora facere explicabo ea veniam doloremque soluta, itaque
                    maxime nesciunt cumque commodi exercitationem vel eveniet
                    illo quam vitae corrupti quia animi. Neque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="zoom-in">
                  <h4>Surety Bonds</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora facere explicabo ea veniam doloremque soluta, itaque
                    maxime nesciunt cumque commodi exercitationem vel eveniet
                    illo quam vitae corrupti quia animi. Neque.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="main">
                <div className="services" data-aos="fade-right">
                  <h4>Excess Liability Etc.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora facere explicabo ea veniam doloremque soluta, itaque
                    maxime nesciunt cumque commodi exercitationem vel eveniet
                    illo quam vitae corrupti quia animi. Neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
