import { Card, CardContent } from '@/components/ui/card'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16">
        <header className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            QRDen
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Create QR codes instantly, right in your browser.
          </p>
        </header>

        <Card>
          <CardContent>
            <section
              aria-label="QR code generator"
              className="flex min-h-64 items-center justify-center rounded-lg border-2 border-dashed p-6 text-center text-sm text-muted-foreground sm:min-h-80"
            >
              The QR code generator is coming soon.
            </section>
          </CardContent>
        </Card>
      </main>

      <footer className="px-4 pb-6 text-center text-xs text-muted-foreground">
        No sign-up and no server: everything runs on your device.
      </footer>
    </div>
  )
}
