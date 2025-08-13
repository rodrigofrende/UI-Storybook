import Navbar from './Navbar.js';

export default {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de barra de navegación responsiva con soporte para menú móvil, logo de marca y múltiples estilos.'
      }
    }
  },
  argTypes: {
    brand: {
      control: 'text',
      description: 'Nombre de la marca'
    },
    brandLogo: {
      control: 'text',
      description: 'URL del logo de la marca'
    },
    items: {
      control: 'object',
      description: 'Array de elementos de navegación'
    },
    fixed: {
      control: 'boolean',
      description: 'Si la navbar está fija en la parte superior'
    },
    transparent: {
      control: 'boolean',
      description: 'Si la navbar es transparente'
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'dark'],
      description: 'Color del texto de la marca'
    }
  }
};

// Navbar básica
export const Basic = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con logo
export const WithLogo = {
  args: {
    brand: 'Pokémon World',
    brandLogo: 'https://cdn-icons-png.flaticon.com/512/188/188987.png',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar fija
export const Fixed = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: true,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    // Agregar contenido para demostrar el scroll
    const content = document.createElement('div');
    content.style.height = '200vh';
    content.style.background = 'linear-gradient(45deg, #f0f9ff, #e0f2fe, #bae6fd)';
    content.innerHTML = '<div style="padding: 20px; text-align: center;"><h2>Contenido de la página</h2><p>Haz scroll para ver la navbar fija en acción</p></div>';
    
    navbar.mount(container);
    container.appendChild(content);
    
    return container;
  }
};

// Navbar transparente
export const Transparent = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: false,
    transparent: true,
    color: 'white'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    // Agregar fondo para demostrar la transparencia
    const background = document.createElement('div');
    background.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    background.style.minHeight = '100vh';
    background.style.position = 'absolute';
    background.style.top = '0';
    background.style.left = '0';
    background.style.right = '0';
    background.style.zIndex = '-1';
    
    navbar.mount(container);
    container.appendChild(background);
    
    return container;
  }
};

// Navbar con botones
export const WithButtons = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Iniciar Sesión', type: 'button', onClick: 'alert("Iniciando sesión...")' },
      { label: 'Registrarse', type: 'button', onClick: 'alert("Registrando...")' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con muchos elementos
export const ManyItems = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' },
      { label: 'Eventos', href: '#' },
      { label: 'Comunidad', href: '#' },
      { label: 'Soporte', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contacto', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con elementos activos
export const WithActiveItems = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#' },
      { label: 'Pokédex', href: '#', active: true },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con elementos personalizados
export const CustomItems = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: '🏠 Inicio', href: '#', active: true },
      { label: '📚 Pokédex', href: '#' },
      { label: '⚔️ Equipo', href: '#' },
      { label: '🎮 Batalla', href: '#' },
      { label: '🛒 Tienda', href: '#' },
      { label: '🎯 Eventos', href: '#' },
      { label: '👥 Comunidad', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con elementos de acción
export const ActionItems = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' },
      { label: 'Notificaciones', type: 'button', onClick: 'alert("Tienes 3 notificaciones nuevas")' },
      { label: 'Perfil', type: 'button', onClick: 'alert("Abriendo perfil...")' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar con elementos de usuario
export const UserItems = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' },
      { label: 'Mi Cuenta', href: '#' },
      { label: 'Cerrar Sesión', type: 'button', onClick: 'alert("Cerrando sesión...")' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    navbar.mount(container);
    return container;
  }
};

// Navbar interactiva
export const Interactive = {
  args: {
    brand: 'Pokémon World',
    brandLogo: '',
    items: [
      { label: 'Inicio', href: '#', active: true },
      { label: 'Pokédex', href: '#' },
      { label: 'Equipo', href: '#' },
      { label: 'Batalla', href: '#' },
      { label: 'Tienda', href: '#' }
    ],
    fixed: false,
    transparent: false,
    color: 'dark'
  },
  render: (args) => {
    const navbar = new Navbar(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.paddingTop = '80px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const brandInput = document.createElement('input');
    brandInput.type = 'text';
    brandInput.placeholder = 'Nuevo nombre de marca...';
    brandInput.className = 'px-3 py-1 border rounded';
    brandInput.value = args.brand;
    brandInput.onchange = (e) => navbar.setBrand(e.target.value);
    
    const fixedToggle = document.createElement('button');
    fixedToggle.textContent = 'Toggle Fixed';
    fixedToggle.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    fixedToggle.onclick = () => {
      args.fixed = !args.fixed;
      navbar.setFixed(args.fixed);
      fixedToggle.textContent = args.fixed ? 'Disable Fixed' : 'Enable Fixed';
    };
    
    const transparentToggle = document.createElement('button');
    transparentToggle.textContent = 'Toggle Transparent';
    transparentToggle.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    transparentToggle.onclick = () => {
      args.transparent = !args.transparent;
      navbar.setTransparent(args.transparent);
      transparentToggle.textContent = args.transparent ? 'Disable Transparent' : 'Enable Transparent';
    };
    
    const colorToggle = document.createElement('button');
    colorToggle.textContent = 'Toggle Color';
    colorToggle.className = 'px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600';
    colorToggle.onclick = () => {
      args.color = args.color === 'white' ? 'dark' : 'white';
      navbar.setColor(args.color);
      colorToggle.textContent = `Color: ${args.color}`;
    };
    
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'Agregar Item';
    addItemBtn.className = 'px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600';
    addItemBtn.onclick = () => {
      const newItem = { label: `Item ${args.items.length + 1}`, href: '#' };
      navbar.addItem(newItem);
      args.items.push(newItem);
    };
    
    controls.appendChild(brandInput);
    controls.appendChild(fixedToggle);
    controls.appendChild(transparentToggle);
    controls.appendChild(colorToggle);
    controls.appendChild(addItemBtn);
    
    container.appendChild(controls);
    navbar.mount(container);
    
    return container;
  }
};
