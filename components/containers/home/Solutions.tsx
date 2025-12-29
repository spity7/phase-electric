"use client";
import { useState } from "react";
import Image from "next/image";
import Counter from "../Counter";
import YoutubeEmbed from "../YoutubeEmbed";
import one from "@/public/img/pages/video.jpg";

const Solutions = ({ addClass = false }) => {
  const [videoActive, setVideoActive] = useState(false);

  return (
    <>
      <div
        className={
          (addClass ? " section-padding " : " section-padding pt-0") +
          " solutions__area"
        }
      >
        <div className="container">
          <div className="row ai-center">
            <div className="col-lg-8 lg-mb-30 ">
              <div className="solutions__area-left">
                <h2>Empowering Industries with Smarter Electrical Solutions</h2>
                <p>
                  Since 1993, <strong>Phase Electric</strong> has delivered
                  advanced electrical systems that power homes, businesses, and
                  industries. From panel board assembly and industrial
                  automation to solar energy and smart home integration, our
                  solutions are designed to enhance efficiency, reliability, and
                  sustainability across every project.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 "
              data-aos-duration="800"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="solutions__area-right">
                <h2>
                  <span className="counter">
                    <Counter value={10} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <h5>Years of Industry Experience</h5>
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div
              className="col-lg-3 col-sm-6 mt-35 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    <Counter value={30} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>Skilled Professionals</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    <Counter value={100} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>Completed Projects</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    <Counter value={120} />
                  </span>
                  <span className="pre">+</span>
                </h2>
                <span>Corporate Clients</span>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 mt-35 "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="counter__two-item">
                <h2>
                  <span className="counter">
                    <Counter value={100} />
                  </span>
                  <span className="pre">%</span>
                </h2>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-xl-12 ">
              <div className="video__area">
                <div className="video">
                  <a
                    className="video-popup ripple"
                    onClick={() => setVideoActive(true)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="parallax-image-wrap">
                  <div className="parallax-image-inner">
                    <Image src={one} className="parallax-image" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            {videoActive && <YoutubeEmbed embedId="0WC-tD-njcA" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
