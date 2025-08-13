import Divider from './Divider.js';

export default {
  title: 'Utility/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'El componente Divider crea líneas divisorias para separar contenido visualmente. Soporta orientación horizontal y vertical, diferentes variantes, tamaños, colores y etiquetas opcionales.'
      }
    }
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Orientación del divider'
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'dashed', 'dotted', 'double'],
      description: 'Estilo visual del divider'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Grosor del divider'
    },
    color: {
      control: { type: 'select' },
      options: ['gray', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo'],
      description: 'Color del divider'
    },
    spacing: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Espaciado vertical del divider'
    },
    label: {
      control: 'text',
      description: 'Texto opcional para etiquetar el divider'
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Posición del texto de la etiqueta'
    }
  }
};

// Story básico
export const Default = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido arriba del divider</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido abajo del divider</p>
      </div>
    `;
  }
};

// Story horizontal básico
export const Horizontal = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Sección superior</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Sección inferior</p>
      </div>
    `;
  }
};

// Story vertical
export const Vertical = {
  args: {
    orientation: 'vertical',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <div class="flex items-center space-x-4 h-20">
          <span class="text-gray-700">Izquierda</span>
          ${divider.render()}
          <span class="text-gray-700">Derecha</span>
        </div>
      </div>
    `;
  }
};

// Story con etiqueta
export const WithLabel = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Sección',
    labelPosition: 'center'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido de la primera sección</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido de la segunda sección</p>
      </div>
    `;
  }
};

// Story con etiqueta a la izquierda
export const LabelLeft = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Inicio',
    labelPosition: 'left'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    `;
  }
};

// Story con etiqueta a la derecha
export const LabelRight = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md',
    label: 'Fin',
    labelPosition: 'right'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Contenido anterior</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido posterior</p>
      </div>
    `;
  }
};

// Story con variante sólida
export const SolidVariant = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea sólida</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `;
  }
};

// Story con variante punteada
export const DashedVariant = {
  args: {
    orientation: 'horizontal',
    variant: 'dashed',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea punteada</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `;
  }
};

