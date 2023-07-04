import React, { useState, useEffect } from "react";
import "./Articles.scss";

function Articles({ array }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const desktopTitle = `ut aliquip ex ea commodo consequat`;
  const mobileTitle = `ut aliquip\n ex ea commodo consequat`;
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <section className="articles">
      <h2 className="articles__title">
        {" "}
        {windowWidth > 750 ? desktopTitle : mobileTitle}
      </h2>
      <div className="articles__grid">
        <div className="articles__grid-illustration">
          <img
            className="articles__grid-img"
            src={array.img1}
            alt="illustration"
          />
        </div>
        <div className="articles__grid-article">
          <h3 className="articles__grid-title">{array.title}</h3>
          <p className="articles__grid-text">{array.text1}</p>
          <p className="articles__grid-text">{array.text2}</p>
        </div>

        <div className="articles__grid-illustration articles__grid-illustration_second">
          <img
            className="articles__grid-img"
            src={array.img2}
            alt="illustration"
          />
        </div>
        <div className="articles__grid-article articles__grid-article_padding">
          <h3 className="articles__grid-title">{array.title}</h3>
          <p className="articles__grid-text">{array.text1}</p>
          <p className="articles__grid-text">{array.text2}</p>
        </div>
      </div>
    </section>
  );
}

export default Articles;
