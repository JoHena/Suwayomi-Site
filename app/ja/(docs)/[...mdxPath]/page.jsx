import { createDocsPage } from '../../../../lib/docsRoute'

const { generateStaticParams, generateMetadata, Page } = createDocsPage('ja')

export { generateStaticParams, generateMetadata }
export default Page
