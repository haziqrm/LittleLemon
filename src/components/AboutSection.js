import React from "react";

function AboutSection() {
  return (
    <div className="about-section container-8">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
          <br /><br />
          To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="about-images-wrapper">
        <img
          src="/assets/Mario_and_Adrian_A.jpg"
          alt="Our kitchen"
          className="image-top"
        />
        <img
          src="/assets/Mario_and_Adrian_B.jpg"
          alt="Our team"
          className="image-bottom"
        />
      </div>
    </div>
  );
}

export default AboutSection;
