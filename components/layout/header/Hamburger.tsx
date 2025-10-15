import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-2.png";

interface HamburgerProps {
  hamburger: boolean;
  setHamburger: (value: boolean) => void;
  handleHamburger: () => void;
}

const Hamburger = ({ hamburger, setHamburger }: HamburgerProps) => {
  return (
    <>
      <div
        className={
          (hamburger ? " active" : " ") + " header-one__right-sidebar-popup"
        }
      >
        <div className="sidebar-close-btn" onClick={() => setHamburger(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header-one__right-sidebar-popup-logo">
          <Link href="/">
            <Image src={logo} alt="logo" priority />
          </Link>
        </div>
        <p>
          Nullam dignissim, ante scelerisque the is euismod fermentum odio sem
          semper the is erat, a feugiat leo urna eget eros. Duis Aenean a
          imperdiet risus.
        </p>
        <div className="header-one__right-sidebar-popup-contact">
          <h4 className="mb-30">Contact Info</h4>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <Link href="tel:+125(895)658568">+125 (895) 658 568</Link>
              </h6>
            </div>
          </div>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <Link href="mailto:info.help@gmail.com">
                  info.help@gmail.com
                </Link>
              </h6>
            </div>
          </div>
          <div className="header-one__right-sidebar-popup-contact-item">
            <div className="header-one__right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header-one__right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <Link href="https://google.com/maps" target="_blank">
                  Welshpool United Kingdom
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header-one__right-sidebar-popup-social social__icon">
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
          </ul>
        </div>
      </div>
      <div
        className={(hamburger ? " show" : " ") + " sidebar-overlay"}
        onClick={() => setHamburger(false)}
      ></div>
    </>
  );
};

export default Hamburger;
