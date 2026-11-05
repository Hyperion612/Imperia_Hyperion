import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Music from './pages/Music'
import Dev from './pages/Dev'
import Services from './pages/Services'
import Contacts from './pages/Contacts'

function App() {
  return (
    <div className="flex min-h-screen">
      <ScrollToTop />
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-[250px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
