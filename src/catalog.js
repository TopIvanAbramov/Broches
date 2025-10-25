import './style.css'
import { Navigation } from './components/Navigation.js'
import { ProductCard } from './components/ProductCard.js'
import { Section } from './components/Section.js'
import { Footer } from './components/Footer.js'
import { PRODUCTS, SITE_CONFIG } from './utils/constants.js'

// Update page title from SITE_CONFIG
document.title = `Каталог - ${SITE_CONFIG.name}`;

class CatalogPage {
  constructor() {
    this.navigation = new Navigation();
    this.footer = new Footer();
  }

  render() {
    const heroContent = `
      <div class="text-center py-20">
        <h1 class="text-5xl md:text-6xl font-heading font-bold text-text mb-6">
          Каталог брошей
        </h1>
        <p class="text-xl text-text/70 max-w-2xl mx-auto leading-relaxed">
          Выберите идеальную брошь для себя или в подарок. Каждая работа уникальна и создана с особой заботой.
        </p>
      </div>
    `;

    const productsContent = `
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        ${PRODUCTS.map(product => {
          const productCard = new ProductCard(product);
          return productCard.render();
        }).join('')}
      </div>
    `;

    const ctaContent = `
      <div class="text-center bg-gradient-to-r from-accent to-primary rounded-2xl p-12 text-white">
        <h2 class="text-3xl md:text-4xl font-heading font-bold mb-4">
          Не нашли подходящую брошь?
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Мы можем создать брошь по вашему индивидуальному заказу
        </p>
        <a href="${SITE_CONFIG.telegramLink}" target="_blank" class="btn-secondary bg-white text-accent hover:bg-light hover:text-primary">
          Заказать индивидуально
        </a>
      </div>
    `;

    return `
      ${this.navigation.render()}
      ${new Section(heroContent, 'bg-light').render()}
      ${new Section(productsContent, 'bg-white').render()}
      ${new Section(ctaContent, 'bg-white').render()}
      ${this.footer.render()}
    `;
  }

  init() {
    document.querySelector('#app').innerHTML = this.render();
    this.navigation.attachEventListeners();
  }
}

const catalogPage = new CatalogPage();
catalogPage.init();
