import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default ClientLayout
