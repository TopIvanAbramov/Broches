import { Button } from './Button.js';
import { TELEGRAM_LINK } from '../utils/constants.js';

export class ProductCard {
  constructor(product) {
    this.product = product;
  }

  render() {
    const buyButton = new Button('Купить', 'primary', null, `window.open('${TELEGRAM_LINK}', '_blank')`);
    
    return `
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div class="aspect-square bg-light flex items-center justify-center">
          <img 
            src="${this.product.image}" 
            alt="${this.product.name}"
            class="w-full h-full object-cover rounded-lg"
            onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjVGNUYwIi8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzEzNS42IDEwMCAxMjQgMTExLjYgMTI0IDEyNkMxMjQgMTQwLjQgMTM1LjYgMTUyIDE1MCAxNTJDMTY0LjQgMTUyIDE3NiAxNDAuNCAxNzYgMTI2QzE3NiAxMTEuNiAxNjQuNCAxMDAgMTUwIDEwMFoiIGZpbGw9IiM0QTg1QjMiLz4KPHN2Zz4K'"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-heading font-semibold text-text mb-2">
            ${this.product.name}
          </h3>
          <p class="text-text/70 mb-4 leading-relaxed">
            ${this.product.description}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-primary">
              ${this.product.price}
            </span>
            ${buyButton.render()}
          </div>
        </div>
      </div>
    `;
  }
}
