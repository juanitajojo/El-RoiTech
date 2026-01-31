import { useEffect, useRef, useState } from "react";
import "./ReviewsCarousel.css";

const reviews = [
  <>
  “Best travel service I’ve used in years. 
  Verified and trusted — I’ll definitely use them again!”
    <br />
    <strong>— Fatima Yusuf, Kano</strong>
  </>,
   <>
  “Professional and fast! I recommend Nhillz Global to friends
   and family every chance I get.”
    <br />
    <strong>— Terrence A., Lagos</strong>
  </>,
  <>
  Nhillz Global handled my Canada visa application with amazing support and clarity. 
  Highly recommended!”

    <br />
    <strong>— Aisha Bello, Abuja</strong>
  </>,
  <>
  “Great customer care! They answered all my questions quickly
   and handled my visa paperwork perfectly.”

    <br />
    <strong>— David Mensah, Accra</strong>
  </>,
];

export default function ReviewsCarousel() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setCardWidth(trackRef.current.children[0].offsetWidth + 20);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [cardWidth]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (index >= reviews.length) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(0);
        trackRef.current.style.transform = "translateX(0)";
        requestAnimationFrame(() => {
          trackRef.current.style.transition = "transform 0.6s ease";
        });
      }, 600);
    }
  }, [index]);

  const onTouchStart = (e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchCurrentX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchCurrentX.current;
    if (diff > 50) setIndex((prev) => prev + 1);
    if (diff < -50) setIndex((prev) => Math.max(prev - 1, 0));
    startAutoSlide();
  };

  return (
    <section className="reviews-wrapper">
      <div
        className="carousel"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}
        >
          {[...reviews, ...reviews].map((text, i) => (
            <div className="review-card" key={i}>
              ⭐⭐⭐⭐⭐
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


