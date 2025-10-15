import Image from "next/image";
import border from "@/public/img/shape/border.svg";
import processTwo from "@/public/img/icon/process-1.svg";
import processThree from "@/public/img/icon/process-2.svg";
import process from "@/public/img/icon/process-3.svg";

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
              <h2>
                Expanded compatibility with various platforms
              </h2>
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
              <h3>Drip Detectives</h3>
              <p>
                Plumbers provide essential services to install repair and maint
                plumbing systems
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
              <h3>Leak Stop Specialists</h3>
              <p>
                Plumbers provide essential services to install repair and maint
                plumbing systems
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
              <h3>Pipe Dream Team</h3>
              <p>
                Plumbers provide essential services to install repair and maint
                plumbing systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
