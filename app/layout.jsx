import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './scss/style.scss'

export const metadata = {
  title: {
    template: '%s – Suwayomi Offical Website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>{children}</body>
    </html>
  )
}
