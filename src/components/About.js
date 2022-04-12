import React from "react";
import "./About.css";
// import { BrowserRouter as Router, Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <body
        style={{
          overflowY: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: "url('https://i.redd.it/egkr76vxyos81.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          className="wrapper"
          style={{
            background: "rgba(255,255,255,0.4)",
            // backdropFilter: "blur(8px)",
            maxWidth: "62vw",
            minWidth: "44vw",
            width: "100%",
            borderRadius: "17px",
            padding: "25px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            About Me
          </h1>
          <div className="about-section" style={{ display: "flex" }}>
            <p
              className="MyParagraph"
              style={{ margin: "10px", textAlign: "center" }}
            >
              I am a Full Stack Web Developer. I have mastered HTML, CSS, and
              JavaScript. Currently I am Learning some Modern Web Frameworks
              Like React Js, Next JS and Django. I Have also Mastered Ethical
              Hacking. I am also a Professional Photo & Video Editor. Currently
              I am a Student studying in High School.
              <br />
              <a href="https://github.com/DrakeParker257980-Developer">
                <button className="knowmore">KNOW MORE</button>
              </a>
            </p>
          </div>
        </div>
      </body>
    </>
  );
}
