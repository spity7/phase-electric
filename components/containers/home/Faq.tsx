"use client";
import { useState } from "react";
import Image from "next/image";
import faq from "@/public/img/pages/faq.jpg";

const Faq = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="faq__two section-padding">
      <div className="container">
        <div className="row ai-center">
          <div className="col-lg-5 lg-mb-30 ">
            <div className="faq__two-image">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={faq}
                    alt="image"
                    className="parallax-image"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq__two-right">
              <div className="faq__two-right-title">
                <h2>Ask Question</h2>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Plumbers provide essential services to install, repair, and
                  maintain plumbing systems in residential and commercial
                  properties. They work on pipes, fixtures
                </p>
              </div>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="900"
                id="accordionExample"
              >
                <div className="faq__area-item">
                  <h5
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    className={(active == 0 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 0 ? -1 : 0)}
                  >
                    <span>01</span>How often Plumb Professionals?
                  </h5>
                  <div
                    id="collapseOne"
                    data-bs-parent="#accordionExample"
                    className={`faq__area-item-body collapse${
                      active === 0 ? " show " : ""
                    }`}
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className={(active == 1 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 1 ? -1 : 1)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                    <span>02</span>What should I do in case of a plumbing?
                  </h5>
                  <div
                    id="collapseTwo"
                    className={`faq__area-item-body collapse${
                      active === 1 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
                <div className="faq__area-item">
                  <h5
                    className={(active == 2 ? "  " : " collapsed") + " icon"}
                    onClick={() => setActive(active === 2 ? -1 : 2)}
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                  >
                    <span>03</span>What is the best way hardwood floors ?
                  </h5>
                  <div
                    id="collapseThree"
                    className={`faq__area-item-body collapse${
                      active === 2 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Plumbers provide essential services to install repair and
                      plumbing systems in residential and commercial properties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
