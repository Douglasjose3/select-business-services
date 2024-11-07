import Aos from "aos";
import "aos/dist/aos.css";
import "./opportunities.css";
import { useEffect } from "react";

function Opportunities() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="opportunities-section">
      <hr className="mt-5" />
      <div className="container" id="opportunities">
        <div className="services-content">
          <h2
            className="sub-title mt-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Job Openings
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="main">
                <div className="opportunities" data-aos="fade-right">
                  <h4>Market Research Analyst</h4>
                  <p>
                    Market Research Analyst w/ min. 3 yrs specialized experience
                    sought for position in El Cerrito. Full TIme - $96,400 -
                    Email resume and cover letter to Select Business Services at
                    hr.selectbusiness@gmail.com.
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

export default Opportunities;
