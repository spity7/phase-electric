"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/phase-black.png";
import SearchBox from "./SearchBox";
import Hamburger from "./Hamburger";
import OffCanvasMenu from "./OffcanvasMenu";

const HeaderTwo = () => {
  // hamburger
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  // search box
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  // offcanvas menu
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(openSubMenu);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, [openSubMenu]);

  return (
    <>
      <div className="header-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header-two-area">
                <div className="row ai-center">
                  <div className="col-xl-12 col-lg-12 col-12 text-center">
                    <div className="header-one__left logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" priority />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-xl-6 col-lg-8 res-hide">
                    <div className="header-one__center">
                      <div className="header-one__center-menu t-center">
                        <ul id="mobilemenu">
                          <li className="menu-item-has-children">
                            <a>Home</a>
                            <ul className="sub-menu">
                              <li>
                                <Link href="/">Home 01</Link>
                              </li>
                              <li>
                                <Link href="index-two">Home 02</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a>Pages</a>
                            <ul className="sub-menu">
                              <li>
                                <Link href="about">About Us</Link>
                              </li>
                              <li className="menu-item-has-children">
                                <a>Services</a>
                                <ul className="sub-menu">
                                  <li>
                                    <Link href="services">Our Services</Link>
                                  </li>
                                  <li>
                                    <Link href="services-details">
                                      Service Details
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link href="faq">FAQ&apos;s</Link>
                              </li>
                              <li>
                                <Link href="testimonial">Testimonials</Link>
                              </li>
                              <li>
                                <Link href="error">404 Page</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a>Projects</a>
                            <ul className="sub-menu">
                              <li>
                                <Link href="projects">Projects</Link>
                              </li>
                              <li>
                                <Link href="projects-details">
                                  Project Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a>Blog</a>
                            <ul className="sub-menu">
                              <li>
                                <Link href="blog-grid">Blog Grid</Link>
                              </li>
                              <li>
                                <Link href="blog-standard">Blog Standard</Link>
                              </li>
                              <li>
                                <Link href="blog-details">Blog Details</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-xl-4 col-lg-2 col-5">
                    <div className="header-one__right">
                      <div className="header-one__right-search">
                        <div className="search">
                          <span
                            className="header-one__right-search-icon open"
                            onClick={handleSearch}
                          >
                            <i className="fal fa-search"></i>
                          </span>
                        </div>
                      </div>
                      <div className="header-one__right-sidebar">
                        <div
                          className="header-one__right-sidebar-popup-icon"
                          onClick={handleHamburger}
                        >
                          <i className="fa-regular fa-bars-sort"></i>
                        </div>
                      </div>
                      <div
                        className="header-one__right-responsive-menu menu__bar"
                        onClick={handleToggleMenu}
                      >
                        <i className="fa-regular fa-bars"></i>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchBox search={search} setSearch={setSearch} />
      <Hamburger
        hamburger={hamburger}
        handleHamburger={handleHamburger}
        setHamburger={setHamburger}
      />
      <OffCanvasMenu
        toggleMenu={toggleMenu}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};

export default HeaderTwo;
