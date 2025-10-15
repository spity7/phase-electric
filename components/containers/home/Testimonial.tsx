"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "@/public/img/brand/client-1.svg";
import two from "@/public/img/brand/client-2.svg";
import three from "@/public/img/brand/client-3.svg";
import four from "@/public/img/brand/client-4.svg";
import five from "@/public/img/brand/client-5.svg";
import quote from "@/public/img/icon/quote.svg";

const Testimonial = () => {
  return (
    <div className="testimonial__two section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial__two-area">
              <div className="row">
                <div className="col-xl-12">
                  <div className="testimonial__two-area-brand">
                    <div className="slide__area">
                      <div className="sliders scroll">
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={one} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={two} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={three} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={four} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={five} alt="image" priority />
                        </div>
                      </div>
                      <div className="sliders scroll">
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={one} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={two} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={three} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={four} alt="image" priority />
                        </div>
                        <div className="testimonial__two-area-brand-slide-item">
                          <Image src={five} alt="image" priority />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-60">
                <div className="col-xl-12">
                  <div className="testimonial__two-area-title">
                    <h2>
                      Impressed with the quality and attention to detail
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="swiper testimonial_slider_two">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      speed={2000}
                      loop={true}
                      roundLengths={true}
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        el: ".testimonial_pagination",
                        clickable: true,
                      }}
                      breakpoints={{
                        992: {
                          slidesPerView: 2,
                        },
                      }}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>Flores, Juanita</h4>
                              <span>Development Manager</span>
                            </div>
                            <Image src={quote} alt="icon" priority />
                          </div>
                          <p>
                            Plumbers are skilled professionals who specialize in
                            installing and maintaining systems used for water,
                            sew drainage, and gas. They play a vital role
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>Darrell Steward</h4>
                              <span>Marketing Coordinator</span>
                            </div>
                            <Image src={quote} alt="icon" priority />
                          </div>
                          <p>
                            Plumbers are skilled professionals who specialize in
                            installing and maintaining systems used for water,
                            sew drainage, and gas. They play a vital role
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="testimonial__two-area-item swiper-slide">
                          <div className="testimonial__two-area-item-client">
                            <div className="testimonial__two-area-item-client-title">
                              <h4>Cooper, Kristin</h4>
                              <span>Co Founder</span>
                            </div>
                            <Image src={quote} alt="icon" priority />
                          </div>
                          <p>
                            Plumbers are skilled professionals who specialize in
                            installing and maintaining systems used for water,
                            sew drainage, and gas. They play a vital role
                          </p>
                          <div className="testimonial__two-area-item-reviews">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="row mt-60">
                <div className="testimonial__two-pagination">
                  <div className="testimonial_pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
