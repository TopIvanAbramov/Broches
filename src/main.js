import './style.css'
import { Navigation } from './components/Navigation.js'
import { Hero } from './components/Hero.js'
import { Section } from './components/Section.js'
import { Footer } from './components/Footer.js'
import { SITE_CONFIG } from './utils/constants.js'

// Update page title and meta description from SITE_CONFIG
document.title = `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
document.querySelector('meta[name="description"]').content = SITE_CONFIG.description;

class HomePage {
  constructor() {
    this.navigation = new Navigation();
    this.hero = new Hero();
    this.footer = new Footer();
  }

  render() {
    const aboutContent = `
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
          О нашей работе
        </h2>
        <p class="text-xl text-text/70 max-w-3xl mx-auto leading-relaxed">
          Каждая брошь создается вручную с особой заботой и вниманием к деталям. 
          Мы используем только качественные материалы и уникальные техники работы с биссером.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-heading font-semibold text-text mb-2">Ручная работа</h3>
              <p class="text-text/70">Каждая брошь создается вручную с особой заботой и вниманием к деталям</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-heading font-semibold text-text mb-2">Уникальный дизайн</h3>
              <p class="text-text/70">Каждая брошь имеет свой неповторимый характер и стиль</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-heading font-semibold text-text mb-2">Качественные материалы</h3>
              <p class="text-text/70">Используем только проверенные и безопасные материалы</p>
            </div>
          </div>
        </div>
        <div class="bg-light rounded-lg p-8">
          <div class="aspect-square bg-white rounded-lg overflow-hidden">
            <img src="/images/landing/craft.png" 
                 alt="Процесс создания броши" 
                 class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    `;

    const contactContent = `
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
          Свяжитесь с нами
        </h2>
        <p class="text-xl text-text/70 max-w-2xl mx-auto leading-relaxed">
          Хотите заказать брошь или у вас есть вопросы? Мы всегда рады общению!
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text">Email</h3>
              <p class="text-text/70">${SITE_CONFIG.email}</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.547.975-4.38 2.86-.414.28-.789.417-1.127.41-.373-.008-1.088-.209-1.618-.382-.653-.21-1.17-.32-1.123-.676.022-.18.32-.36.889-.546 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-text">Telegram</h3>
              <p class="text-text/70">${SITE_CONFIG.telegram}</p>
            </div>
          </div>
        </div>
        <div class="bg-light rounded-lg p-8">
          <h3 class="text-xl font-heading font-semibold text-text mb-4">Напишите нам</h3>
          <p class="text-text/70 mb-6">
            Мы ответим в течение 24 часов и поможем выбрать идеальную брошь для вас.
          </p>
          <a href="${SITE_CONFIG.telegramLink}" target="_blank" class="btn-primary inline-block">
            Написать в Telegram
          </a>
        </div>
      </div>
    `;

    return `
      ${this.navigation.render()}
      ${this.hero.render()}
      ${new Section(aboutContent, 'bg-white').render()}
      ${new Section(contactContent, 'bg-light', 'contact').render()}
      ${this.footer.render()}
    `;
  }

  init() {
    document.querySelector('#app').innerHTML = this.render();
    this.navigation.attachEventListeners();
    this.hero.initSlideshow();
  }
}

const homePage = new HomePage();
homePage.init();
