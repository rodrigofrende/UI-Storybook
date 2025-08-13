export default class Slider {
  constructor(options = {}) {
    this.options = {
      min: 0,
      max: 100,
      value: 50,
      step: 1,
      disabled: false,
      showValue: true,
      size: 'md', // sm, md, lg
      color: 'blue',
      ...options
    };
    
    this.currentValue = this.options.value;
    this.isDragging = false;
  }

  render() {
    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    const thumbSizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };

    const percentage = ((this.currentValue - this.options.min) / (this.options.max - this.options.min)) * 100;
    
    return `
      <div class="w-full max-w-xs">
        <div class="relative">
          <div class="flex items-center space-x-3">
            <div class="flex-1 relative">
              <div class="w-full ${sizeClasses[this.options.size]} bg-gray-200 rounded-full overflow-hidden">
                <div 
                  class="h-full ${colorClasses[this.options.color]} transition-all duration-200 ease-out"
                  style="width: ${percentage}%"
                ></div>
              </div>
              
              <input
                type="range"
                min="${this.options.min}"
                max="${this.options.max}"
                value="${this.currentValue}"
                step="${this.options.step}"
                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                ${this.options.disabled ? 'disabled' : ''}
                oninput="this.updateValue(this.value)"
                onchange="this.onChange(this.value)"
              />
              
              <div 
                class="absolute top-1/2 transform -translate-y-1/2 ${thumbSizeClasses[this.options.size]} ${colorClasses[this.options.color]} rounded-full shadow-lg border-2 border-white transition-all duration-200 ease-out"
                style="left: ${percentage}%"
              ></div>
            </div>
            
            ${this.options.showValue ? `
              <div class="w-12 text-right">
                <span class="text-sm font-medium text-gray-700">${this.currentValue}</span>
              </div>
            ` : ''}
          </div>
          
          ${this.options.showValue ? `
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>${this.options.min}</span>
              <span>${this.options.max}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  updateValue(value) {
    this.currentValue = parseFloat(value);
    this.triggerEvent('input', { value: this.currentValue });
  }

  onChange(value) {
    this.currentValue = parseFloat(value);
    this.triggerEvent('change', { value: this.currentValue });
  }

  setValue(value) {
    this.currentValue = Math.max(this.options.min, Math.min(this.options.max, value));
    this.triggerEvent('change', { value: this.currentValue });
  }

  getValue() {
    return this.currentValue;
  }

  enable() {
    this.options.disabled = false;
  }

  disable() {
    this.options.disabled = true;
  }

  setRange(min, max) {
    this.options.min = min;
    this.options.max = max;
    if (this.currentValue < min) this.currentValue = min;
    if (this.currentValue > max) this.currentValue = max;
  }

  setStep(step) {
    this.options.step = step;
  }

  setColor(color) {
    this.options.color = color;
  }

  setSize(size) {
    this.options.size = size;
  }

  triggerEvent(eventName, data) {
    const event = new CustomEvent(`slider:${eventName}`, {
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
    const rangeInput = container.querySelector('input[type="range"]');
    if (rangeInput) {
      rangeInput.addEventListener('input', (e) => this.updateValue(e.target.value));
      rangeInput.addEventListener('change', (e) => this.onChange(e.target.value));
    }
  }
}
