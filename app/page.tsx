import { Navbar } from "@/components/solaze/navbar"
import { ScrollAnimations } from "@/components/solaze/scroll-animations"
import { Hero } from "@/components/solaze/hero"
import { WhatIsSolaze } from "@/components/solaze/what-is-solaze"
import { WhoItsFor } from "@/components/solaze/who-its-for"
import { WhatYouCanDo } from "@/components/solaze/what-you-can-do"
import { HowItWorks } from "@/components/solaze/how-it-works"
import { Privacy } from "@/components/solaze/privacy"
import { WhoResponds } from "@/components/solaze/who-responds"
import { FinalCTA } from "@/components/solaze/final-cta"
import { Footer } from "@/components/solaze/footer"

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <WhatIsSolaze />
      <WhoItsFor />
      <WhatYouCanDo />
      <HowItWorks />
      <Privacy />
      <WhoResponds />
      <FinalCTA />
      <Footer />
    </main>
  )
}
