export default class Avatar {
  constructor(options = {}) {
    this.options = {
      src: '',
      alt: '',
      fallback: '',
      size: 'md', // xs, sm, md, lg, xl, 2xl
      shape: 'circle', // circle, square, rounded
      status: '', // online, offline, away, busy
      statusPosition: 'bottom-right', // top-left, top-right, bottom-left, bottom-right
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'avatar-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = this.getSizeClasses();
    const shapeClasses = this.getShapeClasses();
    const statusClasses = this.getStatusClasses();
    const statusPositionClasses = this.getStatusPositionClasses();
    
    return `
      <div class="relative inline-block" id="${this.id}">
        ${this.options.src ? `
          <img
            class="${sizeClasses} ${shapeClasses} object-cover"
            src="${this.options.src}"
            alt="${this.options.alt || 'Avatar'}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
        ` : ''}
        
        <div class="${sizeClasses} ${shapeClasses} bg-gray-300 flex items-center justify-center text-gray-600 font-medium ${!this.options.src ? '' : 'hidden'}">
          ${this.getFallbackText()}
        </div>
        
        ${this.options.status ? `
          <span class="absolute ${statusPositionClasses} block ${statusClasses} ring-2 ring-white rounded-full"></span>
        ` : ''}
      </div>
    `;
  }

  getSizeClasses() {
    const sizes = {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
      '2xl': 'w-20 h-20 text-2xl'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getShapeClasses() {
    const shapes = {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-lg'
    };
    return shapes[this.options.shape] || shapes.circle;
  }

  getStatusClasses() {
    const statuses = {
      online: 'bg-green-400',
      offline: 'bg-gray-400',
      away: 'bg-yellow-400',
      busy: 'bg-red-400'
    };
    return statuses[this.options.status] || '';
  }

  getStatusPositionClasses() {
    const positions = {
      'top-left': 'top-0 left-0',
      'top-right': 'top-0 right-0',
      'bottom-left': 'bottom-0 left-0',
      'bottom-right': 'bottom-0 right-0'
    };
    return positions[this.options.statusPosition] || positions['bottom-right'];
  }

  getFallbackText() {
    if (this.options.fallback) {
      return this.options.fallback;
    }
    
    if (this.options.alt) {
      // Extract initials from alt text
      const words = this.options.alt.trim().split(/\s+/);
      if (words.length >= 2) {
        return (words[0][0] + words[words.length - 1][0]).toUpperCase();
      } else if (words.length === 1) {
        return words[0][0].toUpperCase();
      }
    }
    
    return '?';
  }

  setImage(src, alt = '') {
    this.options.src = src;
    this.options.alt = alt;
    this.updateDisplay();
  }

  setFallback(fallback) {
    this.options.fallback = fallback;
    this.updateDisplay();
  }

  setSize(size) {
    this.options.size = size;
    this.updateDisplay();
  }

  setShape(shape) {
    this.options.shape = shape;
    this.updateDisplay();
  }

  setStatus(status) {
    this.options.status = status;
    this.updateDisplay();
  }

  setStatusPosition(position) {
    this.options.statusPosition = position;
    this.updateDisplay();
  }

  removeImage() {
    this.options.src = '';
    this.updateDisplay();
  }

  updateDisplay() {
    const avatar = document.getElementById(this.id);
    if (avatar) {
      avatar.outerHTML = this.render();
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

  // Métodos estáticos para crear avatares comunes
  static user(options = {}) {
    return new Avatar({
      fallback: 'U',
      alt: 'User',
      ...options
    });
  }

  static group(options = {}) {
    return new Avatar({
      fallback: 'G',
      alt: 'Group',
      ...options
    });
  }

  static anonymous(options = {}) {
    return new Avatar({
      fallback: '?',
      alt: 'Anonymous',
      ...options
    });
  }

  // Método para crear un avatar con iniciales
  static initials(initials, options = {}) {
    return new Avatar({
      fallback: initials.toUpperCase(),
      alt: initials,
      ...options
    });
  }

  // Método para crear un avatar de usuario con nombre completo
  static fromName(fullName, options = {}) {
    const words = fullName.trim().split(/\s+/);
    let initials = '';
    
    if (words.length >= 2) {
      initials = words[0][0] + words[words.length - 1][0];
    } else if (words.length === 1) {
      initials = words[0][0];
    }
    
    return new Avatar({
      fallback: initials.toUpperCase(),
      alt: fullName,
      ...options
    });
  }

  // Método para crear un avatar de empresa
  static company(companyName, options = {}) {
    const initials = companyName
      .split(/\s+/)
      .map(word => word[0])
      .join('')
      .substring(0, 2);
    
    return new Avatar({
      fallback: initials.toUpperCase(),
      alt: companyName,
      shape: 'square',
      ...options
    });
  }

  // Método para obtener el HTML del avatar
  getHTML() {
    return this.render();
  }

  // Método para clonar el avatar
  clone() {
    return new Avatar({ ...this.options });
  }

  // Método para verificar si tiene imagen
  hasImage() {
    return !!this.options.src;
  }

  // Método para obtener las dimensiones del avatar
  getDimensions() {
    const sizeMap = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 64,
      '2xl': 80
    };
    
    const size = sizeMap[this.options.size] || sizeMap.md;
    return { width: size, height: size };
  }
}
