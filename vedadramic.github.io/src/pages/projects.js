import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'

export function renderProjects(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'projects-main'
  main.id = 'main-content'
  main.tabIndex = -1
  main.innerHTML = `
    <section class="page-hero projects-hero" aria-labelledby="projects-title">
      <p class="eyebrow">Selected work</p>
      <h1 id="projects-title">Projects<span class="accent">.</span></h1>
      <p class="section-subtitle">Several projects I have worked on independently and as part of a team.</p>
    </section>
    
    <section>
      <div class="section-title">
          <h2>University Projects</h2>
      </div>
      <div class="projects-list">
        <article class="project-card">
          <div class="project-media"><img src="/ediploma.png" alt="e-Diploma desktop application interface" loading="lazy"></div>
          <div class="project-content">
            <p class="project-label">Featured project</p>
            <h3>e-Diploma</h3>
            <p>A desktop application designed to streamline the Bachelor's thesis defense process for university faculties. By digitalizing the application workflow, it eliminates manual paperwork, automates document generation, and manages student records efficiently.</p>
            <div class="project-actions"><a href="https://github.com/vedadramic/eDiploma-app" target="_blank" rel="noopener noreferrer" class="button button--outline">GitHub <span aria-hidden="true">↗</span></a></div>
          </div>
        </article>
        
        <article class="project-card project-card--reverse">
          <div class="project-media"><img src="/barbershop.png" alt="Barbershop web application interface" loading="lazy"></div>
          <div class="project-content">
            <p class="project-label">Featured project</p>
            <h3>Barbershop</h3>
            <p>A full-stack web application for managing barbershop appointments, services, and customer reviews. Features user authentication, appointment scheduling, and a comprehensive service catalog.</p>
            <div class="project-actions"><a href="https://github.com/vedadramic/barbershop-app" target="_blank" rel="noopener noreferrer" class="button button--outline">GitHub <span aria-hidden="true">↗</span></a></div>
          </div>
        </article>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Internship Projects</h2>
      </div>
      <div class="projects-list">
        <article class="project-card">
          <div class="project-media"><img src="/smetovi.png" alt="Smetovi tourism platform interface" loading="lazy"></div>
          <div class="project-content">
            <p class="project-label">Internship project</p>
            <h3>Smetovi</h3>
            <p>Smetovi is a web platform dedicated to the mountain resort Smetovi near Zenica, created to digitally present its natural beauty, tourist attractions, hiking locations, sports facilities, restaurants, and local organizations. The application provides visitors with useful information about activities, accommodation, landmarks, and outdoor experiences through a modern and responsive interface.</p>
            <div class="project-actions">
              <a href="https://github.com/vedadramic/smetovi" target="_blank" rel="noopener noreferrer" class="button button--outline">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://smetovi.ba/" target="_blank" rel="noopener noreferrer" class="button button--primary">Live Demo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
        
        <article class="project-card project-card--reverse">
          <div class="project-media"><img src="/kadjebus.png" alt="kadJeBus public transport schedule interface" loading="lazy"></div>
          <div class="project-content">
            <p class="project-label">Internship project</p>
            <h3>kadJeBus</h3>
            <p>kadJeBus is a web application for displaying public transport schedules and bus line information in Zenica. The platform allows users to quickly search routes, view departure times, and access useful transit information through a simple, responsive, and user-friendly interface. Built to improve everyday commuting, the application focuses on accessibility, speed, and ease of use for citizens and visitors.</p>
            <div class="project-actions">
              <a href="https://github.com/vedadramic/busez" target="_blank" rel="noopener noreferrer" class="button button--outline">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://kadjebus.zeforge.ba/" target="_blank" rel="noopener noreferrer" class="button button--primary">Live Demo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>

        <article class="project-card project-card--text-only">
          <div class="project-content">
            <p class="project-label">Internship project</p>
            <h3>FlyRank Capstone — Usage Metering &amp; Billing Engine</h3>
            <p>A multi-tenant backend service for tracking API usage and simulated AI-token consumption, enforcing monthly subscription limits, and calculating token costs. It prevents duplicate usage records through idempotent requests and uses PostgreSQL transactions and row locking to enforce quotas during concurrent requests. The service integrates Stripe Checkout and subscription management in test mode, with signature-verified webhooks, duplicate-event protection, and background processing with retries. It also includes JWT authentication, request validation, monthly usage summaries, and automated tests for pricing, usage limits, and subscription events.</p>
            <div class="project-actions"><a href="https://github.com/vedadramic/flyrank-capstone-metering-billing" target="_blank" rel="noopener noreferrer" class="button button--outline">GitHub <span aria-hidden="true">↗</span></a></div>
          </div>
        </article>
      </div>
    </section>
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
