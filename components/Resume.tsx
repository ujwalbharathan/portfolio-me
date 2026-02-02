'use client'

export default function Resume() {
  const education = [
    {
      title: 'Bachelor of Computer Application (BCA)',
      period: '2018 — 2021',
      text: 'Calicut University, Malappuram, Kerala.'
    }
  ]

  const experience = [
    {
      title: 'React Developer',
      period: 'April 2024 — Present',
      text: 'GROWTHPLUG, Kochi, Kerala. Developed responsive and accessible user interfaces using React.js and JavaScript. Enhanced legacy website builder with drag-and-drop functionality. Optimized website performance, boosting Lighthouse score to over 90. Built website migration tool for WordPress. Developed responsive chatbot application with WebSocket-based real-time communication.'
    },
    {
      title: 'Associate Software Engineer',
      period: 'Feb 2022 — March 2024',
      text: 'LANWARE SOLUTIONS, Kochi, Kerala. Designed and developed responsive applications using React.js. Integrated RESTful APIs for seamless client-server communication. Developed front-end for real estate platform. Built custom post template builder and social media post scheduling. Created QR code generation feature. Developed Project Management System (PMS). Built marketing application using Next.js. Developed React Native front-end for vending machine application.'
    }
  ]

  const skills = [
    { name: 'HTML5 / CSS3', value: 95 },
    { name: 'JavaScript', value: 95 },
    { name: 'TypeScript', value: 95 },
    { name: 'React.js', value: 80 },
    { name: 'Redux / Redux Toolkit', value: 85 },
    { name: 'REST APIs', value: 90 },
    { name: 'Next.js', value: 70 },
    { name: 'Node.js', value: 60 },
    { name: 'React Native', value: 60 },

  ]

  const handleDownload = (e?: any) => {
    if (e) e.preventDefault()
    const downloadUrl = `https://drive.google.com/uc?export=download&id=1gdRFHgz8Gf-LQceTj-SWKKxKqFgmB5Zj`
    const a = document.createElement('a')
    a.href = downloadUrl
    a.target = '_blank'
    a.rel = 'noopener noreferrer'
    a.download = 'Ujwal_T_B_Resume.pdf' 
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <article className="resume active">
      <header>
        <h2 className="h2 article-title">Resume</h2>
        <button className="download-btn" onClick={handleDownload}>
          <ion-icon name="download-outline"></ion-icon>
          <span>Download Resume</span>
        </button>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
