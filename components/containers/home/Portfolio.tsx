import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/portfolio/portfolio-1.jpg";
import two from "@/public/img/portfolio/portfolio-2.jpg";
import three from "@/public/img/portfolio/portfolio-3.jpg";
import four from "@/public/img/portfolio/portfolio-4.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio__two section-padding pt-30 mb-30">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12 ">
            <div className="portfolio__two-title">
              <h2>Innovative Electrical Solutions for Every Sector</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="topy-tilt">
              <div
                className="portfolio__two-item"
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href="#">
                  <Image src={one} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Guaranteed</span>
                    <h4>
                      <Link href="#">Electrical Panel Boards</Link>
                    </h4>
                  </div>
                  <Link href="#">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="topy-tilt">
              <div
                className="portfolio__two-item "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link href="#">
                  <Image src={two} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Professional</span>
                    <h4>
                      <Link href="#">Smart Home Integration</Link>
                    </h4>
                  </div>
                  <Link href="#">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="topy-tilt">
              <div
                className="portfolio__two-item "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link href="#">
                  <Image src={three} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Reliable</span>
                    <h4>
                      <Link href="#">Industrial Automation</Link>
                    </h4>
                  </div>
                  <Link href="#">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="topy-tilt">
              <div
                className="portfolio__two-item "
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <Link href="#">
                  <Image src={four} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Efficient</span>
                    <h4>
                      <Link href="#">Solar Energy Systems</Link>
                    </h4>
                  </div>
                  <Link href="#">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 t-center mt-70">
            <Link className="button-2" href="#">
              Call Us<i className="fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
