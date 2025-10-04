import { useState, useEffect } from 'react'

/**
 * Hook para detectar se o dispositivo é mobile
 * @param breakpoint - Largura máxima para considerar mobile (padrão: 768px)
 * @returns boolean indicando se é mobile
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Verifica inicialmente
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    // Checa no mount
    checkIsMobile()

    // Adiciona listener para resize
    window.addEventListener('resize', checkIsMobile)

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [breakpoint])

  return isMobile
}
