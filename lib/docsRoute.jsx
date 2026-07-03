import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../mdx-components'

const Wrapper = getMDXComponents().wrapper

export function createDocsPage(lang) {
  async function generateStaticParams() {
    const params = await generateStaticParamsFor('mdxPath')()
    return params
      .filter((param) => param.lang === lang)
      .map((param) => ({ mdxPath: param.mdxPath }))
  }

  async function generateMetadata(props) {
    const params = await props.params
    const { metadata } = await importPage(params.mdxPath, lang)
    return metadata
  }

  async function Page(props) {
    const params = await props.params
    const {
      default: MDXContent,
      toc,
      metadata,
      sourceCode
    } = await importPage(params.mdxPath, lang)
    return (
      <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  }

  return { generateStaticParams, generateMetadata, Page }
}
