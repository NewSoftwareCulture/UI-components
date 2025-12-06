import { useState, useEffect, useCallback } from 'react';
import styles from './styles/index.css';

const defaultSlides = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    color: "#333333",
  },
];

const prettyIndex = (index) => String(index).padStart(2, '0');

const Slider = ({ slides = defaultSlides, autoPlayInterval = 5000, autoplay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    stopAutoPlay();
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    resetAutoPlay();
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    resetAutoPlay();
  }, [currentIndex, slides.length]);

  const resetAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 100);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying || !autoPlayInterval) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  return (
    <div className="slider" style={styles}>
      <div 
        className="slider-main"
        style={{ backgroundColor: slides[currentIndex].color }}
      >
        <div className="slider-slide-content">
          <div className="slider-slide-text">
            <h2 className="slider-slide-title">{slides[currentIndex].title}</h2>
            <p className="slider-slide-description">{slides[currentIndex].description}</p>
            {slides[currentIndex].url && <a href={slides[currentIndex].url} target='_blank' rel="noreferrer">
              <button className="slider-slide-button">
                Узнать больше
                <span className="slider-button-arrow">→</span>
              </button>
            </a>}
          </div>
        </div>
      </div>

      <div className="slider-thumbnails">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div className="slider-thumbnail-number">{prettyIndex(index + 1)}</div>
            <div className="slider-thumbnail-title">{slide.title}</div>
            <div className="slider-thumbnail-progress">
              <div 
                className="slider-thumbnail-progress-bar" 
                style={{ 
                  width: index === currentIndex ? '100%' : '0%',
                  backgroundColor: slide.color
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button 
          className="slider-control-button prev" 
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="slider-slide-counter">
          <span className="slider-current-slide">{prettyIndex(currentIndex + 1)}</span>
          <span className="slider-total-slides">/{prettyIndex(slides.length)}</span>
        </div>
        <button 
          className="slider-control-button next" 
          onClick={goToNext}
          aria-label="Next slide"
        >
          →
        </button>
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;