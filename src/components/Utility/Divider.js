export default class Divider {
  constructor(options = {}) {
    this.options = {
      orientation: 'horizontal', // horizontal, vertical
      variant: 'solid', // solid, dashed, dotted, double
      size: 'md', // xs, sm, md, lg, xl
      color: 'gray', // gray, blue, green, red, yellow, purple, pink, indigo
      spacing: 'md', // xs, sm, md, lg, xl
      label: '', // texto opcional para el divider
      labelPosition: 'center', // left, center, right
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'divider-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const orientationClasses = this.getOrientationClasses();
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const spacingClasses = this.getSpacingClasses();
    
    if (this.options.orientation === 'vertical') {
      return this.renderVertical();
    }
    
    return this.renderHorizontal();
  }

  renderHorizontal() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const spacingClasses = this.getSpacingClasses();
    
    if (this.options.label) {
      return this.renderHorizontalWithLabel();
    }
    
    return `
      <div class="flex items-center ${spacingClasses}" id="${this.id}">
        <div class="flex-1 ${variantClasses} ${sizeClasses} ${colorClasses}"></div>
      </div>
    `;
  }

  renderHorizontalWithLabel() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const spacingClasses = this.getSpacingClasses();
    const labelPositionClasses = this.getLabelPositionClasses();
    
    return `
      <div class="flex items-center ${spacingClasses}" id="${this.id}">
        <div class="flex-1 ${variantClasses} ${sizeClasses} ${colorClasses}"></div>
        <div class="px-3 text-sm font-medium text-gray-500 ${labelPositionClasses}">
          ${this.options.label}
        </div>
        <div class="flex-1 ${variantClasses} ${sizeClasses} ${colorClasses}"></div>
      </div>
    `;
  }

  renderVertical() {
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    const spacingClasses = this.getSpacingClasses();
    
    return `
      <div class="inline-flex items-center ${spacingClasses}" id="${this.id}">
        <div class="h-full ${variantClasses} ${sizeClasses} ${colorClasses}"></div>
      </div>
    `;
  }

  getOrientationClasses() {
    if (this.options.orientation === 'vertical') {
      return 'inline-flex flex-col';
    }
    return 'flex w-full';
  }

  getVariantClasses() {
    const variants = {
      solid: 'border-t',
      dashed: 'border-t border-dashed',
      dotted: 'border-t border-dotted',
      double: 'border-t-2'
    };
    return variants[this.options.variant] || variants.solid;
  }

  getSizeClasses() {
    const sizes = {
      xs: 'border-t',
      sm: 'border-t-2',
      md: 'border-t-4',
      lg: 'border-t-6',
      xl: 'border-t-8'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getColorClasses() {
    const colors = {
      gray: 'border-gray-200',
      blue: 'border-blue-200',
      green: 'border-green-200',
      red: 'border-red-200',
      yellow: 'border-yellow-200',
      purple: 'border-purple-200',
      pink: 'border-pink-200',
      indigo: 'border-indigo-200'
    };
    return colors[this.options.color] || colors.gray;
  }

  getSpacingClasses() {
    const spacings = {
      xs: 'my-1',
      sm: 'my-2',
      md: 'my-4',
      lg: 'my-6',
      xl: 'my-8'
    };
    return spacings[this.options.spacing] || spacings.md;
  }

  getLabelPositionClasses() {
    const positions = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
    return positions[this.options.labelPosition] || positions.center;
  }

  // Métodos para cambiar propiedades dinámicamente
  setOrientation(orientation) {
    this.options.orientation = orientation;
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

  setColor(color) {
    this.options.color = color;
    this.updateDisplay();
  }

  setSpacing(spacing) {
    this.options.spacing = spacing;
    this.updateDisplay();
  }

  setLabel(label) {
    this.options.label = label;
    this.updateDisplay();
  }

  setLabelPosition(position) {
    this.options.labelPosition = position;
    this.updateDisplay();
  }

  removeLabel() {
    this.options.label = '';
    this.updateDisplay();
  }

  updateDisplay() {
    const divider = document.getElementById(this.id);
    if (divider) {
      divider.outerHTML = this.render();
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

  // Métodos estáticos para crear dividers comunes
  static horizontal(options = {}) {
    return new Divider({
      orientation: 'horizontal',
      ...options
    });
  }

  static vertical(options = {}) {
    return new Divider({
      orientation: 'vertical',
      ...options
    });
  }

  static section(title, options = {}) {
    return new Divider({
      orientation: 'horizontal',
      label: title,
      variant: 'solid',
      size: 'md',
      ...options
    });
  }

  static subtle(options = {}) {
    return new Divider({
      orientation: 'horizontal',
      variant: 'solid',
      size: 'xs',
      color: 'gray',
      spacing: 'sm',
      ...options
    });
  }

  static bold(options = {}) {
    return new Divider({
      orientation: 'horizontal',
      variant: 'solid',
      size: 'lg',
      color: 'gray',
      spacing: 'lg',
      ...options
    });
  }

  static colored(color, options = {}) {
    return new Divider({
      orientation: 'horizontal',
      color: color,
      ...options
    });
  }

  // Método para obtener el HTML del divider
  getHTML() {
    return this.render();
  }

  // Método para clonar el divider
  clone() {
    return new Divider({ ...this.options });
  }

  // Método para verificar si tiene label
  hasLabel() {
    return !!this.options.label;
  }

  // Método para obtener las dimensiones del divider
  getDimensions() {
    if (this.options.orientation === 'vertical') {
      const sizeMap = {
        xs: 1,
        sm: 2,
        md: 4,
        lg: 6,
        xl: 8
      };
      const size = sizeMap[this.options.size] || sizeMap.md;
      return { width: size, height: '100%' };
    } else {
      const sizeMap = {
        xs: 1,
        sm: 2,
        md: 4,
        lg: 6,
        xl: 8
      };
      const size = sizeMap[this.options.size] || sizeMap.md;
      return { width: '100%', height: size };
    }
  }
}
