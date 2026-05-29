import { useState, useEffect, useRef } from 'react'

import './App.css'
import NaNavbar from './assets/components/Navbar'
import Content from './assets/components/Content'
import About from './assets/components/About'
import Skill from './assets/components/Skill'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

// Import your custom leaf asset file directly!
import momijiImg from './assets/momiji.png' 

function App() {
  const [effectTheme, setEffectTheme] = useState('leaf')
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Load the imported image asset into a Canvas HTML Image object element
    const leafImg = new Image()
    leafImg.src = momijiImg

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles = []
    let numParticles = effectTheme === 'rain' ? 120 : (effectTheme === 'leaf' ? 20 : 75)

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
      } else if (effectTheme === 'leaf') {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          size: Math.random() * 16 + 14, // Scale size bounds nicely for the image aspect ratio
          speedY: Math.random() * 1.2 + 0.7,
          speedX: Math.random() * 1 - 0.5,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: Math.random() * 0.02 - 0.01,
          opacity: Math.random() * 0.5 + 0.5
        })
      }
    }

    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i]

        if (effectTheme === 'snow') {
          ctx.beginPath()
          ctx.fillStyle = `rgba(204, 164, 59, ${p.opacity})`
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, true)
          ctx.fill()
          p.y += p.speed
          p.x += Math.sin(p.y / 30) * 0.5
        } else if (effectTheme === 'rain') {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(204, 164, 59, ${p.opacity})`
          ctx.lineWidth = 1.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x, p.y + p.length)
          ctx.stroke()
          p.y += p.speed
        } else if (effectTheme === 'leaf') {
          // --- DRAW THE CUSTOM IMAGE LEAF ---
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.angle)
          ctx.globalAlpha = p.opacity // Gives them varying depth opacities

          // Draws the image centered on its physics coordinate point
          ctx.drawImage(leafImg, -p.size / 2, -p.size / 2, p.size, p.size)
          ctx.restore()

          // Leaf float equations mechanics
          p.y += p.speedY
          p.x += p.speedX + Math.sin(p.y / 50) * 0.5
          p.angle += p.spinSpeed
        }

        // Out of bounds track loop reset
        if (p.y > canvas.height + 30) {
          p.y = -30
          p.x = Math.random() * canvas.width
          if (effectTheme === 'leaf') p.angle = Math.random() * Math.PI * 2
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
      
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

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