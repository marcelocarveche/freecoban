type CSSModuleClasses = { [className: string]: string }

declare module '*.module.scss' {
  const classes: CSSModuleClasses
  export const content: { [className: string]: string }
  export default classes
}

declare module '*.png' {
  const value: string
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.jpeg' {
  const value: string
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}

declare module '*.mp4' {
  const value: string
  export default value
}
