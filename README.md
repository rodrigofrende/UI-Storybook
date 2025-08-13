# UI Library Storybook

Una librería de componentes UI completa construida con HTML, Tailwind CSS y Storybook para documentación y desarrollo.

> **Nota**: Este proyecto utiliza GitHub Actions para CI/CD automático.

## 🚀 Características

- **24 Componentes UI** - Botones, inputs, modales, y más
- **Storybook Integration** - Documentación interactiva y desarrollo
- **Tailwind CSS** - Sistema de diseño consistente y responsive
- **HTML Vanilla** - Sin frameworks, fácil de integrar
- **Accesibilidad** - Componentes accesibles por defecto
- **Responsive** - Diseño adaptable a todos los dispositivos

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd ui-library-storybook

# Instalar dependencias
npm install

# Iniciar Storybook
npm run storybook
```

## 🎯 Uso

### Iniciar Storybook

```bash
npm run storybook
```

Storybook se abrirá en `http://localhost:6006`

### Construir para producción

```bash
npm run build-storybook
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.stories.js    # Historias de Storybook
│   │   ├── Button.html          # Componente HTML
│   │   ├── styles/              # Estilos específicos
│   │   └── docs/                # Documentación
│   ├── Input/
│   │   ├── Input.stories.js
│   │   ├── Input.html
│   │   ├── styles/
│   │   └── docs/
│   └── ... (otros componentes)
├── index.js                     # Exportaciones
└── styles/
    └── globals.css              # Estilos globales
```

## 🎨 Componentes Disponibles

### Formularios
- **Button** - Botones con múltiples variantes
- **Input** - Campos de entrada de texto
- **Checkbox** - Casillas de verificación
- **Radio** - Botones de opción
- **Switch** - Interruptores toggle
- **Slider** - Control deslizante
- **Form** - Contenedores de formulario

### Navegación
- **Navigation** - Barra de navegación
- **Breadcrumb** - Migas de pan
- **Pagination** - Paginación
- **Tabs** - Pestañas
- **Accordion** - Acordeón colapsable
- **Sidebar** - Barra lateral

### Feedback
- **Alert** - Alertas y notificaciones
- **Badge** - Etiquetas y insignias
- **Progress** - Barras de progreso
- **Modal** - Ventanas modales
- **Tooltip** - Información emergente

### Layout
- **Card** - Tarjetas de contenido
- **Table** - Tablas de datos
- **Header** - Encabezado de página
- **Footer** - Pie de página
- **Avatar** - Avatares de usuario
- **Dropdown** - Menús desplegables

## 🎭 Storybook

Cada componente tiene su propia historia en Storybook con:

- **Variantes** - Diferentes estilos y estados
- **Controles** - Ajustes en tiempo real
- **Documentación** - Guías de uso y ejemplos
- **Accesibilidad** - Tests de accesibilidad
- **Responsive** - Vista en diferentes tamaños

### Ejemplo de Uso en Storybook

```javascript
// Button.stories.js
export const Primary = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
};
```

## 🎨 Tailwind CSS

El proyecto utiliza Tailwind CSS con configuración personalizada:

- **Colores personalizados** - Paleta de colores consistente
- **Animaciones** - Transiciones y efectos suaves
- **Responsive** - Breakpoints y utilidades responsive
- **Componentes** - Clases utilitarias para componentes

### Colores Personalizados

```css
:root {
  --dark-blue: #1e3a8a;
  --light-blue: #3b82f6;
  --light-orange: #f97316;
}
```

## ♿ Accesibilidad

Todos los componentes incluyen:

- **Navegación por teclado** - Soporte completo para teclado
- **ARIA labels** - Atributos de accesibilidad
- **Contraste** - Ratios de contraste apropiados
- **Screen readers** - Compatible con lectores de pantalla
- **Focus management** - Gestión adecuada del foco

## 📱 Responsive Design

Los componentes son completamente responsive:

- **Mobile-first** - Diseño optimizado para móviles
- **Breakpoints** - Adaptación a diferentes tamaños
- **Touch-friendly** - Interacciones táctiles optimizadas
- **Flexible layouts** - Diseños que se adaptan al contenido

## 🧪 Testing

### Storybook Testing

```bash
# Ejecutar tests de Storybook
npm run test-storybook

# Tests de accesibilidad
npm run test-a11y
```

### Componentes Interactivos

Los componentes incluyen:

- **Event handlers** - Click, focus, blur, etc.
- **State management** - Estados internos
- **Validation** - Validación de formularios
- **Animations** - Transiciones y efectos

## 🚀 Desarrollo

### Agregar un Nuevo Componente

1. Crear carpeta en `src/components/ComponentName/`
2. Agregar `ComponentName.stories.js`
3. Agregar `ComponentName.html` (opcional)
4. Agregar documentación en `docs/`
5. Exportar en `src/components/index.js`

### Estructura de un Componente

```javascript
export default {
  title: 'Components/ComponentName',
  parameters: {
    docs: {
      description: {
        component: 'Descripción del componente'
      }
    }
  },
  argTypes: {
    // Controles del componente
  }
};

export const Default = {
  args: {
    // Props por defecto
  },
  render: (args) => {
    // Lógica de renderizado
  }
};
```

## 📚 Documentación

Cada componente incluye:

- **README.md** - Documentación completa
- **Props** - Descripción de propiedades
- **Ejemplos** - Casos de uso comunes
- **Accesibilidad** - Guías de accesibilidad
- **CSS Classes** - Clases de Tailwind utilizadas

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia ISC.

## 🆘 Soporte

- **Issues** - Reportar bugs o solicitar features
- **Documentación** - Guías completas en Storybook
- **Ejemplos** - Casos de uso en cada componente

## 🔮 Roadmap

- [ ] Tests automatizados con Playwright
- [ ] Más variantes de componentes
- [ ] Temas personalizables
- [ ] Integración con frameworks
- [ ] Componentes avanzados (DataGrid, Charts)
- [ ] Internacionalización (i18n)

---

**Desarrollado con ❤️ usando Storybook, Tailwind CSS y HTML vanilla**
