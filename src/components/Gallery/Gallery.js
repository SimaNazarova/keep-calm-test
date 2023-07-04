import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Gallery.scss";
import { imgArray } from "./data";
gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const photoRefs = useRef([]);
  const galleryRef = useRef();
  photoRefs.current = [];
  const addToRefs = (el) => {
    if (el && !photoRefs.current.includes(el)) {
      photoRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (windowWidth > 500) {
      gsap.to(photoRefs.current, {
        xPercent: -85 * (photoRefs.current.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
          start: "top center-=400",
          //markers: true,
        },
      });
    } else {
      return;
    }
  }, []);
  return (
    <section className="gallery" ref={galleryRef}>
      <h2 className="gallery__title">Lorem ipsum dolor sit amet</h2>
      <ul className="gallery__group">
        {imgArray.map((item, i) => (
          <li key={i} className="gallery__item" ref={addToRefs}>
            <img className="gallery__img" src={item} alt="circeya" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Gallery;
