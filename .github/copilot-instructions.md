# FreeCOBAN - AI Coding Agent Instructions

## Arquitetura e Estrutura do Projeto

Este é um projeto React + TypeScript + Vite seguindo uma **arquitetura limpa em camadas**:

```
src/app/
  ├── domain/          # Regras de negócio e serviços (atualmente vazio)
  ├── infrastructure/  # Providers, rotas, serviços de infraestrutura
  ├── presentation/    # Componentes UI, páginas, estilos
  └── shared/          # Utilitários compartilhados (ex: FaviconManager)
```

### Conceitos-chave da Arquitetura

- **Providers em Cascata**: A aplicação usa providers aninhados (`BrowserRouter > MobileProvider > GlobalProvider`). GlobalProvider renderiza o `<Header />` globalmente, então páginas não devem incluí-lo.
- **Context API**: `MobileProvider` fornece detecção de mobile (breakpoint: 1000px) via hook `useIsMobile()`.
- **Rotas Centralizadas**: Definições de rotas em `src/app/presentation/protocols/routes.ts`, configuração em `infrastructure/routes/routes.tsx`.

## Convenções de Código

### 1. Importações com Alias `@/`

Sempre use o alias `@/` configurado no `tsconfig.json` e `vite.config.ts`:

```tsx
import { Header } from '@/app/presentation/components'
import styles from '@/app/presentation/styles/global.module.scss'
```

### 2. Estrutura de Componentes

Cada componente deve ter sua própria pasta com:

- `component-name.tsx` - Componente React
- `component-name.module.scss` - Estilos CSS Modules
- `index.ts` - Barrel export

Exemplo de export no `index.ts`:

```typescript
export { default as ComponentName } from './component-name'
```

### 3. CSS Modules e Sistema de Cores

- **Sempre use CSS Modules** (`.module.scss`)
- **Paleta de cores centralizada**: Importe cores de `@/app/presentation/styles/colors.module.scss`
- Cores principais: `$emerald-600` (primária), `$olive-600` (secundária), `$sage-500` (neutra), `$beige-500` (fundos)
- Veja `HEADER_SPACING_EXPLANATION.md` para exemplo de layout centralizado (1280px max-width)

Exemplo de uso:

```scss
@use '@/app/presentation/styles/colors.module.scss' as *;

.container {
  background-color: $surface;
  color: $emerald-600;
}
```

### 4. Layout Responsivo

- **Breakpoint mobile**: 1000px (detectado via `useIsMobile()` hook)
- **Container centralizado**: Use `max-width: 1280px` com `margin: 0 auto` para áreas de conteúdo
- **CSS Grid preferido sobre Flexbox** para layouts complexos (ver `header.module.scss`)

## Workflows de Desenvolvimento

### Comandos Principais

```bash
npm run dev      # Servidor de desenvolvimento com --host (acesso em rede)
npm run build    # Build de produção
npm run serve    # Preview do build
npm run deploy   # Build + deploy via gh-pages
```

### ESLint e TypeScript

- **Configuração flat ESLint** (`eslint.config.js`) com React 19 + TypeScript
- **React 17+ JSX Transform**: Não é necessário `import React` em componentes
- **Strict mode** habilitado no TypeScript

## Padrões Específicos do Projeto

### Componente Section

Wrapper reutilizável para seções da página com suporte a:

- Background images dinâmicas
- IDs para navegação por scroll
- Altura customizável

```tsx
<Section id="sobre" backgroundImage="/image.jpg" height="600px">
  <SectionContent title="..." description="..." />
</Section>
```

### Navegação por Scroll

O Header implementa navegação suave com offset para compensar altura do header fixo (80px):

```typescript
const offsetTop = section.offsetTop - 80 // Altura do header
window.scrollTo({ top: offsetTop, behavior: 'smooth' })
```

### Sistema de Favicon Dinâmico

`FaviconManager` troca favicons baseado no tema do sistema (light/dark):

- Inicializado em `main.tsx`
- Exposto em `window.FaviconManager` para debug
- Arquivos: `/favicon-light.svg` e `/favicon-dark.svg`

### Estrutura de Páginas

Páginas devem:

1. Importar componentes do barrel export `@/app/presentation/components`
2. Usar `Section` como wrapper principal
3. Incluir `ContactSection` como última seção (se aplicável)
4. Não incluir `<Header />` (renderizado pelo GlobalProvider)

## Dependências Externas

- **React 19** com novo JSX transform
- **React Router Dom v7** para roteamento
- **Sass** para estilos (CSS Modules)
- **Vite** como bundler e dev server
- **gh-pages** para deploy no GitHub Pages

## Fontes Customizadas

Fontes disponíveis em `/public/fonts/`:

- Inter (padrão body)
- Montserrat, Nunito Sans, Source Sans Pro
- Vollkorn (múltiplas variantes)

Aplicadas via `global.module.scss` com font-family stack incluindo fallbacks do sistema.
