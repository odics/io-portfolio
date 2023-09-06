import React from "react";
import UpArrow from "./ui/UpArrow";
import DownArrow from "./ui/DownArrow";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="contact-container">
        <UpArrow linkTarget="#" />
        <h2>CONTACT</h2>
        <div class="contact-icons">
          <a href="https://github.com/odics" target="#">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/severin-odic-953834252" target="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:severin.odic@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
