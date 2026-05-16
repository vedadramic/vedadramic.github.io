import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'

export function renderHome(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'home-main'
  main.innerHTML = `
    <section class="hero">
      <div class="hero-image">
        <img src="/profile.png" alt="Vedad Ramic" class="hero-avatar">
      </div>
      <div class="hero-text-box">
        <h1 class="hero-title">Hi, I'm <span class="hero-name">Vedad Ramić</span>.</h1>
        <p class="hero-description">
          A Software Engineering student with a strong passion for learning, building modern applications, and exploring new technologies. I enjoy developing full-stack web applications and continuously improving my skills through hands-on projects and problem-solving. My focus is on understanding modern development practices, cloud technologies, and creating efficient, scalable software solutions.
        </p>
      </div>
    </section>
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
