/**
 * Gerencia o favicon dinâmico baseado no tema do navegador
 */
export class FaviconManager {
  private static lightFavicon = '/favicon-light.svg'
  private static darkFavicon = '/favicon-dark.svg'
  private static mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  /**
   * Inicializa o gerenciador de favicon
   */
  static init(): void {
    console.log('🎨 Inicializando FaviconManager...')

    // Define o favicon inicial
    this.updateFavicon()

    // Escuta mudanças no tema
    this.mediaQuery.addEventListener('change', (e) => {
      console.log('🔄 Tema alterado:', e.matches ? 'escuro' : 'claro')
      this.updateFavicon()
    })
  }

  /**
   * Atualiza o favicon baseado no tema atual
   */
  private static updateFavicon(): void {
    const isDarkTheme = this.mediaQuery.matches
    const faviconPath = isDarkTheme ? this.darkFavicon : this.lightFavicon

    console.log('🎯 Tema detectado:', isDarkTheme ? 'escuro' : 'claro')
    console.log('📁 Caminho do favicon:', faviconPath)

    this.setFavicon(faviconPath)
  }

  /**
   * Define o favicon no documento
   */
  private static setFavicon(path: string): void {
    // Remove favicon existente
    const existingFavicon = document.querySelector('link[rel="icon"]')
    if (existingFavicon) {
      console.log('🗑️ Removendo favicon existente')
      existingFavicon.remove()
    }

    // Adiciona novo favicon com cache-busting
    const link = document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/svg+xml'
    link.href = `${path}?v=${Date.now()}`

    document.head.appendChild(link)
    console.log('✅ Favicon atualizado para:', link.href)
  }

  /**
   * Força a atualização do favicon
   */
  static refresh(): void {
    this.updateFavicon()
  }

  /**
   * Retorna se o tema atual é escuro
   */
  static isDarkTheme(): boolean {
    return this.mediaQuery.matches
  }

  /**
   * Método de teste para alternar manualmente o favicon
   */
  static toggleFavicon(): void {
    const currentIsDark = this.isDarkTheme()
    const newPath = currentIsDark ? this.lightFavicon : this.darkFavicon
    console.log('🔄 Alternando favicon manualmente para:', newPath)
    this.setFavicon(newPath)
  }
}
