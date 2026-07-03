import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import logo from '../public/suwayomi-logo.png'

export const LOCALES = [
  { locale: 'en', name: 'English' },
  { locale: 'ja', name: '日本語' },
  { locale: 'es', name: 'Español' }
]

const FOOTER_TEXT = {
  en: 'MPL-2.0 Licensed - Copyright (C) Contributors to the Suwayomi project',
  ja: 'MPL-2.0 ライセンス - Copyright (C) Suwayomi プロジェクトのコントリビューター',
  es: 'Con licencia MPL-2.0 - Copyright (C) Colaboradores del proyecto Suwayomi'
}

export function createDocsLayout(lang) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src={logo} alt="" width={22} height={22} style={{ borderRadius: '50%' }} />
          Suwayomi
        </span>
      }
      projectLink="https://github.com/Suwayomi"
      chatLink="https://discord.gg/DDZdqZWaHA"
    />
  )

  const footer = <Footer>{FOOTER_TEXT[lang]}</Footer>

  return async function DocsLayout({ children }) {
    const pageMap = await getPageMap(`/${lang}`)
    return (
      <Layout
        navbar={navbar}
        footer={footer}
        pageMap={pageMap}
        i18n={LOCALES}
        docsRepositoryBase={`https://github.com/Suwayomi/website/blob/master/content/${lang}`}
      >
        {children}
      </Layout>
    )
  }
}
