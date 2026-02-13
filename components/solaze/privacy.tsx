import { Shield, UserX, Users } from "lucide-react"

const promises = [
  {
    icon: Shield,
    title: "Anonymous by default",
    description:
      "Your identity is never shared. From the moment you open the bot, everything is private. We don't collect names, emails, or phone numbers.",
  },
  {
    icon: UserX,
    title: "No public posting without consent",
    description:
      "Nothing you share will ever be published unless you explicitly choose it. And even then, you control how much is shown and whether your name appears.",
  },
  {
    icon: Users,
    title: "Human advisors, not AI",
    description:
      "Every response you receive comes from a real person — someone who has been trained to listen with empathy. No bots. No automated replies.",
  },
]

export function Privacy() {
  return (
    <section id="privacy" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-14">
          <div className="reveal text-center">
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              Your privacy is sacred to us.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We built Solaze with one belief: vulnerability requires safety.
              Here{"'"}s how we protect yours.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {promises.map((promise, index) => (
              <div
                key={promise.title}
                className="reveal hover-lift text-center"
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <promise.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {promise.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
