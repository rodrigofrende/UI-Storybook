import Icon from './Icon.js';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de iconos versátil con una biblioteca integrada de iconos SVG y múltiples tamaños y colores.'
      }
    }
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'menu', 'search', 'close', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight',
        'arrowRight', 'edit', 'delete', 'add', 'save', 'check', 'warning', 'error', 'info',
        'star', 'heart', 'like', 'mail', 'phone', 'chat', 'home', 'settings', 'user',
        'bell', 'download', 'upload', 'share', 'play', 'pause', 'volume', 'custom'
      ],
      description: 'Nombre del icono a mostrar'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del icono'
    },
    color: {
      control: 'color',
      description: 'Color del icono'
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales'
    }
  }
};

// Icono básico
export const Basic = {
  args: {
    name: 'star',
    size: 'md',
    color: 'currentColor',
    className: ''
  },
  render: (args) => {
    const icon = new Icon(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    
    icon.mount(container);
    
    const label = document.createElement('span');
    label.textContent = `Icono: ${args.name}`;
    label.style.fontSize = '14px';
    label.style.color = '#666';
    
    container.appendChild(label);
    return container;
  }
};

// Iconos de navegación
export const NavigationIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Navegación';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['menu', 'search', 'close', 'chevronDown', 'chevronUp', 'chevronLeft', 'chevronRight', 'arrowRight'];
    const iconNames = ['Menú', 'Búsqueda', 'Cerrar', 'Flecha Abajo', 'Flecha Arriba', 'Flecha Izquierda', 'Flecha Derecha', 'Flecha Derecha'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: '#3b82f6' });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos de acciones
export const ActionIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Acciones';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['edit', 'delete', 'add', 'save'];
    const iconNames = ['Editar', 'Eliminar', 'Agregar', 'Guardar'];
    const colors = ['#10b981', '#ef4444', '#3b82f6', '#8b5cf6'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: colors[index] });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos de estado
export const StatusIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Estado';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['check', 'warning', 'error', 'info'];
    const iconNames = ['Éxito', 'Advertencia', 'Error', 'Información'];
    const colors = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: colors[index] });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos sociales
export const SocialIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos Sociales';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['star', 'heart', 'like'];
    const iconNames = ['Favorito', 'Me Gusta', 'Like'];
    const colors = ['#fbbf24', '#ec4899', '#3b82f6'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: colors[index] });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos de comunicación
export const CommunicationIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos de Comunicación';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['mail', 'phone', 'chat'];
    const iconNames = ['Correo', 'Teléfono', 'Chat'];
    const colors = ['#3b82f6', '#10b981', '#8b5cf6'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: colors[index] });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos de UI
