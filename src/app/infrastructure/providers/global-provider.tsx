import { Header } from '@/app/presentation/components'
import { createContext, useContext, ReactNode } from 'react'

// Define o tipo do contexto
type GlobalContextType = {}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const useGlobalProvider = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalProvider must be used within a GlobalProvider')
  }
  return context
}

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalContext.Provider value={{}}>
      <Header />
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
