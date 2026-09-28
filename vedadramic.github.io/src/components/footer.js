export function createFooter() {
  const footer = document.createElement('footer')
  footer.innerHTML = `
    <div class="footer-container">
      <a class="footer-email" href="mailto:vedo.ramic02@gmail.com">vedo.ramic02@gmail.com</a>
      <div class="social-links" aria-label="Social media links">
          <a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn (opens in a new tab)">
            <img src="/linkedin.png" alt="" class="social-icon">
          </a>
          <a href="https://github.com/vedadramic" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub (opens in a new tab)">
            <img src="/github.png" alt="" class="social-icon">
          </a>
          <a href="https://www.facebook.com/vedad.ramic1?locale=hr_HR" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook (opens in a new tab)">
            <img src="/facebook.png" alt="" class="social-icon">
          </a>
          <a href="https://www.instagram.com/vedadramic_/" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram (opens in a new tab)">
            <img src="/instagram.png" alt="" class="social-icon">
          </a>
      </div>
      <p>&copy; 2026 Vedad Ramić. All rights reserved.</p>
    </div>
  `
  return footer
}
