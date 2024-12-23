import React from "react";
import "./Footer.css";
import Logo from "../logo/Logo";
import { HiArrowUpRight } from "react-icons/hi2";
import {Link} from '../index'
import AboutDetails from "../../constants/AboutDetails";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <h2>Let's build something great!</h2>
        <p className="info">
            Fell free to contact me for any project or collaboration or just want to connect 📭
        </p>
        <Link link={'/contact'} text='here' />
        <div className="footer-logo">
            <Logo />
            <div className="links">
              <Link link={AboutDetails.linkedin} text="linkedIn"/>
              <Link link={AboutDetails.github} text="github"/>
              <Link link={AboutDetails.twitter} text="Leetcode"/>
                {/* <a className="link" href="https://github.com/Kevin0403">linkedIn<HiArrowUpRight /></a>
                <a className="link" href="https://github.com/Kevin0403">github<HiArrowUpRight /></a>
                <a className="link" href="https://github.com/Kevin0403">X(twitter)<HiArrowUpRight /></a> */}
            </div>
        </div>
        <p className="copywrite">© 2024 Jenish Kotadiya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
