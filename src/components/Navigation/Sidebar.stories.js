import Sidebar from './Sidebar.js';

export default {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de barra lateral versátil con navegación, soporte para colapso y múltiples variantes de diseño.'
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array de elementos de navegación'
    },
    collapsed: {
      control: 'boolean',
      description: 'Si el sidebar está colapsado'
    },
    width: {
      control: { type: 'range', min: 200, max: 400, step: 10 },
      description: 'Ancho del sidebar expandido'
    },
    collapsedWidth: {
      control: { type: 'range', min: 40, max: 100, step: 8 },
      description: 'Ancho del sidebar colapsado'
    },
    position: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Posición del sidebar'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'dark', 'light'],
      description: 'Variante de diseño'
    },
    showToggle: {
      control: 'boolean',
      description: 'Si mostrar el botón de colapso'
    },
    showLogo: {
      control: 'boolean',
      description: 'Si mostrar el logo'
    },
    logo: {
      control: 'text',
      description: 'URL del logo'
    },
    logoText: {
      control: 'text',
      description: 'Texto del logo'
    }
  }
};

// Sidebar básico
export const Basic = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>', href: '#dashboard' },
      { id: 'users', label: 'Usuarios', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>', href: '#users' },
      { id: 'settings', label: 'Configuración', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>', href: '#settings' }
    ],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: (args) => {
    const sidebar = new Sidebar(args);
    const container = document.createElement('div');
    container.style.height = '100vh';
    container.style.position = 'relative';
    
    sidebar.mount(container);
    return container;
  }
};

// Sidebar colapsado
export const Collapsed = {
  args: {
    ...Basic.args,
    collapsed: true
  },
  render: Basic.render
};

// Sidebar oscuro
export const Dark = {
  args: {
    ...Basic.args,
    variant: 'dark'
  },
  render: Basic.render
};

// Sidebar claro
export const Light = {
  args: {
    ...Basic.args,
    variant: 'light'
  },
  render: Basic.render
};

// Sidebar con submenús
export const WithSubmenus = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>', href: '#dashboard' },
      { 
        id: 'users', 
        label: 'Usuarios', 
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>', 
        expanded: true,
        children: [
          { id: 'users-list', label: 'Lista de Usuarios', href: '#users-list' },
          { id: 'users-create', label: 'Crear Usuario', href: '#users-create' },
          { id: 'users-roles', label: 'Roles', href: '#users-roles' }
        ]
      },
      { 
        id: 'products', 
        label: 'Productos', 
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>', 
        expanded: false,
        children: [
          { id: 'products-list', label: 'Lista de Productos', href: '#products-list' },
          { id: 'products-categories', label: 'Categorías', href: '#products-categories' },
          { id: 'products-inventory', label: 'Inventario', href: '#products-inventory' }
        ]
      },
      { id: 'settings', label: 'Configuración', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>', href: '#settings' }
    ],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: Basic.render
};

// Sidebar con badges
export const WithBadges = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>', href: '#dashboard' },
      { id: 'notifications', label: 'Notificaciones', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12c-1 0-2-.4-2-1V5c0-1.1.9-2 2-2s2 .9 2 2v6c0 .6-1 1-2 1z"></path>', href: '#notifications', badge: '12' },
      { id: 'messages', label: 'Mensajes', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>', href: '#messages', badge: '3' },
      { id: 'settings', label: 'Configuración', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>', href: '#settings' }
    ],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'default',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Mi App'
  },
  render: Basic.render
};

// Sidebar derecho
export const RightPosition = {
  args: {
    ...Basic.args,
    position: 'right'
  },
  render: Basic.render
};

// Sidebar sin logo
export const NoLogo = {
  args: {
    ...Basic.args,
    showLogo: false
  },
  render: Basic.render
};

// Sidebar sin toggle
export const NoToggle = {
  args: {
    ...Basic.args,
    showToggle: false
  },
  render: Basic.render
};

// Sidebar minimalista
export const Minimal = {
  args: {
    items: [
      { id: 'home', label: 'Inicio', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>', href: '#home' },
      { id: 'search', label: 'Búsqueda', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>', href: '#search' },
      { id: 'user', label: 'Perfil', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>', href: '#user' }
    ],
    collapsed: true,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'light',
    showToggle: false,
    showLogo: false,
    logo: '',
    logoText: ''
  },
  render: Basic.render
};

// Sidebar administrativo
export const Admin = {
  args: {
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>', href: '#dashboard' },
      { id: 'users', label: 'Usuarios', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>', href: '#users' },
      { id: 'analytics', label: 'Analytics', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>', href: '#analytics' },
      { id: 'settings', label: 'Configuración', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>', href: '#settings' }
    ],
    collapsed: false,
    width: 280,
    collapsedWidth: 64,
    position: 'left',
    variant: 'dark',
    showToggle: true,
    showLogo: true,
    logo: '',
    logoText: 'Admin Panel'
  },
  render: Basic.render
};

// Sidebar interactivo
export const Interactive = {
  args: {
    ...Basic.args
  },
  render: (args) => {
    const sidebar = new Sidebar(args);
    const container = document.createElement('div');
    container.style.height = '100vh';
    container.style.position = 'relative';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.position = 'fixed';
    controls.style.top = '20px';
    controls.style.right = '20px';
    controls.style.zIndex = '50';
    controls.style.backgroundColor = 'white';
    controls.style.padding = '20px';
    controls.style.borderRadius = '8px';
    controls.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    controls.style.display = 'flex';
    controls.style.flexDirection = 'column';
    controls.style.gap = '10px';
    controls.style.minWidth = '200px';
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'dark', 'light'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      sidebar.setVariant(e.target.value);
    };
    
    const positionSelect = document.createElement('select');
    positionSelect.className = 'px-3 py-1 border rounded';
    ['left', 'right'].forEach(position => {
      const option = document.createElement('option');
      option.value = position;
      option.textContent = position.charAt(0).toUpperCase() + position.slice(1);
      option.selected = position === args.position;
      positionSelect.appendChild(option);
    });
    positionSelect.onchange = (e) => {
      args.position = e.target.value;
      sidebar.setPosition(e.target.value);
    };
    
    const widthInput = document.createElement('input');
    widthInput.type = 'range';
    widthInput.min = '200';
    widthInput.max = '400';
    widthInput.value = args.width;
    widthInput.className = 'w-full';
    widthInput.onchange = (e) => {
      args.width = parseInt(e.target.value);
      sidebar.setWidth(parseInt(e.target.value));
    };
    
    const collapsedCheckbox = document.createElement('input');
    collapsedCheckbox.type = 'checkbox';
    collapsedCheckbox.checked = args.collapsed;
    collapsedCheckbox.onchange = (e) => {
      args.collapsed = e.target.checked;
      if (e.target.checked) {
        sidebar.collapse();
      } else {
        sidebar.expand();
      }
    };
    
    const collapsedLabel = document.createElement('label');
    collapsedLabel.textContent = 'Colapsado';
    collapsedLabel.style.marginLeft = '5px';
    
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Sidebar';
    toggleButton.className = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600';
    toggleButton.onclick = () => sidebar.toggle();
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Posición:';
    controls.appendChild(positionSelect);
    controls.appendChild(document.createElement('label')).textContent = `Ancho: ${args.width}px`;
    controls.appendChild(widthInput);
    controls.appendChild(document.createElement('div')).appendChild(collapsedCheckbox);
    controls.lastChild.appendChild(collapsedLabel);
    controls.appendChild(toggleButton);
    
    container.appendChild(controls);
    sidebar.mount(container);
    
    return container;
  }
};
