import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Nav from './components/Nav'
import TabBar from './components/TabBar'
import Hero from './components/Hero'
import HomeProducts from './components/HomeProducts'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'
import CartDrawer from './components/CartDrawer'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const goToShop = () => setActiveTab('shop')
  const goToContact = () => setActiveTab('contact')

  return (
    <CartProvider>
      <div className="relative">
        <Nav onTabChange={setActiveTab} />

        <main className="relative pb-24 pt-28">
          {activeTab === 'home' && (
            <>
              <Hero onExplore={goToShop} onCommission={goToContact} />
              <HomeProducts onViewAll={goToShop} />
            </>
          )}

          {activeTab === 'shop' && <Gallery />}

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
        <ChatBot />
        <CartDrawer />
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        <Footer />
      </div>
    </CartProvider>
  )
}