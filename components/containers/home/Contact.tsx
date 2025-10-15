import Link from "next/link";

const Contact = ({ addClass = false }) => {
  return (
    <div
      className={(addClass ? " section-padding pt-0" : " ") + " contact__one"}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="contact__one-area">
              <div className="row ai-center">
                <div className="col-lg-6 lg-mb-30">
                  <div className="contact__one-area-left">
                    <h2>
                      submit your report by Message
                    </h2>
                    <div
                      className="info "
                      data-aos-duration="800"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>Call Now</span>
                          <h5>
                            <Link href="tel:+125(895)658568">
                              +125 (895) 658 568
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>Office Address</span>
                          <h5>
                            <Link
                              href="https://google.com/maps"
                              target="_blank"
                            >
                              2715 Ash Dr. San Jose, South Dakota 83475
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="info-item">
                        <div className="info-item-content">
                          <span>Quick Email</span>
                          <h5>
                            <Link href="mailto:info.help@gmail.com">
                              info.help@gmail.com
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="contact__one-area-right "
                    data-aos-duration="800"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="contact__form-area-item">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="contact__form-area-item">
                            <textarea
                              name="message"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="contact__form-area-item">
                            <button className="button-1" type="submit">
                              Submit Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Contact;
