# Contributing to UI Library Storybook

¡Gracias por tu interés en contribuir a nuestra librería UI! 🎉

## 🚀 Cómo Contribuir

### 1. Fork y Clone
1. Haz fork del repositorio
2. Clona tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/ui-library-storybook.git
   cd ui-library-storybook
   ```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Crear una Rama
```bash
git checkout -b feature/nombre-de-tu-feature
```

### 4. Desarrollar
- Ejecuta Storybook: `npm run storybook`
- Construye para producción: `npm run build-storybook`
- Asegúrate de que los tests pasen

### 5. Commit y Push
```bash
git add .
git commit -m "feat: add new component"
git push origin feature/nombre-de-tu-feature
```

### 6. Crear Pull Request
1. Ve a tu fork en GitHub
2. Crea un Pull Request
3. Describe tus cambios detalladamente

## 📋 Guías de Desarrollo

### Agregar un Nuevo Componente

1. **Crear la estructura de carpetas:**
   ```
   src/components/ComponentName/
   ├── ComponentName.stories.js
   ├── ComponentName.html (opcional)
   ├── styles/
   └── docs/
       └── README.md
   ```

2. **Crear la historia de Storybook:**
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
   ```

3. **Agregar documentación:**
   - README.md con ejemplos de uso
   - Props y variantes
   - Casos de uso comunes

### Estándares de Código

- **HTML:** Semántico y accesible
- **CSS:** Usar Tailwind CSS
- **JavaScript:** ES6+, funcional y limpio
- **Documentación:** Clara y con ejemplos

### Accesibilidad

Todos los componentes deben:
- Ser navegables por teclado
- Tener atributos ARIA apropiados
- Funcionar con lectores de pantalla
- Tener contraste adecuado

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests de Storybook
npm run test-storybook

# Tests de accesibilidad
npm run test-a11y
```

### Tests Requeridos
- [ ] Componente se renderiza correctamente
- [ ] Props funcionan como se espera
- [ ] Accesibilidad verificada
- [ ] Responsive design probado
- [ ] Documentación actualizada

## 📝 Commit Messages

Usa el formato convencional:
- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Documentación
- `style:` Formato de código
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento

## 🎨 Diseño

### Colores
- Usar la paleta de colores definida
- Mantener consistencia visual
- Considerar temas claros/oscuros

### Tipografía
- Jerarquía clara de headings
- Legibilidad en todos los tamaños
- Consistencia en espaciado

### Espaciado
- Usar el sistema de espaciado de Tailwind
- Mantener consistencia entre componentes
- Considerar responsive design

## 🚀 Despliegue

El despliegue es automático:
1. Push a `main` o `master`
2. GitHub Actions construye Storybook
3. Se despliega a GitHub Pages

## 📞 Soporte

- **Issues:** Para bugs y features
- **Discussions:** Para preguntas generales
- **Pull Requests:** Para contribuciones

## 🎯 Roadmap

- [ ] Más componentes UI
- [ ] Tests automatizados
- [ ] Temas personalizables
- [ ] Integración con frameworks
- [ ] Componentes avanzados

---

¡Gracias por contribuir! 🎉
