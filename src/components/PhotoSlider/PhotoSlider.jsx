import React, { useState, useEffect, useRef } from 'react';
import './styles/index.css';

const prettyIndex = (index) => String(index).padStart(2, '0');

const PhotoSlider = ({ autoplay = false, images = [] }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const thumbnailsContainerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    scrollToThumbnail(index);
  };

  const goToPrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToThumbnail(newIndex);
  };

  const scrollToThumbnail = (index) => {
    if (thumbnailsContainerRef.current) {
      const thumbnails = thumbnailsContainerRef.current.children;
      if (thumbnails[index]) {
        const thumbnail = thumbnails[index];
        thumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="photo-slider">
      <div className="photo-slider__container">
        <div className="photo-slider__main-image">
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className="photo-slider__image"
            loading="lazy"
          />
          
          <button 
            className="photo-slider__nav-button photo-slider__nav-button--prev"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className="photo-slider__nav-button photo-slider__nav-button--next"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="photo-slider__thumbnails-container">
          <div className="photo-slider__thumbnails-scroll-wrapper">
            <div 
              className="photo-slider__thumbnails" 
              ref={thumbnailsContainerRef}
            >
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`photo-slider__thumbnail ${index === currentIndex ? 'photo-slider__thumbnail--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  data-index={index}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="photo-slider__thumbnail-image"
                    loading="lazy"
                  />
                  <div className="photo-slider__thumbnail-overlay"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="photo-slider__thumbnails-scroll-buttons">
            <button 
              className="photo-slider__thumbnails-scroll-btn photo-slider__thumbnails-scroll-btn--prev"
              onClick={() => {
                if (thumbnailsContainerRef.current) {
                  thumbnailsContainerRef.current.scrollBy({
                    left: -200,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label="Scroll thumbnails left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="photo-slider__thumbnails-scroll-btn photo-slider__thumbnails-scroll-btn--next"
              onClick={() => {
                if (thumbnailsContainerRef.current) {
                  thumbnailsContainerRef.current.scrollBy({
                    left: 200,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label="Scroll thumbnails right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="photo-slider__indicators">
          {Array.from({ length: Math.min(20, images.length) }).map((_, index) => (
            <button
              key={index}
              className={`photo-slider__indicator ${Math.floor(currentIndex / (images.length / Math.min(20, images.length))) === index ? 'photo-slider__indicator--active' : ''}`}
              onClick={() => {
                const newIndex = Math.floor(index * (images.length / Math.min(20, images.length)));
                goToSlide(newIndex);
              }}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="photo-slider__counter">
          <span className="photo-slider__current">{prettyIndex(currentIndex + 1)}</span>
          <span className="photo-slider__divider">/</span>
          <span className="photo-slider__total">{prettyIndex(images.length)}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;