// Story con variante de puntos
export const DottedVariant = {
  args: {
    orientation: 'horizontal',
    variant: 'dotted',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea de puntos</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `;
  }
};

// Story con variante doble
export const DoubleVariant = {
  args: {
    orientation: 'horizontal',
    variant: 'double',
    size: 'md',
    color: 'gray',
    spacing: 'md'
  },
  render: (args) => {
    const divider = new Divider(args);
    return `
      <div class="p-4">
        <p class="text-gray-700 mb-4">Línea doble</p>
        ${divider.render()}
        <p class="text-gray-700 mt-4">Contenido separado</p>
      </div>
    `;
  }
};

// Story con todos los tamaños
export const AllSizes = {
  render: () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
    const dividers = sizes.map(size => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: size,
        color: 'gray',
        spacing: 'md'
      });
      return `
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Tamaño: ${size}</p>
          ${divider.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los tamaños disponibles</h3>
        ${dividers.join('')}
      </div>
    `;
  }
};

// Story con todos los colores
export const AllColors = {
  render: () => {
    const colors = [
      { color: 'gray', label: 'Gris' },
      { color: 'blue', label: 'Azul' },
      { color: 'green', label: 'Verde' },
      { color: 'red', label: 'Rojo' },
      { color: 'yellow', label: 'Amarillo' },
      { color: 'purple', label: 'Púrpura' },
      { color: 'pink', label: 'Rosa' },
      { color: 'indigo', label: 'Índigo' }
    ];
    
    const dividers = colors.map(({ color, label }) => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: 'md',
        color: color,
        spacing: 'md'
      });
      return `
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Color: ${label}</p>
          ${divider.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los colores disponibles</h3>
        ${dividers.join('')}
      </div>
    `;
  }
};

// Story con todos los espaciados
export const AllSpacings = {
  render: () => {
    const spacings = ['xs', 'sm', 'md', 'lg', 'xl'];
    const dividers = spacings.map(spacing => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: 'solid',
        size: 'md',
        color: 'gray',
        spacing: spacing
      });
      return `
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Espaciado: ${spacing}</p>
          <div class="bg-gray-50 p-2">
            ${divider.render()}
          </div>
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todos los espaciados disponibles</h3>
        ${dividers.join('')}
      </div>
    `;
  }
};

// Story con todas las variantes
export const AllVariants = {
  render: () => {
    const variants = [
      { variant: 'solid', label: 'Sólida' },
      { variant: 'dashed', label: 'Punteada' },
      { variant: 'dotted', label: 'De puntos' },
      { variant: 'double', label: 'Doble' }
    ];
    
    const dividers = variants.map(({ variant, label }) => {
      const divider = new Divider({
        orientation: 'horizontal',
        variant: variant,
        size: 'md',
        color: 'gray',
        spacing: 'md'
      });
      return `
        <div class="mb-4">
          <p class="text-sm text-gray-600 mb-2">Variante: ${label}</p>
          ${divider.render()}
        </div>
      `;
    });
    
    return `
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Todas las variantes disponibles</h3>
        ${dividers.join('')}
      </div>
    `;
  }
};

// Story usando métodos estáticos
export const StaticMethods = {
  render: () => {
    const horizontalDivider = Divider.horizontal({ size: 'lg', color: 'blue' });
    const verticalDivider = Divider.vertical({ size: 'md', color: 'green' });
    const sectionDivider = Divider.section('Nueva Sección', { color: 'purple' });
    const subtleDivider = Divider.subtle();
    const boldDivider = Divider.bold();
    const coloredDivider = Divider.colored('red', { size: 'lg' });
    
    return `
      <div class="p-4 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Horizontal</h3>
          <p class="text-gray-700 mb-2">Contenido superior</p>
          ${horizontalDivider.render()}
          <p class="text-gray-700 mt-2">Contenido inferior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Vertical</h3>
          <div class="flex items-center space-x-4 h-20">
            <span class="text-gray-700">Izquierda</span>
            ${verticalDivider.render()}
            <span class="text-gray-700">Derecha</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider de Sección</h3>
          <p class="text-gray-700 mb-2">Contenido de la sección anterior</p>
          ${sectionDivider.render()}
          <p class="text-gray-700 mt-2">Contenido de la nueva sección</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Sutil</h3>
          <p class="text-gray-700 mb-2">Contenido</p>
          ${subtleDivider.render()}
          <p class="text-gray-700 mt-2">Más contenido</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Bold</h3>
          <p class="text-gray-700 mb-2">Contenido importante</p>
          ${boldDivider.render()}
          <p class="text-gray-700 mt-2">Contenido posterior</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-2">Divider Coloreado</h3>
          <p class="text-gray-700 mb-2">Contenido destacado</p>
          ${coloredDivider.render()}
          <p class="text-gray-700 mt-2">Contenido siguiente</p>
        </div>
      </div>
    `;
  }
};

// Story con múltiples dividers
export const MultipleDividers = {
  render: () => {
    const divider1 = new Divider({ variant: 'solid', size: 'md', color: 'gray' });
    const divider2 = new Divider({ variant: 'dashed', size: 'sm', color: 'blue' });
    const divider3 = new Divider({ variant: 'dotted', size: 'lg', color: 'green' });
    const divider4 = new Divider({ variant: 'double', size: 'md', color: 'purple' });
    
    return `
      <div class="p-4 space-y-4">
        <h3 class="text-lg font-semibold">Múltiples Dividers</h3>
        
        <div>
          <p class="text-gray-700 mb-2">Primera sección</p>
          ${divider1.render()}
          <p class="text-gray-700 mt-2">Segunda sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Tercera sección</p>
          ${divider2.render()}
          <p class="text-gray-700 mt-2">Cuarta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Quinta sección</p>
          ${divider3.render()}
          <p class="text-gray-700 mt-2">Sexta sección</p>
        </div>
        
        <div>
          <p class="text-gray-700 mb-2">Séptima sección</p>
          ${divider4.render()}
          <p class="text-gray-700 mt-2">Octava sección</p>
        </div>
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
          <button id="changeColor" class="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
            Cambiar Color
          </button>
          <button id="toggleLabel" class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600">
            Toggle Etiqueta
          </button>
          <button id="changeOrientation" class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
            Cambiar Orientación
          </button>
        </div>
        
        <div class="bg-gray-50 p-4 rounded">
          <p class="text-gray-700 mb-4">Contenido superior</p>
          <div id="dividerContainer"></div>
          <p class="text-gray-700 mt-4">Contenido inferior</p>
        </div>
        
        <div class="text-sm text-gray-600">
          <p><strong>Variante:</strong> <span id="currentVariant">solid</span></p>
          <p><strong>Tamaño:</strong> <span id="currentSize">md</span></p>
          <p><strong>Color:</strong> <span id="currentColor">gray</span></p>
          <p><strong>Orientación:</strong> <span id="currentOrientation">horizontal</span></p>
          <p><strong>Etiqueta:</strong> <span id="currentLabel">ninguna</span></p>
        </div>
      </div>
    `;
    
    const divider = new Divider({
      orientation: 'horizontal',
      variant: 'solid',
      size: 'md',
      color: 'gray',
      spacing: 'md'
    });
    
    const dividerContainer = container.querySelector('#dividerContainer');
    divider.mount(dividerContainer);
    
    // Event listeners
    container.querySelector('#changeVariant').addEventListener('click', () => {
      const variants = ['solid', 'dashed', 'dotted', 'double'];
      const currentVariant = divider.options.variant;
      const currentIndex = variants.indexOf(currentVariant);
      const nextIndex = (currentIndex + 1) % variants.length;
      divider.setVariant(variants[nextIndex]);
      container.querySelector('#currentVariant').textContent = variants[nextIndex];
    });
    
    container.querySelector('#changeSize').addEventListener('click', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
      const currentSize = divider.options.size;
      const currentIndex = sizes.indexOf(currentSize);
      const nextIndex = (currentIndex + 1) % sizes.length;
      divider.setSize(sizes[nextIndex]);
      container.querySelector('#currentSize').textContent = sizes[nextIndex];
    });
    
    container.querySelector('#changeColor').addEventListener('click', () => {
      const colors = ['gray', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'indigo'];
      const currentColor = divider.options.color;
      const currentIndex = colors.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      divider.setColor(colors[nextIndex]);
      container.querySelector('#currentColor').textContent = colors[nextIndex];
    });
    
    container.querySelector('#toggleLabel').addEventListener('click', () => {
      if (divider.hasLabel()) {
        divider.removeLabel();
        container.querySelector('#currentLabel').textContent = 'ninguna';
      } else {
        divider.setLabel('Sección');
        container.querySelector('#currentLabel').textContent = 'Sección';
      }
    });
    
    container.querySelector('#changeOrientation').addEventListener('click', () => {
      const orientations = ['horizontal', 'vertical'];
      const currentOrientation = divider.options.orientation;
      const currentIndex = orientations.indexOf(currentOrientation);
      const nextIndex = (currentIndex + 1) % orientations.length;
      divider.setOrientation(orientations[nextIndex]);
      container.querySelector('#currentOrientation').textContent = orientations[nextIndex];
      
      // Ajustar el contenedor para orientación vertical
      if (orientations[nextIndex] === 'vertical') {
        dividerContainer.className = 'flex items-center space-x-4 h-20';
        dividerContainer.innerHTML = `
          <span class="text-gray-700">Izquierda</span>
          ${divider.render()}
          <span class="text-gray-700">Derecha</span>
        `;
      } else {
        dividerContainer.className = '';
        divider.mount(dividerContainer);
      }
    });
    
    return container;
  }
};

// Story con ejemplos de uso real
export const RealWorldExamples = {
  render: () => {
    const sectionDivider = Divider.section('Información Personal', { color: 'blue' });
    const contactDivider = Divider.section('Información de Contacto', { color: 'green' });
    const preferencesDivider = Divider.section('Preferencias', { color: 'purple' });
    const subtleDivider = Divider.subtle();
    
    return `
      <div class="p-4 max-w-2xl">
        <h2 class="text-2xl font-bold mb-6">Formulario de Usuario</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-3">Datos Básicos</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu nombre">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Tu apellido">
              </div>
            </div>
          </div>
          
          ${sectionDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Detalles Personales</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
                <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-md">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Género</label>
                <select class="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Seleccionar...</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
          </div>
          
          ${contactDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Información de Contacto</h3>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="tu@email.com">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+1 234 567 890">
              </div>
            </div>
          </div>
          
          ${preferencesDivider.render()}
          
          <div>
            <h3 class="text-lg font-semibold mb-3">Preferencias</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <input type="checkbox" id="newsletter" class="mr-2">
                <label for="newsletter" class="text-sm text-gray-700">Recibir newsletter</label>
              </div>
              <div class="flex items-center">
                <input type="checkbox" id="notifications" class="mr-2">
                <label for="notifications" class="text-sm text-gray-700">Notificaciones push</label>
              </div>
            </div>
          </div>
          
          ${subtleDivider.render()}
          
          <div class="flex justify-end space-x-3">
            <button class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              Cancelar
            </button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Guardar
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
