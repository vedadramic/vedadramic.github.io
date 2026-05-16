(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Vedad_Ramic_CV.pdf`,t=`/downloads/${e}`;function n(){let n=document.createElement(`a`);n.href=t,n.download=e,n.rel=`noopener`,n.style.display=`none`,document.body.appendChild(n),n.click(),n.remove()}function r(){let e=document.createElement(`nav`);e.innerHTML=`
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
  `;let t=e.querySelector(`.nav-toggle`),r=()=>{e.classList.remove(`menu-open`),t?.setAttribute(`aria-expanded`,`false`)};return t?.addEventListener(`click`,()=>{let n=e.classList.toggle(`menu-open`);t.setAttribute(`aria-expanded`,String(n))}),e.querySelectorAll(`.nav-links a`).forEach(e=>{e.addEventListener(`click`,r)}),e.querySelector(`#download-cv-btn`)?.addEventListener(`click`,()=>{n(),r()}),e}function i(){let e=document.createElement(`footer`);return e.innerHTML=`
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
  `,e}function a(e){e.innerHTML=``;let t=r();e.appendChild(t);let n=document.createElement(`main`);n.className=`home-main`,n.innerHTML=`
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
  `,e.appendChild(n);let a=i();e.appendChild(a)}function o(e){e.innerHTML=``;let t=r();e.appendChild(t);let n=document.createElement(`main`);n.className=`about-main`,n.innerHTML=`
    <section class="about-hero">
      <div class="about-hero-copy">
        <h1>About <span class="about-title-accent">Me</span></h1>
        <p class="about-intro">
          I'm Vedad Ramić, a Software Engineering student passionate about learning modern technologies and gaining practical experience through real projects and collaboration. I value feedback, work well in teams, and always look for ways to contribute meaningfully. Over the years, I have developed a disciplined, reliable, hardworking, and adaptable approach that helps me grow in different environments and deliver consistent results.
        </p>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Background</h2>
      </div>
      <div class="about-grid">
        <article class="card about-card about-card--emerald">
          <h3>Education</h3>
          <p>
            Currently studying Software Engineering with a strong focus on learning modern technologies and participating in faculty and team projects.
          </p>
        </article>

        <article class="card about-card about-card--blue">
          <h3>Community Involvement</h3>
          <ul class="about-list">
            <li>Member of Omladinska Banka Doboj Jug</li>
            <li>Licensed Radio Amateur (E75VRM)</li>
            <li>Organizer of 3x3 basketball tournaments</li>
            <li>
              <a href="https://www.instagram.com/3x3dobojjug/" target="_blank" rel="noopener noreferrer" class="about-inline-link">@3x3dobojjug</a>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Technologies I Use and Learn</h2>
      </div>
      <div class="about-grid about-tech-grid">
        <article class="card about-tech-card">
          <h3>Frontend</h3>
          <div class="tag-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaFX</span>
            <span>Astro</span>
            <span>React</span>
          </div>
        </article>

        <article class="card about-tech-card about-tech-card--violet">
          <h3>Backend</h3>
          <div class="tag-list">
            <span>C</span>
            <span>C++</span>
            <span>C#</span>
            <span>Node.js</span>
            <span>Java</span>
          </div>
        </article>

        <article class="card about-tech-card about-tech-card--amber">
          <h3>Databases</h3>
          <div class="tag-list">
            <span>SQL</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
          </div>
        </article>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Contact Me</h2>
      </div>
      <div class="about-contact-panel">
        <p>
          If you liked what you saw or would like to know more about me, feel free to contact me through any of my social media platforms.
        </p>
      </div>
    </section>
  `,e.appendChild(n);let a=i();e.appendChild(a)}function s(e){e.innerHTML=``;let t=r();e.appendChild(t);let n=document.createElement(`main`);n.className=`projects-main`,n.innerHTML=`
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
  `,e.appendChild(n);let a=i();e.appendChild(a)}var c={"/":a,"/about":o,"/projects":s};function l(){return(window.location.hash||`#/`).replace(`#`,``)||`/`}function u(){let e=c[l()]||a,t=document.querySelector(`#app`);t&&(e(t),d())}function d(){let e=l();document.querySelectorAll(`nav .nav-links a`).forEach(t=>{let n=(t.getAttribute(`href`)||``).replace(`#`,``)||`/`;t.classList.toggle(`active`,n===e)})}window.addEventListener(`hashchange`,u),u();