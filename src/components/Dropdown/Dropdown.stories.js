import Dropdown from './Dropdown.js';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'Un componente de menú desplegable versátil con funcionalidades de búsqueda y selección múltiple.'
      }
    }
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto de placeholder del dropdown'
    },
    searchable: {
      control: 'boolean',
      description: 'Si el dropdown permite búsqueda'
    },
    multiple: {
      control: 'boolean',
      description: 'Si permite selección múltiple'
    }
  }
};

// Dropdown básico
export const Basic = {
  args:{
    placeholder:"Selecciona una opción...",
    searchable:false,
    multiple:true
  },
  render:(args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'pokemon', label: 'Pokémon' },
      { value: 'digimon', label: 'Digimon' },
      { value: 'yugioh', label: 'Yu-Gi-Oh!' },
      { value: 'beyblade', label: 'Beyblade' },
      { value: 'battle', label: 'Battle Spirits' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con selección múltiple
export const Multiple = {
  args: {
    placeholder: 'Selecciona múltiples opciones...',
    searchable: true,
    multiple: true
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'fire', label: 'Tipo Fuego' },
      { value: 'water', label: 'Tipo Agua' },
      { value: 'grass', label: 'Tipo Planta' },
      { value: 'electric', label: 'Tipo Eléctrico' },
      { value: 'psychic', label: 'Tipo Psíquico' },
      { value: 'fighting', label: 'Tipo Lucha' },
      { value: 'dark', label: 'Tipo Siniestro' },
      { value: 'fairy', label: 'Tipo Hada' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown no buscable
export const NonSearchable = {
  args: {
    placeholder: 'Haz clic para seleccionar...',
    searchable: false,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'pikachu', label: 'Pikachu' },
      { value: 'charizard', label: 'Charizard' },
      { value: 'bulbasaur', label: 'Bulbasaur' },
      { value: 'squirtle', label: 'Squirtle' },
      { value: 'mewtwo', label: 'Mewtwo' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con muchas opciones
export const ManyOptions = {
  args: {
    placeholder: 'Busca entre muchas opciones...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: '001', label: 'Bulbasaur - Planta/Veneno' },
      { value: '004', label: 'Charmander - Fuego' },
      { value: '007', label: 'Squirtle - Agua' },
      { value: '025', label: 'Pikachu - Eléctrico' },
      { value: '133', label: 'Eevee - Normal' },
      { value: '150', label: 'Mewtwo - Psíquico' },
      { value: '151', label: 'Mew - Psíquico' },
      { value: '155', label: 'Cyndaquil - Fuego' },
      { value: '158', label: 'Totodile - Agua' },
      { value: '161', label: 'Sentret - Normal' },
      { value: '163', label: 'Hoothoot - Normal/Volador' },
      { value: '165', label: 'Ledyba - Bicho/Volador' },
      { value: '167', label: 'Spinarak - Bicho/Veneno' },
      { value: '170', label: 'Chinchou - Agua/Eléctrico' },
      { value: '175', label: 'Togepi - Hada' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones agrupadas
export const GroupedOptions = {
  args: {
    placeholder: 'Selecciona por categoría...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'starter-kanto', label: '🏆 Starter Kanto' },
      { value: 'starter-johto', label: '🏆 Starter Johto' },
      { value: 'starter-hoenn', label: '🏆 Starter Hoenn' },
      { value: 'legendary-kanto', label: '⭐ Legendario Kanto' },
      { value: 'legendary-johto', label: '⭐ Legendario Johto' },
      { value: 'mythical', label: '✨ Mítico' },
      { value: 'pseudo-legendary', label: '💎 Pseudo-Legendario' },
      { value: 'fossil', label: '🦴 Fósil' },
      { value: 'baby', label: '👶 Bebé' },
      { value: 'evolution', label: '🔄 Evolución' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones numéricas
export const NumericOptions = {
  args: {
    placeholder: 'Selecciona un nivel...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = Array.from({ length: 100 }, (_, i) => ({
      value: i + 1,
      label: `Nivel ${i + 1}`
    }));
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones de colores
export const ColorOptions = {
  args: {
    placeholder: 'Selecciona un color...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'red', label: '🔴 Rojo' },
      { value: 'blue', label: '🔵 Azul' },
      { value: 'green', label: '🟢 Verde' },
      { value: 'yellow', label: '🟡 Amarillo' },
      { value: 'purple', label: '🟣 Púrpura' },
      { value: 'orange', label: '🟠 Naranja' },
      { value: 'pink', label: '🩷 Rosa' },
      { value: 'brown', label: '🟤 Marrón' },
      { value: 'black', label: '⚫ Negro' },
      { value: 'white', label: '⚪ Blanco' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones de idiomas
export const LanguageOptions = {
  args: {
    placeholder: 'Selecciona un idioma...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'es', label: '🇪🇸 Español' },
      { value: 'en', label: '🇺🇸 English' },
      { value: 'fr', label: '🇫🇷 Français' },
      { value: 'de', label: '🇩🇪 Deutsch' },
      { value: 'it', label: '🇮🇹 Italiano' },
      { value: 'pt', label: '🇵🇹 Português' },
      { value: 'ja', label: '🇯🇵 日本語' },
      { value: 'ko', label: '🇰🇷 한국어' },
      { value: 'zh', label: '🇨🇳 中文' },
      { value: 'ru', label: '🇷🇺 Русский' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones de tamaños
export const SizeOptions = {
  args: {
    placeholder: 'Selecciona un tamaño...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'xs', label: 'XS - Extra Pequeño' },
      { value: 'sm', label: 'SM - Pequeño' },
      { value: 'md', label: 'MD - Mediano' },
      { value: 'lg', label: 'LG - Grande' },
      { value: 'xl', label: 'XL - Extra Grande' },
      { value: 'xxl', label: 'XXL - Extra Extra Grande' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown con opciones de estados
export const StatusOptions = {
  args: {
    placeholder: 'Selecciona un estado...',
    searchable: true,
    multiple: true
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const options = [
      { value: 'active', label: '✅ Activo' },
      { value: 'inactive', label: '❌ Inactivo' },
      { value: 'pending', label: '⏳ Pendiente' },
      { value: 'approved', label: '✅ Aprobado' },
      { value: 'rejected', label: '❌ Rechazado' },
      { value: 'draft', label: '📝 Borrador' },
      { value: 'published', label: '📢 Publicado' },
      { value: 'archived', label: '📦 Archivado' }
    ];
    
    container.innerHTML = dropdown.render(options);
    return container;
  }
};

// Dropdown interactivo
export const Interactive = {
  args: {
    placeholder: 'Dropdown Interactivo...',
    searchable: true,
    multiple: false
  },
  render: (args) => {
    const dropdown = new Dropdown(args);
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    // Controles interactivos
    const controls = document.createElement('div');
    controls.style.marginBottom = '20px';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const searchableToggle = document.createElement('button');
    searchableToggle.textContent = 'Toggle Searchable';
    searchableToggle.className = 'px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600';
    searchableToggle.onclick = () => {
      args.searchable = !args.searchable;
      searchableToggle.textContent = args.searchable ? 'Disable Search' : 'Enable Search';
    };
    
    const multipleToggle = document.createElement('button');
    multipleToggle.textContent = 'Toggle Multiple';
    multipleToggle.className = 'px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600';
    multipleToggle.onclick = () => {
      args.multiple = !args.multiple;
      multipleToggle.textContent = args.multiple ? 'Single Selection' : 'Multiple Selection';
    };
    
    controls.appendChild(searchableToggle);
    controls.appendChild(multipleToggle);
    
    container.appendChild(controls);
    
    const options = [
      { value: 'option1', label: 'Opción 1' },
      { value: 'option2', label: 'Opción 2' },
      { value: 'option3', label: 'Opción 3' },
      { value: 'option4', label: 'Opción 4' },
      { value: 'option5', label: 'Opción 5' }
    ];
    
    container.innerHTML += dropdown.render(options);
    return container;
  }
};
