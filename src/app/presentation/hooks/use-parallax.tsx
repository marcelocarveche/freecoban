import { useState, useEffect, RefObject } from 'react'

interface ParallaxOptions {
  speed?: number // Velocidade do parallax (0-1, padrão: 0.3)
}

export const useParallax = (
  ref: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.3 } = options
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const scrolled = window.scrollY

      // Posição do elemento em relação ao topo da página
      const elementOffsetTop = rect.top + scrolled

      // Distância que o usuário scrollou em relação ao elemento
      const distance = scrolled - elementOffsetTop

      // Aplica o efeito parallax
      // Quando distance é negativo (antes de chegar no elemento), offset será negativo
      // Quando distance é positivo (depois de passar o elemento), offset será positivo
      const parallaxOffset = distance * speed

      console.log('Parallax Debug:', {
        scrolled,
        elementOffsetTop,
        distance,
        parallaxOffset,
      })

      setOffset(parallaxOffset)
    }

    // Chama uma vez ao montar para definir posição inicial
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [speed])

  return offset
}
