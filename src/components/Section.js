export class Section {
  constructor(content, className = '', id = '') {
    this.content = content;
    this.className = className;
    this.id = id;
  }

  render() {
    return `
      <section class="section-padding ${this.className}" ${this.id ? `id="${this.id}"` : ''}>
        <div class="container-custom">
          ${this.content}
        </div>
      </section>
    `;
  }
}
