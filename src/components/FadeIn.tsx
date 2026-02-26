import { useFadeIn } from '@/hooks/useFadeIn'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionMap = {
  up: 'translateY(30px)',
  down: 'translateY(-30px)',
  left: 'translateX(30px)',
  right: 'translateX(-30px)',
  none: 'none',
}

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, visible } = useFadeIn(delay)

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0)' : directionMap[direction],
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      {children}
    </div>
  )
}
