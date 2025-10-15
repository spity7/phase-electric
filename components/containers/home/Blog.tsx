"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/blog/blog-1.jpg";
import two from "@/public/img/blog/blog-2.jpg";
import three from "@/public/img/blog/blog-3.jpg";

const Blog = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="blog__two section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="blog__two-title ">
              <h2>Our Recent Blog And News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className={
                "blog__two-item topy-tilt" + (active === 1 ? " active" : "")
              }
              onMouseEnter={() => setActive(1)}
              onMouseLeave={() => setActive(0)}
            >
              <div className="blog__two-item-image">
                <Image src={one} alt="blog-image" />
              </div>
              <div className="blog__two-item-content">
                <h5>
                  <Link className="mouseover" href="blog-details">
                    The Flow Masters Where Quality Meet Service
                  </Link>
                </h5>
                <p>
                  Plumbers provide essential services to install, repair, and
                  maintain
                </p>
                <div className="meta">
                  <ul>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-user"></i>Admin
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-calendar-alt"></i>October 19, 2024
                      </Link>
                    </li>
                  </ul>
                  <Link className="mouseover" href="blog-details">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div
              className={
                "blog__two-item topy-tilt" + (active === 2 ? " active" : "")
              }
              onMouseEnter={() => setActive(2)}
              onMouseLeave={() => setActive(0)}
            >
              <div className="blog__two-item-image">
                <Image src={two} alt="blog-image" />
              </div>
              <div className="blog__two-item-content">
                <h5>
                  <Link className="mouseover" href="blog-details">
                    Piping Hot Service Every Time Flow Masters
                  </Link>
                </h5>
                <p>
                  Plumbers provide essential services to install, repair, and
                  maintain
                </p>
                <div className="meta">
                  <ul>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-user"></i>Admin
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-calendar-alt"></i>October 19, 2024
                      </Link>
                    </li>
                  </ul>
                  <Link className="mouseover" href="blog-details">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos-duration="800"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div
              className={
                "blog__two-item topy-tilt" + (active === 3 ? " active" : "")
              }
              onMouseEnter={() => setActive(3)}
              onMouseLeave={() => setActive(0)}
            >
              <div className="blog__two-item-image">
                <Image src={three} alt="blog-image" />
              </div>
              <div className="blog__two-item-content">
                <h5>
                  <Link className="mouseover" href="blog-details">
                    Plumbing pros you can trust Quality work
                  </Link>
                </h5>
                <p>
                  Plumbers provide essential services to install, repair, and
                  maintain
                </p>
                <div className="meta">
                  <ul>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-user"></i>Admin
                      </Link>
                    </li>
                    <li>
                      <Link href="blog-details">
                        <i className="fas fa-calendar-alt"></i>October 19, 2024
                      </Link>
                    </li>
                  </ul>
                  <Link className="mouseover" href="blog-details">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
