import { createDocsPage } from '../../../../lib/docsRoute'

const { generateStaticParams, generateMetadata, Page } = createDocsPage('es')

export { generateStaticParams, generateMetadata }
export default Page
