import './Hero.css'
import selfie from '../assets/images/Selfie.jpg'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={selfie} alt="Nic Moy" className="hero-photo" />
        <p className="hero-greeting">Hello! I'm</p>
        <h1 className="hero-name">Nic Moy</h1>
        <h2 className="hero-title">Data Science/ML</h2>
        <p className="hero-tagline">
          Fight on!
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
