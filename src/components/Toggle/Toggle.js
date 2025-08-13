export default class Toggle {
  constructor(options = {}) {
    this.options = {
      checked: false,
      disabled: false,
      size: 'md', // sm, md, lg
      color: 'blue',
      label: '',
      showLabel: true,
      ...options
    };
    
    this.checked = this.options.checked;
    this.id = this.generateId();
  }

  generateId() {
    return 'toggle-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = {
      sm: 'w-8 h-4',
      md: 'w-11 h-6',
      lg: 'w-14 h-7'
    };

    const thumbSizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };

    const disabledClasses = this.options.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `
      <div class="flex items-center space-x-3">
        <button
          type="button"
          id="${this.id}"
          class="relative inline-flex items-center ${sizeClasses[this.options.size]} rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${disabledClasses}"
          ${this.options.disabled ? 'disabled' : ''}
          onclick="this.toggle()"
          role="switch"
          aria-checked="${this.checked}"
          aria-labelledby="${this.id}-label"
        >
          <span class="sr-only">Toggle ${this.options.label}</span>
          
          <div class="w-full h-full bg-gray-200 rounded-full transition-colors duration-200 ease-in-out ${this.checked ? colorClasses[this.options.color] : ''}"></div>
          
          <div 
            class="absolute ${thumbSizeClasses[this.options.size]} bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${this.checked ? 'translate-x-full' : 'translate-x-0'}"
            style="left: 2px;"
          ></div>
        </button>
        
        ${this.options.showLabel && this.options.label ? `
          <label 
            for="${this.id}" 
            id="${this.id}-label"
            class="text-sm font-medium text-gray-700 cursor-pointer select-none"
          >
            ${this.options.label}
          </label>
        ` : ''}
      </div>
    `;
  }

  toggle() {
    if (this.options.disabled) return;
    
    this.checked = !this.checked;
    this.updateDisplay();
    this.triggerEvent('change', { checked: this.checked });
  }

  setChecked(checked) {
    this.checked = Boolean(checked);
    this.updateDisplay();
    this.triggerEvent('change', { checked: this.checked });
  }

  isChecked() {
    return this.checked;
  }

  enable() {
    this.options.disabled = false;
    this.updateDisplay();
  }

  disable() {
    this.options.disabled = true;
    this.updateDisplay();
  }

  setColor(color) {
    this.options.color = color;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setLabel(label) {
    this.options.label = label;
    this.updateDisplay();
  }

  updateDisplay() {
    const toggle = document.getElementById(this.id);
    if (toggle) {
      const bg = toggle.querySelector('div:first-child');
      const thumb = toggle.querySelector('div:last-child');
      
      if (this.checked) {
        bg.classList.remove('bg-gray-200');
        bg.classList.add(this.getColorClass());
        thumb.classList.add('translate-x-full');
        thumb.classList.remove('translate-x-0');
      } else {
        bg.classList.add('bg-gray-200');
        bg.classList.remove(this.getColorClass());
        thumb.classList.remove('translate-x-full');
        thumb.classList.add('translate-x-0');
      }
      
      toggle.setAttribute('aria-checked', this.checked);
    }
  }

  getColorClass() {
    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colorClasses[this.options.color] || colorClasses.blue;
  }

  triggerEvent(eventName, data) {
    const event = new CustomEvent(`toggle:${eventName}`, {
      detail: data,
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
    const toggle = container.querySelector(`#${this.id}`);
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
  }

  // Métodos para accesibilidad
  focus() {
    const toggle = document.getElementById(this.id);
    if (toggle) toggle.focus();
  }

  blur() {
    const toggle = document.getElementById(this.id);
    if (toggle) toggle.blur();
  }
}
