import Badge from './Badge.js';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'El componente Badge muestra etiquetas pequeñas para categorizar, etiquetar o mostrar información de estado. Soporta diferentes variantes, tamaños, iconos y opciones de eliminación.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto del badge'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline', 'dot'],
      description: 'Estilo visual del badge'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del badge'
    },
    rounded: {
      control: 'boolean',
      description: 'Si el badge debe ser completamente redondeado'
    },
    removable: {
      control: 'boolean',
      description: 'Si el badge se puede eliminar'
    },
    icon: {
      control: 'text',
      description: 'SVG path para el icono'
    }
  }
};

// Story básico
export const Default = {
  args: {
    text: 'Badge',
    variant: 'default',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante primaria
export const Primary = {
  args: {
    text: 'Primary',
    variant: 'primary',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante de éxito
export const Success = {
  args: {
    text: 'Success',
    variant: 'success',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante de advertencia
export const Warning = {
  args: {
    text: 'Warning',
    variant: 'warning',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante de peligro
export const Danger = {
  args: {
    text: 'Danger',
    variant: 'danger',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante de información
export const Info = {
  args: {
    text: 'Info',
    variant: 'info',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante outline
export const Outline = {
  args: {
    text: 'Outline',
    variant: 'outline',
    size: 'md',
    rounded: false
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con variante dot
export const Dot = {
  args: {
    text: 'Dot',
    variant: 'dot',
    size: 'md',
    rounded: true
  },
  render: (args) => {
    const badge = new Badge(args);
    return badge.render();
  }
};

// Story con todos los tamaños
export const AllSizes = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'];
    const badges = sizes.map(size => {
      const badge = new Badge({
        text: `Size ${size}`,
        variant: 'primary',
        size: size,
        rounded: true
      });
      return `
        <div class="mb-2">
          ${badge.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story con todos los variantes
export const AllVariants = {
  render: () => {
    const variants = [
      { variant: 'default', label: 'Default' },
      { variant: 'primary', label: 'Primary' },
      { variant: 'success', label: 'Success' },
      { variant: 'warning', label: 'Warning' },
      { variant: 'danger', label: 'Danger' },
      { variant: 'info', label: 'Info' },
      { variant: 'outline', label: 'Outline' },
      { variant: 'dot', label: 'Dot' }
    ];
    
    const badges = variants.map(({ variant, label }) => {
      const badge = new Badge({
        text: label,
        variant: variant,
        size: 'md',
        rounded: true
      });
      return `
        <div class="mb-2">
          ${badge.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story con iconos
export const WithIcons = {
  render: () => {
    const iconBadges = [
      { text: 'Check', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>', variant: 'success' },
      { text: 'Info', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>', variant: 'info' },
      { text: 'Warning', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"></path>', variant: 'warning' },
      { text: 'Error', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>', variant: 'danger' }
    ];
    
    const badges = iconBadges.map(({ text, icon, variant }) => {
      const badge = new Badge({
        text: text,
        icon: icon,
        variant: variant,
        size: 'md',
        rounded: true
      });
      return `
        <div class="mb-2">
          ${badge.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges con iconos</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story con badges removibles
export const Removable = {
  render: () => {
    const removableBadges = [
      { text: 'Removable', variant: 'primary' },
      { text: 'Eliminable', variant: 'success' },
      { text: 'Borrable', variant: 'warning' }
    ];
    
    const badges = removableBadges.map(({ text, variant }) => {
      const badge = new Badge({
        text: text,
        variant: variant,
        size: 'md',
        rounded: true,
        removable: true
      });
      return `
        <div class="mb-2">
          ${badge.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges removibles</h3>
        <p class="text-sm text-gray-600 mb-4">Haz clic en la X para eliminar el badge</p>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story usando métodos estáticos
export const StaticMethods = {
  render: () => {
    const defaultBadge = Badge.default('Default');
    const primaryBadge = Badge.primary('Primary');
    const successBadge = Badge.success('Success');
    const warningBadge = Badge.warning('Warning');
    const dangerBadge = Badge.danger('Danger');
    const infoBadge = Badge.info('Info');
    const outlineBadge = Badge.outline('Outline');
    const dotBadge = Badge.dot('Dot');
    
    return `
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Métodos estáticos</h3>
        <div class="space-y-2">
          ${defaultBadge.render()}
          ${primaryBadge.render()}
          ${successBadge.render()}
          ${warningBadge.render()}
          ${dangerBadge.render()}
          ${infoBadge.render()}
          ${outlineBadge.render()}
          ${dotBadge.render()}
        </div>
      </div>
    `;
  }
};

// Story con contadores
export const Counters = {
  render: () => {
    const counterBadges = [
      Badge.counter(5),
      Badge.counter(25),
      Badge.counter(150),
      Badge.counter(0)
    ];
    
    const badges = counterBadges.map(badge => `
      <div class="mb-2">
        ${badge.render()}
      </div>
    `);
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de contador</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story con estados
export const Status = {
  render: () => {
    const statusBadges = [
      Badge.status('online'),
      Badge.status('offline'),
      Badge.status('away'),
      Badge.status('busy')
    ];
    
    const badges = statusBadges.map(badge => `
      <div class="mb-2">
        ${badge.render()}
      </div>
    `);
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de estado</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story con notificaciones
export const Notifications = {
  render: () => {
    const notificationBadges = [
      Badge.notification(3),
      Badge.notification(12),
      Badge.notification(99),
      Badge.notification(0)
    ];
    
    const badges = notificationBadges.map(badge => `
      <div class="mb-2">
        ${badge.render()}
      </div>
    `);
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Badges de notificación</h3>
        ${badges.join('')}
      </div>
    `;
  }
};

// Story interactivo
export const Interactive = {
  render: () => {
    const container = document.createElement('div');
    container.innerHTML = `
      <div class="p-4 space-y-4">
        <div class="flex flex-wrap gap-2">
          <button id="changeVariant" class="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
            Cambiar Variante
          </button>
          <button id="changeSize" class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">
            Cambiar Tamaño
          </button>
          <button id="toggleRounded" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Toggle Redondeado
          </button>
          <button id="toggleRemovable" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Removible
          </button>
          <button id="toggleIcon" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Toggle Icono
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <div id="badgeContainer"></div>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">primary</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Redondeado:</strong> <span id="currentRounded">true</span></p>
          <p><strong>Removible:</strong> <span id="currentRemovable">false</span></p>
          <p><strong>Icono:</strong> <span id="currentIcon">ninguno</span></p>
        </div>
      </div>
    `;
    
    const badge = new Badge({
      text: 'Badge Interactivo',
      variant: 'primary',
      size: 'md',
      rounded: true,
      removable: false
    });
    
    const badgeContainer = container.querySelector('#badgeContainer');
    badge.mount(badgeContainer);
    
    // Event listeners
    container.querySelector('#changeVariant').addEventListener('click', () => {
      const variants = ['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline', 'dot'];
      const currentVariant = badge.options.variant;
      const currentIndex = variants.indexOf(currentVariant);
      const nextIndex = (currentIndex + 1) % variants.length;
      badge.setVariant(variants[nextIndex]);
      container.querySelector('#currentVariant').textContent = variants[nextIndex];
    });
    
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['sm', 'md', 'lg'];
      const currentSize = badge.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      badge.setSize(sizes[nextIndex]);
      container.querySelector('#currentSize').textContent = sizes[nextIndex];
    });
    
    container.querySelector('#toggleRounded').addEventListener('click', () => {
      const newRounded = !badge.options.rounded;
      badge.setRounded(newRounded);
      container.querySelector('#currentRounded').textContent = newRounded.toString();
    });
    
    container.querySelector('#toggleRemovable').addEventListener('click', () => {
      const newRemovable = !badge.options.removable;
      badge.setRemovable(newRemovable);
      container.querySelector('#currentRemovable').textContent = newRemovable.toString();
    });
    
    container.querySelector('#toggleIcon').addEventListener('click', () => {
      if (badge.options.icon) {
        badge.setIcon('');
        container.querySelector('#currentIcon').textContent = 'ninguno';
      } else {
        badge.setIcon('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>');
        container.querySelector('#currentIcon').textContent = 'check';
      }
    });
    
    return container;
  }
};

// Story con ejemplos de uso real
export const RealWorldExamples = {
  render: () => {
    const statusBadge = Badge.status('online');
    const priorityBadge = Badge.danger('Alta');
    const categoryBadge = Badge.info('Desarrollo');
    const notificationBadge = Badge.notification(5);
    
    return `
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Ejemplos de uso real</h2>
        
        <div class="space-y-6">
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Tarea #1234</h3>
              ${statusBadge.render()}
            </div>
            <p class="text-gray-700 mb-3">Implementar nueva funcionalidad de autenticación</p>
            <div class="flex items-center space-x-2">
              ${priorityBadge.render()}
              ${categoryBadge.render()}
              <span class="text-sm text-gray-500">Asignado a: Juan Pérez</span>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-semibold">Notificaciones</h3>
              ${notificationBadge.render()}
            </div>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                ${Badge.success('Nuevo').render()}
                <span class="text-sm">Usuario registrado exitosamente</span>
              </div>
              <div class="flex items-center space-x-2">
                ${Badge.warning('Pendiente').render()}
                <span class="text-sm">Revisión de código requerida</span>
              </div>
              <div class="flex items-center space-x-2">
                ${Badge.danger('Error').render()}
                <span class="text-sm">Falló la conexión a la base de datos</span>
              </div>
            </div>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-4">
            <h3 class="text-lg font-semibold mb-3">Etiquetas de producto</h3>
            <div class="flex flex-wrap gap-2">
              ${Badge.outline('Electrónica').render()}
              ${Badge.outline('Gaming').render()}
              ${Badge.outline('Inalámbrico').render()}
              ${Badge.primary('Oferta').render()}
              ${Badge.success('En stock').render()}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
