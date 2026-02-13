import Image from "next/image"

export function WhatIsSolaze() {
  return (
    <section id="what-is-solaze" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="reveal overflow-hidden rounded-2xl" style={{ animationDelay: "80ms" }}>
            <Image
              src="/images/support.jpg"
              alt="A comforting moment of support between students"
              width={600}
              height={500}
              className="h-[320px] w-full object-cover md:h-[440px]"
            />
          </div>

          {/* Content */}
          <div className="reveal" style={{ animationDelay: "160ms" }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              What is Solaze?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                University can be one of the loneliest places. Between academic
                pressure, financial stress, identity questions, and the weight
                of expectations — many students carry burdens they never talk
                about.
              </p>
              <p>
                Solaze is a student-led emotional support platform delivered
                through a Telegram bot. It gives you a private, human-centered
                space to share your story, ask for guidance, or simply be heard
                — without revealing who you are.
              </p>
              <p>
                No algorithms. No AI responses. Just real people who care,
                reading your words and responding with empathy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
