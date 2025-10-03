import { ReactNode } from 'react'
import styles from './section.module.scss'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  backgroundImage?: string
  height?: string | number
  style?: React.CSSProperties
}

const Section = ({
  children,
  id,
  className,
  backgroundImage,
  height = 'auto',
  style,
  ...props
}: SectionProps) => {
  const sectionStyle: React.CSSProperties = {
    ...style,
    height: typeof height === 'number' ? `${height}px` : height,
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center 57%',
      backgroundRepeat: 'no-repeat',
    }),
  }

  return (
    <section
      id={id}
      className={`${styles.section} ${className || ''}`}
      style={sectionStyle}
      {...props}
    >
      {children}
    </section>
  )
}

export default Section
