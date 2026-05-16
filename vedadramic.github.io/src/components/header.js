import { downloadCvPdf } from '../utils/cv-download.js'

export function createHeader() {
  const nav = document.createElement('nav')
  nav.innerHTML = `
    <div class="nav-container">
      <a href="#/" class="logo">
        <img src="/profile.png" alt="Vedad Ramic" class="logo-avatar">
        <span>Vedad Ramić</span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-menu" id="primary-navigation">
        <ul class="nav-links">
          <li><a href="#/" class="nav-link">Home</a></li>
          <li><a href="#/about" class="nav-link">About</a></li>
          <li><a href="#/projects" class="nav-link">Projects</a></li>
        </ul>
        <div class="nav-actions">
          <button id="download-cv-btn" class="nav-download-btn" type="button">
            Download CV <span class="dropdown-arrow">↓</span>
          </button>
        </div>
      </div>
    </div>
  `

  const toggleButton = nav.querySelector('.nav-toggle')
  const closeMenu = () => {
    nav.classList.remove('menu-open')
    toggleButton?.setAttribute('aria-expanded', 'false')
  }

  toggleButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open')
    toggleButton.setAttribute('aria-expanded', String(isOpen))
  })

  nav.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu)
  })

  const downloadButton = nav.querySelector('#download-cv-btn')
  downloadButton?.addEventListener('click', () => {
    downloadCvPdf()
    closeMenu()
  })
  
  return nav
}
