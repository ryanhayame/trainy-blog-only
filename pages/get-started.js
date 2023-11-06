import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import GetStartedForm from '@/components/GetStartedForm'

export default function GetStarted() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <SectionContainer>
        <PageSEO title={`Trainy - Get Started`} description={siteMetadata.description} />
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 xs:text-5xl md:text-6xl lg:text-7xl">
            Get Started
          </h1>
        </div>
        <GetStartedForm />
      </SectionContainer>
    </main>
  )
}
