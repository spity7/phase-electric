import Link from "next/link";
import Image from "next/image";
import faq from "@/public/img/pages/faq.png";
import bannerShape from "@/public/img/shape/banner-shape.png";

const BannerTwo = () => {
  return (
    <div className="banner__two">
      <div className="container">
        <div className="row ai-center">
          <div className="col-lg-7 lg-mb-40">
            <div className="banner__two-content">
              <h1 data-aos-duration="800"
                    data-aos="fade-up" data-aos-delay="400">
                Plumbing pros you Quality <span>work every</span> time Fix it
                fast
              </h1>
              <p
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Plumbers provide essential services to install, repair, and
                maint plumbing systems in residential and commercial properties
              </p>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Link className="button-1 " href="about">
                  Read More<i className="fa-regular fa-angle-right"></i>
                </Link>
              </div>
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
                    <span className="counter">3</span>k+
                  </h3>
                  <span>Website Lounged</span>
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
