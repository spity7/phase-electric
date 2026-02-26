"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

import one from "@/public/img/portfolio/WhatsApp Image 2025-12-23 at 9.44.41 PM.jpg";
import two from "@/public/img/portfolio/WhatsApp Image 2025-12-23 at 9.44.41 PM.jpg";
import three from "@/public/img/portfolio/WhatsApp Image 2025-12-23 at 9.44.41 PM.jpg";
import four from "@/public/img/portfolio/WhatsApp Image 2025-12-23 at 9.44.41 PM.jpg";

type ProjectCategory = "electrical" | "smart" | "industrial" | "solar";

const projectSlides = {
  electrical: [
    { src: "/img/electrical/WhatsApp Image 2026-02-26 at 17.05.28 (1).jpeg" },
    { src: "/img/electrical/WhatsApp Image 2026-02-26 at 17.05.28 (2).jpeg" },
    { src: "/img/electrical/WhatsApp Image 2026-02-26 at 17.05.29 (1).jpeg" },
    { src: "/img/electrical/WhatsApp Image 2026-02-26 at 17.05.29.jpeg" },
  ],
  smart: [
    { src: "/img/smart/WhatsApp Image 2026-02-26 at 17.07.01 (1).jpeg" },
    { src: "/img/smart/WhatsApp Image 2026-02-26 at 17.07.01.jpeg" },
    { src: "/img/smart/WhatsApp Image 2026-02-26 at 17.07.02.jpeg" },
    { src: "/img/smart/WhatsApp Image 2026-02-26 at 17.07.03.jpeg" },
    {
      type: "video" as const,
      sources: [
        {
          src: "/img/smart/WhatsApp Video 2026-02-26 at 17.07.06.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      type: "video" as const,
      sources: [
        {
          src: "/img/smart/WhatsApp Video 2026-02-26 at 17.07.08.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      type: "video" as const,
      sources: [
        {
          src: "/img/smart/WhatsApp Video 2026-02-26 at 17.07.09.mp4",
          type: "video/mp4",
        },
      ],
    },
  ],
  industrial: [
    { src: "/img/industrial/WhatsApp Image 2026-02-26 at 17.07.31.jpeg" },
    { src: "/img/industrial/WhatsApp Image 2026-02-26 at 17.07.32 (1).jpeg" },
    { src: "/img/industrial/WhatsApp Image 2026-02-26 at 17.07.32.jpeg" },
  ],
  solar: [
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.32.jpeg" },
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.33 (1).jpeg" },
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.33 (2).jpeg" },
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.33 (3).jpeg" },
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.33 (4).jpeg" },
    { src: "/img/solar/WhatsApp Image 2026-02-26 at 17.07.33.jpeg" },
  ],
};

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(
    null,
  );

  const openGallery = (e: React.MouseEvent, category: ProjectCategory) => {
    e.preventDefault();
    setActiveCategory(category);
    setOpen(true);
  };

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
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => openGallery(e, "electrical")}
                >
                  <Image src={one} alt="image" priority />
                </div>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Guaranteed</span>
                    <h4>
                      <Link
                        href="#"
                        onClick={(e) => openGallery(e, "electrical")}
                      >
                        Electrical Panel Boards
                      </Link>
                    </h4>
                  </div>
                  <Link href="#" onClick={(e) => openGallery(e, "electrical")}>
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
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => openGallery(e, "smart")}
                >
                  <Image src={two} alt="image" priority />
                </div>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Professional</span>
                    <h4>
                      <Link href="#" onClick={(e) => openGallery(e, "smart")}>
                        Smart Home Integration
                      </Link>
                    </h4>
                  </div>
                  <Link href="#" onClick={(e) => openGallery(e, "smart")}>
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
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => openGallery(e, "industrial")}
                >
                  <Image src={three} alt="image" priority />
                </div>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Reliable</span>
                    <h4>
                      <Link
                        href="#"
                        onClick={(e) => openGallery(e, "industrial")}
                      >
                        Industrial Automation
                      </Link>
                    </h4>
                  </div>
                  <Link href="#" onClick={(e) => openGallery(e, "industrial")}>
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
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => openGallery(e, "solar")}
                >
                  <Image src={four} alt="image" priority />
                </div>
                <div className="portfolio__two-item-content">
                  <div>
                    <span>Efficient</span>
                    <h4>
                      <Link href="#" onClick={(e) => openGallery(e, "solar")}>
                        Solar Energy Systems
                      </Link>
                    </h4>
                  </div>
                  <Link href="#" onClick={(e) => openGallery(e, "solar")}>
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={activeCategory ? projectSlides[activeCategory] : []}
        plugins={[Video]}
      />
    </div>
  );
};

export default Portfolio;
