import { Heart, CloudRain, Sparkles } from "lucide-react"

const personas = [
  {
    icon: CloudRain,
    title: "Feeling overwhelmed",
    description:
      "You're carrying stress from classes, finances, relationships, or things you can't name. You need a space where you're allowed to be honest about it.",
  },
  {
    icon: Heart,
    title: "Struggling quietly",
    description:
      "You're showing up every day, but inside you're hurting. You don't want to burden your friends or family. You just want someone to listen.",
  },
  {
    icon: Sparkles,
    title: "Ready to share your wins",
    description:
      "You've walked through something hard and come out stronger. You want to share your story — not for attention, but to encourage someone else.",
  },
]

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            This space was made for you.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Solaze is for every student who has ever felt alone in a crowded
            lecture hall. You don{"'"}t need a diagnosis. You just need to be heard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className="reveal hover-lift rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              style={{ animationDelay: `${120 + index * 120}ms` }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-muted md:mx-0">
                <persona.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {persona.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
