import { TrackerOauthRedirect } from '../../components/TrackerOauthRedirect'

export const metadata = {
  title: 'Redirecting…'
}

export default function TrackerOauthPage() {
  return (
    <>
      <TrackerOauthRedirect />
      <br />
      Refresh the page if it doesn&apos;t work.
    </>
  )
}
