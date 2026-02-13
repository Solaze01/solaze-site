import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const qualities = [
  "Trusted adult mentors with lived experience",
  "Alumni who have walked your path before",
  "Trained student volunteers who genuinely care",
  "Human-led, empathy-first support",
  "No judgement. No unsolicited advice.",
]

export function WhoResponds() {
  return (
    <section className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <div className="reveal" style={{ animationDelay: "100ms" }}>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              Who responds to you?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Behind every response is a real person. Not an algorithm, not a
              chatbot, not a script. Someone who has chosen to show up for
              students like you.
            </p>

            <ul className="mt-8 space-y-4">
              {qualities.map((quality, index) => (
                <li
                  key={quality}
                  className="reveal flex items-start gap-3"
                  style={{ animationDelay: `${180 + index * 80}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {quality}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="reveal overflow-hidden rounded-2xl" style={{ animationDelay: "180ms" }}>
            <Image
              src="/images/campus-quiet.jpg"
              alt="A peaceful campus setting reflecting the supportive environment of Solaze"
              width={600}
              height={500}
              className="h-[320px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
