import { createDocsPage } from '../../../../lib/docsRoute'

const { generateStaticParams, generateMetadata, Page } = createDocsPage('en')

export { generateStaticParams, generateMetadata }
export default Page
