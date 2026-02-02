'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  category: string
  image: string
}

const projects: Project[] = [
  { title: 'Finance', category: 'web development', image: '/images/project-1.jpg' },
  { title: 'Orizon', category: 'web development', image: '/images/project-2.png' },
  { title: 'Fundo', category: 'web design', image: '/images/project-3.jpg' },
  { title: 'Brawlhalla', category: 'applications', image: '/images/project-4.png' },
  { title: 'DSM.', category: 'web design', image: '/images/project-5.png' },
  { title: 'MetaSpark', category: 'web design', image: '/images/project-6.png' },
  { title: 'Summary', category: 'web development', image: '/images/project-7.png' },
  { title: 'Task Manager', category: 'applications', image: '/images/project-8.jpg' },
  { title: 'Arrival', category: 'web development', image: '/images/project-9.png' }
]

const categories = ['all', 'web design', 'applications', 'web development']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectOpen, setSelectOpen] = useState(false)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className={`select-list ${selectOpen ? 'active' : ''}`}>
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => {
                  setSelectedCategory(category)
                  setSelectOpen(false)
                }}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <Image src={project.image} alt={project.title} width={300} height={200} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
