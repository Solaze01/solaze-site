import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-24">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20" />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/10" />

          <div className="relative">
            <h2 className="font-serif text-3xl font-medium leading-tight text-primary-foreground md:text-5xl md:leading-tight">
              <span className="text-balance">
                You{"'"}ve already taken the hardest step — admitting you need
                space to breathe.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Solaze is here whenever you{"'"}re ready. No rush. No pressure.
              Just a quiet door that{"'"}s always open.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://t.me/solaze_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-2 rounded-lg bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://t.me/solazecommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
