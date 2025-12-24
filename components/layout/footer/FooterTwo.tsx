import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/PHAZE-logo-Model.pdf.jpg";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__two">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="footer__two-area">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 md-mb-30">
                  <div
                    className="footer__one-widget"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src={logo}
                          alt="logo"
                          priority
                          style={{ borderRadius: "14px" }}
                        />
                      </Link>
                    </div>
                    <p>
                      Empowering Industries with Smarter Electrical Solutions
                    </p>
                    <div className="social__icon">
                      <ul>
                        <li>
                          <Link href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com" target="_blank">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="https://behance.net" target="_blank">
                            <i className="fab fa-behance"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://linkedin.com" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                  <div
                    className="footer__one-widget ml-60 xl-ml-0"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h4>Services</h4>
                    <div className="footer-widget-menu">
                      <ul>
                        <li>
                          <Link href="services-details">Drip Detectives</Link>
                        </li>
                        <li>
                          <Link href="services-details">
                            Leak Stop Specialists
                          </Link>
                        </li>
                        <li>
                          <Link href="services-details">Pipe Dream Team</Link>
                        </li>
                        <li>
                          <Link href="services-details">
                            Rapid Repair Squad
                          </Link>
                        </li>
                        <li>
                          <Link href="services-details">
                            Clear Flow Plumbers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 md-mb-30">
                  <div
                    className="footer__one-widget ml-60 xl-ml-0"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <h4>Quick links</h4>
                    <div className="footer-widget-menu">
                      <ul>
                        <li>
                          <Link href="about">About Us</Link>
                        </li>
                        <li>
                          <Link href="blog-grid">Blog</Link>
                        </li>
                        <li>
                          <Link href="testimonial">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="faq">Faqs</Link>
                        </li>
                        <li>
                          <Link href="contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div
                    className="footer__one-widget"
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <h4>Contact Info</h4>
                    <div className="info">
                      <div className="info-item">
                        <div className="info-item-icon">
                          <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="info-item-content">
                          <span>Call Now</span>
                          <h6>
                            <Link href="tel:+125(895)658568">
                              +961 1234 5678
                            </Link>
                          </h6>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-item-icon">
                          <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="info-item-content">
                          <span>Office Address</span>
                          <h6>
                            <Link
                              href="https://google.com/maps"
                              target="_blank"
                            >
                              Beirut
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="copyright__one">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="copyright__one-left lg-t-center">
                    <p>
                      &copy; <Link href="/">Phase</Link> {currentYear} | All
                      Rights Reserved
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="copyright__one-menu t-right lg-t-center lg-mt-5">
                    <ul>
                      <li>
                        <Link href="contact">Privacy & Policy</Link>
                      </li>
                      <li>
                        <Link href="contact">Terms and Conditions</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
