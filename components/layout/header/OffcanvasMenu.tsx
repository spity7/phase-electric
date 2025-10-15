"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo-1.png";

interface HamburgerProps {
  toggleMenu: boolean;
  handleToggleMenu: (value: boolean) => void;
}

const OffcanvasMenu = ({ toggleMenu, handleToggleMenu }: HamburgerProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " sub-menu-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " drop-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <>
      <div className="fix-area d-block d-xl-none">
        <div className={(toggleMenu ? " info-open" : " ") + " offcanvas__info"}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo-img" priority />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => handleToggleMenu(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav mobile-menu">
                    <ul>
                      <li className="has-dropdown active menu-thumb">
                        <a
                          className={`drop ${isSubMenuButton("home")}`}
                          onClick={() => handleSubmenu("home")}
                        >
                          Home
                        </a>
                        <ul
                          className={`submenu has-homemenu ${isSubMenuOpen(
                            "home"
                          )}`}
                        >
                          <li>
                            <Link href="/">Home 01</Link>
                          </li>
                          <li>
                            <Link href="index-two">Home 02</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a
                          className={`drop ${isSubMenuButton("pages")}`}
                          onClick={() => handleSubmenu("pages")}
                        >
                          Pages
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("pages")}`}>
                          <li>
                            <Link href="about">About Us</Link>
                          </li>
                          <li className="has-dropdown">
                            <a
                              className={`drop ${isNestedMenuButton(
                                "services"
                              )}`}
                              onClick={() => handleNestedmenu("services")}
                            >
                              Services
                            </a>
                            <ul
                              className={`submenu ${isNestedMenuOpen(
                                "services"
                              )}`}
                            >
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
                            <Link href="faq">FAQ&apos;S</Link>
                          </li>
                          <li>
                            <Link href="testimonial">Testimonials</Link>
                          </li>
                          <li>
                            <Link href="error">404 Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className={`drop ${isSubMenuButton("projects")}`}
                          onClick={() => handleSubmenu("projects")}
                        >
                          Projects
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("projects")}`}>
                          <li>
                            <Link href="projects">Projects</Link>
                          </li>
                          <li>
                            <Link href="projects-details">Project Details</Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a
                          className={`drop ${isSubMenuButton("blog")}`}
                          onClick={() => handleSubmenu("blog")}
                        >
                          Blog
                        </a>
                        <ul className={`submenu ${isSubMenuOpen("blog")}`}>
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
                        <Link href="contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link target="_blank" href="/">
                        Welshpool United Kingdom
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="mailto:info@example.com">
                        <span>info.help@gmail.com</span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+11002345909">+125 (895) 658 568</Link>
                    </div>
                  </li>
                </ul>
                <div className="social-icon d-flex align-items-center">
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
                  <li>
                    <Link href="https://behance.net" target="_blank">
                      <i className="fab fa-behance"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          (toggleMenu ? " overlay-open" : " ") +
          " offcanvas__overlay d-block d-xl-none"
        }
        onClick={() => handleToggleMenu(false)}
      ></div>
    </>
  );
};

export default OffcanvasMenu;
