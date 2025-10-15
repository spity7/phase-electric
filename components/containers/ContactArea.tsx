import Link from "next/link";
import Image from "next/image";
import contact from "@/public/img/pages/contact.jpg";

const ContactArea = () => {
  return (
    <div className="contact__page section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 lg-mb-30 ">
            <div className="contact__page-left">
              <div className="parallax-image-wrap">
                <div className="parallax-image-inner">
                  <Image
                    src={contact}
                    alt="image"
                    priority
                    className="parallax-image"
                  />
                </div>
              </div>
              <div className="info">
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-phone-alt icon-animation"></i>
                  </div>
                  <div className="info-item-content">
                    <span>Call Now</span>
                    <h6>
                      <Link href="tel:+125(895)658568">+125 (895) 658 568</Link>
                    </h6>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <Link href="mailto:info.help@gmail.com">
                        info.help@gmail.com
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="contact__page-right">
              <h2>Get in Touch</h2>
              <form
                action="#"
                data-aos-duration="800"
                data-aos="fade-left"
                data-aos-delay="500"
              >
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
                      <input type="text" name="subject" placeholder="Subject" />
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
  );
};

export default ContactArea;
