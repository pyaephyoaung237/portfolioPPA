import { useState, useEffect, useRef } from 'react'

import './App.css'
import NaNavbar from './assets/components/Navbar'
import Content from './assets/components/Content'
import About from './assets/components/About'
import Skill from './assets/components/Skill'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

function App() {
  // Global state for background style controller ('wizard', 'snow', or 'rain')
  const [effectTheme, setEffectTheme] = useState('wizard')
  const canvasRef = useRef(null)

  useEffect(() => {
    // If the active theme is wizard, canvas updates are not required
    if (effectTheme === 'wizard') return

    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Setup array values based on the active chosen theme mode
    const particles = []
    const numParticles = effectTheme === 'rain' ? 120 : 75

    for (let i = 0; i < numParticles; i++) {
      if (effectTheme === 'snow') {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        })
      } else if (effectTheme === 'rain') {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 20 + 10,
          speed: Math.random() * 12 + 8,
          opacity: Math.random() * 0.25 + 0.05
        })
      }
    }

    // Canvas Frame Processing
    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i]

        ctx.beginPath()

        if (effectTheme === 'snow') {
          ctx.fillStyle = `rgba(204, 164, 59, ${p.opacity})`
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
          ctx.fill()

          p.y += p.speed
          p.x += Math.sin(p.y / 30) * 0.5
        } else if (effectTheme === 'rain') {
          ctx.strokeStyle = `rgba(204, 164, 59, ${p.opacity})`
          ctx.lineWidth = 1.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x, p.y + p.length)
          ctx.stroke()

          p.y += p.speed
        }

        // Loop bounds checks
        if (p.y > canvas.height) {
          p.y = -20
          p.x = Math.random() * canvas.width
        }
      }
      animationFrameId = requestAnimationFrame(renderLoop)
    }

    renderLoop()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [effectTheme])

  return (
    <div className="bg-[#0d070e] min-h-screen text-white relative overflow-x-hidden selection:bg-[#cca43b]/30">
      
      {/* 🪄 WIZARD STYLE LAYER (Rendered conditionally via theme check) */}
      {effectTheme === 'wizard' && (
        <>
          <style>{`
            @keyframes wizardGlow {
              0% { transform: translate(-20%, -10%) scale(1); opacity: 0.15; }
              50% { transform: translate(30%, 50%) scale(1.4); opacity: 0.32; }
              100% { transform: translate(-10%, 110%) scale(1.1); opacity: 0.15; }
            }
            .animate-wizard-magic { animation: wizardGlow 14s ease-in-out infinite alternate; }
            .animate-wizard-magic-delayed { animation: wizardGlow 18s ease-in-out infinite alternate-reverse; animation-delay: 4s; }
          `}</style>
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#cca43b]/15 blur-[130px] animate-wizard-magic"></div>
            <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-purple-600/15 blur-[130px] animate-wizard-magic-delayed"></div>
          </div>
        </>
      )}

      {/* ❄️ / 🌧️ CANVAS LAYERS */}
      {effectTheme !== 'wizard' && (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      )}

      {/* Passing theme parameters to control active tags in Navbar toggle panels */}
      <NaNavbar activeTheme={effectTheme} onThemeChange={setEffectTheme} />
      
      <main className="relative z-10 pt-20">
        <Content />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App