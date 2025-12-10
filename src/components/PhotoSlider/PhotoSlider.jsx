import React, { useState, useEffect, useRef } from 'react';
import './styles/index.css';

const images = [
  'https://s204klg.storage.yandex.net/rdisk/a21b41843d6fc5130627eef9664c67d31f25b0d62df1c7f7bbc2725b61b5a7a6/6939ffda/fKqInKw3d7bLFOeFnMGnhJXTVMgen76VewF6ba6PTVEmE7nvQPFsZPNs1Zw6YgfKM6_qlFYvobuswuWzDUEMLFcJ_w1U_xvSyyKa5E8iZP2r8npumZHI4midPdWhecNq?uid=0&filename=R1-09595-0001.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=11150712&hid=fbddbb0625271c1a1eb12317b8c01aee&media_type=image&tknv=v3&etag=d23f8d80fb8e91942f46aac7eb0a7898&ts=645a1403c2a80&s=e2a62942552a23a5bc75a9152ccf087eb322f88ba12192df1a313d89b51b5de1&pb=U2FsdGVkX1-qpct8Tr2L3mVr7qd-GrPJFSmtww29xfC-_WxRSryTQ8HYaaInvNlpmxF8vYlpWAviM5-rw8PgDvyyltBgn-wjsmOozw8BpNns9JIx0V-c3M5h6ya6f9vq',
  'https://s267vla.storage.yandex.net/rdisk/ae7492d94b1a6dd577250424fd40596aaf850f1ece9da8296214a2bc78cd5398/693a0000/fKqInKw3d7bLFOeFnMGnhN9-IoDmxE2zYPS7r07QQGD4Vry15lZndaUj6hZYs4bf_hM8RZoHT771c6hm-I0XObG3WXLj4Kg04GxI_YYCYWSr8npumZHI4midPdWhecNq?uid=0&filename=R1-09595-000A.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=8861738&hid=aac2766b25c450a40c7c92654e016038&media_type=image&tknv=v3&etag=4e079273aff06d56d7d4313d03f13f8a&ts=645a142800000&s=ca21fb37aa2c9a9431354996a5e3ba31652e711a5eb9906f26e555c8a7f61e80&pb=U2FsdGVkX1-tKp9kW32QSZqCLvlJ794JVCay9LhEkc7VJ9rBEAJPd8ga8Y61Yi_a9avXKrLT2g9kHq3kvQEiq7yXuVhJwIEiyF4fQ-JGCchQ51C2r2a0G3u6Dhnh4I28',
  'https://s1143sas.storage.yandex.net/rdisk/5272eb06fe1d6cf9e530bf98a0456da6b476646da34e3087826c8d3c62932de1/693a002a/fKqInKw3d7bLFOeFnMGnhKUHmMvhwc8iHBDZr1il3d06ytEzqlSooG8CQZAUAIebMqWWTys0WHFYUJGaOSSAY0bbg2hz_u7m6XDI8ZdNhjmr8npumZHI4midPdWhecNq?uid=1573559850&filename=R1-09595-0021.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1573559850&fsize=9276261&hid=3fa627a7c86200dfa976b3a64eb3375d&media_type=image&tknv=v3&etag=81db66eb0f9c856bd6a4db5f948c7242&ts=645a14500de80&s=44f4844265cdae255ec76243b0c0cdace6c88ee9e0edaea8404de0b14e480e6a&pb=U2FsdGVkX19rI9oIzLrqQH7v62ARzsEfjZTJTfqR11BP7jVg7ylGUxE59gLNgNpwYj9Aqw2ZndptZtdsvuiHKLllFOWJShP1OqRLsgiOwQ-RJrHCsXOsLdamy6StRl1v',
  'https://s1141sas.storage.yandex.net/rdisk/adfaef0cbb584b82196f1e67d324b8530d379361c6c6544a53cb3d1f9fa5217b/693a0030/fKqInKw3d7bLFOeFnMGnhKUHmMvhwc8iHBDZr1il3d3rXeiAKtzkl0kEnllzENcJzP-JNB5kLO2fCeO2zlz8_PfiUTpcH4w0qmxELM5xO8Kr8npumZHI4midPdWhecNq?uid=1573559850&filename=R1-09595-0022.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1573559850&fsize=10422701&hid=deab0aad79ab4d073011e9da084439e8&media_type=image&tknv=v3&etag=bb2cea413bb62f291358dae5721d1d32&ts=645a1455c6c00&s=c5338587e991844047e76f34cee3e128a84389d5f2aaa57e2fc63afd5afe1de7&pb=U2FsdGVkX19YFgqjXIoC9sIBcijJtBu0FhTltbgleTAlyD--p_W9DGXmk6fWWglD27VDe1dAhXBcCkbGEOtznB7OQktlgPfO5mqO4MJqeNh0MLUa3dNmoKMeQKuI0izc',
  'https://s253klg.storage.yandex.net/rdisk/98aecff168667b77e0d4a74a9420a73e662b712c3e19d5f96ad983509c51be13/693a0034/fKqInKw3d7bLFOeFnMGnhC-W-bWS4_jEHpUVXHaIYpFL9DQM9G7xwQfAdnPlGtHdZEuEDrJMW6kShZoP7AwxR6YG1FZhqzOOSdJqSwy31Kyr8npumZHI4midPdWhecNq?uid=1573559850&filename=R1-09595-003A.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1573559850&fsize=11050673&hid=234a1c5c853300a1932fde39cd0905c7&media_type=image&tknv=v3&etag=891351f7fe48adf4d031e1e283c4106c&ts=645a145997500&s=77d0eb95f23d19140c86643bdb45ea1979eb37af52a4c2a94d4974df0ba79c77&pb=U2FsdGVkX1_bgnnwI1vTY71vkJByD24keC576cfdm7amJplDnmYu2_e5tSVeJHiixDgFtPotOx6lw9lDGuSLGf-sMVlSE3pNkP1BL8X8OTNHw6pbxyBP3kvpm-kx5BpY',
];

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