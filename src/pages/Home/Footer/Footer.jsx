import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import useTheme from "../../Hooks/useTheme";

const Footer = () => {
  const { pathname } = useLocation();
  //   const { isDark } = useTheme();
  const isDark = false;
  return (
    <div className="bg-[#171819] text-white">
      <footer
        className={`footer pt-24 p-10  text-base-content w-full max-w-[1440px] mx-auto  ${
          pathname === "/login" || pathname === "/signup" ? "hidden" : ""
        }  dark:text-dark-text`}
      >
        <aside className="text-white">
          <NavLink className="text-lg md:text-2xl">ClassyCanvas</NavLink>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable service since 1992
          </p>
        </aside>
        <nav className=" text-white">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Product</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Orders</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
