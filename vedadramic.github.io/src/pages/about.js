import { createHeader } from '../components/header.js'
import { createFooter } from '../components/footer.js'

export function renderAbout(app) {
  app.innerHTML = ''
  
  const header = createHeader()
  app.appendChild(header)
  
  const main = document.createElement('main')
  main.className = 'about-main'
  main.innerHTML = `
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
  `
  app.appendChild(main)
  
  const footer = createFooter()
  app.appendChild(footer)
}
