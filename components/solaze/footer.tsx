import Link from "next/link"

export function Footer() {
  return (
    <footer className="reveal border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Solaze
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              A safe space for students. Built with care.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:justify-end md:gap-6">
            <Link
              href="#privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#what-is-solaze"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="https://t.me/solaze_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Telegram Bot
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Solaze. Made by students, for students.
          </p>
        </div>
      </div>
    </footer>
  )
}
