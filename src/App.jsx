import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import ActMachine from "./engine/ActMachine"
import Controls from "./ui/Controls"
import SkipIntro from "./ui/SkipIntro"
import Navbar from "./ui/Navbar"
import Footer from "./ui/Footer"
import { lockScroll, unlockScroll } from "./engine/ScrollLock"
import PortfolioRoot from "./portfolio/PortfolioRoot"
import About from "./portfolio/About"
import Works from "./portfolio/Works"
import Writings from "./portfolio/Writings"
import Contact from "./portfolio/Contact"

export default function App() {
  const [mode, setMode] = useState("cinema")
  const [actIndex, setActIndex] = useState(0)

  useEffect(() => {
    if (mode === "cinema") lockScroll()
    else unlockScroll()
  }, [mode])

  if (mode === "cinema") {
    return (
      <>
        <SkipIntro onSkip={() => setMode("portfolio")} />
        <ActMachine
          actIndex={actIndex}
          setActIndex={setActIndex}
          onFinish={() => setMode("portfolio")}
        />
        <Controls
          actIndex={actIndex}
          setActIndex={setActIndex}
          max={6}
          onFinish={() => setMode("portfolio")}
        />
      </>
    )
  }

  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<PortfolioRoot />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
