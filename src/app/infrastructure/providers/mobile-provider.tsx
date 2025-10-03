import React, { createContext, useContext, useEffect, useState } from 'react'

const MobileContext = createContext<boolean>(false)

export const MobileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  )
}

export const useIsMobile = () => useContext(MobileContext)
