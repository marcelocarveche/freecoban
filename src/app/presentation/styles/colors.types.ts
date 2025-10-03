// ============================================================================
// TIPOS PARA AS CORES - FREECOBAN
// ============================================================================

// Importa as cores do módulo SCSS
import colors from './colors.module.scss'

// Tipos para as escalas de cores
export type ColorScale =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

// Interface para paletas de cores
export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

// Paletas organizadas
export const emeraldPalette: ColorPalette = {
  50: colors.emerald50,
  100: colors.emerald100,
  200: colors.emerald200,
  300: colors.emerald300,
  400: colors.emerald400,
  500: colors.emerald500,
  600: colors.emerald600,
  700: colors.emerald700,
  800: colors.emerald800,
  900: colors.emerald900,
}

export const olivePalette: ColorPalette = {
  50: colors.olive50,
  100: colors.olive100,
  200: colors.olive200,
  300: colors.olive300,
  400: colors.olive400,
  500: colors.olive500,
  600: colors.olive600,
  700: colors.olive700,
  800: colors.olive800,
  900: colors.olive900,
}

export const sagePalette: ColorPalette = {
  50: colors.sage50,
  100: colors.sage100,
  200: colors.sage200,
  300: colors.sage300,
  400: colors.sage400,
  500: colors.sage500,
  600: colors.sage600,
  700: colors.sage700,
  800: colors.sage800,
  900: colors.sage900,
}

export const beigePalette: ColorPalette = {
  50: colors.beige50,
  100: colors.beige100,
  200: colors.beige200,
  300: colors.beige300,
  400: colors.beige400,
  500: colors.beige500,
  600: colors.beige600,
  700: colors.beige700,
  800: colors.beige800,
  900: colors.beige900,
}

export const grayPalette: ColorPalette = {
  50: colors.gray50,
  100: colors.gray100,
  200: colors.gray200,
  300: colors.gray300,
  400: colors.gray400,
  500: colors.gray500,
  600: colors.gray600,
  700: colors.gray700,
  800: colors.gray800,
  900: colors.gray900,
}

// Cores semânticas organizadas
export const semanticColors = {
  // Cores principais
  primary: {
    main: colors.primary,
    dark: colors.primaryDark,
    light: colors.primaryLight,
    contrast: colors.primaryContrast,
  },

  secondary: {
    main: colors.secondary,
    dark: colors.secondaryDark,
    light: colors.secondaryLight,
    contrast: colors.secondaryContrast,
  },

  // Superfícies
  surface: {
    main: colors.surface,
    variant: colors.surfaceVariant,
    container: colors.surfaceContainer,
    dim: colors.surfaceDim,
  },

  // Texto
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    disabled: colors.textDisabled,
    onPrimary: colors.textOnPrimary,
    onSecondary: colors.textOnSecondary,
  },

  // Bordas
  border: {
    light: colors.borderLight,
    medium: colors.borderMedium,
    dark: colors.borderDark,
  },

  // Estados
  state: {
    hover: colors.hoverOverlay,
    focus: colors.focusRing,
    disabled: {
      background: colors.disabledBg,
      text: colors.disabledText,
    },
  },

  // Feedback
  feedback: {
    success: {
      main: colors.success,
      light: colors.successLight,
    },
    warning: {
      main: colors.warning,
      light: colors.warningLight,
    },
    error: {
      main: colors.error,
      light: colors.errorLight,
    },
    info: {
      main: colors.info,
      light: colors.infoLight,
    },
  },

  // Cores básicas
  basic: {
    white: colors.white,
    black: colors.black,
  },
}

// Função utilitária para obter uma cor específica de uma paleta
export const getColor = (palette: ColorPalette, scale: ColorScale): string => {
  return palette[scale]
}

// Função para gerar cores com opacidade
export const withOpacity = (color: string, opacity: number): string => {
  // Remove o # se presente
  const cleanColor = color.replace('#', '')

  // Converte hex para RGB
  const r = parseInt(cleanColor.substr(0, 2), 16)
  const g = parseInt(cleanColor.substr(2, 2), 16)
  const b = parseInt(cleanColor.substr(4, 2), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Exporta todas as cores como objeto único para facilidade de uso
export const theme = {
  colors: {
    emerald: emeraldPalette,
    olive: olivePalette,
    sage: sagePalette,
    beige: beigePalette,
    gray: grayPalette,
    ...semanticColors,
  },
  utils: {
    getColor,
    withOpacity,
  },
}

// Exporta as cores importadas do SCSS para uso direto
export { colors }

// Tipos para autocompletar
export type ThemeColors = typeof theme.colors
export type PaletteName = 'emerald' | 'olive' | 'sage' | 'beige' | 'gray'
