import { MessageSquare, GitFork, Eye, HeartHandshake } from "lucide-react"

const steps = [
  {

    icon: MessageSquare,
    title: "Open the bot",
    description:
      "Start a private conversation with the Solaze bot on Telegram. It takes just one tap.",
  },
  {
    icon: GitFork,
    title: "Choose your path",
    description:
      "Want to share something personal? Need guidance? Want to post a win? Choose what feels right for you.",
  },
  {

    icon: Eye,
    title: "Stay private or go public",
    description:
      "Everything stays anonymous by default. If you want to share publicly, you choose how much to reveal.",
  },
  {
    
    icon: HeartHandshake,
    title: "Receive support or inspire others",
    description:
      "Get a thoughtful human response, or let your story encourage someone who's going through what you survived.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            How it works.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Four simple steps. No sign-up forms. No identity verification.
            Just a conversation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="reveal relative"
              style={{ animationDelay: `${120 + index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}
              <div className="flex flex-col">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary sm:mx-0">
                  <step.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
