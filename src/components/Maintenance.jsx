import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Maintenance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 px-6 maintenance-section" style={{ marginTop: '60px', marginBottom: '80px' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6"
        >
          Website Maintenance & Support
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary mb-4 text-lg leading-relaxed max-w-lg mx-auto"
        >
          Keep your website fast, secure and always running — no downtime, no headaches.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary font-medium text-base mb-8 max-w-lg mx-auto"
        >
          Trusted by business owners for ongoing website support
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="maintenance-card inline-block p-[30px] rounded-2xl border border-primary bg-surface shadow-2xl hover:shadow-3xl hover:shadow-primary/30 transition-all duration-300" style={{ 
            width: '380px',
            backgroundColor: '#0f172a',
            borderColor: '#7c3aed',
            margin: '0 auto',
          }}
        >
          <h3 className="font-display text-3xl font-bold mb-4" style={{ color: '#a78bfa' }}>
            ₹1,999<span className="text-text-secondary text-xl font-normal">/month</span>
          </h3>
          <ul className="space-y-3 mb-8 text-left">
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">⚡</span>
              Speed Optimization
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">🔒</span>
              Security Updates
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">🛠</span>
              Bug Fixes
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">💾</span>
              Weekly Backup
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">📞</span>
              Priority Support
            </li>
          </ul>
          <button
            onClick={() => window.open('https://wa.me/918305995654?text=I want website maintenance', '_blank')}
            className="w-full maintenance-btn py-3 px-6 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mx-auto block"
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #4f46e5)',
              color: 'white',
              border: 'none',
              marginTop: '15px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            💬 Get Maintenance Plan
          </button>
        </motion.div>
      </div>
    </section>
  )
}

