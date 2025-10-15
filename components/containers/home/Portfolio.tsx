import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/portfolio/portfolio-1.jpg";
import two from "@/public/img/portfolio/portfolio-2.jpg";
import three from "@/public/img/portfolio/portfolio-3.jpg";
import four from "@/public/img/portfolio/portfolio-4.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio__two section-padding pt-0">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12 ">
            <div className="portfolio__two-title">
              <h2>Photography services for a fashion Photo</h2>
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
                <Link href="services-details">
                  <Image src={one} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Guaranteed</span>
                    <h4>
                      <Link href="services-details">
                        Reliable Plumbing Solutions
                      </Link>
                    </h4>
                  </div>
                  <Link href="services-details">
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
                <Link href="services-details">
                  <Image src={two} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Professional</span>
                    <h4>
                      <Link href="services-details">
                        Home Repair Specialists
                      </Link>
                    </h4>
                  </div>
                  <Link href="services-details">
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
                <Link href="services-details">
                  <Image src={three} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Reliable</span>
                    <h4>
                      <Link href="services-details">
                        Expert Handyman Services
                      </Link>
                    </h4>
                  </div>
                  <Link href="services-details">
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
                <Link href="services-details">
                  <Image src={four} alt="image" priority />
                </Link>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Efficient</span>
                    <h4>
                      <Link href="services-details">
                        Affordable Repair Services
                      </Link>
                    </h4>
                  </div>
                  <Link href="services-details">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 t-center mt-70">
            <Link className="button-2" href="services">
              View More<i className="fa-regular fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
