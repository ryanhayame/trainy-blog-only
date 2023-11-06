import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'

export default function Features() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <SectionContainer>
        <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
        <h1>Features Page</h1>
      </SectionContainer>
    </main>
  )
}
