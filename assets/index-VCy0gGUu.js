(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.createElement(`nav`);return e.innerHTML=`
    <div class="nav-container">
      <a href="#/" class="logo">🚀 Vedad Ramic</a>
      <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/projects">Projects</a></li>
        <li><a href="#/cv">CV</a></li>
      </ul>
    </div>
  `,e}function t(){let e=document.createElement(`footer`);return e.innerHTML=`
    <div class="footer-container">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank" title="LinkedIn" aria-label="LinkedIn">
          <span>in</span>
        </a>
        <a href="https://github.com/vedadramic" target="_blank" title="GitHub" aria-label="GitHub">
          <span>⚙</span>
        </a>
        <a href="https://www.facebook.com/vedad.ramic1?locale=hr_HR" target="_blank" title="Facebook" aria-label="Facebook">
          <span>f</span>
        </a>
        <a href="https://www.instagram.com/vedadramic_/" target="_blank" title="Instagram" aria-label="Instagram">
          <span>📷</span>
        </a>
      </div>
      
      <div class="footer-content">
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About Me</a></li>
            <li><a href="#/projects">Projects</a></li>
            <li><a href="#/cv">Download CV</a></li>
          </ul>
        </div>
        
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/vedad-ramic/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/vedadramic" target="_blank">GitHub</a></li>
            <li><a href="https://www.facebook.com/vedad.ramic1?locale=hr_HR" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/vedadramic_/" target="_blank">Instagram</a></li>
          </ul>
        </div>
        
        <div>
          <h4>About</h4>
          <ul>
            <li>Computer Science Student</li>
            <li>Full-Stack Developer</li>
            <li>Tech Enthusiast</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 Vedad Ramic. All rights reserved.</p>
      </div>
    </div>
  `,e}function n(n){n.innerHTML=``;let r=e();n.appendChild(r);let i=document.createElement(`main`);i.innerHTML=`
    <section class="hero">
      <div class="hero-content">
        <div class="hero-subtitle">Welcome to my portfolio</div>
        <h1>Hi, I'm Vedad 👋</h1>
        <p class="hero-description">
          I'm a Computer Science student passionate about building modern web applications and solving complex problems through code. 
          Currently exploring full-stack development and cloud technologies to create impactful solutions.
        </p>
        <div class="cta-buttons">
          <a href="#/about" class="btn btn-primary">Learn About Me</a>
          <a href="#/projects" class="btn btn-secondary">View Projects</a>
        </div>
      </div>
      <div class="hero-image">
        <div style="width: 300px; height: 300px; background: linear-gradient(135deg, #0f3f6b, #00d4ff); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
          <div style="text-align: center;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">👨‍💻</div>
            <div>Your Profile Photo Here</div>
          </div>
        </div>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>What I Do</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <h3>🚀 Web Development</h3>
          <p>
            Building responsive, modern web applications using JavaScript, React, and modern frameworks. 
            I focus on clean code and user-friendly interfaces.
          </p>
        </div>
        <div class="card">
          <h3>☁️ Cloud Solutions</h3>
          <p>
            Exploring cloud platforms and deployment strategies to build scalable applications. 
            Learning DevOps practices and containerization.
          </p>
        </div>
        <div class="card">
          <h3>💡 Problem Solving</h3>
          <p>
            I enjoy tackling complex problems with creative solutions. 
            Experienced in algorithms, data structures, and software architecture.
          </p>
        </div>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Key Technologies</h2>
      </div>
      <p style="margin-bottom: 2rem;">
        JavaScript • React • Node.js • HTML/CSS • Git • Python • Java • SQL • Firebase • Azure
      </p>
    </section>
  `,n.appendChild(i);let a=t();n.appendChild(a)}function r(n){n.innerHTML=``;let r=e();n.appendChild(r);let i=document.createElement(`main`);i.innerHTML=`
    <section class="hero" style="margin-bottom: 3rem;">
      <div class="hero-image">
        <div style="width: 250px; height: 250px; background: linear-gradient(135deg, #6c5ce7, #00d4ff); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
          <div style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">📸</div>
            <div>Your Photo Here</div>
          </div>
        </div>
      </div>
      <div class="hero-content">
        <h1>About Me</h1>
        <p style="font-size: 1.1rem; line-height: 1.8;">
          I'm Vedad Ramic, a Computer Science student with a passion for technology and problem-solving. 
          I'm driven by curiosity and the desire to build meaningful applications that make a difference.
        </p>
        <p>
          Beyond coding, I'm actively involved in my community through various initiatives including the Youth Bank Doboj Jug, 
          where I've developed leadership and project management skills. I'm also a licensed radio amateur (E75VRM) and 
          member of a radio amateur club, which has taught me discipline and communication skills.
        </p>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Background</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <h3>🎓 Education</h3>
          <p>
            Currently studying Computer Science with focus on web development and software engineering. 
            Actively learning new technologies and participating in faculty projects.
          </p>
        </div>
        <div class="card">
          <h3>🤝 Community Involvement</h3>
          <p>
            Member of Youth Bank Doboj Jug | Licensed Radio Amateur (E75VRM) | Radio Amateur Club Member | 
            Organized 3x3 Basketball Tournament
          </p>
        </div>
        <div class="card">
          <h3>💼 Skills Developed</h3>
          <p>
            <strong>Technical:</strong> Full-stack web development, problem-solving, software architecture<br>
            <strong>Soft Skills:</strong> Communication, project leadership, teamwork, organization
          </p>
        </div>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Technical Skills</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <h3>Frontend</h3>
          <ul style="list-style: none; padding: 0;">
            <li>✓ HTML/CSS/JavaScript</li>
            <li>✓ React</li>
            <li>✓ Responsive Design</li>
            <li>✓ UI/UX Principles</li>
          </ul>
        </div>
        <div class="card">
          <h3>Backend</h3>
          <ul style="list-style: none; padding: 0;">
            <li>✓ Node.js</li>
            <li>✓ Express.js</li>
            <li>✓ REST APIs</li>
            <li>✓ Database Design</li>
          </ul>
        </div>
        <div class="card">
          <h3>Other</h3>
          <ul style="list-style: none; padding: 0;">
            <li>✓ Python</li>
            <li>✓ Java</li>
            <li>✓ Git & GitHub</li>
            <li>✓ Azure Cloud</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Why Work With Me</h2>
      </div>
      <div style="background: var(--accent-bg); border-left: 4px solid var(--accent); padding: 2rem; border-radius: 8px;">
        <p style="margin: 0;">
          I bring a combination of technical skills, problem-solving ability, and genuine passion for learning. 
          I'm reliable, adaptable, and always eager to tackle new challenges. My experience in community projects 
          has taught me the value of collaboration and delivering results that matter.
        </p>
      </div>
    </section>
  `,n.appendChild(i);let a=t();n.appendChild(a)}function i(n){n.innerHTML=``;let r=e();n.appendChild(r);let i=document.createElement(`main`);i.innerHTML=`
    <section>
      <h1>Projects</h1>
      <p style="font-size: 1.1rem; color: var(--text);">
        A collection of faculty and practice projects that showcase my skills and learning journey.
      </p>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Faculty Projects</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <h3>📜 E-Diploma</h3>
          <p>
            A digital diploma management system that streamlines the creation and distribution of academic credentials. 
            This project solves the problem of secure digital verification of educational achievements. 
            Built with modern web technologies including JavaScript, Node.js, and database management systems.
          </p>
          <a href="https://github.com/vedadramic" target="_blank" style="display: inline-block; margin-top: 1rem;">
            View on GitHub →
          </a>
        </div>
        
        <div class="card">
          <h3>💇 Barbershop</h3>
          <p>
            A comprehensive barbershop management application designed to handle appointments, customer profiles, and services. 
            This system solves scheduling inefficiencies and improves customer experience through automation. 
            Developed using full-stack technologies including React, Node.js, and relational databases.
          </p>
          <a href="https://github.com/vedadramic" target="_blank" style="display: inline-block; margin-top: 1rem;">
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
    
    <section>
      <div class="section-title">
        <h2>Practice Projects</h2>
      </div>
      <div class="cards-grid">
        <div class="card">
          <h3>🧹 Smetovi</h3>
          <p>
            An interactive cleaning/organization application that helps users manage household tasks and maintain organization. 
            The project demonstrates practical problem-solving for everyday challenges. 
            Implemented using JavaScript, responsive design, and local storage for data persistence.
          </p>
          <a href="https://github.com/vedadramic" target="_blank" style="display: inline-block; margin-top: 1rem;">
            View on GitHub →
          </a>
        </div>
        
        <div class="card">
          <h3>🚌 Buses</h3>
          <p>
            A public transportation information system providing real-time bus schedules and route information. 
            This application solves the challenge of finding accurate transportation data. 
            Built with JavaScript, API integration, and interactive maps for better user experience.
          </p>
          <a href="https://github.com/vedadramic" target="_blank" style="display: inline-block; margin-top: 1rem;">
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
    
    <section>
      <div style="background: var(--accent-bg); border: 1px solid var(--accent-border); padding: 2rem; border-radius: 12px;">
        <h3 style="margin-top: 0;">Want to see more?</h3>
        <p>
          Check out my GitHub profile for more projects, code samples, and contributions. 
          I'm continuously learning and building new projects to improve my skills.
        </p>
        <a href="https://github.com/vedadramic" target="_blank" class="btn btn-primary">
          Visit My GitHub
        </a>
      </div>
    </section>
  `,n.appendChild(i);let a=t();n.appendChild(a)}function a(n){n.innerHTML=``;let r=e();n.appendChild(r);let i=document.createElement(`main`);i.innerHTML=`
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
  `,n.appendChild(i),i.querySelector(`#download-cv`).addEventListener(`click`,o);let a=t();n.appendChild(a)}function o(){let e=document.querySelector(`#cv-content`);window.html2pdf===void 0?(alert(`For PDF download, please use the browser print function (Ctrl+P or Cmd+P) and select "Save as PDF"`),window.print()):window.html2pdf().set({margin:10,filename:`Vedad_Ramic_CV.pdf`,image:{type:`jpeg`,quality:.98},html2canvas:{scale:2},jsPDF:{orientation:`portrait`,unit:`mm`,format:`a4`}}).from(e).save()}var s={"/":n,"/about":r,"/projects":i,"/cv":a};function c(){return(window.location.hash||`#/`).replace(`#`,``)||`/`}function l(){let e=s[c()]||n,t=document.querySelector(`#app`);t.innerHTML=``,e(t),u()}function u(){let e=c();document.querySelectorAll(`nav a`).forEach(t=>{t.classList.remove(`active`);let n=t.getAttribute(`href`);(e===`/`&&n===`/`||e===n)&&t.classList.add(`active`)})}window.addEventListener(`hashchange`,l),l();