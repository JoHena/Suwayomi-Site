import Image from 'next/image'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import logo from '../../public/suwayomi-logo.png'

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

const footer = (
  <Footer>
    MPL-2.0 Licensed - Copyright (C) Contributors to the Suwayomi project
  </Footer>
)

export default async function DocsLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <Layout
      navbar={navbar}
      footer={footer}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/Suwayomi/website/blob/master/content"
    >
      {children}
    </Layout>
  )
}
