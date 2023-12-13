//An about page with a paragraph and a couple photos.
// Components:
// Navbar
// Logo
// About

import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Jennifer Hermann is an independent jeweler with the goal of providing
        hand crafted and thoughtful artisan jewelry to the public. Her business
        is a one woman show with the support of her husband Gus, daughter Dodi,
        and steadfast Am. Staff Terrier, Rocco. Her primary materials include
        brass, copper and sterling silver with various stone, glass and recycled
        elements as needed. Typically Jennifer builds pieces at the bench
        directly from the materials at hand, but is increasingly moving towards
        a more planned design, and-then-build, schematic method. Limited bespoke
        and repair work is available upon request and subject to availability.
        Such requests should fall within the scope of the current work style,
        but are welcome to indulge in higher karat golds, platinum, and precious
        gems. Jennifer earned an MFA in Jewelry and Metals in 2007 from SUNY New
        Paltz and a BFA from Millersville University in PA in 2004. She is
        currently studying Web Development and Design and is open to employment
        opportunities in either field.
      </p>
    </div>
  );
};

export default About;
