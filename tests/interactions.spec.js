const { test, expect } = require('@playwright/test');

test.describe('Component Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should handle button click animations', async ({ page }) => {
    const buttons = page.locator('.bg-light-blue');
    
    for (let i = 0; i < await buttons.count(); i++) {
      const button = buttons.nth(i);
      
      // Hacer click en el botón
      await button.click();
      
      // Verificar que se aplicó la transformación de escala
      await expect(button).toHaveCSS('transform', 'matrix(0.95, 0, 0, 0.95, 0, 0)');
      
      // Esperar a que se revierta la transformación
      await page.waitForTimeout(200);
      await expect(button).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    }
  });

  test('should make inputs editable on click', async ({ page }) => {
    const inputs = page.locator('.border-2.border-dark-blue');
    
    for (let i = 0; i < await inputs.count(); i++) {
      const input = inputs.nth(i);
      
      // Solo procesar inputs que contengan "Input"
      if (await input.textContent() === 'Input') {
        // Hacer click en el input
        await input.click();
        
        // Verificar que sea editable
        await expect(input).toHaveAttribute('contenteditable', 'true');
        
        // Escribir algo en el input
        await input.fill('Test Input');
        
        // Verificar que el contenido cambió
        await expect(input).toHaveText('Test Input');
        
        // Hacer blur para desactivar la edición
        await input.blur();
        
        // Verificar que ya no sea editable
        await expect(input).toHaveAttribute('contenteditable', 'false');
      }
    }
  });

  test('should maintain component layout on different screen sizes', async ({ page }) => {
    const grid = page.locator('.grid');
    
    // Verificar diferentes tamaños de pantalla
    const viewports = [
      { width: 375, height: 667, expectedCols: 'grid-cols-1' },      // Mobile
      { width: 768, height: 1024, expectedCols: 'md:grid-cols-2' },  // Tablet
      { width: 1024, height: 768, expectedCols: 'lg:grid-cols-3' },  // Desktop
      { width: 1280, height: 720, expectedCols: 'xl:grid-cols-4' }   // Large Desktop
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      
      // Verificar que la grilla tenga la clase correcta
      if (viewport.width >= 1280) {
        await expect(grid).toHaveClass(/xl:grid-cols-4/);
      } else if (viewport.width >= 1024) {
        await expect(grid).toHaveClass(/lg:grid-cols-3/);
      } else if (viewport.width >= 768) {
        await expect(grid).toHaveClass(/md:grid-cols-2/);
      } else {
        await expect(grid).toHaveClass(/grid-cols-1/);
      }
      
      // Verificar que todos los componentes sean visibles
      const components = page.locator('.grid > div');
      await expect(components).toHaveCount(24);
      
      // Verificar que el primer componente sea visible
      await expect(components.first()).toBeVisible();
    }
  });

  test('should have consistent component styling', async ({ page }) => {
    // Verificar que todos los componentes tengan el mismo estilo base
    const componentCards = page.locator('.bg-white.rounded-lg.shadow-lg.p-6.border.border-gray-200');
    await expect(componentCards).toHaveCount(24);
    
    // Verificar que todos los títulos tengan el mismo estilo
    const titles = page.locator('.text-lg.font-semibold.text-dark-blue');
    await expect(titles).toHaveCount(24);
    
    // Verificar que todos los títulos tengan el mismo color
    for (let i = 0; i < await titles.count(); i++) {
      const title = titles.nth(i);
      await expect(title).toHaveCSS('color', 'rgb(30, 58, 138)'); // dark-blue
    }
  });

  test('should handle keyboard navigation', async ({ page }) => {
    // Navegar con Tab
    await page.keyboard.press('Tab');
    
    // Verificar que el foco esté en el primer botón
    const firstButton = page.locator('.bg-light-blue').first();
    await expect(firstButton).toBeFocused();
    
    // Navegar con Tab
    await page.keyboard.press('Tab');
    
    // Verificar que el foco esté en el primer input
    const firstInput = page.locator('.border-2.border-dark-blue').first();
    await expect(firstInput).toBeFocused();
  });

  test('should maintain accessibility standards', async ({ page }) => {
    // Verificar que todos los componentes tengan títulos
    const titles = page.locator('h3');
    await expect(titles).toHaveCount(24);
    
    // Verificar que el título principal sea un h1
    const mainTitle = page.locator('h1');
    await expect(mainTitle).toHaveText('UI/UX COMPONENTS');
    
    // Verificar que los botones sean clickeables
    const buttons = page.locator('.bg-light-blue');
    for (let i = 0; i < await buttons.count(); i++) {
      const button = buttons.nth(i);
      await expect(button).toBeEnabled();
    }
  });

  test('should handle rapid interactions', async ({ page }) => {
    const button = page.locator('.bg-light-blue').first();
    
    // Hacer clicks rápidos
    for (let i = 0; i < 5; i++) {
      await button.click();
      await page.waitForTimeout(50);
    }
    
    // Verificar que el botón esté en su estado normal
    await expect(button).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
  });

  test('should maintain component state after page refresh', async ({ page }) => {
    // Hacer click en un botón
    const button = page.locator('.bg-light-blue').first();
    await button.click();
    
    // Recargar la página
    await page.reload();
    
    // Verificar que el botón esté en su estado normal
    await expect(button).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
    
    // Verificar que todos los componentes estén presentes
    const components = page.locator('.grid > div');
    await expect(components).toHaveCount(24);
  });
});
