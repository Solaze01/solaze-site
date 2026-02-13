import { Lock, MessageCircle, Trophy } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Share something privately",
    description:
      "Write out what's on your mind in a completely private conversation with our bot. No one sees your identity. Your words go to trained advisors who respond with care.",
  },
  {
    icon: MessageCircle,
    title: "Get human guidance",
    description:
      "Receive thoughtful, empathetic responses from real people — not an AI chatbot. Mentors, alumni, and trusted adults understand what you're going through.",
  },
  {
    icon: Trophy,
    title: "Share your wins publicly",
    description:
      "Walked through something tough and want to encourage others? With your consent, we'll share your story on our community page — anonymously or with your name. Your choice.",
  },
]

export function WhatYouCanDo() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            What you can do with Solaze.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group reveal relative"
              style={{ animationDelay: `${120 + index * 120}ms` }}
            >
              <div className="hover-lift rounded-2xl border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
