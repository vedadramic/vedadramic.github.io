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
        <article class="card about-tech-card about-tech-card--cyan">
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
        <h1><span class="projects-title-main">Pro</span><span class="projects-title-accent">jects</span></h1>
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
  `,e.appendChild(n);let a=i();e.appendChild(a)}var c={intro:`text-align: center; margin-bottom: 2rem;`,introText:`color: var(--text); font-size: 1rem;`,introButton:`margin-top: 1rem;`,panel:`background: var(--bg-secondary); padding: 2rem; border-radius: 12px; border: 1px solid var(--border);`,header:`text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 2px solid var(--accent);`,headerName:`margin: 0 0 0.5rem; font-size: 2rem;`,headerTagline:`margin: 0 0 1rem; color: var(--text);`,headerMeta:`margin: 0; font-size: 0.95rem;`,headerLinks:`margin: 0.5rem 0 0;`,section:`margin-bottom: 2rem;`,sectionTitle:`color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;`,sectionBody:`margin: 1rem 0 0;`,skillGrid:`display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;`,competencyGrid:`display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;`,projectBlock:`margin-top: 1rem;`,projectMeta:`margin: 0 0 0.5rem; color: var(--secondary); font-size: 0.95rem;`,list:`margin-top: 0.5rem; padding-left: 1.5rem;`,footer:`text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); font-size: 0.9rem; color: var(--text);`},l=[{title:`Frontend Development`,items:[`HTML`,`CSS`,`JavaScript`,`React`,`Responsive Design`,`UI/UX Principles`]},{title:`Backend Development`,items:[`Node.js`,`Express.js`,`REST APIs`,`Database Design`,`SQL`]},{title:`Programming Languages`,items:[`JavaScript`,`Python`,`Java`,`SQL`]},{title:`Tools & Technologies`,items:[`Git`,`GitHub`,`Firebase`,`Azure`,`VS Code`,`npm/Yarn`]}],u=[{title:`E-Diploma Management System`,meta:`Faculty Project | Technologies: JavaScript, Node.js, Database`,description:`Digital diploma management system for secure creation and distribution of academic credentials. Implemented authentication, user management, and diploma generation features.`},{title:`Barbershop Management Application`,meta:`Faculty Project | Technologies: React, Node.js, SQL`,description:`Comprehensive booking system with customer management and service scheduling. Developed full-stack features for appointment handling and real-time updates.`},{title:`Smetovi (Cleaning Application)`,meta:`Practice Project | Technologies: JavaScript, Local Storage`,description:`Interactive task management application for household organization. Features data persistence and responsive interface design.`},{title:`Public Transportation System`,meta:`Practice Project | Technologies: JavaScript, APIs`,description:`Real-time bus schedules and route information system. Integrated external APIs and implemented interactive maps for better UX.`}],d=[`<strong>Youth Bank Doboj Jug</strong> - Active Member | Developed project leadership and organizational skills`,`<strong>3x3 Basketball Tournament</strong> - Organizer | Demonstrated event coordination and team management abilities`,`<strong>Radio Amateur Club</strong> - Licensed Member (E75VRM) | Enhanced communication and technical skills`,`<strong>Faculty Projects</strong> - Multiple contributions | Worked on real-world problems with practical applications`],f=[{title:`Technical`,items:[`Full-Stack Web Development`,`Problem-Solving`,`Software Architecture`,`Version Control (Git)`]},{title:`Soft Skills`,items:[`Communication`,`Project Leadership`,`Teamwork`,`Time Management`]}];function p(e,t){return`
    <div style="${c.section}">
      <h2 style="${c.sectionTitle}">${e}</h2>
      ${t}
    </div>
  `}function m(e){return`
    <ul style="${c.list}">
      ${e.map(e=>`<li>${e}</li>`).join(``)}
    </ul>
  `}function h(e){return`
    <div style="${c.skillGrid}">
      ${e.map(e=>`
            <div>
              <h4 style="margin-top: 0;">${e.title}</h4>
              <p style="margin: 0;">${e.items.join(`, `)}</p>
            </div>
          `).join(``)}
    </div>
  `}function g(e){return`
    <div style="${c.competencyGrid}">
      ${e.map(e=>`
            <div>
              <h4 style="margin-top: 0;">${e.title}</h4>
              <ul style="margin: 0; padding-left: 1.5rem;">
                ${e.items.map(e=>`<li>${e}</li>`).join(``)}
              </ul>
            </div>
          `).join(``)}
    </div>
  `}function _(e){return`
    <div style="${c.projectBlock}">
      <h4 style="margin: 0 0 0.5rem;">${e.title}</h4>
      <p style="${c.projectMeta}">${e.meta}</p>
      <p style="margin: 0;">${e.description}</p>
    </div>
  `}function v(e){e.innerHTML=``;let t=r();e.appendChild(t);let a=document.createElement(`main`);a.innerHTML=`
    <div style="${c.intro}">
      <h1>My Resume</h1>
      <p style="${c.introText}">
        Download or view my professional resume below
      </p>
      <button id="download-cv" class="btn btn-primary" style="${c.introButton}">
        📥 Download as PDF
      </button>
    </div>
    
    <section id="cv-content" style="${c.panel}">
      <div style="${c.header}">
        <h1 style="${c.headerName}">Vedad Ramic</h1>
        <p style="${c.headerTagline}">
          Computer Science Student | Full-Stack Developer | Tech Enthusiast
        </p>
        <p style="${c.headerMeta}">
          <strong>Email:</strong> vedad.ramic@example.com | 
          <strong>Phone:</strong> +387 (your number) | 
          <strong>Location:</strong> Doboj, Bosnia and Herzegovina
        </p>
        <p style="${c.headerLinks}">
          <strong>LinkedIn:</strong> linkedin.com/in/vedad-ramic | 
          <strong>GitHub:</strong> github.com/vedadramic
        </p>
      </div>
      
      ${p(`Professional Summary`,`<p style="${c.sectionBody}">
          Computer Science student with strong passion for web development and problem-solving. Experienced in building modern web applications using full-stack technologies. Active community member with proven leadership skills. Seeking internship opportunities to apply technical knowledge and contribute to meaningful projects.
        </p>`)}
      
      ${p(`Education`,`
        <div style="${c.sectionBody}">
          <h3 style="margin: 0;">Computer Science</h3>
          <p style="margin: 0.25rem 0; color: var(--text);">
            <strong>University Name</strong> | Expected Graduation: 2025/2026
          </p>
          ${m([`Relevant Coursework: Web Development, Databases, Software Engineering, Algorithms, Data Structures`,`Active participation in faculty projects and academic competitions`])}
        </div>
        `)}
      
      ${p(`Technical Skills`,h(l))}
      
      ${p(`Projects`,u.map(_).join(``))}
      
      ${p(`Experience & Achievements`,m(d))}
      
      ${p(`Key Competencies`,g(f))}
      
      ${p(`Languages`,`<p style="${c.sectionBody}">
          <strong>English</strong> - Fluent | <strong>Bosnian</strong> - Native | <strong>Serbian/Croatian</strong> - Fluent
        </p>`)}

      <div style="${c.footer}">
        <p style="margin: 0;">References and additional information available upon request</p>
      </div>
    </section>
  `,e.appendChild(a),a.querySelector(`#download-cv`)?.addEventListener(`click`,n);let o=i();e.appendChild(o)}var y={"/":a,"/about":o,"/projects":s,"/cv":v};function b(){return(window.location.hash||`#/`).replace(`#`,``)||`/`}function x(){let e=y[b()]||a,t=document.querySelector(`#app`);t&&(e(t),S())}function S(){let e=b();document.querySelectorAll(`nav .nav-links a`).forEach(t=>{let n=(t.getAttribute(`href`)||``).replace(`#`,``)||`/`;t.classList.toggle(`active`,n===e)})}window.addEventListener(`hashchange`,x),x();