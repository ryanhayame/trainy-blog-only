import Footer from './Footer'
import Nav from './Nav'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="flex min-h-[calc(100vh_-_64px)] flex-col">
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
