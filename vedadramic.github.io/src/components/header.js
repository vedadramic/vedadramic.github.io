import { getCvPdfUrl } from '../utils/cv-download.js'

export function createHeader() {
  const wrapper = document.createElement('header')
  wrapper.className = 'site-header'

  const skipLink = document.createElement('a')
  skipLink.className = 'skip-link'
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to content'
  skipLink.addEventListener('click', event => {
    event.preventDefault()
    document.querySelector('#main-content')?.focus()
  })

  const nav = document.createElement('nav')
  nav.setAttribute('aria-label', 'Primary navigation')
  nav.innerHTML = `
    <div class="nav-container">
      <a href="#/" class="logo" aria-label="Vedad Ramić — Home">
        <span aria-hidden="true">VR</span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-menu" id="primary-navigation">
        <ul class="nav-links">
          <li><a href="#/" class="nav-link"><span>01.</span> Home</a></li>
          <li><a href="#/about" class="nav-link"><span>02.</span> About</a></li>
          <li><a href="#/projects" class="nav-link"><span>03.</span> Projects</a></li>
        </ul>
        <div class="nav-actions">
          <a href="${getCvPdfUrl()}" class="button button--outline nav-download-btn" download="Vedad_Ramic_CV.pdf">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2"/></svg>
            Download CV
          </a>
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

  nav.querySelector('.nav-download-btn')?.addEventListener('click', closeMenu)

  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu()
      toggleButton?.focus()
    }
  })

  wrapper.append(skipLink, nav)
  return wrapper
}
