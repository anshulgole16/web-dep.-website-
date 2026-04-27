import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const defaultTestimonials = [
  { name: 'Rajesh Sharma', location: 'Shop Owner, Lashkar Market, Gwalior', rating: 5, text: 'My clothing store website increased orders 3x within first month. Fast and professional!' },
  { name: 'Dr. Priya Jain', location: 'Clinic Owner, Morar, Gwalior', rating: 5, text: 'Patients can now book appointments online easily. Excellent communication and reliable.' },
  { name: 'Vikram Singh', location: 'Restaurant Owner, City Centre, Gwalior', rating: 5, text: 'Online orders doubled after new website. Anshul understands business needs perfectly.' },
  { name: 'Neha Gupta', location: 'Tutor, Gwalior', rating: 5, text: 'My online classes platform looks professional and works flawlessly across devices.' },
  { name: 'Amit Patel', location: 'Business Consultant, Madhya Pradesh', rating: 5, text: 'Delivered high-quality business site on time. Results exceeded expectations.' },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [testimonials, setTestimonials] = useState(() => {
    const stored = localStorage.getItem('feedback')
    const parsed = stored ? JSON.parse(stored) : []
    return [...defaultTestimonials, ...parsed]
  })

  useEffect(() => {
    const handleStorage = () => {
      const stored = localStorage.getItem('feedback')
      const parsed = stored ? JSON.parse(stored) : []
      setTestimonials([...defaultTestimonials, ...parsed])
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <section className="py-24 px-6 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">Client Feedback</h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-text-secondary">Real results from real clients</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className={j < t.rating ? 'text-amber-400 fill-amber-400' : 'text-text-muted'} />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-text-primary text-sm font-medium">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

