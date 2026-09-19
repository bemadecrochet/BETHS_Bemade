import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const goToShop = () => setActiveTab('shop')
  const goToContact = () => setActiveTab('contact')

  return (
    <div className="relative">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="relative pt-28">
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

      <Footer />
    </div>
  )
}

export default App
