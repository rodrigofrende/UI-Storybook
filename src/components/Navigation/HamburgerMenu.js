export default class HamburgerMenu {
  constructor(options = {}) {
    this.options = {
      items: [],
      isOpen: false,
      onToggle: null,
      onItemClick: null,
      className: '',
      ...options
    };
    
    this.element = this.createHamburgerMenu();
    this.bindEvents();
  }

  createHamburgerMenu() {
    const container = document.createElement('div');
    container.className = 'relative';

    // Create hamburger button
    const button = document.createElement('button');
    button.className = 'flex flex-col justify-center items-center w-10 h-10 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500';
    button.setAttribute('aria-label', 'Toggle menu');
    button.setAttribute('aria-expanded', 'false');

    // Create hamburger lines
    const line1 = document.createElement('span');
    const line2 = document.createElement('span');
    const line3 = document.createElement('span');

    const lineClasses = 'w-6 h-0.5 bg-gray-600 transition-all duration-300 transform';
    line1.className = lineClasses;
    line2.className = `${lineClasses} mt-1.5`;
    line3.className = `${lineClasses} mt-1.5`;

    button.appendChild(line1);
    button.appendChild(line2);
    button.appendChild(line3);

    // Create menu overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-0 pointer-events-none';
    overlay.style.display = 'none';

    // Create menu panel
    const menuPanel = document.createElement('div');
    menuPanel.className = 'fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out';

    // Create menu header
    const menuHeader = document.createElement('div');
    menuHeader.className = 'flex items-center justify-between p-6 border-b border-gray-200';

    const menuTitle = document.createElement('h3');
    menuTitle.className = 'text-lg font-semibold text-gray-800';
    menuTitle.textContent = 'Menu';

    const closeButton = document.createElement('button');
    closeButton.className = 'p-2 rounded-lg hover:bg-gray-100 transition-colors';
    closeButton.innerHTML = `
      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `;

    menuHeader.appendChild(menuTitle);
    menuHeader.appendChild(closeButton);

    // Create menu content
    const menuContent = document.createElement('div');
    menuContent.className = 'p-6';

    // Create menu items
    const menuItems = document.createElement('nav');
    menuItems.className = 'space-y-2';

    this.options.items.forEach(item => {
      const menuItem = document.createElement('a');
      menuItem.className = 'flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer';
      menuItem.href = item.href || '#';
      
      if (item.icon) {
        const icon = document.createElement('span');
        icon.className = 'mr-3 text-gray-400';
        icon.innerHTML = item.icon;
        menuItem.appendChild(icon);
      }

      const text = document.createElement('span');
      text.textContent = item.text;
      menuItem.appendChild(text);

      if (item.badge) {
        const badge = document.createElement('span');
        badge.className = 'ml-auto px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full';
        badge.textContent = item.badge;
        menuItem.appendChild(badge);
      }

      menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.options.onItemClick) {
          this.options.onItemClick(item);
        }
        this.close();
      });

      menuItems.appendChild(menuItem);
    });

    menuContent.appendChild(menuItems);
    menuPanel.appendChild(menuHeader);
    menuPanel.appendChild(menuContent);

    // Store references
    this.button = button;
    this.overlay = overlay;
    this.menuPanel = menuPanel;
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.closeButton = closeButton;

    container.appendChild(button);
    container.appendChild(overlay);
    container.appendChild(menuPanel);

    return container;
  }

  bindEvents() {
    // Toggle menu
    this.button.addEventListener('click', () => {
      this.toggle();
    });

    // Close button
    this.closeButton.addEventListener('click', () => {
      this.close();
    });

    // Overlay click
    this.overlay.addEventListener('click', () => {
      this.close();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.options.isOpen) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.options.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.options.isOpen = true;
    this.button.setAttribute('aria-expanded', 'true');
    
    // Show overlay
    this.overlay.style.display = 'block';
    setTimeout(() => {
      this.overlay.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);

    // Slide in menu
    this.menuPanel.classList.remove('translate-x-full');

    // Animate hamburger to X
    this.line1.classList.add('rotate-45', 'translate-y-2');
    this.line2.classList.add('opacity-0');
    this.line3.classList.add('-rotate-45', '-translate-y-2');

    if (this.options.onToggle) {
      this.options.onToggle(true);
    }
  }

  close() {
    this.options.isOpen = false;
    this.button.setAttribute('aria-expanded', 'false');
    
    // Hide overlay
    this.overlay.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      this.overlay.style.display = 'none';
    }, 300);

    // Slide out menu
    this.menuPanel.classList.add('translate-x-full');

    // Animate X back to hamburger
    this.line1.classList.remove('rotate-45', 'translate-y-2');
    this.line2.classList.remove('opacity-0');
    this.line3.classList.remove('-rotate-45', '-translate-y-2');

    if (this.options.onToggle) {
      this.options.onToggle(false);
    }
  }

  // Public methods
  setItems(items) {
    this.options.items = items;
    this.updateMenuItems();
  }

  updateMenuItems() {
    const menuItems = this.menuPanel.querySelector('nav');
    menuItems.innerHTML = '';

    this.options.items.forEach(item => {
      const menuItem = document.createElement('a');
      menuItem.className = 'flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer';
      menuItem.href = item.href || '#';
      
      if (item.icon) {
        const icon = document.createElement('span');
        icon.className = 'mr-3 text-gray-400';
        icon.innerHTML = item.icon;
        menuItem.appendChild(icon);
      }

      const text = document.createElement('span');
      text.textContent = item.text;
      menuItem.appendChild(text);

      if (item.badge) {
        const badge = document.createElement('span');
        badge.className = 'ml-auto px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full';
        badge.textContent = item.badge;
        menuItem.appendChild(badge);
      }

      menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.options.onItemClick) {
          this.options.onItemClick(item);
        }
        this.close();
      });

      menuItems.appendChild(menuItem);
    });
  }

  isMenuOpen() {
    return this.options.isOpen;
  }

  // Render method
  render(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (container) {
      container.appendChild(this.element);
    }
    return this.element;
  }

  // Destroy method
  destroy() {
    this.element.remove();
  }
}
