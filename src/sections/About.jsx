import './About.css'

function About() {
  const skills = [
    'Python (Pandas, NumPy, scikit-learn)',
    'Data ETL',
    'SQL',
    'Postgres',
    'MongoDB',
    'Tableau/Power BI',
    'Git/Github',
    'Microsoft Office (Excel, Word, Powerpoint)',
    'Teamwork',
    'Communication'
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm an aspiring data scientist with strong ML interests. I enjoy incorporating
              models and data into practical applications. I especially enjoy when i can blend my love for sports
              and the outdoors with data analytics.
            </p>
            <p>
              I have my Bachelors in Computer Engineering from CSU Long Beach, and I am currently
              in the Computer Science Masters program at the University of Southern California.
            </p>
            <p>
              When I'm not coding, you can find me playing basketball,
              snowboarding, or learning something new!
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
