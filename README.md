# Rick and Morty Characters Microfrontend

## 📌 ¿Qué es un Microfrontend?

Un **Microfrontend (MFE)** es una arquitectura de software que permite descomponer aplicaciones frontend grandes en pequeñas aplicaciones semi-independientes que trabajan juntas. Cada microfrontend:

- ✅ Puede desarrollarse, testearse y desplegarse de forma independiente
- ✅ Tiene su propio repositorio y equipo de desarrollo
- ✅ Se comunica con otros a través de interfaces bien definidas
- ✅ Comparte dependencias comunes (React, Material-UI, etc.)
- ✅ Se integra en un **Orchestrator/Shell** que orquesta toda la aplicación

### Ventajas de los Microfrontends

| Ventaja | Descripción |
|---------|------------|
| 🚀 **Escalabilidad** | Equipos independientes trabajan en paralelo |
| 📦 **Deploy Independiente** | Actualizar un MFE sin afectar otros |
| 🔧 **Tecnología Flexible** | Cada MFE puede usar diferentes tecnologías |
| 🧪 **Testing Aislado** | Tests unitarios sin dependencias externas |
| ⚡ **Performance** | Carga bajo demanda y lazy loading |
| 🔄 **Reutilización** | Compartir componentes y librerías |

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────┐
│   Shell/Orchestrator (puerto 5000)      │
│   - Punto de entrada único              │
│   - Navegación global                   │
│   - Gestiona MFEs                       │
└────────────┬────────────────────────────┘
             │
    ┌────────┴─────────┐
    │                  │
┌───▼──────────┐   ┌───▼──────────┐
│  MFE 1       │   │  MFE 2       │
│  Characters  │   │  Locations   │
│  (5001)      │   │  (5002)      │
└──────────────┘   └──────────────┘
```

Este proyecto es el **Characters MFE** que se integra en el Shell usando **Vite Plugin Federation**.

---

## 📦 Contenido del MFE

Este microfrontend expone:

- **`./App`** - Componente principal que muestra el listado de personajes
- Utiliza la API REST de Rick & Morty
- Integra componentes de la librería `rick-morty-components-lib`
- Implementa búsqueda, filtros por estado y favoritos

### Funcionalidades

✅ Listado de personajes con imagen y detalles
✅ Búsqueda en tiempo real (debounce)
✅ Sistema de favoritos
✅ Grid responsive
✅ Carga de datos desde API
✅ Estados: loading, error, empty
✅ Tests unitarios con 100% cobertura

---

## 🚀 Instalación y Setup

### Requisitos Previos

- Node.js 20+ (usar nvm recomendado)
- pnpm (gestor de paquetes)

### 1. Clonar el repositorio

```bash
git clone https://github.com/cristianmgb/rick-morty-characters-mfe.git
cd rick-morty-characters-mfe
```

### 2. Crear archivo .env

Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
VITE_API_URL=https://rickandmortyapi.com/api
```

Este archivo contiene la URL base de la API de Rick & Morty.

### 3. Instalar dependencias

```bash
pnpm install
```

### 4. Ejecutar en desarrollo

**Modo desarrollo (con HMR):**

```bash
pnpm dev
```

El MFE estará disponible en `http://localhost:5001`

---

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|------------|
| `pnpm dev` | Inicia servidor Vite en desarrollo (puerto 5001) |
| `pnpm build` | Compila el código TypeScript y bundea con Vite |
| `pnpm preview` | Visualiza el build de producción localmente |
| `pnpm build:preview` | Compila y previsualiza (alias para build + preview) |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm test` | Ejecuta tests en modo watch |
| `pnpm test:ui` | Abre UI interactiva de Vitest |
| `pnpm test:run` | Ejecuta tests una sola vez |
| `pnpm test:coverage` | Genera reporte de cobertura (100%) |

---

## 📋 Integración con el Shell / Orquesrador

### Desarrollo (En paralelo con otros MFEs)

**Terminal 1 - Characters MFE:**

```bash
cd rick-morty-characters-mfe
pnpm build:preview
# http://localhost:5001
```

**Terminal 2 - Locations MFE:**

```bash
cd rick-morty-locations-mfe
pnpm build:preview
# http://localhost:5002
```

**Terminal 3 - Shell/Orchestrator:**

```bash
cd rick-morty-orchestrator
pnpm dev
# http://localhost:5000
```

---

## 🧪 Testing

### Ejecutar tests

```bash
# Modo watch (recarga automática)
pnpm test

# Ejecutar una sola vez
pnpm test:run

# Ver interfaz visual
pnpm test:ui

# Generar reporte de cobertura
pnpm test:coverage
```

---

## 📚 Recursos

- [Documentación de Vite](https://vite.dev/)
- [Module Federation Documentation](https://webpack.js.org/concepts/module-federation/)
- [Material-UI Docs](https://mui.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [Vitest Docs](https://vitest.dev/)
- [Rick & Morty Components Lib](https://github.com/cristianmgb/rick-morty-components-lib)

---

## 👤 Autor

Cristian González - [@cristianmgb](https://github.com/cristianmgb)

## 📄 Licencia

MIT

---

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

**¡Disfruta trabajando con este Microfrontend! 🚀**
