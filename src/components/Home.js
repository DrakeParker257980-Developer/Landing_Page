/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../Character_New.png";
import "./Home.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Router>
        <section>
          <div className="container">
            <header>
              <Link to="/" className="logo">
                Drake Parker
              </Link>
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About">About Me</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact Me</Link>
                </li>
                <li>
                  <Link to="/My_Projects">My Projects</Link>
                </li>
                <li>
                  <Link to="/Forum">Forum</Link>
                </li>
                <li>
                  <Link to="/Web_Chat">Web Chat</Link>
                </li>
              </ul>
            </header>
            <div className="content">
              <h2>Drake Parker</h2>
              <p id="demo">
                Hi, My name is Drake Parker. I am a Full Stack Web Developer. I
                have worked on many projects. I have made a Python Package which
                is freely available on [pypi.org] and Github. I have made some
                extremely beautiful web contents that you can view in "My
                Projects" link present in the Navigation Bar.
              </p>
              <Link to="/">Learn More</Link>
            </div>
            <div className="imgBx">
              <img src={image} alt="Character Image" />
            </div>
            <div className="copyright">
              <p className="copyrightText">
                Copyright © 2022 Drake Parker. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
}
