import List from './List.js';

export default {
  title: 'Components/Layout/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de lista versátil con múltiples variantes, soporte para selección, iconos, acciones y diferentes estilos de presentación.'
      }
    }
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array de elementos de la lista'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'striped', 'hoverable', 'selectable'],
      description: 'Variante de diseño de la lista'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de la lista'
    },
    showDividers: {
      control: 'boolean',
      description: 'Si mostrar divisores entre elementos'
    },
    showIcons: {
      control: 'boolean',
      description: 'Si mostrar iconos en los elementos'
    },
    showActions: {
      control: 'boolean',
      description: 'Si mostrar acciones en los elementos'
    },
    selectable: {
      control: 'boolean',
      description: 'Si la lista es seleccionable'
    },
    multiSelect: {
      control: 'boolean',
      description: 'Si permite selección múltiple'
    },
    onSelect: {
      control: 'function',
      description: 'Callback cuando se selecciona un elemento'
    },
    onItemClick: {
      control: 'function',
      description: 'Callback cuando se hace clic en un elemento'
    }
  }
};

// Lista básica
export const Basic = {
  args: {
    items: [
      {
        title: 'Elemento 1',
        subtitle: 'Subtítulo del elemento 1',
        description: 'Descripción detallada del primer elemento de la lista.'
      },
      {
        title: 'Elemento 2',
        subtitle: 'Subtítulo del elemento 2',
        description: 'Descripción detallada del segundo elemento de la lista.'
      },
      {
        title: 'Elemento 3',
        subtitle: 'Subtítulo del elemento 3',
        description: 'Descripción detallada del tercer elemento de la lista.'
      }
    ],
    variant: 'default',
    size: 'md',
    showDividers: true,
    showIcons: false,
    showActions: false,
    selectable: false,
    multiSelect: false,
    onSelect: null,
    onItemClick: null
  },
  render: (args) => {
    const list = new List(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    list.mount(container);
    return container;
  }
};

// Lista con iconos
export const WithIcons = {
  args: {
    ...Basic.args,
    showIcons: true,
    items: [
      {
        title: 'Dashboard',
        subtitle: 'Vista general del sistema',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>'
      },
      {
        title: 'Usuarios',
        subtitle: 'Gestión de usuarios',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>'
      },
      {
        title: 'Configuración',
        subtitle: 'Ajustes del sistema',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
      }
    ]
  },
  render: Basic.render
};

// Lista con acciones
export const WithActions = {
  args: {
    ...Basic.args,
    showActions: true,
    items: [
      {
        title: 'Documento 1',
        subtitle: 'Documento de Word',
        description: 'Documento importante del proyecto',
        actions: [
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',
            title: 'Editar',
            onClick: 'console.log("Editar documento 1")'
          },
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',
            title: 'Eliminar',
            onClick: 'console.log("Eliminar documento 1")'
          }
        ]
      },
      {
        title: 'Documento 2',
        subtitle: 'Documento de Excel',
        description: 'Hoja de cálculo con datos del proyecto',
        actions: [
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>',
            title: 'Editar',
            onClick: 'console.log("Editar documento 2")'
          },
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>',
            title: 'Eliminar',
            onClick: 'console.log("Eliminar documento 2")'
          }
        ]
      }
    ]
  },
  render: Basic.render
};

// Lista con metadatos
export const WithMetadata = {
  args: {
    ...Basic.args,
    items: [
      {
        title: 'Tarea 1',
        subtitle: 'Desarrollo de frontend',
        description: 'Implementar la interfaz de usuario para el dashboard',
        meta: [
          { text: 'Alta', variant: 'danger' },
          { text: 'En progreso', variant: 'warning' },
          { text: 'Frontend', variant: 'info' }
        ]
      },
      {
        title: 'Tarea 2',
        subtitle: 'Testing de backend',
        description: 'Realizar pruebas unitarias y de integración',
        meta: [
          { text: 'Media', variant: 'warning' },
          { text: 'Completada', variant: 'success' },
          { text: 'Backend', variant: 'primary' }
        ]
      },
      {
        title: 'Tarea 3',
        subtitle: 'Documentación',
        description: 'Actualizar la documentación del proyecto',
        meta: [
          { text: 'Baja', variant: 'info' },
          { text: 'Pendiente', variant: 'primary' },
          { text: 'Docs', variant: 'success' }
        ]
      }
    ]
  },
  render: Basic.render
};

