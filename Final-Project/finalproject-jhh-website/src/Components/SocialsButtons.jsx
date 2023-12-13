//links to all the social media pages to be displayed on each page.
import React from "react";

const SocialsBar = () => {
  return (
    <div className="socials-bar">
      <a
        href="https://www.facebook.com/JentheJeweler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.svgporn.com/logos/facebook.svg"
          alt="Facebook page about handmade Artisan jewelry made by Jennifer Hermann.
           Materials are brass, copper, sterling silver and Gold."
        />
      </a>
      <a
        href="https://www.instagram.com/jhermannhandmade/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.svgporn.com/logos/instagram-icon.svg"
          alt="Instagram page about handmade Artisan jewelry made by Jennifer Hermann.
           Materials are brass, copper, sterling silver and Gold. Heart driven, conscientious jewelry design
           DM to purchase, place custom orders, or repair requests"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jenthejeweler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
          alt="LinkedIn I am currently studying Front End Web Development in Promineo Tech's 18 week course. I plan to also do the Back End course after December. I plan to be certified in Full Stack Web Development by summer 2024. I am actively looking for employment or internship opportunities in the tech field or tech adjacent.
        For information on my jewelry and metalsmithing background please see my jewelry website: www.JenniferHermannHandmade.wordpress.com"
        />
      </a>
    </div>
  );
};

export default SocialsBar;
