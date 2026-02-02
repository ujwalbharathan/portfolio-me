'use client'

import Image from 'next/image'

interface AboutProps {
  onNavigateToResume?: () => void
}

export default function About({ onNavigateToResume }: AboutProps) {
  const handleCompanyClick = () => {
    if (onNavigateToResume) {
      onNavigateToResume()
      window.scrollTo(0, 0)
    }
  }

  return (
    <article className="about active">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p>
            Passionate Front-end Developer with 3+ years of experience in building dynamic, responsive web applications.
            Proficient in React.js, HTML, CSS, JavaScript, TypeScript, Next.js, and Node.js.
          </p>
          <p>
            Skilled in UI design, performance optimization, and full project lifecycle management.
            Committed to continuous learning and building efficient, scalable solutions that enhance user experience.
            I specialize in creating modern, accessible interfaces and integrating RESTful APIs for seamless client-server communication.
          </p>
        </section>
        <section className="service">
          <h3 className="h3 service-title">What i&apos;m doing</h3>
          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <Image src="/images/icon-dev.svg" alt="Web development icon" width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Front-end Development</h4>
                <p className="service-item-text">
                  Building responsive and accessible applications using React.js, Next.js, TypeScript, and modern front-end technologies.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image src="/images/icon-design.svg" alt="design icon" width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">UI/UX Design</h4>
                <p className="service-item-text">
                  Translating Figma designs into pixel-perfect UI components with focus on user experience and accessibility.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image src="/images/icon-app.svg" alt="mobile app icon" width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Mobile Development</h4>
                <p className="service-item-text">
                  Developing cross-platform mobile applications using React Native with real-time updates and smooth transactions.
                </p>
              </div>
            </li>
            <li className="service-item">
              <div className="service-icon-box">
                <Image src="/images/icon-progress.svg" alt="performance icon" width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">Performance Optimization</h4>
                <p className="service-item-text">
                  Optimizing website performance, boosting Lighthouse scores to over 90 through code splitting and critical CSS.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className="clients">
          <h3 className="h3 clients-title">Companies</h3>
          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#" onClick={(e) => { e.preventDefault(); handleCompanyClick(); }} style={{ cursor: 'pointer' }}>
                <Image src="/images/growthplug-logo.png" alt="GrowthPlug" width={150} height={80} />
              </a>
            </li>
            <li className="clients-item">
              <a href="#" onClick={(e) => { e.preventDefault(); handleCompanyClick(); }} style={{ cursor: 'pointer' }}>
                <Image src="/images/lanware-logo.png" alt="Lanware Solutions" width={150} height={80} />
              </a>
            </li>
          </ul>
        </section>
      </article>
  )
}
