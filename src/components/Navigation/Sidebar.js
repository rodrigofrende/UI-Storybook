export default class Sidebar {
  constructor(options = {}) {
    this.options = {
      items: [],
      collapsed: false,
      width: 280,
      collapsedWidth: 64,
      position: 'left', // left, right
      variant: 'default', // default, dark, light
      showToggle: true,
      showLogo: true,
      logo: '',
      logoText: 'Logo',
      onToggle: null,
      ...options
    };
    
    this.isCollapsed = this.options.collapsed;
    this.id = this.generateId();
  }

  generateId() {
    return 'sidebar-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const variantClasses = this.getVariantClasses();
    const positionClasses = this.getPositionClasses();
    const width = this.isCollapsed ? this.options.collapsedWidth : this.options.width;
    
    return `
      <aside 
        class="fixed top-0 ${positionClasses} h-full ${variantClasses.background} ${variantClasses.border} transition-all duration-300 ease-in-out z-40"
        id="${this.id}"
        style="width: ${width}px;"
        aria-label="Sidebar"
      >
        <div class="flex flex-col h-full">
          <!-- Header -->
          ${this.renderHeader()}
          
          <!-- Navigation -->
          <nav class="flex-1 overflow-y-auto">
            ${this.renderNavigation()}
          </nav>
          
          <!-- Footer -->
          ${this.renderFooter()}
        </div>
      </aside>
      
      <!-- Overlay for mobile -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden ${this.isCollapsed ? 'hidden' : ''}"
        id="sidebar-overlay-${this.id}"
        onclick="this.toggle()"
      ></div>
    `;
  }

  renderHeader() {
    const variantClasses = this.getVariantClasses();
    
    return `
      <div class="flex items-center justify-between p-4 ${variantClasses.headerBorder}">
        ${this.options.showLogo ? `
          <div class="flex items-center space-x-3">
            ${this.options.logo ? `
              <img src="${this.options.logo}" alt="${this.options.logoText}" class="w-8 h-8">
            ` : ''}
            ${!this.isCollapsed ? `
              <span class="text-xl font-bold ${variantClasses.logoText}">${this.options.logoText}</span>
            ` : ''}
          </div>
        ` : ''}
        
        ${this.options.showToggle ? `
          <button
            type="button"
            class="p-2 rounded-md ${variantClasses.toggleButton} hover:bg-opacity-80 transition-colors duration-200"
            onclick="this.toggle()"
            aria-label="Toggle sidebar"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              ${this.isCollapsed ? `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
              ` : `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
              `}
            </svg>
          </button>
        ` : ''}
      </div>
    `;
  }

  renderNavigation() {
    const variantClasses = this.getVariantClasses();
    
    return `
      <div class="px-4 py-2">
        ${this.options.items.map(item => this.renderNavItem(item, variantClasses)).join('')}
      </div>
    `;
  }

  renderNavItem(item, variantClasses) {
    const isActive = item.active || false;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = item.expanded || false;
    
    return `
      <div class="mb-1">
        ${hasChildren ? `
          <button
            type="button"
            class="w-full flex items-center justify-between px-3 py-2 rounded-md ${variantClasses.navItem} ${isActive ? variantClasses.navItemActive : ''} hover:bg-opacity-80 transition-colors duration-200"
            onclick="this.toggleSubmenu('${item.id}')"
            aria-expanded="${isExpanded}"
          >
            <div class="flex items-center space-x-3">
              ${item.icon ? `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  ${item.icon}
                </svg>
              ` : ''}
              ${!this.isCollapsed ? `
                <span>${item.label}</span>
              ` : ''}
            </div>
            ${!this.isCollapsed ? `
              <svg class="w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            ` : ''}
          </button>
          ${hasChildren ? `
            <div class="ml-4 mt-1 ${isExpanded ? 'block' : 'hidden'}" id="submenu-${item.id}">
              ${item.children.map(child => this.renderNavItem(child, variantClasses)).join('')}
            </div>
          ` : ''}
        ` : `
          <a
            href="${item.href || '#'}"
            class="flex items-center space-x-3 px-3 py-2 rounded-md ${variantClasses.navItem} ${isActive ? variantClasses.navItemActive : ''} hover:bg-opacity-80 transition-colors duration-200"
            ${item.onClick ? `onclick="${item.onClick}"` : ''}
          >
            ${item.icon ? `
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${item.icon}
              </svg>
            ` : ''}
            ${!this.isCollapsed ? `
              <span>${item.label}</span>
            ` : ''}
            ${item.badge ? `
              <span class="ml-auto inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variantClasses.badge}">
                ${item.badge}
              </span>
            ` : ''}
          </a>
        `}
      </div>
    `;
  }

  renderFooter() {
    const variantClasses = this.getVariantClasses();
    
    return `
      <div class="p-4 ${variantClasses.headerBorder}">
        ${!this.isCollapsed ? `
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-full bg-gray-300"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium ${variantClasses.text} truncate">Usuario</p>
              <p class="text-xs ${variantClasses.textSecondary} truncate">usuario@ejemplo.com</p>
            </div>
          </div>
        ` : `
          <div class="w-8 h-8 rounded-full bg-gray-300 mx-auto"></div>
        `}
      </div>
    `;
  }

  getVariantClasses() {
    const variants = {
      default: {
        background: 'bg-white',
        border: 'border-r border-gray-200',
        headerBorder: 'border-b border-gray-200',
        logoText: 'text-gray-900',
        text: 'text-gray-900',
        textSecondary: 'text-gray-500',
        toggleButton: 'text-gray-500 hover:bg-gray-100',
        navItem: 'text-gray-700 hover:bg-gray-100',
        navItemActive: 'bg-blue-100 text-blue-700',
        badge: 'bg-blue-100 text-blue-800'
      },
      dark: {
        background: 'bg-gray-900',
        border: 'border-r border-gray-700',
        headerBorder: 'border-b border-gray-700',
        logoText: 'text-white',
        text: 'text-white',
        textSecondary: 'text-gray-400',
        toggleButton: 'text-gray-400 hover:bg-gray-800',
        navItem: 'text-gray-300 hover:bg-gray-800',
        navItemActive: 'bg-blue-600 text-white',
        badge: 'bg-blue-600 text-white'
      },
      light: {
        background: 'bg-gray-50',
        border: 'border-r border-gray-200',
        headerBorder: 'border-b border-gray-200',
        logoText: 'text-gray-900',
        text: 'text-gray-900',
        textSecondary: 'text-gray-600',
        toggleButton: 'text-gray-600 hover:bg-gray-200',
        navItem: 'text-gray-700 hover:bg-gray-200',
        navItemActive: 'bg-blue-50 text-blue-700',
        badge: 'bg-blue-100 text-blue-800'
      }
    };
    
    return variants[this.options.variant] || variants.default;
  }

  getPositionClasses() {
    const positions = {
      left: 'left-0',
      right: 'right-0'
    };
    return positions[this.options.position] || positions.left;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.updateDisplay();
    
    // Trigger onToggle callback
    if (typeof this.options.onToggle === 'function') {
      this.options.onToggle(this.isCollapsed);
    }
    
    // Trigger custom event
    this.triggerEvent('toggle', { collapsed: this.isCollapsed });
  }

  collapse() {
    if (this.isCollapsed) return;
    this.toggle();
  }

  expand() {
    if (!this.isCollapsed) return;
    this.toggle();
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

  setCollapsed(collapsed) {
    this.isCollapsed = collapsed;
    this.updateDisplay();
  }

  setWidth(width) {
    this.options.width = width;
    this.updateDisplay();
  }

  setCollapsedWidth(width) {
    this.options.collapsedWidth = width;
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

  setShowToggle(showToggle) {
    this.options.showToggle = showToggle;
    this.updateDisplay();
  }

  setShowLogo(showLogo) {
    this.options.showLogo = showLogo;
    this.updateDisplay();
  }

  setLogo(logo, text = '') {
    this.options.logo = logo;
    if (text) this.options.logoText = text;
    this.updateDisplay();
  }

  toggleSubmenu(itemId) {
    const submenu = document.getElementById(`submenu-${itemId}`);
    if (submenu) {
      const isHidden = submenu.classList.contains('hidden');
      submenu.classList.toggle('hidden', !isHidden);
      
      // Update expanded state
      const item = this.options.items.find(i => i.id === itemId);
      if (item) {
        item.expanded = !isHidden;
      }
    }
  }

  updateDisplay() {
    const sidebar = document.getElementById(this.id);
    if (sidebar) {
      sidebar.outerHTML = this.render();
    }
  }

  triggerEvent(eventName, data = {}) {
    const event = new CustomEvent(`sidebar:${eventName}`, {
      detail: { sidebar: this, ...data },
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
    // Add event listeners for submenu toggles
    const toggleButtons = document.querySelectorAll(`#${this.id} button[onclick*="toggleSubmenu"]`);
    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.closest('button').getAttribute('onclick').match(/'([^']+)'/)[1];
        this.toggleSubmenu(itemId);
      });
    });
  }

  // Métodos estáticos para crear sidebars comunes
  static navigation(items, options = {}) {
    return new Sidebar({ items, variant: 'default', ...options });
  }

  static admin(items, options = {}) {
    return new Sidebar({ 
      items, 
      variant: 'dark', 
      showLogo: true,
      showToggle: true,
      ...options 
    });
  }

  static minimal(items, options = {}) {
    return new Sidebar({ 
      items, 
      variant: 'light', 
      showLogo: false,
      showToggle: false,
      collapsed: true,
      ...options 
    });
  }

  // Método para obtener el HTML del sidebar
  getHTML() {
    return this.render();
  }

  // Método para clonar el sidebar
  clone() {
    return new Sidebar({ ...this.options });
  }

  // Método para verificar si está colapsado
  isSidebarCollapsed() {
    return this.isCollapsed;
  }

  // Método para obtener el ancho actual
  getCurrentWidth() {
    return this.isCollapsed ? this.options.collapsedWidth : this.options.width;
  }

  // Método para obtener información del sidebar
  getSidebarInfo() {
    return {
      collapsed: this.isCollapsed,
      width: this.getCurrentWidth(),
      position: this.options.position,
      variant: this.options.variant,
      totalItems: this.options.items.length
    };
  }
}
