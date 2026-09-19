import { useState } from 'react'
import Nav from './components/Nav'
import TabBar from './components/TabBar'
import Hero from './components/Hero'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const goToShop = () => setActiveTab('shop')
  const goToContact = () => setActiveTab('contact')

  return (
    <div className="relative">
      <Nav onTabChange={setActiveTab} />

      <main className="relative pb-24 pt-28">
        {activeTab === 'home' && <Hero onExplore={goToShop} onCommission={goToContact} />}

        {activeTab === 'shop' && <Gallery onCommission={goToContact} />}

        {activeTab === 'about' && (
          <>
            <Story />
            <Process />
          </>
        )}

        {activeTab === 'contact' && (
          <>
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
             <WhatsAppButton />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      <Footer />
    </div>
  )
}

export default App