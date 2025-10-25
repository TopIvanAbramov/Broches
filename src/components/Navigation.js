import { SITE_CONFIG } from '../utils/constants.js';

export class Navigation {
  constructor() {
    this.currentPage = window.location.pathname;
    this.siteConfig = SITE_CONFIG;
  }

  render() {
    return `
      <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container-custom">
          <div class="flex justify-between items-center py-4">
            <div class="text-2xl font-heading font-bold text-primary">
              ${this.siteConfig.name}
            </div>
            <div class="hidden md:flex space-x-8">
              <a href="/" class="nav-link ${this.currentPage === '/' ? 'text-accent' : 'text-text hover:text-accent'} transition-colors duration-300">
                Главная
              </a>
              <a href="/catalog" class="nav-link ${this.currentPage === '/catalog' ? 'text-accent' : 'text-text hover:text-accent'} transition-colors duration-300">
                Каталог
              </a>
              <a href="#contact" class="nav-link text-text hover:text-accent transition-colors duration-300">
                Контакты
              </a>
            </div>
            <div class="md:hidden">
              <button id="mobile-menu-btn" class="text-text hover:text-accent">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="hidden md:hidden pb-4">
            <div class="flex flex-col space-y-2">
              <a href="/" class="nav-link ${this.currentPage === '/' ? 'text-accent' : 'text-text hover:text-accent'} transition-colors duration-300 py-2">
                Главная
              </a>
              <a href="/catalog" class="nav-link ${this.currentPage === '/catalog' ? 'text-accent' : 'text-text hover:text-accent'} transition-colors duration-300 py-2">
                Каталог
              </a>
              <a href="#contact" class="nav-link text-text hover:text-accent transition-colors duration-300 py-2">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  attachEventListeners() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Handle contact links - redirect to home page with contact anchor if on catalog page
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (this.currentPage === '/catalog') {
          e.preventDefault();
          window.location.href = '/#contact';
        }
      });
    });
  }
}
