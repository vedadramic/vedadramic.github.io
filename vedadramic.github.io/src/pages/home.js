import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'
import { getCvPdfUrl } from '../utils/cv-download.js'

export function renderHome(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'home-main'
  main.id = 'main-content'
  main.tabIndex = -1
  main.innerHTML = `
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <h1 class="hero-title" id="home-title">Hi, I'm <span class="hero-name">Vedad Ramić</span>.</h1>
        <p class="hero-description">
          A Software Engineering student with a strong passion for learning, building modern applications, and exploring new technologies. I enjoy developing full-stack web applications and continuously improving my skills through hands-on projects and problem-solving. My focus is on understanding modern development practices, cloud technologies, and creating efficient, scalable software solutions.
        </p>
        <div class="hero-actions">
          <a href="#/projects" class="button button--primary">View Projects <span aria-hidden="true">→</span></a>
          <a href="${getCvPdfUrl()}" class="button button--outline" download="Vedad_Ramic_CV.pdf">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2"/></svg>
            Download CV
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="portrait-frame">
          <img src="/profile.png" alt="Portrait of Vedad Ramić" class="hero-avatar">
        </div>
      </div>
    </section>
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
