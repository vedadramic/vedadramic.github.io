(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.createElement(`nav`);return e.innerHTML=`
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
          <li><a href="#/" class="nav-link active">Home</a></li>
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
  `,setTimeout(()=>{let n=e.querySelector(`.nav-toggle`),r=()=>{e.classList.remove(`menu-open`),n&&n.setAttribute(`aria-expanded`,`false`)};n&&n.addEventListener(`click`,()=>{let t=e.classList.toggle(`menu-open`);n.setAttribute(`aria-expanded`,String(t))}),e.querySelectorAll(`.nav-links a`).forEach(e=>{e.addEventListener(`click`,r)});let i=e.querySelector(`#download-cv-btn`);i&&i.addEventListener(`click`,()=>{t(),r()})},0),e}function t(){let e=document.createElement(`div`);e.innerHTML=`
    <div style="font-family: Arial, sans-serif; padding: 40px; background: white; color: #333;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #0f3f6b; padding-bottom: 20px;">
        <h1 style="margin: 0 0 5px; font-size: 28px; color: #0f3f6b;">Vedad Ramic</h1>
        <p style="margin: 0 0 10px; font-size: 14px; color: #666;">
          Computer Science Student | Full-Stack Developer | Tech Enthusiast
        </p>
        <p style="margin: 5px 0; font-size: 12px;">
          Email: vedad.ramic@example.com | Phone: +387 XXXXXXXXX | Doboj, Bosnia and Herzegovina
        </p>
        <p style="margin: 5px 0; font-size: 12px;">
          LinkedIn: linkedin.com/in/vedad-ramic | GitHub: github.com/vedadramic
        </p>
      </div>
      
      <!-- Professional Summary -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Professional Summary</h2>
        <p style="margin: 10px 0; font-size: 12px; line-height: 1.6;">
          Computer Science student with strong passion for web development and problem-solving. Experienced in building modern web applications using full-stack technologies. Active community member with proven leadership skills. Seeking internship opportunities to apply technical knowledge and contribute to meaningful projects.
        </p>
      </div>
      
      <!-- Education -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Education</h2>
        <div style="margin: 10px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 12px;">Computer Science</p>
          <p style="margin: 3px 0; font-size: 11px; color: #666;">University Name | Expected Graduation: 2025/2026</p>
          <ul style="margin: 5px 0 0; padding-left: 20px; font-size: 11px;">
            <li>Relevant Coursework: Web Development, Databases, Software Engineering, Algorithms, Data Structures</li>
            <li>Active participation in faculty projects and academic competitions</li>
          </ul>
        </div>
      </div>
      
      <!-- Technical Skills -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Technical Skills</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 11px;">
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Frontend Development</p>
            <p style="margin: 0;">HTML, CSS, JavaScript, React, Responsive Design, UI/UX Principles</p>
          </div>
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Backend Development</p>
            <p style="margin: 0;">Node.js, Express.js, REST APIs, Database Design, SQL</p>
          </div>
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Programming Languages</p>
            <p style="margin: 0;">JavaScript, Python, Java, SQL</p>
          </div>
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Tools & Technologies</p>
            <p style="margin: 0;">Git, GitHub, Firebase, Azure, VS Code, npm/Yarn</p>
          </div>
        </div>
      </div>
      
      <!-- Projects -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Projects</h2>
        
        <div style="margin: 10px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 12px;">E-Diploma Management System</p>
          <p style="margin: 3px 0; font-size: 11px; color: #0f3f6b;">Faculty Project | Technologies: JavaScript, Node.js, Database</p>
          <p style="margin: 3px 0; font-size: 11px;">Digital diploma management system for secure creation and distribution of academic credentials. Implemented authentication, user management, and diploma generation features.</p>
        </div>
        
        <div style="margin: 10px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 12px;">Barbershop Management Application</p>
          <p style="margin: 3px 0; font-size: 11px; color: #0f3f6b;">Faculty Project | Technologies: React, Node.js, SQL</p>
          <p style="margin: 3px 0; font-size: 11px;">Comprehensive booking system with customer management and service scheduling. Developed full-stack features for appointment handling and real-time updates.</p>
        </div>
        
        <div style="margin: 10px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 12px;">Smetovi (Cleaning Application)</p>
          <p style="margin: 3px 0; font-size: 11px; color: #0f3f6b;">Practice Project | Technologies: JavaScript, Local Storage</p>
          <p style="margin: 3px 0; font-size: 11px;">Interactive task management application for household organization. Features data persistence and responsive interface design.</p>
        </div>
        
        <div style="margin: 10px 0;">
          <p style="margin: 0; font-weight: bold; font-size: 12px;">Public Transportation System</p>
          <p style="margin: 3px 0; font-size: 11px; color: #0f3f6b;">Practice Project | Technologies: JavaScript, APIs</p>
          <p style="margin: 3px 0; font-size: 11px;">Real-time bus schedules and route information system. Integrated external APIs and implemented interactive maps for better UX.</p>
        </div>
      </div>
      
      <!-- Experience & Achievements -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Experience & Achievements</h2>
        <ul style="margin: 10px 0; padding-left: 20px; font-size: 11px;">
          <li style="margin: 5px 0;"><strong>Youth Bank Doboj Jug</strong> - Active Member | Developed project leadership and organizational skills</li>
          <li style="margin: 5px 0;"><strong>3x3 Basketball Tournament</strong> - Organizer | Demonstrated event coordination and team management abilities</li>
          <li style="margin: 5px 0;"><strong>Radio Amateur Club</strong> - Licensed Member (E75VRM) | Enhanced communication and technical skills</li>
          <li style="margin: 5px 0;"><strong>Faculty Projects</strong> - Multiple contributions | Worked on real-world problems with practical applications</li>
        </ul>
      </div>
      
      <!-- Key Competencies -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Key Competencies</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 11px;">
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Technical</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Full-Stack Web Development</li>
              <li>Problem-Solving</li>
              <li>Software Architecture</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
          <div>
            <p style="margin: 0; font-weight: bold; margin-bottom: 3px;">Soft Skills</p>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Communication</li>
              <li>Project Leadership</li>
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Languages -->
      <div style="margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px; font-size: 16px; color: #0f3f6b; border-bottom: 2px solid #0f3f6b; padding-bottom: 5px;">Languages</h2>
        <p style="margin: 10px 0; font-size: 11px;">
          <strong>English</strong> - Fluent | <strong>Bosnian</strong> - Native | <strong>Serbian/Croatian</strong> - Fluent
        </p>
      </div>
      
      <!-- Footer -->
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 10px; color: #999;">
        <p style="margin: 0;">References and additional information available upon request</p>
      </div>
    </div>
  `,window.html2pdf().set({margin:10,filename:`Vedad_Ramic_CV.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{orientation:`portrait`,unit:`mm`,format:`a4`}}).from(e).save()}function n(){let e=document.createElement(`footer`);return e.innerHTML=`
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
  `,e}function r(t){t.innerHTML=``;let r=e();t.appendChild(r);let i=document.createElement(`main`);i.className=`home-main`,i.innerHTML=`
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
  `,t.appendChild(i);let a=n();t.appendChild(a)}function i(t){t.innerHTML=``;let r=e();t.appendChild(r);let i=document.createElement(`main`);i.className=`about-main`,i.innerHTML=`
    <section class="about-hero">
      <div class="about-hero-copy">
        <h1>About <span class="about-title-accent">Me</span></h1>
        <p class="about-intro">
          I'm Vedad Ramić, a Software Engineering student passionate about learning modern technologies and gaining practical experience through real projects and collaboration. I value feedback, work well in teams, and always look for ways to contribute meaningfully. Over the years, I have developed a disciplined, reliable, hardworking, and adaptable approach that helps me grow in different environments and deliver consistent results.
        </p>
      </div>
    </section>

    <section class="about-section">
      <div class="section-title">
        <h2>Background</h2>
      </div>
      <div class="about-grid about-background-grid">
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

    <section class="about-section">
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

    <section class="about-section">
      <div class="section-title">
        <h2>Contact Me</h2>
      </div>
      <div class="about-contact-panel">
        <p>
          If you liked what you saw or would like to know more about me, feel free to contact me through any of my social media platforms.
        </p>
      </div>
    </section>
  `,t.appendChild(i);let a=n();t.appendChild(a)}function a(t){t.innerHTML=``;let r=e();t.appendChild(r);let i=document.createElement(`main`);i.className=`projects-main`,i.innerHTML=`
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
  `,t.appendChild(i);let a=n();t.appendChild(a)}function o(t){t.innerHTML=``;let r=e();t.appendChild(r);let i=document.createElement(`main`);i.innerHTML=`
    <div style="text-align: center; margin-bottom: 2rem;">
      <h1>My Resume</h1>
      <p style="color: var(--text); font-size: 1rem;">
        Download or view my professional resume below
      </p>
      <button id="download-cv" class="btn btn-primary" style="margin-top: 1rem;">
        📥 Download as PDF
      </button>
    </div>
    
    <section id="cv-content" style="background: var(--bg-secondary); padding: 2rem; border-radius: 12px; border: 1px solid var(--border);">
      <!-- CV Header -->
      <div style="text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 2px solid var(--accent);">
        <h1 style="margin: 0 0 0.5rem; font-size: 2rem;">Vedad Ramic</h1>
        <p style="margin: 0 0 1rem; color: var(--text);">
          Computer Science Student | Full-Stack Developer | Tech Enthusiast
        </p>
        <p style="margin: 0; font-size: 0.95rem;">
          <strong>Email:</strong> vedad.ramic@example.com | 
          <strong>Phone:</strong> +387 (your number) | 
          <strong>Location:</strong> Doboj, Bosnia and Herzegovina
        </p>
        <p style="margin: 0.5rem 0 0;">
          <strong>LinkedIn:</strong> linkedin.com/in/vedad-ramic | 
          <strong>GitHub:</strong> github.com/vedadramic
        </p>
      </div>
      
      <!-- Summary -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Professional Summary</h2>
        <p style="margin: 1rem 0 0;">
          Computer Science student with strong passion for web development and problem-solving. Experienced in building modern web applications using full-stack technologies. Active community member with proven leadership skills. Seeking internship opportunities to apply technical knowledge and contribute to meaningful projects.
        </p>
      </div>
      
      <!-- Education -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Education</h2>
        <div style="margin-top: 1rem;">
          <h3 style="margin: 0;">Computer Science</h3>
          <p style="margin: 0.25rem 0; color: var(--text);">
            <strong>University Name</strong> | Expected Graduation: 2025/2026
          </p>
          <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
            <li>Relevant Coursework: Web Development, Databases, Software Engineering, Algorithms, Data Structures</li>
            <li>Active participation in faculty projects and academic competitions</li>
          </ul>
        </div>
      </div>
      
      <!-- Technical Skills -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Technical Skills</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
          <div>
            <h4 style="margin-top: 0;">Frontend Development</h4>
            <p style="margin: 0;">HTML, CSS, JavaScript, React, Responsive Design, UI/UX Principles</p>
          </div>
          <div>
            <h4 style="margin-top: 0;">Backend Development</h4>
            <p style="margin: 0;">Node.js, Express.js, REST APIs, Database Design, SQL</p>
          </div>
          <div>
            <h4 style="margin-top: 0;">Programming Languages</h4>
            <p style="margin: 0;">JavaScript, Python, Java, SQL</p>
          </div>
          <div>
            <h4 style="margin-top: 0;">Tools & Technologies</h4>
            <p style="margin: 0;">Git, GitHub, Firebase, Azure, VS Code, npm/Yarn</p>
          </div>
        </div>
      </div>
      
      <!-- Projects -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Projects</h2>
        
        <div style="margin-top: 1rem;">
          <h4 style="margin: 0 0 0.5rem;">E-Diploma Management System</h4>
          <p style="margin: 0 0 0.5rem; color: var(--secondary); font-size: 0.95rem;">Faculty Project | Technologies: JavaScript, Node.js, Database</p>
          <p style="margin: 0;">
            Digital diploma management system for secure creation and distribution of academic credentials. Implemented authentication, user management, and diploma generation features.
          </p>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem;">Barbershop Management Application</h4>
          <p style="margin: 0 0 0.5rem; color: var(--secondary); font-size: 0.95rem;">Faculty Project | Technologies: React, Node.js, SQL</p>
          <p style="margin: 0;">
            Comprehensive booking system with customer management and service scheduling. Developed full-stack features for appointment handling and real-time updates.
          </p>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem;">Smetovi (Cleaning Application)</h4>
          <p style="margin: 0 0 0.5rem; color: var(--secondary); font-size: 0.95rem;">Practice Project | Technologies: JavaScript, Local Storage</p>
          <p style="margin: 0;">
            Interactive task management application for household organization. Features data persistence and responsive interface design.
          </p>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.5rem;">Public Transportation System</h4>
          <p style="margin: 0 0 0.5rem; color: var(--secondary); font-size: 0.95rem;">Practice Project | Technologies: JavaScript, APIs</p>
          <p style="margin: 0;">
            Real-time bus schedules and route information system. Integrated external APIs and implemented interactive maps for better UX.
          </p>
        </div>
      </div>
      
      <!-- Experience & Achievements -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Experience & Achievements</h2>
        <ul style="margin-top: 1rem; padding-left: 1.5rem;">
          <li><strong>Youth Bank Doboj Jug</strong> - Active Member | Developed project leadership and organizational skills</li>
          <li><strong>3x3 Basketball Tournament</strong> - Organizer | Demonstrated event coordination and team management abilities</li>
          <li><strong>Radio Amateur Club</strong> - Licensed Member (E75VRM) | Enhanced communication and technical skills</li>
          <li><strong>Faculty Projects</strong> - Multiple contributions | Worked on real-world problems with practical applications</li>
        </ul>
      </div>
      
      <!-- Skills Summary -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Key Competencies</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div>
            <h4 style="margin-top: 0;">Technical</h4>
            <ul style="margin: 0; padding-left: 1.5rem;">
              <li>Full-Stack Web Development</li>
              <li>Problem-Solving</li>
              <li>Software Architecture</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
          <div>
            <h4 style="margin-top: 0;">Soft Skills</h4>
            <ul style="margin: 0; padding-left: 1.5rem;">
              <li>Communication</li>
              <li>Project Leadership</li>
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Languages -->
      <div style="margin-bottom: 2rem;">
        <h2 style="color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.5rem;">Languages</h2>
        <p style="margin: 1rem 0 0;">
          <strong>English</strong> - Fluent | <strong>Bosnian</strong> - Native | <strong>Serbian/Croatian</strong> - Fluent
        </p>
      </div>
      
      <!-- Footer Note -->
      <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border); font-size: 0.9rem; color: var(--text);">
        <p style="margin: 0;">References and additional information available upon request</p>
      </div>
    </section>
  `,t.appendChild(i),i.querySelector(`#download-cv`).addEventListener(`click`,s);let a=n();t.appendChild(a)}function s(){let e=document.querySelector(`#cv-content`);window.html2pdf===void 0?(alert(`For PDF download, please use the browser print function (Ctrl+P or Cmd+P) and select "Save as PDF"`),window.print()):window.html2pdf().set({margin:10,filename:`Vedad_Ramic_CV.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{orientation:`portrait`,unit:`mm`,format:`a4`}}).from(e).save()}var c={"/":r,"/about":i,"/projects":a,"/cv":o};function l(){return(window.location.hash||`#/`).replace(`#`,``)||`/`}function u(){let e=c[l()]||r,t=document.querySelector(`#app`);t.innerHTML=``,e(t),d()}function d(){let e=l();document.querySelectorAll(`nav a`).forEach(t=>{t.classList.remove(`active`);let n=t.getAttribute(`href`);(e===`/`&&n===`/`||e===n)&&t.classList.add(`active`)})}window.addEventListener(`hashchange`,u),u();