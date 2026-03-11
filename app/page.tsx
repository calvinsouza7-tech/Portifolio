import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Benefits } from '@/components/Benefits'
import { Differential } from '@/components/Differential'
import { Templates } from '@/components/Templates'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Differential />
      <Templates />
      <Footer />
    </main>
  )
}
