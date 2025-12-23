import Image from "next/image";
import border from "@/public/img/shape/border.svg";
import processTwo from "@/public/img/icon/consultation.png";
import processThree from "@/public/img/icon/flash_615283.png";
import process from "@/public/img/icon/plug_11802400.png";

const WorkProcess = ({ addClass = false }) => {
  return (
    <div
      className={
        (addClass ? " pt-0 bg-transparent" : " ") +
        " work__process section-padding"
      }
    >
      <div className="container">
        <div className="row mb-40">
          <div className="col-xl-12 ">
            <div className="work__process-title">
              <h2>How Phase Electric Gets the Job Done Right</h2>
              <p>
                Our process ensures safe, reliable, and efficient electrical
                solutions — from your first call to final inspection.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="work__process-item">
              <Image className="shape" src={border} alt="border" priority />
              <div className="work__process-item-icon">
                <span>01</span>
                <Image src={processTwo} alt="icon" priority />
              </div>
              <h3>Consultation & Assessment</h3>
              <p>
                We start by understanding your electrical needs and inspecting
                your current setup. Our experts identify opportunities for
                upgrades, safety improvements, and energy savings.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="work__process-item two">
              <Image className="shape" src={border} alt="border" priority />
              <div className="work__process-item-icon">
                <span>02</span>
                <Image src={processThree} alt="icon" priority />
              </div>
              <h3>Professional Installation</h3>
              <p>
                Our certified electricians handle every installation with
                precision — whether it’s panel upgrades, lighting systems, or
                smart home wiring. We guarantee code compliance and long-term
                reliability.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="work__process-item three">
              <div className="work__process-item-icon">
                <span>03</span>
                <Image src={process} alt="icon" priority />
              </div>
              <h3>Testing & Quality Check</h3>
              <p>
                Before we wrap up, every connection is tested for safety and
                efficiency. Our final inspection ensures your electrical system
                performs flawlessly — giving you peace of mind that it’s done
                right the first time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
