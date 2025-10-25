export class Button {
  constructor(text, variant = 'primary', href = null, onClick = null) {
    this.text = text;
    this.variant = variant;
    this.href = href;
    this.onClick = onClick;
  }

  render() {
    const baseClasses = this.variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    
    if (this.href) {
      return `
        <a href="${this.href}" class="${baseClasses} inline-block text-center">
          ${this.text}
        </a>
      `;
    }
    
    return `
      <button class="${baseClasses}" ${this.onClick ? `onclick="${this.onClick}"` : ''}>
        ${this.text}
      </button>
    `;
  }
}
