import { HomePage } from '../components/HomePage'
import { HOME_CONTENT } from '../lib/homeContent'

export const metadata = {
  title: HOME_CONTENT.en.metaTitle
}

export default function Page() {
  return <HomePage lang="en" />
}
