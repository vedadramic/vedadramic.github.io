export function createFooter() {
  const footer = document.createElement('footer')
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="social-links">
          <a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" title="LinkedIn" aria-label="LinkedIn">
            <img src="/linkedin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="https://github.com/vedadramic" target="_blank" title="GitHub" aria-label="GitHub">
            <img src="/github.png" alt="GitHub" class="social-icon">
          </a>
          <a href="https://www.facebook.com/vedad.ramic1?locale=hr_HR" target="_blank" title="Facebook" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" class="social-icon">
          </a>
          <a href="https://www.instagram.com/vedadramic_/" target="_blank" title="Instagram" aria-label="Instagram">
            <img src="/instagram.png" alt="Instagram" class="social-icon">
          </a>
        </div>
        <p>&copy; 2026 Vedad Ramic. All rights reserved.</p>
      </div>
    </div>
  `
  return footer
}
