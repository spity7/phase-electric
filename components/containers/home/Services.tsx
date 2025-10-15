"use client";
import { useState } from "react";
import Link from "next/link";

const Services = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="services__two section-padding">
      <div className="container">
        <div className="row mb-20">
          <div className="col-xl-12 ">
            <div className="services__two-title">
              <h2>
                New customization options for increased flexibility
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className={
                "services__two-item active_hover topy-tilt" +
                (active === 0 ? " active" : " ")
              }
              onMouseEnter={() => setActive(0)}
            >
              <h4>Piping Hot Service Every The Flow Masters</h4>
              <p>
                Plumbers provide essential services to install, repair, and
                maint plumbing systems
              </p>
              <Link href="services-details">
                View More<i className="fa-regular fa-angle-right"></i>
              </Link>
              <div className="icon">
                <i className="fa-brands fa-uniregistry"></i>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              className={
                "services__two-item active_hover topy-tilt" +
                (active === 1 ? " active" : " ")
              }
              onMouseEnter={() => setActive(1)}
            >
              <h4>Flow Masters Plumbing Solutions</h4>
              <p>
                Plumbers provide essential services to install, repair, and
                maint plumbing systems
              </p>
              <Link href="services-details">
                View More<i className="fa-regular fa-angle-right"></i>
              </Link>
              <div className="icon">
                <i className="fa-regular fa-tank-water"></i>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div
              className={
                "services__two-item active_hover topy-tilt" +
                (active === 2 ? " active" : " ")
              }
              onMouseEnter={() => setActive(2)}
            >
              <h4>Your Peace of Mind Piping Hot Service Time</h4>
              <p>
                Plumbers provide essential services to install, repair, and
                maint plumbing systems
              </p>
              <Link href="services-details">
                View More<i className="fa-regular fa-angle-right"></i>
              </Link>
              <div className="icon">
                <i className="fa-regular fa-lightbulb-exclamation"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
