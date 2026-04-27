import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    image: '/assets/hero.png',
    title: 'Get Clients Website',
    desc: 'Generated customer inquiries within first few days of launch',
    tag: 'Demo Project',
    hasDemo: true,
  },
  {
    image: '/assets/hero.png',
    title: 'Personal Brand Site',
    desc: 'Helped freelancer get better client responses online',
    tag: 'Demo Project',
    hasDemo: true,
  },
  {
    image: '/assets/hero.png',
    title: 'Clothing Store',
    desc: 'Enabled smooth online orders with payment system',
    tag: 'Demo Project',
    hasDemo: true,
  },
  {
    image: '/assets/hero.png',
    title: 'Content Blog',
    desc: 'Doubled organic traffic with SEO optimization',
    tag: 'Demo Project',
    hasDemo: true,
  },
  {
    image: '/assets/hero.png',
    title: 'Landing Page',
    desc: 'Generated leads immediately after launch',
    tag: 'Demo Project',
    hasDemo: true,
  },
  {
    image: '/assets/hero.png',
    title: 'Keep Your Website Running 24/7',
    desc: 'Fast, secure, always online — no downtime',
    tag: 'Client Project',
    hasDemo: false,
    isMaintenance: true,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const phone = '918305995654'

  const handleLead = (title, msg) => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Websites & Demo Projects That Convert Visitors
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary max-w-2xl mx-auto mb-4">
            Helping local businesses get customers through modern websites
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card relative p-6 rounded-2xl bg-surface border border-border hover:border-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col gap-3 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              <div className="relative">
                <div className="project-image w-full h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-slate-400 text-sm">Live Website Screenshot</span>
                  )}
                </div>
                <div className="tag absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                  {project.tag}
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-text-primary">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.desc}</p>

              <div className="buttons flex gap-3 pt-2">
                {project.hasDemo && (
                  <a 
                    href={project.demoLink || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="demo-btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-surface text-text-primary border border-border rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all flex-shrink-0"
                  >
                    🌐 Live Demo
                  </a>
                )}
                <button
                  onClick={() => handleLead(project.title, project.isMaintenance ? 'Get Maintenance Plan' : 'Get Similar Website')}
                  className="cta-btn flex-1 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg text-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all flex-shrink-0"
                >
                  {project.isMaintenance ? '💬 Get Maintenance Plan' : '💬 Get Similar'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="trust text-center py-8 px-6 bg-surface/50 rounded-2xl border border-border">
          <p className="text-text-secondary text-lg font-medium">
            ⭐ 10+ Projects Completed | ⚡ Fast Delivery | 💬 Client Support
          </p>
        </div>
      </div>
    </section>
  )
}

