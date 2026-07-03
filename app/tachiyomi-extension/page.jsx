import { TachiyomiExtensionRedirect } from '../../components/TachiyomiExtensionRedirect'

export const metadata = {
  title: 'Redirecting…'
}

export default function TachiyomiExtensionPage() {
  return (
    <>
      <TachiyomiExtensionRedirect />
      Your browser will open a link. Refresh the page if it doesn&apos;t work.
    </>
  )
}
