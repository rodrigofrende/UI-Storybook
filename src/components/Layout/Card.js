export default class Card {
  constructor(options = {}) {
    this.options = {
      title: '',
      subtitle: '',
      content: '',
      image: '',
      imageAlt: '',
      footer: '',
      variant: 'default', // default, elevated, outlined, flat
      size: 'md', // sm, md, lg
      hover: true,
      clickable: false,
      onClick: null,
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'card-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const hoverClass = this.options.hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
    const clickableClass = this.options.clickable ? 'cursor-pointer' : '';
    
    return `
      <div 
        class="bg-white rounded-lg ${variantClasses} ${sizeClasses} ${hoverClass} ${clickableClass}"
        id="${this.id}"
        ${this.options.onClick ? `onclick="${this.options.onClick}"` : ''}
      >
        ${this.options.image ? `
          <div class="relative">
            <img 
              class="w-full h-48 object-cover rounded-t-lg" 
              src="${this.options.image}" 
              alt="${this.options.imageAlt || this.options.title}"
            >
            ${this.options.badge ? `
              <div class="absolute top-3 right-3">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  ${this.options.badge}
                </span>
              </div>
            ` : ''}
          </div>
        ` : ''}
        
        <div class="p-6">
          ${this.options.title ? `
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              ${this.options.title}
            </h3>
          ` : ''}
          
          ${this.options.subtitle ? `
            <p class="text-sm text-gray-600 mb-3">
              ${this.options.subtitle}
            </p>
          ` : ''}
          
          ${this.options.content ? `
            <div class="text-gray-700 mb-4">
              ${this.options.content}
            </div>
          ` : ''}
          
          ${this.options.actions ? `
            <div class="flex space-x-2">
              ${this.renderActions()}
            </div>
          ` : ''}
        </div>
        
        ${this.options.footer ? `
          <div class="px-6 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
            ${this.options.footer}
          </div>
        ` : ''}
      </div>
    `;
  }

  renderActions() {
    return this.options.actions.map(action => {
      const variant = action.variant || 'secondary';
      const size = action.size || 'sm';
      
      const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-green-600 text-white hover:bg-green-700'
      };
      
      const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base'
      };
      
      return `
        <button
          class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${variantClasses[variant]} ${sizeClasses[size]}"
          onclick="${action.onClick || ''}"
        >
          ${action.icon ? `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${action.icon}
            </svg>
          ` : ''}
          ${action.label}
        </button>
      `;
    }).join('');
  }

  getVariantClasses() {
    const variants = {
      default: 'shadow-sm border border-gray-200',
      elevated: 'shadow-lg border-0',
      outlined: 'border-2 border-gray-200 shadow-none',
      flat: 'shadow-none border-0'
    };
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg'
    };
    return sizes[this.options.size] || sizes.md;
  }

  setTitle(title) {
    this.options.title = title;
    this.updateDisplay();
  }

  setSubtitle(subtitle) {
    this.options.subtitle = subtitle;
    this.updateDisplay();
  }

  setContent(content) {
    this.options.content = content;
    this.updateDisplay();
  }

  setImage(image, alt = '') {
    this.options.image = image;
    this.options.imageAlt = alt;
    this.updateDisplay();
  }

  setFooter(footer) {
    this.options.footer = footer;
    this.updateDisplay();
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setHover(hover) {
    this.options.hover = hover;
    this.updateDisplay();
  }

  setClickable(clickable, onClick = null) {
    this.options.clickable = clickable;
    this.options.onClick = onClick;
    this.updateDisplay();
  }

  setActions(actions) {
    this.options.actions = actions;
    this.updateDisplay();
  }

  addAction(action) {
    if (!this.options.actions) {
      this.options.actions = [];
    }
    this.options.actions.push(action);
    this.updateDisplay();
  }

  removeAction(index) {
    if (this.options.actions && this.options.actions[index]) {
      this.options.actions.splice(index, 1);
      this.updateDisplay();
    }
  }

  updateDisplay() {
    const card = document.getElementById(this.id);
    if (card) {
      card.outerHTML = this.render();
    }
  }

  // Métodos para integración con frameworks
  mount(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.innerHTML = this.render();
      this.attachEventListeners();
    }
  }

  attachEventListeners() {
    const card = document.getElementById(this.id);
    if (card && this.options.onClick) {
      card.addEventListener('click', (e) => {
        if (typeof this.options.onClick === 'function') {
          this.options.onClick(e);
        }
      });
    }
  }

  // Métodos para accesibilidad
  focus() {
    const card = document.getElementById(this.id);
    if (card) card.focus();
  }

  // Método para obtener el contenido del card
  getContent() {
    return {
      title: this.options.title,
      subtitle: this.options.subtitle,
      content: this.options.content,
      image: this.options.image,
      footer: this.options.footer
    };
  }

  // Método para clonar el card
  clone() {
    return new Card({ ...this.options });
  }
}
