import React from "react";
import "./Contact.css";
// import axios from "axios";

function handleSubmit(event) {
  event.preventDefault();
}

export default function Contact() {
  return (
    <>
      <body>
        <section className="ContactSection">
          <div className="container1">
            <h2>Contact Me</h2>
            <form
              action="https://www.webdevdrake.cf/SendContactDetails"
              method="post"
            >
              <div className="row100">
                <div className="col">
                  <div className="inputBox">
                    <input type="text" name="firstname" required />
                    <span className="text">
                      First Name <sup>*</sup>
                    </span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="col">
                  <div className="inputBox">
                    <input type="text" name="lastname" required />
                    <span className="text">
                      Last Name <sup>*</sup>
                    </span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="col">
                  <div className="inputBox">
                    <input type="text" name="email" required />
                    <span className="text">
                      Email <sup>*</sup>
                    </span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="col">
                  <div className="inputBox textarea">
                    <textarea name="message" required></textarea>
                    <span className="text">
                      Type Your Message/Feedback Here... <sup>*</sup>
                    </span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>

              <div className="row100">
                <div className="col">
                  <input type="submit" value="Send" onclick={handleSubmit} />
                </div>
              </div>
            </form>
          </div>
        </section>
      </body>
    </>
  );
}
