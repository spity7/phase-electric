"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/team/team-4.jpg";
import two from "@/public/img/team/team-5.jpg";
import three from "@/public/img/team/team-6.jpg";

const Team = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="team__two section-padding">
      <div className="container">
        <div className="row ai-center">
          <div className="col-xl-4 xl-mb-30 ">
            <div className="team__two-title">
              <h2>Meet Our Great Team Member</h2>
              <p>
                Plumbers provide essential services to install repair and maint
                plumbing systems
              </p>
              <Link className="button-1" href="">
                See More<i className="fa-regular fa-angle-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-8 "
            data-aos-duration="800"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="team__two-right">
              <div
                className={
                  "team__two-item team_active_hover " +
                  (active === 0 ? " active" : " ")
                }
                onMouseEnter={() => setActive(0)}
              >
                <Image src={one} alt="image" priority />
                <div className="team__two-item-social">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team__two-item-content">
                  <div className="info">
                    <h5>Elton John</h5>
                    <span>Senior Advisor</span>
                  </div>
                </div>
              </div>
              <div
                className={
                  "team__two-item team_active_hover " +
                  (active === 1 ? " active" : " ")
                }
                onMouseEnter={() => setActive(1)}
              >
                <Image src={two} alt="image" priority />
                <div className="team__two-item-social">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team__two-item-content">
                  <div className="info">
                    <h5>Ethan Harris</h5>
                    <span>Business Manager</span>
                  </div>
                </div>
              </div>
              <div
                className={
                  "team__two-item team_active_hover " +
                  (active === 2 ? " active" : " ")
                }
                onMouseEnter={() => setActive(2)}
              >
                <Image src={three} alt="image" priority />
                <div className="team__two-item-social">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="team__two-item-content">
                  <div className="info">
                    <h5>Alice Johnson</h5>
                    <span>Creative Director</span>
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

export default Team;
