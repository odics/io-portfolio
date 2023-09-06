import React from "react";
import DownArrow from "./ui/DownArrow";
import UpArrow from "./ui/UpArrow";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="about-container">
        <UpArrow linkTarget="#" />
        <h2>ABOUT</h2>
        <div class="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            odit ipsa minima officiis deserunt recusandae corrupti labore.
          </p>
          <p>
            Eius praesentium quaerat obcaecati quam eligendi distinctio pariatur
            soluta et, at expedita quisquam modi? Omnis tenetur nulla, repellat
            at recusandae assumenda ipsam animi?
          </p>
        </div>
        <DownArrow linkTarget="#projects" />
      </div>
    </section>
  );
};

export default About;
