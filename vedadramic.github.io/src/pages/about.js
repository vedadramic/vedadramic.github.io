import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'

export function renderAbout(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'about-main'
  main.id = 'main-content'
  main.tabIndex = -1
  main.innerHTML = `
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
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