export const UIIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos de UI';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const icons = ['home', 'settings', 'user', 'bell'];
    const iconNames = ['Inicio', 'Configuración', 'Usuario', 'Notificaciones'];
    const colors = ['#3b82f6', '#6b7280', '#8b5cf6', '#f59e0b'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    icons.forEach((iconName, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: iconName, size: 'lg', color: colors[index] });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = iconNames[index];
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Galería de tamaños
export const SizeGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Galería de Tamaños';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const sizeNames = ['Extra Pequeño', 'Pequeño', 'Mediano', 'Grande', 'Extra Grande'];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    grid.style.gap = '20px';
    
    sizes.forEach((size, index) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '20px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: 'star', size: size, color: '#fbbf24' });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = sizeNames[index];
      label.style.marginTop = '15px';
      label.style.fontSize = '14px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      const sizeLabel = document.createElement('div');
      sizeLabel.textContent = `(${size})`;
      sizeLabel.style.fontSize = '12px';
      sizeLabel.style.color = '#9ca3af';
      sizeLabel.style.marginTop = '5px';
      
      iconContainer.appendChild(label);
      iconContainer.appendChild(sizeLabel);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Galería de colores
export const ColorGallery = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Galería de Colores';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const colors = [
      { name: 'Azul', value: '#3b82f6' },
      { name: 'Verde', value: '#10b981' },
      { name: 'Rojo', value: '#ef4444' },
      { name: 'Amarillo', value: '#f59e0b' },
      { name: 'Púrpura', value: '#8b5cf6' },
      { name: 'Rosa', value: '#ec4899' },
      { name: 'Naranja', value: '#f97316' },
      { name: 'Gris', value: '#6b7280' }
    ];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
    grid.style.gap = '20px';
    
    colors.forEach((color) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '15px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ name: 'heart', size: 'lg', color: color.value });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = color.name;
      label.style.marginTop = '10px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      
      const colorLabel = document.createElement('div');
      colorLabel.textContent = color.value;
      colorLabel.style.fontSize = '10px';
      colorLabel.style.color = '#9ca3af';
      colorLabel.style.marginTop = '5px';
      colorLabel.style.fontFamily = 'monospace';
      
      iconContainer.appendChild(label);
      iconContainer.appendChild(colorLabel);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Iconos con clases personalizadas
export const CustomClasses = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Iconos con Clases Personalizadas';
    title.style.marginBottom = '20px';
    title.style.color = '#333';
    container.appendChild(title);
    
    const examples = [
      { name: 'star', className: 'animate-pulse', description: 'Con animación pulse' },
      { name: 'heart', className: 'rotate-12', description: 'Rotado 12 grados' },
      { name: 'settings', className: 'animate-spin', description: 'Con animación spin' },
      { name: 'bell', className: 'scale-110', description: 'Escalado 110%' }
    ];
    
    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
    grid.style.gap = '20px';
    
    examples.forEach((example) => {
      const iconContainer = document.createElement('div');
      iconContainer.style.textAlign = 'center';
      iconContainer.style.padding = '20px';
      iconContainer.style.border = '1px solid #e5e7eb';
      iconContainer.style.borderRadius = '8px';
      iconContainer.style.backgroundColor = '#f9fafb';
      
      const icon = new Icon({ 
        name: example.name, 
        size: 'lg', 
        color: '#3b82f6',
        className: example.className
      });
      icon.mount(iconContainer);
      
      const label = document.createElement('div');
      label.textContent = example.description;
      label.style.marginTop = '15px';
      label.style.fontSize = '12px';
      label.style.color = '#6b7280';
      label.style.fontWeight = '500';
      label.style.textAlign = 'center';
      
      iconContainer.appendChild(label);
      grid.appendChild(iconContainer);
    });
    
    container.appendChild(grid);
    return container;
  }
};

// Icono interactivo
export const Interactive = {
  args: {
    name: 'star',
    size: 'md',
    color: '#fbbf24',
    className: ''
  },
  render: (args) => {
    const icon = new Icon(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const iconSelect = document.createElement('select');
    iconSelect.className = 'px-3 py-1 border rounded';
    const availableIcons = icon.getAvailableIcons();
    availableIcons.forEach(iconName => {
      const option = document.createElement('option');
      option.value = iconName;
      option.textContent = iconName.charAt(0).toUpperCase() + iconName.slice(1);
      option.selected = iconName === args.name;
      iconSelect.appendChild(option);
    });
    iconSelect.onchange = (e) => {
      args.name = e.target.value;
      icon.setIcon(e.target.value);
      icon.mount(iconContainer);
    };
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => {
      args.size = e.target.value;
      icon.setSize(e.target.value);
      icon.mount(iconContainer);
    };
    
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = args.color;
    colorInput.className = 'w-12 h-8 border rounded';
    colorInput.onchange = (e) => {
      args.color = e.target.value;
      icon.setColor(e.target.value);
      icon.mount(iconContainer);
    };
    
    const classNameInput = document.createElement('input');
    classNameInput.type = 'text';
    classNameInput.placeholder = 'Clases CSS...';
    classNameInput.className = 'px-3 py-1 border rounded';
    classNameInput.value = args.className;
    classNameInput.onchange = (e) => {
      args.className = e.target.value;
      icon.setClassName(e.target.value);
      icon.mount(iconContainer);
    };
    
    controls.appendChild(iconSelect);
    controls.appendChild(sizeSelect);
    controls.appendChild(colorInput);
    controls.appendChild(classNameInput);
    
    const iconContainer = document.createElement('div');
    iconContainer.style.textAlign = 'center';
    iconContainer.style.padding = '40px';
    iconContainer.style.border = '2px dashed #d1d5db';
    iconContainer.style.borderRadius = '12px';
    iconContainer.style.backgroundColor = '#f9fafb';
    iconContainer.style.minHeight = '120px';
    iconContainer.style.display = 'flex';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.justifyContent = 'center';
    
    icon.mount(iconContainer);
    
    container.appendChild(controls);
    container.appendChild(iconContainer);
    
    return container;
  }
};
