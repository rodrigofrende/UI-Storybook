export default class Navbar {
  constructor(options = {}) {
    this.options = {
      brand: 'Brand',
      brandLogo: '',
      items: [],
      fixed: false,
      transparent: false,
      color: 'white',
      ...options
    };
    
    this.isMenuOpen = false;
    this.id = this.generateId();
  }

  generateId() {
    return 'navbar-' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    const fixedClass = this.options.fixed ? 'fixed top-0 left-0 right-0 z-50' : '';
    const transparentClass = this.options.transparent ? 'bg-transparent' : 'bg-white shadow-sm';
    const colorClass = this.options.color === 'dark' ? 'text-gray-800' : 'text-white';
    
    return `
      <nav class="${fixedClass} ${transparentClass} border-b border-gray-200 transition-all duration-300" id="${this.id}">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Brand -->
            <div class="flex items-center">
              ${this.options.brandLogo ? `
                <img class="h-8 w-auto mr-3" src="${this.options.brandLogo}" alt="${this.options.brand}">
              ` : ''}
              <span class="text-xl font-bold ${colorClass}">${this.options.brand}</span>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                ${this.renderNavItems()}
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors duration-200"
                onclick="this.toggleMobileMenu()"
                aria-label="Toggle menu"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden hidden" id="mobile-menu-${this.id}">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            ${this.renderMobileNavItems()}
          </div>
        </div>
      </nav>
    `;
  }

  renderNavItems() {
    return this.options.items.map(item => {
      const isActive = item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';
      const isButton = item.type === 'button';
      
      if (isButton) {
        return `
          <button
            class="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onclick="${item.onClick || ''}"
          >
            ${item.label}
          </button>
        `;
      }
      
      return `
        <a
          href="${item.href || '#'}"
          class="px-3 py-2 rounded-md text-sm font-medium ${isActive} transition-colors duration-200"
          ${item.onClick ? `onclick="${item.onClick}"` : ''}
        >
          ${item.label}
        </a>
      `;
    }).join('');
  }

  renderMobileNavItems() {
    return this.options.items.map(item => {
      const isActive = item.active ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900';
      const isButton = item.type === 'button';
      
      if (isButton) {
        return `
          <button
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onclick="${item.onClick || ''}"
          >
            ${item.label}
          </button>
        `;
      }
      
      return `
        <a
          href="${item.href || '#'}"
          class="block px-3 py-2 rounded-md text-base font-medium ${isActive} transition-colors duration-200"
          ${item.onClick ? `onclick="${item.onClick}"` : ''}
        >
          ${item.label}
        </a>
      `;
    }).join('');
  }

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMobileMenu();
  }

  updateMobileMenu() {
    const mobileMenu = document.getElementById(`mobile-menu-${this.id}`);
    if (mobileMenu) {
      if (this.isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
      } else {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
      }
    }
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
    this.updateMobileMenu();
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
    this.options.items.splice(index, 1);
    this.updateDisplay();
  }

  setBrand(brand, logo = '') {
    this.options.brand = brand;
    this.options.brandLogo = logo;
    this.updateDisplay();
  }

  setFixed(fixed) {
    this.options.fixed = fixed;
    this.updateDisplay();
  }

  setTransparent(transparent) {
    this.options.transparent = transparent;
    this.updateDisplay();
  }

  setColor(color) {
    this.options.color = color;
    this.updateDisplay();
  }

  updateDisplay() {
    const navbar = document.getElementById(this.id);
    if (navbar) {
      navbar.outerHTML = this.render();
      this.attachEventListeners();
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
    const mobileButton = document.querySelector(`#${this.id} button[onclick*="toggleMobileMenu"]`);
    if (mobileButton) {
      mobileButton.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest(`#${this.id}`)) {
        this.closeMobileMenu();
      }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMobileMenu();
      }
    });
  }

  // Métodos para accesibilidad
  focus() {
    const firstNavItem = document.querySelector(`#${this.id} a, #${this.id} button`);
    if (firstNavItem) firstNavItem.focus();
  }

  // Método para obtener el estado del menú móvil
  isMobileMenuOpen() {
    return this.isMenuOpen;
  }
}
