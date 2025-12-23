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
                <h2>Frequently Asked Questions</h2>
                <p
                  data-aos-duration="800"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  At Phase Electric, we’re here to make electrical work simple,
                  safe, and efficient. From residential upgrades to commercial
                  installations, here are answers to some of the most common
                  questions we receive from our clients.
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
                    <span>01</span>How often should I have my electrical system
                    inspected?
                  </h5>
                  <div
                    id="collapseOne"
                    data-bs-parent="#accordionExample"
                    className={`faq__area-item-body collapse${
                      active === 0 ? " show " : ""
                    }`}
                  >
                    <p>
                      We recommend having your electrical system inspected every
                      3–5 years. Regular inspections ensure safety, identify
                      potential hazards early, and keep your home or business
                      compliant with current electrical codes.
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
                    <span>02</span>What should I do if my circuit breaker keeps
                    tripping?
                  </h5>
                  <div
                    id="collapseTwo"
                    className={`faq__area-item-body collapse${
                      active === 1 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      A frequently tripping breaker can indicate an overloaded
                      circuit, faulty wiring, or a damaged appliance. Unplug a
                      few devices from the affected circuit, and if the issue
                      continues, contact Phase Electric for a diagnostic check.
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
                    <span>03</span>Do you provide emergency electrical services?
                  </h5>
                  <div
                    id="collapseThree"
                    className={`faq__area-item-body collapse${
                      active === 2 ? " show " : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <p>
                      Yes! Phase Electric offers 24/7 emergency service for
                      power outages, faulty wiring, and other urgent electrical
                      issues. Your safety is our top priority — call us anytime,
                      day or night.
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