// Lista seleccionable
export const Selectable = {
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    onSelect: (selectedIndices, selectedItems) => {
      console.log('Elementos seleccionados:', selectedIndices, selectedItems);
    }
  },
  render: Basic.render
};

// Lista con variante bordered
export const Bordered = {
  args: {
    ...Basic.args,
    variant: 'bordered'
  },
  render: Basic.render
};

// Lista con variante striped
export const Striped = {
  args: {
    ...Basic.args,
    variant: 'striped'
  },
  render: Basic.render
};

// Lista con variante hoverable
export const Hoverable = {
  args: {
    ...Basic.args,
    variant: 'hoverable',
    onItemClick: (index, item) => {
      console.log('Elemento clickeado:', index, item);
    }
  },
  render: Basic.render
};

// Lista pequeña
export const Small = {
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
};

// Lista grande
export const Large = {
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
};

// Lista de navegación
export const Navigation = {
  args: {
    ...Basic.args,
    showIcons: true,
    variant: 'default',
    items: [
      {
        title: 'Inicio',
        subtitle: 'Página principal',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
      },
      {
        title: 'Perfil',
        subtitle: 'Información del usuario',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>'
      },
      {
        title: 'Configuración',
        subtitle: 'Ajustes del sistema',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
      }
    ]
  },
  render: Basic.render
};

// Lista de e-commerce
export const Ecommerce = {
  args: {
    ...Basic.args,
    showActions: true,
    variant: 'bordered',
    items: [
      {
        title: 'iPhone 13 Pro',
        subtitle: 'Apple',
        description: 'Smartphone de última generación con cámara profesional',
        rightContent: '<span class="text-lg font-bold text-green-600">$999</span>',
        actions: [
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',
            title: 'Agregar al carrito',
            onClick: 'console.log("Agregar iPhone al carrito")'
          }
        ]
      },
      {
        title: 'MacBook Air M2',
        subtitle: 'Apple',
        description: 'Laptop ultraligera con chip M2 y 18 horas de batería',
        rightContent: '<span class="text-lg font-bold text-green-600">$1,199</span>',
        actions: [
          {
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>',
            title: 'Agregar al carrito',
            onClick: 'console.log("Agregar MacBook al carrito")'
          }
        ]
      }
    ]
  },
  render: Basic.render
};

// Lista interactiva
export const Interactive = {
  args: {
    ...Basic.args,
    selectable: true,
    multiSelect: true,
    showActions: true,
    onSelect: (selectedIndices, selectedItems) => {
      console.log('Elementos seleccionados:', selectedIndices, selectedItems);
    },
    onItemClick: (index, item) => {
      console.log('Elemento clickeado:', index, item);
    }
  },
  render: (args) => {
    const list = new List(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    controls.style.alignItems = 'center';
    
    const variantSelect = document.createElement('select');
    variantSelect.className = 'px-3 py-1 border rounded';
    ['default', 'bordered', 'striped', 'hoverable', 'selectable'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      list.setVariant(e.target.value);
    };
    
    const sizeSelect = document.createElement('select');
    sizeSelect.className = 'px-3 py-1 border rounded';
    ['sm', 'md', 'lg'].forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size.toUpperCase();
      option.selected = size === args.size;
      sizeSelect.appendChild(option);
    });
    sizeSelect.onchange = (e) => {
      args.size = e.target.value;
      list.setSize(e.target.value);
    };
    
    const selectAllButton = document.createElement('button');
    selectAllButton.textContent = 'Seleccionar Todo';
    selectAllButton.className = 'px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    selectAllButton.onclick = () => list.selectAll();
    
    const deselectAllButton = document.createElement('button');
    deselectAllButton.textContent = 'Deseleccionar Todo';
    deselectAllButton.className = 'px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600';
    deselectAllButton.onclick = () => list.deselectAll();
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(selectAllButton);
    controls.appendChild(deselectAllButton);
    
    container.appendChild(controls);
    
    // Lista
    list.mount(container);
    
    return container;
  }
};
