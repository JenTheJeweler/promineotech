//Resume embedded here as a pdf?  needs to be dynamic,
// full page, interactive-clickable.
// Components:
// Navbar
// Logo
// Resume
import React from "react";
// import Navbar from "./Navbar";
import Logo from "./Logo";

const Resume = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Logo />
      <h1>Resume</h1>
      <iframe
        title="Resume"
        src="https://docs.google.com/document/d/e/2PACX-1vS0k2wpF4ku74kEZ6FmIO_8DrvmEG7paLVSseBIB8M7V3Nl3RPx9w5k2Wxq1zUo-hHLuUT2ZQMWus8w/pub?embedded=true"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
};

export default Resume;
