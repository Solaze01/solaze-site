import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted))_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5"
            style={{ animationDelay: "80ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-medium text-muted-foreground">
              A safe space for students
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl md:leading-tight"
            style={{ animationDelay: "160ms" }}
          >
            <span className="text-balance">
              You don{"'"}t have to carry it alone.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Solaze is a quiet, human-centered space where university students
            can share what they{"'"}re going through — and receive real support,
            completely anonymously.
          </p>

          {/* CTAs */}
          <div
            className="reveal mt-10 flex flex-col items-center gap-4 sm:flex-row"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              href="https://t.me/solaze_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Check Out Our Bot
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://t.me/solazecommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift inline-flex items-center gap-2 rounded-lg border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Join Our Community
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div
          className="reveal mt-16 overflow-hidden rounded-2xl md:mt-20"
          style={{ animationDelay: "420ms" }}
        >
          <Image
            src="/images/hero-students.jpg"
            alt="University students gathering together on campus in a peaceful setting"
            width={1200}
            height={600}
            className="float-soft h-[280px] w-full object-cover md:h-[440px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
