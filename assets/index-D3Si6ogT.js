(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/downloads/Vedad_Ramic_CV.pdf`;function t(){return e}function n(){let e=document.createElement(`header`);e.className=`site-header`;let n=document.createElement(`a`);n.className=`skip-link`,n.href=`#main-content`,n.textContent=`Skip to content`,n.addEventListener(`click`,e=>{e.preventDefault(),document.querySelector(`#main-content`)?.focus()});let r=document.createElement(`nav`);r.setAttribute(`aria-label`,`Primary navigation`),r.innerHTML=`
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
          <a href="${t()}" class="button button--outline nav-download-btn" download="Vedad_Ramic_CV.pdf">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2"/></svg>
            Download CV
          </a>
        </div>
      </div>
    </div>
  `;let i=r.querySelector(`.nav-toggle`),a=()=>{r.classList.remove(`menu-open`),i?.setAttribute(`aria-expanded`,`false`)};return i?.addEventListener(`click`,()=>{let e=r.classList.toggle(`menu-open`);i.setAttribute(`aria-expanded`,String(e))}),r.querySelectorAll(`.nav-links a`).forEach(e=>{e.addEventListener(`click`,a)}),r.querySelector(`.nav-download-btn`)?.addEventListener(`click`,a),r.addEventListener(`keydown`,e=>{e.key===`Escape`&&(a(),i?.focus())}),e.append(n,r),e}function r(){let e=document.createElement(`footer`);return e.innerHTML=`
    <div class="footer-container">
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
  `,e}function i(e){e.innerHTML=``;let i=n();e.appendChild(i);let a=document.createElement(`main`);a.className=`home-main`,a.id=`main-content`,a.tabIndex=-1,a.innerHTML=`
    <section class="hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <h1 class="hero-title" id="home-title">Hi, I'm <span class="hero-name">Vedad Ramić</span>.</h1>
        <p class="hero-description">
          A Software Engineering student with a strong passion for learning, building modern applications, and exploring new technologies. I enjoy developing full-stack web applications and continuously improving my skills through hands-on projects and problem-solving. My focus is on understanding modern development practices, cloud technologies, and creating efficient, scalable software solutions.
        </p>
        <div class="hero-actions">
          <a href="#/projects" class="button button--primary">View Projects <span aria-hidden="true">→</span></a>
          <a href="${t()}" class="button button--outline" download="Vedad_Ramic_CV.pdf">
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
  `,e.appendChild(a);let o=r();e.appendChild(o)}function a(e){e.innerHTML=``;let t=n();e.appendChild(t);let i=document.createElement(`main`);i.className=`about-main`,i.id=`main-content`,i.tabIndex=-1,i.innerHTML=`
    <section class="page-hero about-hero" aria-labelledby="about-title">
      <div class="about-hero-copy">
        <p class="eyebrow">Get to know me</p>
        <h1 id="about-title">About <span class="accent">Me</span></h1>
        <p class="about-intro">
          I'm Vedad Ramić, a Software Engineering student passionate about learning modern technologies and gaining practical experience through real projects and collaboration. I value feedback, work well in teams, and always look for ways to contribute meaningfully. Over the years, I have developed a disciplined, reliable, hardworking, and adaptable approach that helps me grow in different environments and deliver consistent results.
        </p>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Background</h2>
      </div>
      <div class="about-grid background-grid">
        <article class="card about-card">
          <span class="card-number" aria-hidden="true">01</span>
          <h3>Education</h3>
          <p>
            Currently studying Software Engineering with a strong focus on learning modern technologies and participating in faculty and team projects.
          </p>
        </article>

        <article class="card about-card">
          <span class="card-number" aria-hidden="true">02</span>
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
        <h2>Experience</h2>
      </div>
      <div class="experience-list">
        <article class="experience-item">
          <div>
            <h3>Backend AI Engineer - Intern</h3>
            <p><a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" rel="noopener noreferrer">FlyRank AI</a> · Internship</p>
          </div>
          <time datetime="2026-07/2026-08">Jul, 2026 - Aug, 2026</time>
        </article>
        <article class="experience-item">
          <div>
            <h3>Software Developer</h3>
            <p><a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" rel="noopener noreferrer">GRAFiT GmbH</a> · Internship</p>
          </div>
          <time datetime="2026-02/2026-03">Feb, 2026 - Mar, 2026</time>
        </article>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Technologies I Use and Learn</h2>
      </div>
      <div class="about-tech-grid">
        <article class="card about-tech-card">
          <h3>Programming Languages</h3>
          <div class="tag-list">
            <span>C</span><span>C++</span><span>C#</span><span>Java</span><span>JavaScript</span>
          </div>
        </article>
        <article class="card about-tech-card">
          <h3>Web Development</h3>
          <div class="tag-list">
            <span>HTML</span><span>CSS</span><span>React</span><span>Astro</span>
          </div>
        </article>
        <article class="card about-tech-card">
          <h3>Desktop UI</h3>
          <div class="tag-list"><span>JavaFX</span></div>
        </article>
        <article class="card about-tech-card">
          <h3>Backend</h3>
          <div class="tag-list"><span>Node.js</span><span>Express</span></div>
        </article>
        <article class="card about-tech-card">
          <h3>Databases &amp; Query Languages</h3>
          <div class="tag-list">
            <span>SQL</span><span>MySQL</span><span>PostgreSQL</span>
          </div>
        </article>
        <article class="card about-tech-card">
          <h3>Tools &amp; Integrations</h3>
          <div class="tag-list"><span>Docker</span><span>Docker Compose</span><span>Stripe</span></div>
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
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" rel="noopener noreferrer" class="text-link">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  `,e.appendChild(i);let a=r();e.appendChild(a)}function o(e){e.innerHTML=``;let t=n();e.appendChild(t);let i=document.createElement(`main`);i.className=`projects-main`,i.id=`main-content`,i.tabIndex=-1,i.innerHTML=`
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
  `,e.appendChild(i);let a=r();e.appendChild(a)}var s={"/":i,"/about":a,"/projects":o};function c(){return(window.location.hash||`#/`).replace(`#`,``)||`/`}function l(){let e=c(),t=s[e]||i,n=document.querySelector(`#app`);n&&(t(n),u(),document.title=`${e===`/`?`Home`:e.slice(1).replace(/^./,e=>e.toUpperCase())} | Vedad Ramić`,window.location.hash&&window.scrollTo({top:0,behavior:`auto`}))}function u(){let e=c();document.querySelectorAll(`nav .nav-links a`).forEach(t=>{let n=(t.getAttribute(`href`)||``).replace(`#`,``)||`/`;t.classList.toggle(`active`,n===e),n===e?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}window.addEventListener(`hashchange`,l),l();