export default class Progress {
  constructor(options = {}) {
    this.options = {
      value: 0,
      max: 100,
      size: 'md', // sm, md, lg
      variant: 'default', // default, striped, animated, circular
      color: 'blue',
      showValue: true,
      showLabel: false,
      label: '',
      thickness: 'md', // thin, md, thick
      ...options
    };
    
    this.currentValue = this.options.value;
    this.id = this.generateId();
  }

  generateId() {
    return 'progress-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    if (this.options.variant === 'circular') {
      return this.renderCircular();
    }
    
    return this.renderLinear();
  }

  renderLinear() {
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const thicknessClasses = this.getThicknessClasses();
    const percentage = (this.currentValue / this.options.max) * 100;
    
    return `
      <div class="w-full" id="${this.id}">
        ${this.options.showLabel && this.options.label ? `
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-700">${this.options.label}</span>
            ${this.options.showValue ? `
              <span class="text-sm text-gray-500">${this.currentValue}%</span>
            ` : ''}
          </div>
        ` : ''}
        
        <div class="w-full bg-gray-200 rounded-full ${thicknessClasses} overflow-hidden">
          <div 
            class="h-full ${colorClasses} transition-all duration-500 ease-out ${this.getStripedClasses()}"
            style="width: ${percentage}%"
          ></div>
        </div>
        
        ${!this.options.showLabel && this.options.showValue ? `
          <div class="text-right mt-1">
            <span class="text-xs text-gray-500">${percentage.toFixed(1)}%</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  renderCircular() {
    const size = this.options.size === 'lg' ? 120 : this.options.size === 'sm' ? 80 : 100;
    const strokeWidth = this.options.thickness === 'thin' ? 4 : this.options.thickness === 'thick' ? 8 : 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = (this.currentValue / this.options.max) * 100;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const colorClasses = this.getColorClasses();
    
    return `
      <div class="inline-flex flex-col items-center" id="${this.id}">
        <div class="relative" style="width: ${size}px; height: ${size}px;">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 ${size} ${size}">
            <!-- Background circle -->
            <circle
              cx="${size / 2}"
              cy="${size / 2}"
              r="${radius}"
              stroke="currentColor"
              stroke-width="${strokeWidth}"
              fill="transparent"
              class="text-gray-200"
            />
            
            <!-- Progress circle -->
            <circle
              cx="${size / 2}"
              cy="${size / 2}"
              r="${radius}"
              stroke="currentColor"
              stroke-width="${strokeWidth}"
              fill="transparent"
              stroke-linecap="round"
              class="${colorClasses.replace('bg-', 'text-')}"
              style="
                stroke-dasharray: ${strokeDasharray};
                stroke-dashoffset: ${strokeDashoffset};
                transition: stroke-dashoffset 0.5s ease-in-out;
              "
            />
          </svg>
          
          <!-- Center content -->
          <div class="absolute inset-0 flex items-center justify-center">
            ${this.options.showValue ? `
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">${percentage.toFixed(0)}%</div>
                ${this.options.label ? `
                  <div class="text-sm text-gray-500">${this.options.label}</div>
                ` : ''}
              </div>
            ` : this.options.label ? `
              <div class="text-center">
                <div class="text-lg font-medium text-gray-900">${this.options.label}</div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getThicknessClasses() {
    const thicknesses = {
      thin: 'h-1',
      md: 'h-2',
      thick: 'h-3'
    };
    return thicknesses[this.options.thickness] || thicknesses.md;
  }

  getColorClasses() {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      red: 'bg-red-500',
      yellow: 'bg-yellow-500',
      purple: 'bg-purple-500',
      pink: 'bg-pink-500',
      indigo: 'bg-indigo-500',
      gray: 'bg-gray-500'
    };
    return colors[this.options.color] || colors.blue;
  }

  getStripedClasses() {
    if (this.options.variant === 'striped') {
      return 'bg-stripes bg-stripes-white bg-stripes-opacity-15';
    }
    if (this.options.variant === 'animated') {
      return 'bg-stripes bg-stripes-white bg-stripes-opacity-15 animate-pulse';
    }
    return '';
  }

  setValue(value) {
    this.currentValue = Math.max(0, Math.min(this.options.max, value));
    this.updateDisplay();
    this.triggerEvent('change', { value: this.currentValue, percentage: (this.currentValue / this.options.max) * 100 });
  }

  getValue() {
    return this.currentValue;
  }

  setMax(max) {
    this.options.max = max;
    if (this.currentValue > max) {
      this.currentValue = max;
    }
    this.updateDisplay();
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

  setThickness(thickness) {
    this.options.thickness = thickness;
    this.updateDisplay();
  }

  setShowValue(showValue) {
    this.options.showValue = showValue;
    this.updateDisplay();
  }

  setShowLabel(showLabel) {
    this.options.showLabel = showLabel;
    this.updateDisplay();
  }

  setLabel(label) {
    this.options.label = label;
    this.updateDisplay();
  }

  increment(amount = 1) {
    this.setValue(this.currentValue + amount);
  }

  decrement(amount = 1) {
    this.setValue(this.currentValue - amount);
  }

  animateTo(targetValue, duration = 1000, easing = 'easeOutCubic') {
    const startValue = this.currentValue;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing functions
      let easedProgress;
      switch (easing) {
        case 'easeOutCubic':
          easedProgress = 1 - Math.pow(1 - progress, 3);
          break;
        case 'easeInOutCubic':
          easedProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          break;
        default:
          easedProgress = progress;
      }
      
      const newValue = startValue + (targetValue - startValue) * easedProgress;
      this.setValue(newValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  updateDisplay() {
    const progress = document.getElementById(this.id);
    if (progress) {
      progress.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`progress:${eventName}`, {
      detail: { progress: this, ...data },
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
    }
  }

  // Métodos estáticos para crear progress bars comunes
  static linear(options = {}) {
    return new Progress({ variant: 'default', ...options });
  }

  static striped(options = {}) {
    return new Progress({ variant: 'striped', ...options });
  }

  static animated(options = {}) {
    return new Progress({ variant: 'animated', ...options });
  }

  static circular(options = {}) {
    return new Progress({ variant: 'circular', ...options });
  }

  // Método para crear un progress bar de carga indeterminada
  static indeterminate(options = {}) {
    const progress = new Progress({ ...options, value: 0 });
    progress.startIndeterminate();
    return progress;
  }

  startIndeterminate() {
    if (this.options.variant !== 'circular') {
      this.setValue(0);
      this.animateTo(100, 2000, 'easeInOutCubic');
      
      const interval = setInterval(() => {
        this.setValue(0);
        this.animateTo(100, 2000, 'easeInOutCubic');
      }, 2000);
      
      this.indeterminateInterval = interval;
    }
  }

  stopIndeterminate() {
    if (this.indeterminateInterval) {
      clearInterval(this.indeterminateInterval);
      this.indeterminateInterval = null;
    }
  }
}
