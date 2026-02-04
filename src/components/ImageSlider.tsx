"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./ImageSlider.css";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "AI Innovation",
    subtitle: "Transforming the future with intelligent solutions",
    image: "/ai_innov.jpg", 
    alt: "AI Innovation",
  },
  {
    id: 2,
    title: "Machine Learning",
    subtitle: "Empowering decisions through data",
    image: "/machine.jpg",
    alt: "Machine Learning",
  },
  {
    id: 3,
    title: "Data Analytics",
    subtitle: "Unlock insights from your data",
    image: "/data.jpg",
    alt: "Data Analytics",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <button
          className="slider-btn prev-btn"
          onClick={() => handleManualNavigation(prevSlide)}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="slider-content">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <div className="slide-image-wrapper">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="slide-image"
                  priority={index === 0}
                  quality={90}
                />
                <div className="slide-overlay" />
              </div>
              <div className="slide-content-wrapper">
                <h2 className="slide-title">{slide.title}</h2>
                {slide.subtitle && (
                  <p className="slide-subtitle">{slide.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn next-btn"
          onClick={() => handleManualNavigation(nextSlide)}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleManualNavigation(() => goToSlide(index))}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="slider-progress">
        <div
          className="progress-bar"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}