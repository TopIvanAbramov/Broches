import { SITE_CONFIG } from '../utils/constants.js';

export class Footer {
  constructor() {
    this.siteConfig = SITE_CONFIG;
  }

  render() {
    return `
      <footer class="bg-dark-green text-white">
        <div class="container-custom section-padding">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-2xl font-heading font-bold mb-4">${this.siteConfig.name}</h3>
              <p class="text-white/80 leading-relaxed">
                ${this.siteConfig.description}
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Контакты</h4>
              <div class="space-y-2">
                <p class="text-white/80">Email: ${this.siteConfig.email}</p>
                <a href="${this.siteConfig.telegramLink}" target="_blank" class="block text-white/80 hover:text-accent transition-colors">
                  Telegram: ${this.siteConfig.telegram}
                </a>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Следите за нами</h4>
              <div class="flex space-x-4">
                <a href="${this.siteConfig.telegramLink}" target="_blank" class="text-white/80 hover:text-accent transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.547.975-4.38 2.86-.414.28-.789.417-1.127.41-.373-.008-1.088-.209-1.618-.382-.653-.21-1.17-.32-1.123-.676.022-.18.32-.36.889-.546 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a href="${this.siteConfig.instagram}" class="text-white/80 hover:text-accent transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; ${this.siteConfig.copyright}</p>
          </div>
        </div>
      </footer>
    `;
  }
}
