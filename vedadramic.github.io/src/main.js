import './style.css'
import { renderHome } from './pages/home.js'
import { renderAbout } from './pages/about.js'
import { renderProjects } from './pages/projects.js'

// Router configuration
const pages = {
  '/': renderHome,
  '/about': renderAbout,
  '/projects': renderProjects,
}

// Get current page
function getCurrentPage() {
  const hash = window.location.hash || '#/'
  return hash.replace('#', '') || '/'
}

// Render page
function render() {
  const page = getCurrentPage()
  const pageRenderer = pages[page] || renderHome
  const app = document.querySelector('#app')
  if (!app) {
    return
  }

  pageRenderer(app)
  updateActiveNavLink()
  document.title = `${page === '/' ? 'Home' : page.slice(1).replace(/^./, char => char.toUpperCase())} | Vedad Ramić`

  if (window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}

// Update active nav link
function updateActiveNavLink() {
  const page = getCurrentPage()
  document.querySelectorAll('nav .nav-links a').forEach(link => {
    const href = link.getAttribute('href') || ''
    const route = href.replace('#', '') || '/'
    link.classList.toggle('active', route === page)
    if (route === page) {
      link.setAttribute('aria-current', 'page')
    } else {
      link.removeAttribute('aria-current')
    }
  })
}

// Listen for hash changes
window.addEventListener('hashchange', render)

// Initial render
render()
