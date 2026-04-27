import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Phone, ArrowUpRight } from 'lucide-react'
import { useToast } from '../context/ToastContext'

const plans = [
  {
    name: 'Starter',
    price: '₹4,999',
    bestFor: 'Best for small shops',
    features: [
      { text: '1–3 Page Website', included: true },
      { text: 'Mobile Friendly', included: true },
      { text: 'Basic SEO', included: true },
      { text: 'Contact Form', included: true },
      { text: '7 Days Delivery', included: true },
      { text: '100% Satisfaction Guarantee', included: true },
    ],
  },
  {
    name: 'Professional',
    price: '₹9,999',
    popular: true,
    bestFor: 'Best for growing business',
    features: [
      { text: '5–10 Pages Website', included: true },
      { text: 'Mobile Friendly', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Custom Design', included: true },
      { text: 'Admin Panel', included: true },
      { text: '14 Days Delivery', included: true },
      { text: '1 Month Support', included: true },
      { text: '100% Satisfaction Guarantee', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '₹24,999',
    bestFor: 'Best for serious sales',
    features: [
      { text: 'Unlimited Pages', included: true },
      { text: 'E-Commerce Store', included: true },
      { text: 'Custom Backend', included: true },
      { text: 'Payment Gateway', included: true },
      { text: 'Database Integration', included: true },
      { text: '30 Days Delivery', included: true },
      { text: '3 Months Support', included: true },
      { text: '100% Satisfaction Guarantee', included: true },
    ],
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { addToast } = useToast()
  const phone = '918305995654'

  const handleWhatsApp = (planName) => {
    window.open(`https://wa.me/${phone}?text=Hi, I want the ${planName} plan`, '_blank')
  }

  return (
    <section id="pricing" className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6 section-title">
            Choose the Right Plan for Your Business
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-primary font-semibold text-lg mb-4 sub-text">
            No advance payment — pay after seeing demo
          </p>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-6">
            Simple pricing. No confusion. Just results.
          </p>
          <p className="offer text-primary font-semibold text-lg">🔥 Limited Offer: Free consultation + fast delivery</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`popular-plan relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'scale-105 border-primary shadow-2xl shadow-primary/25 ring-2 ring-primary/30'
                  : 'bg-surface border-border hover:border-border-hover'
              }`}
              style={plan.popular ? { transform: 'scale(1.05)' } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {plan.bestFor && (
                <p className="text-primary-light text-sm font-medium mb-3 text-center">{plan.bestFor}</p>
              )}

              <h3 className="text-text-primary text-sm font-semibold mb-2 text-center">{plan.name}</h3>
              <div className="font-display text-4xl font-bold text-text-primary mb-6 text-center">
                {plan.price} <span className="text-text-muted text-base font-normal">/ project</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs bg-primary/20 text-primary">
                      <Check size={12} />
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer shadow-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-primary/50'
                    : 'bg-primary/90 text-white border border-primary/50 hover:bg-primary'
                }`}
              >
                <Phone size={16} />
                 Book Free Call
              </button>
            </motion.div>
          ))}
        </div>

        <div className="trust text-center py-12 px-6 bg-surface/50 rounded-2xl border border-border mx-auto max-w-2xl">
          <p className="text-text-secondary text-lg font-medium">
            ⚡ No hidden charges | 💬 Direct WhatsApp support | 🚀 Fast delivery
          </p>
        </div>
      </div>
    </section>
  )
}

