import Image from "next/image";
import about from "@/public/img/about/about-1.jpg";

const About = () => {
  return (
    <div className="about__one section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="about__one-area "
              data-aos-duration="800"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="about__one-left">
                <div className="about__one-left-image dark_image">
                  <Image src={about} alt="about" priority />
                </div>
              </div>
              <div className="about__one-right">
                <div className="about__one-right-title">
                  <h2>Why Your Should Choose Our</h2>
                  <p>
                    Consecrate, disciple elite, sed quin non kumquat emus midi
                    temporal incident ut labor et dolor inure reprehend qui in
                  </p>
                </div>
                <div className="about__one-right-list">
                  <div className="about__one-right-list-item">
                    <h5>Leaks to Repairs</h5>
                    <p>
                      Reprehenderit in voluptate velit excepteur sint occaecat
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>Faucets to Fixes</h5>
                    <p>
                      Reprehenderit in voluptate velit excepteur sint occaecat
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>From Drips to Fix</h5>
                    <p>
                      Reprehenderit in voluptate velit excepteur sint occaecat
                    </p>
                  </div>
                  <div className="about__one-right-list-item">
                    <h5>Cracks to Clean</h5>
                    <p>
                      Reprehenderit in voluptate velit excepteur sint occaecat
                    </p>
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

export default About;
