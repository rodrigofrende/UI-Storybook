export default class Breadcrumbs {
  constructor(options = {}) {
    this.options = {
      items: [],
      separator: '/',
      size: 'md', // sm, md, lg
      variant: 'default', // default, outlined, minimal
      showHome: true,
      homeIcon: '',
      homeText: 'Inicio',
      homeHref: '/',
      maxItems: 0, // 0 = show all, > 0 = show max items with ellipsis
      ...options
    };
    
    this.id = this.generateId();
  }

  generateId() {
    return 'breadcrumbs-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    const separatorClasses = this.getSeparatorClasses();
    
    return `
      <nav class="flex" aria-label="Breadcrumb" id="${this.id}">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          ${this.renderHomeItem()}
          ${this.renderBreadcrumbItems()}
        </ol>
      </nav>
    `;
  }

  renderHomeItem() {
    if (!this.options.showHome) return '';
    
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    const isActive = this.options.items.length === 0;
    
    return `
      <li class="inline-flex items-center">
        <a
          href="${this.options.homeHref}"
          class="inline-flex items-center ${sizeClasses} ${variantClasses.link} ${isActive ? variantClasses.active : ''} hover:text-blue-600 transition-colors duration-200"
          ${isActive ? 'aria-current="page"' : ''}
        >
          ${this.options.homeIcon ? `
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${this.options.homeIcon}
            </svg>
          ` : ''}
          ${this.options.homeText}
        </a>
        ${this.options.items.length > 0 ? this.renderSeparator() : ''}
      </li>
    `;
  }

  renderBreadcrumbItems() {
    const items = this.getVisibleItems();
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    
    return items.map((item, index) => {
      const isLast = index === items.length - 1;
      const isActive = isLast;
      
      return `
        <li class="inline-flex items-center">
          ${isActive ? `
            <span class="${sizeClasses} ${variantClasses.active}" aria-current="page">
              ${item.label}
            </span>
          ` : `
            <a
              href="${item.href || '#'}"
              class="${sizeClasses} ${variantClasses.link} hover:text-blue-600 transition-colors duration-200"
            >
              ${item.label}
            </a>
          `}
          ${!isLast ? this.renderSeparator() : ''}
        </li>
      `;
    }).join('');
  }

  renderSeparator() {
    const sizeClasses = this.getSizeClasses();
    const separatorClasses = this.getSeparatorClasses();
    
    return `
      <svg class="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
      </svg>
    `;
  }

  getVisibleItems() {
    let items = [...this.options.items];
    
    if (this.options.maxItems > 0 && items.length > this.options.maxItems) {
      const startItems = items.slice(0, Math.ceil(this.options.maxItems / 2));
      const endItems = items.slice(-Math.floor(this.options.maxItems / 2));
      
      items = [
        ...startItems,
        { label: '...', href: null, isEllipsis: true },
        ...endItems
      ];
    }
    
    return items;
  }

  getSizeClasses() {
    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return sizes[this.options.size] || sizes.md;
  }

  getVariantClasses() {
    const variants = {
      default: {
        link: 'text-gray-500',
        active: 'text-gray-900 font-medium'
      },
      outlined: {
        link: 'text-gray-500 border border-gray-200 rounded px-2 py-1',
        active: 'text-blue-600 border-blue-200 bg-blue-50 font-medium'
      },
      minimal: {
        link: 'text-gray-500 hover:text-gray-700',
        active: 'text-gray-900 font-semibold'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getSeparatorClasses() {
    const separators = {
      '/': 'text-gray-400',
      '>': 'text-gray-400',
      '|': 'text-gray-400',
      '→': 'text-gray-400',
      '•': 'text-gray-400'
    };
    
    return separators[this.options.separator] || separators['/'];
  }

  setItems(items) {
    this.options.items = items;
    this.updateDisplay();
  }

  addItem(item) {
    this.options.items.push(item);
    this.updateDisplay();
  }

  removeItem(index) {
    if (index >= 0 && index < this.options.items.length) {
      this.options.items.splice(index, 1);
      this.updateDisplay();
    }
  }

  updateItem(index, updates) {
    if (index >= 0 && index < this.options.items.length) {
      this.options.items[index] = { ...this.options.items[index], ...updates };
      this.updateDisplay();
    }
  }

  setSeparator(separator) {
    this.options.separator = separator;
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

  setShowHome(showHome) {
    this.options.showHome = showHome;
    this.updateDisplay();
  }

  setHomeIcon(icon) {
    this.options.homeIcon = icon;
    this.updateDisplay();
  }

  setHomeText(text) {
    this.options.homeText = text;
    this.updateDisplay();
  }

  setHomeHref(href) {
    this.options.homeHref = href;
    this.updateDisplay();
  }

  setMaxItems(maxItems) {
    this.options.maxItems = maxItems;
    this.updateDisplay();
  }

  getCurrentPath() {
    return this.options.items.map(item => item.label).join(' / ');
  }

  getBreadcrumbData() {
    return {
      items: this.options.items,
      currentPath: this.getCurrentPath(),
      hasItems: this.options.items.length > 0,
      totalItems: this.options.items.length
    };
  }

  updateDisplay() {
    const breadcrumbs = document.getElementById(this.id);
    if (breadcrumbs) {
      breadcrumbs.outerHTML = this.render();
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
    // Add click event listeners for breadcrumb items
    const links = document.querySelectorAll(`#${this.id} a`);
    links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
          e.preventDefault();
        }
        
        // Trigger custom event
        this.triggerEvent('click', { 
          index, 
          href: link.getAttribute('href'),
          label: link.textContent.trim()
        });
      });
    });
  }

  // Métodos estáticos para crear breadcrumbs comunes
  static fromPath(path, options = {}) {
    const pathParts = path.split('/').filter(part => part.length > 0);
    const items = pathParts.map((part, index) => ({
      label: part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
      href: '/' + pathParts.slice(0, index + 1).join('/')
    }));
    
    return new Breadcrumbs({ items, ...options });
  }

  static fromArray(items, options = {}) {
    return new Breadcrumbs({ items, ...options });
  }

  // Método para crear breadcrumbs de navegación de archivos
  static filePath(path, options = {}) {
    const pathParts = path.split('/').filter(part => part.length > 0);
    const items = pathParts.map((part, index) => ({
      label: part,
      href: '/' + pathParts.slice(0, index + 1).join('/'),
      icon: index === pathParts.length - 1 ? 'document' : 'folder'
    }));
    
    return new Breadcrumbs({ 
      items, 
      separator: '>',
      ...options 
    });
  }

  // Método para crear breadcrumbs de categorías
  static categories(categories, options = {}) {
    const items = categories.map((category, index) => ({
      label: category.name,
      href: category.href || '#',
      count: category.count
    }));
    
    return new Breadcrumbs({ 
      items, 
      variant: 'minimal',
      ...options 
    });
  }

  // Método para obtener el HTML del breadcrumb
  getHTML() {
    return this.render();
  }

  // Método para clonar el breadcrumb
  clone() {
    return new Breadcrumbs({ ...this.options });
  }

  // Método para verificar si tiene elementos
  hasItems() {
    return this.options.items.length > 0;
  }

  // Método para obtener el número total de elementos
  getItemCount() {
    return this.options.items.length;
  }

  // Método para obtener un elemento específico
  getItem(index) {
    if (index >= 0 && index < this.options.items.length) {
      return this.options.items[index];
    }
    return null;
  }

  // Método para limpiar todos los elementos
  clear() {
    this.options.items = [];
    this.updateDisplay();
  }
}
