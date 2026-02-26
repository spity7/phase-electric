import Link from "next/link";
import Image from "next/image";
import faq from "@/public/img/pages/WhatsApp Image 2026-02-26 at 17.08.34.jpeg";
import bannerShape from "@/public/img/shape/banner-shape.png";

const BannerTwo = () => {
  return (
    <div className="banner__two">
      <div className="container">
        <div className="row ai-center">
          <div className="col-lg-7 lg-mb-40">
            <div className="banner__two-content">
              <h1
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Powering the Future <span>One Connection</span> at a Time
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Welcome to <strong>Phase Electric</strong>, your trusted partner
                for electrical contracting, automation, solar systems, and smart
                home integration. We provide innovative, sustainable, and
                reliable solutions for residential, commercial, and industrial
                clients.
              </p>
              {/* <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Link className="button-1 " href="#">
                  Read More<i className="fa-regular fa-angle-right"></i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="banner__two-image "
              data-aos-duration="800"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Image className="one" src={faq} alt="banner" priority />
              <Image
                className="shape"
                src={bannerShape}
                alt="banner"
                priority
              />
              <div className="content">
                <div className="content-icon">
                  <i className="fa-light fa-rocket-launch"></i>
                </div>
                <div className="content-title">
                  <h3>
                    <span className="counter">10</span>+
                  </h3>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
