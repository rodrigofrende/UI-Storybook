export default class Tooltip {
  constructor(options = {}) {
    this.options = {
      content: '',
      position: 'top', // top, bottom, left, right
      variant: 'default', // default, dark, light, info, success, warning, error
      size: 'md', // sm, md, lg
      showArrow: true,
      delay: 200,
      maxWidth: 200,
      trigger: 'hover', // hover, click, focus
      ...options
    };
    
    this.isVisible = false;
    this.timeout = null;
    this.id = this.generateId();
    this.tooltipId = `tooltip-${this.id}`;
  }

  generateId() {
    return 'tooltip-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const positionClasses = this.getPositionClasses();
    
    return `
      <div 
        class="absolute z-50 ${positionClasses.container} ${this.isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 ease-in-out"
        id="${this.tooltipId}"
        role="tooltip"
        aria-hidden="${!this.isVisible}"
      >
        ${this.options.showArrow ? `
          <div class="absolute ${positionClasses.arrow} ${variantClasses.arrow}"></div>
        ` : ''}
        
        <div class="relative ${variantClasses.background} ${variantClasses.text} ${variantClasses.border} ${sizeClasses} ${variantClasses.shadow} rounded-lg px-3 py-2 max-w-xs">
          <div class="text-center">
            ${this.options.content}
          </div>
        </div>
      </div>
    `;
  }

  getVariantClasses() {
    const variants = {
      default: {
        background: 'bg-gray-900',
        text: 'text-white',
        border: 'border border-gray-700',
        shadow: 'shadow-lg',
        arrow: 'border-gray-900'
      },
      dark: {
        background: 'bg-black',
        text: 'text-white',
        border: 'border border-gray-800',
        shadow: 'shadow-xl',
        arrow: 'border-black'
      },
      light: {
        background: 'bg-white',
        text: 'text-gray-900',
        border: 'border border-gray-200',
        shadow: 'shadow-lg',
        arrow: 'border-white'
      },
      info: {
        background: 'bg-blue-600',
        text: 'text-white',
        border: 'border border-blue-700',
        shadow: 'shadow-lg',
        arrow: 'border-blue-600'
      },
      success: {
        background: 'bg-green-600',
        text: 'text-white',
        border: 'border border-green-700',
        shadow: 'shadow-lg',
        arrow: 'border-green-600'
      },
      warning: {
        background: 'bg-yellow-600',
        text: 'text-white',
        border: 'border border-yellow-700',
        shadow: 'shadow-lg',
        arrow: 'border-yellow-600'
      },
      error: {
        background: 'bg-red-600',
        text: 'text-white',
        border: 'border border-red-700',
        shadow: 'shadow-lg',
        arrow: 'border-red-600'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getPositionClasses() {
    const positions = {
      top: {
        container: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        arrow: 'top-full left-1/2 transform -translate-x-1/2 border-t-4 border-l-4 border-r-4 border-transparent'
      },
      bottom: {
        container: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        arrow: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent'
      },
      left: {
        container: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        arrow: 'left-full top-1/2 transform -translate-y-1/2 border-l-4 border-t-4 border-b-4 border-transparent'
      },
      right: {
        container: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
        arrow: 'right-full top-1/2 transform -translate-y-1/2 border-r-4 border-t-4 border-b-4 border-transparent'
      }
    };
    
    return positions[this.options.position] || positions.top;
  }

  show() {
    if (this.isVisible) return;
    
    this.isVisible = true;
    this.updateDisplay();
    this.triggerEvent('show');
  }

  hide() {
    if (!this.isVisible) return;
    
    this.isVisible = false;
    this.updateDisplay();
    this.triggerEvent('hide');
  }

  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }

  setContent(content) {
    this.options.content = content;
    this.updateDisplay();
  }

  setPosition(position) {
    this.options.position = position;
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

  setShowArrow(showArrow) {
    this.options.showArrow = showArrow;
    this.updateDisplay();
  }

  setDelay(delay) {
    this.options.delay = delay;
  }

  setMaxWidth(maxWidth) {
    this.options.maxWidth = maxWidth;
    this.updateDisplay();
  }

  setTrigger(trigger) {
    this.options.trigger = trigger;
  }

  updateDisplay() {
    const tooltip = document.getElementById(this.tooltipId);
    if (tooltip) {
      tooltip.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`tooltip:${eventName}`, {
      detail: { tooltip: this, ...data },
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
      this.attachEventListeners(element);
    }
  }

  attachEventListeners(container) {
    const triggerElement = container.querySelector('[data-tooltip-trigger]');
    if (triggerElement) {
      switch (this.options.trigger) {
        case 'hover':
          triggerElement.addEventListener('mouseenter', () => {
            this.timeout = setTimeout(() => this.show(), this.options.delay);
          });
          
          triggerElement.addEventListener('mouseleave', () => {
            if (this.timeout) {
              clearTimeout(this.timeout);
              this.timeout = null;
            }
            this.hide();
          });
          break;
          
        case 'click':
          triggerElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggle();
          });
          
          // Hide on outside click
          document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
              this.hide();
            }
          });
          break;
          
        case 'focus':
          triggerElement.addEventListener('focus', () => {
            this.timeout = setTimeout(() => this.show(), this.options.delay);
          });
          
          triggerElement.addEventListener('blur', () => {
            if (this.timeout) {
              clearTimeout(this.timeout);
              this.timeout = null;
            }
            this.hide();
          });
          break;
      }
    }
  }

  // Métodos estáticos para crear tooltips comunes
  static info(content, options = {}) {
    return new Tooltip({ content, variant: 'info', ...options });
  }

  static success(content, options = {}) {
    return new Tooltip({ content, variant: 'success', ...options });
  }

  static warning(content, options = {}) {
    return new Tooltip({ content, variant: 'warning', ...options });
  }

  static error(content, options = {}) {
    return new Tooltip({ content, variant: 'error', ...options });
  }

  static light(content, options = {}) {
    return new Tooltip({ content, variant: 'light', ...options });
  }

  static dark(content, options = {}) {
    return new Tooltip({ content, variant: 'dark', ...options });
  }

  // Método para crear un tooltip de ayuda
  static help(content, options = {}) {
    return new Tooltip({
      content,
      variant: 'info',
      size: 'sm',
      position: 'top',
      ...options
    });
  }

  // Método para crear un tooltip de error
  static error(content, options = {}) {
    return new Tooltip({
      content,
      variant: 'error',
      size: 'md',
      position: 'top',
      ...options
    });
  }

  // Método para obtener el HTML del tooltip
  getHTML() {
    return this.render();
  }

  // Método para clonar el tooltip
  clone() {
    return new Tooltip({ ...this.options });
  }

  // Método para verificar si está visible
  isTooltipVisible() {
    return this.isVisible;
  }

  // Método para destruir el tooltip
  destroy() {
    this.hide();
    const tooltip = document.getElementById(this.tooltipId);
    if (tooltip) {
      tooltip.remove();
    }
  }
}
