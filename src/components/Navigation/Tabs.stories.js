import Tabs from './Tabs.js';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de pestañas versátil con múltiples variantes de diseño, navegación por teclado y soporte para iconos y badges.'
      }
    }
  },
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array de pestañas con label, content, icon y badge opcionales'
    },
    activeTab: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      description: 'Índice de la pestaña activa'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline', 'cards'],
      description: 'Variante de diseño de las pestañas'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño de las pestañas'
    },
    vertical: {
      control: 'boolean',
      description: 'Si las pestañas deben mostrarse verticalmente'
    },
    onChange: {
      control: 'function',
      description: 'Callback cuando se cambia de pestaña'
    }
  }
};

// Tabs básico
export const Basic = {
  args: {
    tabs: [
      {
        label: 'General',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Información General</h3>
            <p class="text-gray-600 mb-4">Esta es la pestaña de información general del usuario.</p>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-500">Nombre:</span>
                <span class="font-medium">Juan Pérez</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Email:</span>
                <span class="font-medium">juan@ejemplo.com</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Rol:</span>
                <span class="font-medium">Administrador</span>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Perfil',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Perfil del Usuario</h3>
            <p class="text-gray-600 mb-4">Aquí puedes editar la información de tu perfil.</p>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Biografía</label>
                <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Cuéntanos sobre ti..."></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ciudad, País">
              </div>
            </form>
          </div>
        `
      },
      {
        label: 'Configuración',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Configuración</h3>
            <p class="text-gray-600 mb-4">Personaliza tu experiencia en la aplicación.</p>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Notificaciones por email</span>
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" checked>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Modo oscuro</span>
                <input type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Idioma</span>
                <select class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Español</option>
                  <option>English</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          </div>
        `
      }
    ],
    activeTab: 0,
    variant: 'default',
    size: 'md',
    vertical: false,
    onChange: null
  },
  render: (args) => {
    const tabs = new Tabs(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.backgroundColor = '#f9fafb';
    
    tabs.mount(container);
    return container;
  }
};

// Tabs con iconos
export const WithIcons = {
  args: {
    tabs: [
      {
        label: 'Dashboard',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Dashboard</h3>
            <p class="text-gray-600">Vista general de tu actividad y estadísticas.</p>
          </div>
        `
      },
      {
        label: 'Usuarios',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Gestión de Usuarios</h3>
            <p class="text-gray-600">Administra los usuarios del sistema.</p>
          </div>
        `
      },
      {
        label: 'Configuración',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Configuración del Sistema</h3>
            <p class="text-gray-600">Ajusta los parámetros del sistema.</p>
          </div>
        `
      }
    ],
    activeTab: 0,
    variant: 'default',
    size: 'md',
    vertical: false,
    onChange: null
  },
  render: Basic.render
};

// Tabs con badges
export const WithBadges = {
  args: {
    tabs: [
      {
        label: 'Mensajes',
        badge: '12',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Mensajes (12)</h3>
            <p class="text-gray-600">Tienes 12 mensajes sin leer.</p>
          </div>
        `
      },
      {
        label: 'Notificaciones',
        badge: '3',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Notificaciones (3)</h3>
            <p class="text-gray-600">3 notificaciones pendientes.</p>
          </div>
        `
      },
      {
        label: 'Tareas',
        badge: '5',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Tareas (5)</h3>
            <p class="text-gray-600">5 tareas por completar.</p>
          </div>
        `
      }
    ],
    activeTab: 0,
    variant: 'default',
    size: 'md',
    vertical: false,
    onChange: null
  },
  render: Basic.render
};

// Tabs con variante pills
export const Pills = {
  args: {
    ...Basic.args,
    variant: 'pills'
  },
  render: Basic.render
};

// Tabs con variante underline
export const Underline = {
  args: {
    ...Basic.args,
    variant: 'underline'
  },
  render: Basic.render
};

// Tabs con variante cards
export const Cards = {
  args: {
    ...Basic.args,
    variant: 'cards'
  },
  render: Basic.render
};

// Tabs pequeños
export const Small = {
  args: {
    ...Basic.args,
    size: 'sm'
  },
  render: Basic.render
};

// Tabs grandes
export const Large = {
  args: {
    ...Basic.args,
    size: 'lg'
  },
  render: Basic.render
};

// Tabs verticales
export const Vertical = {
  args: {
    ...Basic.args,
    vertical: true
  },
  render: Basic.render
};

// Tabs de e-commerce
export const Ecommerce = {
  args: {
    tabs: [
      {
        label: 'Descripción',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Descripción del Producto</h3>
            <p class="text-gray-600 mb-4">Este es un producto increíble con características únicas que lo hacen destacar en el mercado.</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Característica destacada 1</li>
              <li>Característica destacada 2</li>
              <li>Característica destacada 3</li>
            </ul>
          </div>
        `
      },
      {
        label: 'Especificaciones',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Especificaciones Técnicas</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="font-medium text-gray-700">Material:</span>
                <span class="text-gray-600 ml-2">Aluminio</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Peso:</span>
                <span class="text-gray-600 ml-2">250g</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Dimensiones:</span>
                <span class="text-gray-600 ml-2">10 x 5 x 2 cm</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Color:</span>
                <span class="text-gray-600 ml-2">Negro</span>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Reseñas',
        badge: '24',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Reseñas de Clientes (24)</h3>
            <div class="space-y-4">
              <div class="border-b border-gray-100 pb-4">
                <div class="flex items-center mb-2">
                  <div class="flex text-yellow-400">
                    ★★★★★
                  </div>
                  <span class="ml-2 text-sm text-gray-600">Juan P.</span>
                </div>
                <p class="text-gray-600">Excelente producto, muy recomendado.</p>
              </div>
              <div class="border-b border-gray-100 pb-4">
                <div class="flex items-center mb-2">
                  <div class="flex text-yellow-400">
                    ★★★★☆
                  </div>
                  <span class="ml-2 text-sm text-gray-600">María L.</span>
                </div>
                <p class="text-gray-600">Muy bueno, cumple con las expectativas.</p>
              </div>
            </div>
          </div>
        `
      }
    ],
    activeTab: 0,
    variant: 'default',
    size: 'md',
    vertical: false,
    onChange: null
  },
  render: Basic.render
};

// Tabs de blog
export const Blog = {
  args: {
    tabs: [
      {
        label: 'Artículo',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Cómo Crear una Aplicación Web Moderna</h3>
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <span>Por Admin</span>
              <span class="mx-2">•</span>
              <span>15 de Diciembre, 2024</span>
              <span class="mx-2">•</span>
              <span>5 min de lectura</span>
            </div>
            <div class="prose max-w-none">
              <p class="text-gray-600 mb-4">En este artículo aprenderás los fundamentos para crear aplicaciones web modernas utilizando las mejores prácticas y tecnologías actuales.</p>
              <p class="text-gray-600 mb-4">Comenzaremos explorando los conceptos básicos de desarrollo web y luego nos adentraremos en técnicas más avanzadas.</p>
            </div>
          </div>
        `
      },
      {
        label: 'Comentarios',
        badge: '8',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Comentarios (8)</h3>
            <div class="space-y-4">
              <div class="border-b border-gray-100 pb-4">
                <div class="flex items-center mb-2">
                  <span class="font-medium text-gray-900">Carlos M.</span>
                  <span class="ml-2 text-sm text-gray-500">hace 2 horas</span>
                </div>
                <p class="text-gray-600">Muy buen artículo, me ayudó mucho a entender el proceso.</p>
              </div>
              <div class="border-b border-gray-100 pb-4">
                <div class="flex items-center mb-2">
                  <span class="font-medium text-gray-900">Ana S.</span>
                  <span class="ml-2 text-sm text-gray-500">hace 5 horas</span>
                </div>
                <p class="text-gray-600">¿Podrías hacer un artículo sobre React hooks?</p>
              </div>
            </div>
          </div>
        `
      },
      {
        label: 'Relacionados',
        content: `
          <div class="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Artículos Relacionados</h3>
            <div class="space-y-3">
              <a href="#" class="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h4 class="font-medium text-gray-900">Introducción a React</h4>
                <p class="text-sm text-gray-600">Aprende los conceptos básicos de React</p>
              </a>
              <a href="#" class="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h4 class="font-medium text-gray-900">CSS Grid Layout</h4>
                <p class="text-sm text-gray-600">Domina el sistema de grid de CSS</p>
              </a>
              <a href="#" class="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h4 class="font-medium text-gray-900">JavaScript ES6+</h4>
                <p class="text-sm text-gray-600">Características modernas de JavaScript</p>
              </a>
            </div>
          </div>
        `
      }
    ],
    activeTab: 0,
    variant: 'default',
    size: 'md',
    vertical: false,
    onChange: null
  },
  render: Basic.render
};

// Tabs interactivo
export const Interactive = {
  args: {
    ...Basic.args,
    onChange: (index, tab) => {
      console.log('Pestaña activa:', index, tab.label);
    }
  },
  render: (args) => {
    const tabs = new Tabs(args);
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
    ['default', 'pills', 'underline', 'cards'].forEach(variant => {
      const option = document.createElement('option');
      option.value = variant;
      option.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
      option.selected = variant === args.variant;
      variantSelect.appendChild(option);
    });
    variantSelect.onchange = (e) => {
      args.variant = e.target.value;
      tabs.setVariant(e.target.value);
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
      tabs.setSize(e.target.value);
    };
    
    const verticalCheckbox = document.createElement('input');
    verticalCheckbox.type = 'checkbox';
    verticalCheckbox.checked = args.vertical;
    verticalCheckbox.onchange = (e) => {
      args.vertical = e.target.checked;
      tabs.setVertical(e.target.checked);
    };
    
    const verticalLabel = document.createElement('label');
    verticalLabel.textContent = 'Vertical';
    verticalLabel.style.marginLeft = '5px';
    
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.className = 'px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    nextButton.onclick = () => tabs.nextTab();
    
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.className = 'px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600';
    prevButton.onclick = () => tabs.previousTab();
    
    controls.appendChild(document.createElement('label')).textContent = 'Variante:';
    controls.appendChild(variantSelect);
    controls.appendChild(document.createElement('label')).textContent = 'Tamaño:';
    controls.appendChild(sizeSelect);
    controls.appendChild(document.createElement('div')).appendChild(verticalCheckbox);
    controls.lastChild.appendChild(verticalLabel);
    controls.appendChild(prevButton);
    controls.appendChild(nextButton);
    
    container.appendChild(controls);
    tabs.mount(container);
    
    return container;
  }
};
