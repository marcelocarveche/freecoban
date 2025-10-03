import ReactDOM from 'react-dom/client'
import '@/app/presentation/styles/global.module.scss'
import styles from '@/app/presentation/styles/global.module.scss' // importar o módulo de estilos
import AppRoutes from '@/app/infrastructure/routes/routes'
import GlobalProvider from '@/app/infrastructure/providers/global-provider'
import { BrowserRouter } from 'react-router-dom'
import { MobileProvider } from '@/app/infrastructure/providers/mobile-provider'
import { FaviconManager } from '@/app/shared/utils'

// Inicializar gerenciador de favicon dinâmico
FaviconManager.init()

// Expor para debug no console
;(window as any).FaviconManager = FaviconManager

const rootElement = document.getElementById('root')
if (rootElement) {
  // Definir o className da div root usando a classe do Sass
  rootElement.className = styles.root || '' // substitua 'root' pelo nome da classe desejada do seu Sass

  console.log('Renderizando aplicação dentro do BrowserRouter')
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <MobileProvider>
        <GlobalProvider>
          <AppRoutes />
        </GlobalProvider>
      </MobileProvider>
    </BrowserRouter>
  )
} else {
  console.error('Root element not found')
}
