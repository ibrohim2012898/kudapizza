import { useEffect, useState,  } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  HeroBanner,
  HeroLocation,
  HomeNavigation,
} from '@/components/home-hero'
import { ProductSection } from '@/components/product-section/ProductSection'
import { FadeIn } from '@/components/FadeIn'
import { Footer } from '@/components/Footer'
import { DeliverDesc } from '@/components/delivery/DeliverDesc'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div
      className="container"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    >
      <HomeNavigation />

      <FadeIn delay={0}>
        <HeroBanner />
      </FadeIn>

      <FadeIn delay={0}>
        <HeroLocation />
      </FadeIn>

      <FadeIn delay={0}>
        <ProductSection />
      </FadeIn>

      <FadeIn delay={0}>
        <DeliverDesc />
      </FadeIn>

      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
    </div>
  )
}