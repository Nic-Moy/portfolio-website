import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the projects I've worked on
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
