// src/components/HeroSlider.jsx
import { useEffect, useState } from "react";
import s1 from "../assets/slider/slide1.jpg";
import s2 from "../assets/slider/slide2.jpg";
import s3 from "../assets/slider/slide3.jpg";
import s4 from "../assets/slider/slide4.jpg";
import s5 from "../assets/slider/slide5.jpg";
import "./HeroSlider.css";

const slides = [s1, s2, s3, s4, s5];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((src, idx) => (
        <img key={idx} src={src} className={idx === i ? "active" : ""} />
      ))}
    </div>
  );
}
