export default class Badge {
  constructor(options = {}) {
    this.options = {
      text: '',
      variant: 'default', // default, primary, success, warning, danger, info, outline, dot
      size: 'md', // sm, md, lg
      rounded: true,
      removable: false,
      onRemove: null,
      icon: '',
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'badge-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const roundedClass = this.options.rounded ? 'rounded-full' : 'rounded-md';
    
    return `
      <span 
        class="inline-flex items-center font-medium ${variantClasses.background} ${variantClasses.text} ${variantClasses.border} ${sizeClasses} ${roundedClass} transition-colors duration-200"
        id="${this.id}"
      >
        ${this.options.icon ? `
          <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            ${this.options.icon}
          </svg>
        ` : ''}
        
        ${this.options.text}
        
        ${this.options.removable ? `
          <button
            type="button"
            class="ml-1.5 -mr-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-current hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current transition-colors duration-200"
            onclick="this.remove()"
            aria-label="Remove badge"
          >
            <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        ` : ''}
      </span>
    `;
  }

  getVariantClasses() {
    const variants = {
      default: {
        background: 'bg-gray-100',
        text: 'text-gray-800',
        border: 'border border-gray-200'
      },
      primary: {
        background: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border border-blue-200'
      },
      success: {
        background: 'bg-green-100',
        text: 'text-green-800',
        border: 'border border-green-200'
      },
      warning: {
        background: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border border-yellow-200'
      },
      danger: {
        background: 'bg-red-100',
        text: 'text-red-800',
        border: 'border border-red-200'
      },
      info: {
        background: 'bg-indigo-100',
        text: 'text-indigo-800',
        border: 'border border-indigo-200'
      },
      outline: {
        background: 'bg-transparent',
        text: 'text-gray-600',
        border: 'border border-gray-300'
      },
      dot: {
        background: 'bg-gray-100',
        text: 'text-gray-800',
        border: 'border border-gray-200'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base'
    };
    return sizes[this.options.size] || sizes.md;
  }

  setText(text) {
    this.options.text = text;
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

  setRounded(rounded) {
    this.options.rounded = rounded;
    this.updateDisplay();
  }

  setRemovable(removable, onRemove = null) {
    this.options.removable = removable;
    if (onRemove) {
      this.options.onRemove = onRemove;
    }
    this.updateDisplay();
  }

  setIcon(icon) {
    this.options.icon = icon;
    this.updateDisplay();
  }

  remove() {
    // Trigger onRemove callback
    if (typeof this.options.onRemove === 'function') {
      this.options.onRemove(this);
    }
    
    // Trigger custom event
    this.triggerEvent('remove', { badge: this });
    
    // Remove from DOM
    const badge = document.getElementById(this.id);
    if (badge) {
      badge.remove();
    }
  }

  updateDisplay() {
    const badge = document.getElementById(this.id);
    if (badge) {
      badge.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`badge:${eventName}`, {
      detail: { badge: this, ...data },
      bubbles: true
    });
    document.dispatchEvent(event);
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
    const removeButton = document.querySelector(`#${this.id} button[onclick*="remove"]`);
    if (removeButton) {
      removeButton.addEventListener('click', () => this.remove());
    }
  }

  // Métodos estáticos para crear badges comunes
  static default(text, options = {}) {
    return new Badge({ text, variant: 'default', ...options });
  }

  static primary(text, options = {}) {
    return new Badge({ text, variant: 'primary', ...options });
  }

  static success(text, options = {}) {
    return new Badge({ text, variant: 'success', ...options });
  }

  static warning(text, options = {}) {
    return new Badge({ text, variant: 'warning', ...options });
  }

  static danger(text, options = {}) {
    return new Badge({ text, variant: 'danger', ...options });
  }

  static info(text, options = {}) {
    return new Badge({ text, variant: 'info', ...options });
  }

  static outline(text, options = {}) {
    return new Badge({ text, variant: 'outline', ...options });
  }

  static dot(text, options = {}) {
    return new Badge({ text, variant: 'dot', ...options });
  }

  // Método para crear un badge con contador
  static counter(count, options = {}) {
    const text = count > 99 ? '99+' : count.toString();
    return new Badge({ 
      text, 
      variant: 'primary',
      size: 'sm',
      ...options 
    });
  }

  // Método para crear un badge de estado
  static status(status, options = {}) {
    const statusMap = {
      online: { variant: 'success', text: 'Online' },
      offline: { variant: 'danger', text: 'Offline' },
      away: { variant: 'warning', text: 'Away' },
      busy: { variant: 'danger', text: 'Busy' }
    };
    
    const statusConfig = statusMap[status.toLowerCase()] || statusMap.offline;
    return new Badge({ ...statusConfig, ...options });
  }

  // Método para crear un badge de notificación
  static notification(count, options = {}) {
    return new Badge({
      text: count > 0 ? count.toString() : '',
      variant: 'danger',
      size: 'sm',
      rounded: true,
      ...options
    });
  }

  // Método para obtener el HTML del badge
  getHTML() {
    return this.render();
  }

  // Método para clonar el badge
  clone() {
    return new Badge({ ...this.options });
  }
}
