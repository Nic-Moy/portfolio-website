import './About.css'

function About() {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Git',
    'Node.js',
    // Add more skills here
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate frontend developer who loves building
              things for the web. I enjoy creating beautiful, functional
              websites that provide great user experiences.
            </p>
            <p>
              My journey into web development started when I discovered
              the power of turning ideas into reality through code. Since then,
              I've been constantly learning and improving my skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              working on personal projects, or learning something new.
            </p>
          </div>

          <div className="about-skills">
            <h3>Skills & Technologies</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
