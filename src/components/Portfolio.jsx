import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

const projects = [
  { name: 'Clothing Store Website (Demo)', desc: 'Helps businesses sell products online with smooth checkout', category: 'E-Commerce' },
  { name: 'Doctor Booking Website (Demo)', desc: 'Allows users to book appointments easily online', category: 'Business' },
  { name: 'Restaurant Website (Demo)', desc: 'Helps restaurants receive online orders directly', category: 'Business' },
  { name: 'Startup Landing Page (Demo)', desc: 'Converts visitors into leads with proven design', category: 'Landing' },
  { name: 'EduLearn Platform (Demo)', desc: 'Online courses platform with student dashboard', category: 'Business' },
  { name: 'BuildPro Agency (Demo)', desc: 'Showcases services to attract construction leads', category: 'Portfolio' },
]

const filters = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Landing']

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const phone = '918305995654'

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phone}?text=I want a website like this`, '_blank')
  }

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Websites That Deliver Real Results
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary mb-4">See how I help businesses get more customers online</p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === f
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <span className="text-slate-400 text-sm font-medium">Website Preview</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-lg font-semibold text-text-primary">{project.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{project.desc}</p>
                  <div className="buttons flex gap-3">
                    <a href="#" className="demo-btn flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface text-text-primary border border-border rounded-lg text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all">
                      🌐 View Live
                    </a>
                    <button
                      onClick={handleWhatsApp}
                      className="cta-btn flex-1 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg text-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                      💬 Get Similar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

