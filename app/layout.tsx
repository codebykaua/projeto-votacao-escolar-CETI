import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Urna Eletronica Escolar",
  description: "Sistema de votacao estudantil",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
