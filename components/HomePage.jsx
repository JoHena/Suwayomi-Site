import Link from 'next/link'
import Image from 'next/image'
import { Shippori_Mincho, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import logo from '../public/suwayomi-logo.png'
import screenshot from '../public/webui-library.png'
import { HOME_CONTENT } from '../lib/homeContent'

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

const LOCALE_LINKS = [
  { locale: 'en', href: '/' },
  { locale: 'ja', href: '/ja' },
  { locale: 'es', href: '/es' }
]

export function HomePage({ lang }) {
  const t = HOME_CONTENT[lang]

  return (
    <div className={`landing ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <header className="landing-header">
        <Link href={lang === 'en' ? '/' : `/${lang}`} className="landing-header__brand">
          <Image src={logo} alt="" width={30} height={30} priority className="landing-header__mark" />
          Suwayomi
        </Link>
        <nav className="landing-header__nav">
          <Link href={t.docsHref}>{t.navDocs}</Link>
          <a href="https://suwayomi-webui-preview.github.io/" target="_blank" rel="noreferrer">{t.navWebUI}</a>
          <a href="https://github.com/Suwayomi" target="_blank" rel="noreferrer">{t.navGitHub}</a>
          <a href="https://discord.gg/DDZdqZWaHA" target="_blank" rel="noreferrer">{t.navDiscord}</a>
          <span className="landing-header__locales">
            {LOCALE_LINKS.map(({ locale, href }) => (
              <Link
                key={locale}
                href={href}
                aria-current={locale === lang ? 'true' : undefined}
                className={locale === lang ? 'landing-header__locale landing-header__locale--active' : 'landing-header__locale'}
              >
                {locale.toUpperCase()}
              </Link>
            ))}
          </span>
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
            <Link href={t.docsHref} className="landing-hero__cta">
              {t.cta}
            </Link>
            <a
              href="https://github.com/Suwayomi/Suwayomi-Server"
              target="_blank"
              rel="noreferrer"
              className="landing-hero__secondary"
            >
              {t.secondary}
            </a>
          </div>

          <div className="landing-hero__panel landing-hero__panel--main">
            <p className="landing-hero__eyebrow">{t.eyebrow}</p>
            <h1 className="landing-hero__title">{t.title}</h1>
            <p className="landing-hero__subtitle">{t.subtitle}</p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--caption landing-hero__panel--capA">
            <p className="landing-hero__caption-label">{t.capATitle}</p>
            <p className="landing-hero__caption-text">{t.capAText}</p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--caption landing-hero__panel--capB">
            <p className="landing-hero__caption-label">{t.capBTitle}</p>
            <p className="landing-hero__caption-text">{t.capBText}</p>
          </div>

          <div className="landing-hero__panel landing-hero__panel--shot">
            <Image
              src={screenshot}
              alt={t.shotAlt}
              className="landing-hero__shot-image"
              sizes="(max-width: 720px) 100vw, 940px"
            />
            <p className="landing-hero__shot-caption">{t.shotCaption}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
