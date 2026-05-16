import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'

export function renderProjects(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'projects-main'
  main.innerHTML = `
    <section class="projects-hero">
        <h1>Projects</h1>
      <p class="section-subtitle">Several projects I have worked on independently and as part of a team.</p>
    </section>
    
    <section>
      <div class="section-title">
          <h2>University Projects</h2>
      </div>
      <div class="cards-grid">
        <article class="card project-card">
          <h3>📜 e-Diploma</h3>
          <p>
            A desktop application designed to streamline the Bachelor's thesis defense process for university faculties. By digitalizing the application workflow, it eliminates manual paperwork, automates document generation, and manages student records efficiently.
          </p>
          <a href="https://github.com/vedadramic/eDiploma-app" target="_blank" rel="noopener noreferrer" class="project-link">
            View GitHub →
          </a>
        </article>
        
        <article class="card project-card">
          <h3>💇 Barbershop</h3>
          <p>
            A full-stack web application for managing barbershop appointments, services, and customer reviews. Features user authentication, appointment scheduling, and a comprehensive service catalog.
          </p>
          <a href="https://github.com/vedadramic/barbershop-app" target="_blank" rel="noopener noreferrer" class="project-link">
            View GitHub →
          </a>
        </article>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Practice Projects</h2>
      </div>
      <div class="cards-grid">
        <article class="card project-card">
          <h3>⛰️ Smetovi</h3>
          <p>
            Smetovi is a web platform dedicated to the mountain resort Smetovi near Zenica, created to digitally present its natural beauty, tourist attractions, hiking locations, sports facilities, restaurants, and local organizations. The application provides visitors with useful information about activities, accommodation, landmarks, and outdoor experiences through a modern and responsive interface.
          </p>
          <a href="https://github.com/vedadramic/smetovi" target="_blank" rel="noopener noreferrer" class="project-link">
            View GitHub →
          </a>
        </article>
        
        <article class="card project-card">
          <h3>🚌 kadJeBus</h3>
          <p>
            kadJeBus is a web application for displaying public transport schedules and bus line information in Zenica. The platform allows users to quickly search routes, view departure times, and access useful transit information through a simple, responsive, and user-friendly interface. Built to improve everyday commuting, the application focuses on accessibility, speed, and ease of use for citizens and visitors.
          </p>
          <a href="https://github.com/vedadramic/busez" target="_blank" rel="noopener noreferrer" class="project-link">
            View GitHub →
          </a>
        </article>
      </div>
    </section>
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
