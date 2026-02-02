'use client'

import Image from 'next/image'

interface BlogPost {
  title: string
  category: string
  date: string
  text: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    title: 'Design conferences in 2022',
    category: 'Design',
    date: '2022-02-23',
    text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    image: '/images/blog-1.jpg'
  },
  {
    title: 'Best fonts every designer',
    category: 'Design',
    date: '2022-02-23',
    text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
    image: '/images/blog-2.jpg'
  },
  {
    title: 'Design digest #80',
    category: 'Design',
    date: '2022-02-23',
    text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
    image: '/images/blog-3.jpg'
  },
  {
    title: 'UI interactions of the week',
    category: 'Design',
    date: '2022-02-23',
    text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
    image: '/images/blog-4.jpg'
  },
  {
    title: 'The forgotten art of spacing',
    category: 'Design',
    date: '2022-02-23',
    text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/blog-5.jpg'
  },
  {
    title: 'Design digest #79',
    category: 'Design',
    date: '2022-02-23',
    text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
    image: '/images/blog-6.jpg'
  }
]

export default function Blog() {
  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <figure className="blog-banner-box">
                  <Image src={post.image} alt={post.title} width={400} height={200} />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>Fab 23, 2022</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
