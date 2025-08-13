export default class Spinner {
  constructor(options = {}) {
    this.options = {
      size: 'md', // xs, sm, md, lg, xl
      variant: 'default', // default, dots, bars, pulse, ring
      color: 'blue',
      text: '',
      textPosition: 'bottom', // top, bottom, left, right
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'spinner-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const textPositionClasses = this.getTextPositionClasses();
    
    return `
      <div class="inline-flex flex-col items-center" id="${this.id}">
        ${this.options.text && this.options.textPosition === 'top' ? `
          <div class="text-sm text-gray-600 mb-2">${this.options.text}</div>
        ` : ''}
        
        <div class="flex items-center ${this.options.text && (this.options.textPosition === 'left' || this.options.textPosition === 'right') ? 'space-x-2' : ''}">
          ${this.options.text && this.options.textPosition === 'left' ? `
            <div class="text-sm text-gray-600">${this.options.text}</div>
          ` : ''}
          
          <div class="${sizeClasses}">
            ${this.renderSpinner()}
          </div>
          
          ${this.options.text && this.options.textPosition === 'right' ? `
            <div class="text-sm text-gray-600">${this.options.text}</div>
          ` : ''}
        </div>
        
        ${this.options.text && this.options.textPosition === 'bottom' ? `
          <div class="text-sm text-gray-600 mt-2">${this.options.text}</div>
        ` : ''}
      </div>
    `;
  }

  renderSpinner() {
    switch (this.options.variant) {
      case 'dots':
        return this.renderDots();
      case 'bars':
        return this.renderBars();
      case 'pulse':
        return this.renderPulse();
      case 'ring':
        return this.renderRing();
      default:
        return this.renderDefault();
    }
  }

  renderDefault() {
    const colorClasses = this.getColorClasses();
    return `
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;
  }

  renderDots() {
    const colorClasses = this.getColorClasses();
    return `
      <div class="flex space-x-1">
        <div class="w-2 h-2 ${colorClasses} rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-2 h-2 ${colorClasses} rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
        <div class="w-2 h-2 ${colorClasses} rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
      </div>
    `;
  }

  renderBars() {
    const colorClasses = this.getColorClasses();
    return `
      <div class="flex space-x-1">
        <div class="w-1 h-4 ${colorClasses} animate-pulse" style="animation-delay: 0ms;"></div>
        <div class="w-1 h-4 ${colorClasses} animate-pulse" style="animation-delay: 150ms;"></div>
        <div class="w-1 h-4 ${colorClasses} animate-pulse" style="animation-delay: 300ms;"></div>
      </div>
    `;
  }

  renderPulse() {
    const colorClasses = this.getColorClasses();
    return `
      <div class="w-full h-full ${colorClasses} rounded-full animate-pulse"></div>
    `;
  }

  renderRing() {
    const colorClasses = this.getColorClasses();
    return `
      <svg class="animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;
  }

  getSizeClasses() {
    const sizes = {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getColorClasses() {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      red: 'text-red-500',
      yellow: 'text-yellow-500',
      purple: 'text-purple-500',
      pink: 'text-pink-500',
      indigo: 'text-indigo-500',
      gray: 'text-gray-500',
      white: 'text-white'
    };
    return colors[this.options.color] || colors.blue;
  }

  getTextPositionClasses() {
    const positions = {
      top: 'flex-col',
      bottom: 'flex-col',
      left: 'flex-row',
      right: 'flex-row'
    };
    return positions[this.options.textPosition] || positions.bottom;
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setVariant(variant) {
    this.options.variant = variant;
    this.updateDisplay();
  }

  setColor(color) {
    this.options.color = color;
    this.updateDisplay();
  }

  setText(text) {
    this.options.text = text;
    this.updateDisplay();
  }

  setTextPosition(position) {
    this.options.textPosition = position;
    this.updateDisplay();
  }

  updateDisplay() {
    const spinner = document.getElementById(this.id);
    if (spinner) {
      spinner.outerHTML = this.render();
    }
  }

  // Métodos para integración con frameworks
  mount(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.innerHTML = this.render();
    }
  }

  // Métodos estáticos para crear spinners comunes
  static default(options = {}) {
    return new Spinner({ variant: 'default', ...options });
  }

  static dots(options = {}) {
    return new Spinner({ variant: 'dots', ...options });
  }

  static bars(options = {}) {
    return new Spinner({ variant: 'bars', ...options });
  }

  static pulse(options = {}) {
    return new Spinner({ variant: 'pulse', ...options });
  }

  static ring(options = {}) {
    return new Spinner({ variant: 'ring', ...options });
  }

  // Método para crear un spinner de carga
  static loading(text = 'Cargando...', options = {}) {
    return new Spinner({
      text,
      textPosition: 'bottom',
      variant: 'default',
      ...options
    });
  }

  // Método para crear un spinner de procesamiento
  static processing(text = 'Procesando...', options = {}) {
    return new Spinner({
      text,
      textPosition: 'bottom',
      variant: 'ring',
      ...options
    });
  }

  // Método para crear un spinner de sincronización
  static syncing(text = 'Sincronizando...', options = {}) {
    return new Spinner({
      text,
      textPosition: 'bottom',
      variant: 'dots',
      ...options
    });
  }

  // Método para obtener el HTML del spinner
  getHTML() {
    return this.render();
  }

  // Método para clonar el spinner
  clone() {
    return new Spinner({ ...this.options });
  }

  // Método para verificar si está animando
  isAnimating() {
    return true; // Spinners siempre están animando
  }

  // Método para obtener las dimensiones del spinner
  getDimensions() {
    const sizeMap = {
      xs: 16,
      sm: 24,
      md: 32,
      lg: 48,
      xl: 64
    };
    
    const size = sizeMap[this.options.size] || sizeMap.md;
    return { width: size, height: size };
  }
}
