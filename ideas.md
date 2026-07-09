# Tikua Agua Funcional Natural - Concepto de Diseño

## Enfoque de Diseño Seleccionado: **Naturaleza Viva Moderna**

### Descripción General
Un diseño que celebra la pureza y funcionalidad del agua a través de elementos naturales dinámicos, colores vibrantes y tipografía moderna. La marca transmite frescura, salud y autenticidad con una estética contemporánea que apela a consumidores conscientes de su bienestar.

---

## Filosofía de Diseño

### Movimiento de Diseño
**Minimalismo Orgánico + Modernismo Sostenible**: Combina líneas limpias y espacios amplios con formas naturales, texturas sutiles y una paleta de colores inspirada en la naturaleza.

### Principios Fundamentales
1. **Pureza Visual**: Espacios en blanco generosos, tipografía clara y jerarquía definida
2. **Dinamismo Natural**: Elementos fluidos, gradientes suaves y movimiento orgánico
3. **Funcionalidad Transparente**: El agua como protagonista, botellas como arte
4. **Autenticidad Sostenible**: Énfasis en ingredientes naturales y beneficios reales

### Filosofía de Color
- **Azul Teñido (Teal/Cyan)**: Representa el agua pura, confianza y bienestar
- **Rosa Suave**: Energía femenina, frutos rojos, vitalidad
- **Amarillo Cálido**: Optimismo, energía solar, piña tropical
- **Blanco/Crema**: Pureza, espacio, claridad
- **Tonos Verdes Sutiles**: Naturaleza, ingredientes naturales, sostenibilidad

### Paradigma de Diseño
- **Hero Section**: Imagen de fondo con las botellas en un entorno natural, con gradiente overlay sutil
- **Grid Asimétrico**: Alternar entre secciones de texto a la izquierda/derecha con imágenes grandes
- **Secciones Modulares**: Cada sabor tiene su propia sección con color de acento
- **Dividers Orgánicos**: Ondas suaves entre secciones para flujo natural

### Elementos Distintivos
1. **Onda Fluida**: Divisor SVG ondulante entre secciones (motivo repetido)
2. **Tarjetas de Sabor**: Cada una con su color de etiqueta, icono de fruta y descripción
3. **Gota de Agua Animada**: Logo principal que aparece en hero y navegación
4. **Tipografía Contrastante**: Display bold para títulos, sans-serif legible para cuerpo

### Filosofía de Interacción
- **Micro-interacciones Suaves**: Hover effects sutiles en botones y tarjetas
- **Animaciones de Entrada**: Elementos que se revelan al scroll con fade-in suave
- **Transiciones Fluidas**: Cambios de color y escala con easing natural
- **Feedback Visual**: Botones que responden al click con escala y sombra

### Guía de Animación
- **Duración**: 300-400ms para transiciones principales
- **Easing**: `cubic-bezier(0.23, 1, 0.32, 1)` para entrantes suaves
- **Scroll Animations**: Fade-in + slide-up al 60% de visibilidad
- **Hover States**: Scale 1.02 + shadow enhancement en 200ms
- **Botones**: Active state con scale 0.98 en 160ms

### Sistema Tipográfico
- **Display Font**: "Poppins" Bold (700) para títulos principales
- **Heading Font**: "Poppins" SemiBold (600) para subtítulos
- **Body Font**: "Inter" Regular (400) para párrafos
- **Accent Font**: "Poppins" Medium (500) para CTAs y badges
- **Jerarquía**: H1 (48px) → H2 (36px) → H3 (24px) → Body (16px)

### Esencia de Marca
**Posicionamiento**: Agua funcional premium para personas activas que buscan hidratación consciente con ingredientes naturales y beneficios reales.

**Personalidad**: Fresca, Auténtica, Energética

### Voz de Marca
- **Tono**: Conversacional pero informativo, inspirador pero accesible
- **Ejemplos**:
  - ✅ "Hidratación con propósito. Ingredientes naturales que trabajan para ti."
  - ✅ "Cada sorbo cuenta. Electrolitos, vitaminas y sabor real."
  - ❌ "Bienvenido a nuestro sitio web"
  - ❌ "Compra ahora"

### Logo & Marca Visual
- **Logotipo**: Gota de agua estilizada con montaña y sol en el interior (teal/cyan)
- **Marca de Color Distintiva**: Teal/Cyan (#0891b2 o similar en OKLCH)
- **Isotipo**: Gota de agua simplificada para favicon y header

---

## Estructura de Página

### Secciones Principales
1. **Hero**: Imagen de fondo con botellas, CTA principal
2. **Sabores**: Grid de 3 tarjetas (Limón & Menta, Frutos Rojos, Piña & Maracuyá)
3. **Beneficios**: Sección con iconos de hidratación, natural, funcional
4. **Ingredientes**: Showcase de ingredientes naturales
5. **CTA Final**: Llamada a acción para compra/contacto
6. **Footer**: Links, redes sociales, información

---

## Decisiones de Estilo

### Paleta de Colores Final
| Elemento | Color OKLCH | Uso |
|----------|-----------|-----|
| Primary Teal | `oklch(0.55 0.15 200)` | Botones, accents, logo |
| Rosa Frutos | `oklch(0.75 0.12 350)` | Sabor Frutos Rojos |
| Amarillo Piña | `oklch(0.80 0.14 80)` | Sabor Piña & Maracuyá |
| Azul Limón | `oklch(0.70 0.13 220)` | Sabor Limón & Menta |
| Fondo | `oklch(1 0 0)` | Blanco puro |
| Texto | `oklch(0.23 0.015 65)` | Gris oscuro |

### Espaciado
- **Padding Secciones**: 4rem (64px) vertical, 2rem (32px) horizontal
- **Gap Componentes**: 1.5rem (24px) entre elementos
- **Margen Botones**: 1rem (16px) entre botones

### Sombras & Profundidad
- **Sombra Suave**: `0 2px 8px rgba(0,0,0,0.08)`
- **Sombra Media**: `0 4px 16px rgba(0,0,0,0.12)`
- **Sombra Hover**: `0 8px 24px rgba(0,0,0,0.15)`

### Bordes & Radios
- **Border Radius**: 12px para tarjetas, 8px para botones, 4px para inputs
- **Border Color**: `oklch(0.92 0.004 286.32)` (gris muy claro)

---

## Notas de Implementación
- Usar imágenes generadas de las botellas en secciones hero y sabores
- Implementar scroll animations con Framer Motion
- Responsive design: Mobile-first approach
- Optimizar imágenes para web
- Accesibilidad: WCAG AA compliance
