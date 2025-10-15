import Link from "next/link";

const CtaArea = () => {
  return (
    <div className="cta__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta__one-area">
              <div className="row ai-center">
                <div className="col-xl-6 col-lg-7 lg-mb-30">
                  <div className="cta__one-area-content ">
                    <h2 className="lg-t-center">
                      Feel Free To Contact Us Get This Service
                    </h2>
                    <div className="cta__one-area-content-tel lg-jc-center">
                      <div className="icon">
                        <i className="fa-regular fa-phone"></i>
                      </div>
                      <div className="info">
                        <span>For Any Help</span>
                        <h4>
                          <Link href="tel:+450570658567">+45 057 0658 567</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div
                    className="cta__one-form "
                    data-aos-duration="800"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button className="button-5" type="submit">
                        Subscribe
                      </button>
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

export default CtaArea;
