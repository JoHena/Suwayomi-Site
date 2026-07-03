import Link from 'next/link'
import Image from 'next/image'
import { Shippori_Mincho, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import logo from '../public/suwayomi-logo.png'
import screenshot from '../public/webui-library.png'

const displayFont = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['600', '800'],
  variable: '--font-display'
})

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
})

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono'
})

export const metadata = {
  title: 'Home'
}

export default function HomePage() {
  return (
    <div className={`landing ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <header className="landing-header">
        <Link href="/" className="landing-header__brand">
          <Image src={logo} alt="" width={30} height={30} priority className="landing-header__mark" />
          Suwayomi
        </Link>
        <nav className="landing-header__nav">
          <Link href="/docs">Docs</Link>
          <a href="https://suwayomi-webui-preview.github.io/" target="_blank" rel="noreferrer">WebUI</a>
          <a href="https://github.com/Suwayomi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://discord.gg/DDZdqZWaHA" target="_blank" rel="noreferrer">Discord</a>
        </nav>
      </header>

      <main className="landing-hero">
        <div className="landing-hero__page">
          <Image
            src={logo}
            alt=""
            width={68}
            height={68}
            priority
            className="landing-hero__badge"
          />

          <div className="landing-hero__panel landing-hero__panel--cta">
            <Link href="/docs" className="landing-hero__cta">
              Get Started
            </Link>
            <a
              href="https://github.com/Suwayomi/Suwayomi-Server"
              target="_blank"
              rel="noreferrer"
              className="landing-hero__secondary"
            >
              View source on GitHub&nbsp;&rarr;
            </a>
          </div>

          <div className="landing-hero__panel landing-hero__panel--main">
            <p className="landing-hero__eyebrow">Self-hosted &middot; Open source</p>
            <h1 className="landing-hero__title">Suwayomi</h1>
            <p className="landing-hero__subtitle">
              A manga reader server you run yourself. Point it at the
              extensions you already use, keep your library on your own
              machine, and read from whichever client you like.
            </p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--caption landing-hero__panel--capA">
            <p className="landing-hero__caption-label">Extensions</p>
            <p className="landing-hero__caption-text">
              Compatible with Mihon (Tachiyomi) sources &mdash; no new
              ecosystem to learn.
            </p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--caption landing-hero__panel--capB">
            <p className="landing-hero__caption-label">Any client</p>
            <p className="landing-hero__caption-text">
              Web, desktop, or mobile &mdash; read from whichever app you
              like.
            </p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--shot">
            <Image
              src={screenshot}
              alt="The Suwayomi-WebUI library view, showing manga covers organized into Reading, Planning to Read, On-hold, Completed, and Webtoon shelves"
              className="landing-hero__shot-image"
              sizes="(max-width: 720px) 100vw, 940px"
            />
            <p className="landing-hero__shot-caption">
              The bundled Suwayomi-WebUI &mdash; your library, in the browser.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
