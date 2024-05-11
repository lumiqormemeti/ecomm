import React, { useState } from "react";
import "./ReviewsCarousel.css";
import { ReactComponent as QuoteSVG } from "../../assets/qutation.svg";

const reviews = [
  {
    quote:
      "Discovering this product has been a revelation for me.And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    attribution: "Michael Scott",
  },
  {
    quote:
      "When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Ok?.",
    attribution: "John Doe",
  },
  {
    quote: "This product has helped me stay organized and focused.",
    attribution: "Howard",
  },
  {
    quote: "This product is a game-changer!",
    attribution: "Jim",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a tincidunt tellus. Nunc ex sapien, tincidunt at tellus non, venenatis pretium diam.",
    attribution: "Jeff",
  },
];

const ReviewsCarousel = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="testimonial-slider">
      <QuoteSVG width="150" height="100" />
      <div className="quote">{reviews[currentReview].quote}</div>
      <div className="attribution">- {reviews[currentReview].attribution}</div>
      <button className="prev" onClick={handlePrev}>
        ←
      </button>
      <button className="next" onClick={handleNext}>
        →
      </button>
    </div>
  );
};

export default ReviewsCarousel;
