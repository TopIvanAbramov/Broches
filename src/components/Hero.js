import { Button } from './Button.js';
import { SITE_CONFIG } from '../utils/constants.js';

export class Hero {
  constructor() {
    this.siteConfig = SITE_CONFIG;
    this.ctaText = 'Каталог';
    this.ctaLink = '/catalog';
    
    // Landing images for slideshow
    this.landingImages = [
      '/images/landing/image-1.png',
      '/images/landing/image-2.png',
      '/images/landing/image-3.png',
      '/images/landing/image-4.png'
    ];
    
    this.currentImageIndex = 0;
  }

  render() {
    return `
      <div class="relative w-full aspect-16-9 overflow-hidden">
        <!-- Full-screen background slideshow -->
        <div id="hero-slideshow" class="absolute inset-0">
          ${this.landingImages.map((image, index) => `
            <div class="absolute inset-0 transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}" 
                 data-slide="${index}">
              <img src="${image}" 
                   alt="${this.siteConfig.name}" 
                   class="w-full h-full object-cover"/>
            </div>
          `).join('')}
        </div>
        
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-black/40"></div>
        
        <!-- Navigation arrows -->
        <button id="prev-slide" class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button id="next-slide" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
        <!-- Centered content overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white px-4 max-w-4xl">
            <!-- Small label -->
            <div class="text-sm uppercase tracking-widest mb-4 opacity-90">
              РУЧНАЯ РАБОТА
            </div>
            
            <!-- Main title -->
            <h1 class="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
              ${this.siteConfig.name}
            </h1>
            
            <!-- Decorative line -->
            <div class="w-16 h-px bg-white mx-auto mb-6"></div>
            
            <!-- CTA link -->
            <a href="${this.ctaLink}" class="text-lg uppercase tracking-wide hover:opacity-80 transition-opacity duration-300">
              ${this.ctaText}
            </a>
          </div>
        </div>
        
        <!-- Slideshow indicators -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          ${this.landingImages.map((_, index) => `
            <button class="w-2 h-2 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-white' : 'bg-white/50'}" 
                    data-slide-indicator="${index}"></button>
          `).join('')}
        </div>
      </div>
    `;
  }

  initSlideshow() {
    const slideshow = document.getElementById('hero-slideshow');
    if (!slideshow) return;

    const slides = slideshow.querySelectorAll('[data-slide]');
    const indicators = document.querySelectorAll('[data-slide-indicator]');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    
    if (slides.length === 0) return;

    let currentIndex = 0;
    let slideshowInterval;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('opacity-100', i === index);
        slide.classList.toggle('opacity-0', i !== index);
      });
      
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('bg-white', i === index);
        indicator.classList.toggle('bg-white/50', i !== index);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    };

    const startSlideshow = () => {
      slideshowInterval = setInterval(nextSlide, 5000);
    };

    const stopSlideshow = () => {
      clearInterval(slideshowInterval);
    };

    // Auto-advance slideshow every 5 seconds
    startSlideshow();

    // Add click handlers to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        stopSlideshow();
        startSlideshow(); // Restart auto-advance
      });
    });

    // Add click handlers to navigation arrows
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow(); // Restart auto-advance
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow(); // Restart auto-advance
      });
    }

    // Pause slideshow on hover
    slideshow.addEventListener('mouseenter', stopSlideshow);
    slideshow.addEventListener('mouseleave', startSlideshow);
  }
}
