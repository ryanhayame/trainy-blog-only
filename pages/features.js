import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
