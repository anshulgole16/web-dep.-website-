import { Mail, Phone, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-display text-xl font-bold text-primary mb-2">
          AG<span className="text-text-secondary">-</span>Developer
        </div>
        <p className="text-text-muted text-sm mb-4">Anshul Gole — Web Developer | Gwalior</p>
        <p className="text-text-secondary font-medium mb-6">
          Built for businesses that want real growth 🚀
        </p>
        <p className="text-primary font-medium text-lg mb-4">
          🚀 Need a website that actually gets customers? Let's talk.
        </p>
        <div className="flex items-center justify-center gap-6 mb-4 flex-wrap gap-y-4">
          <a href="https://www.linkedin.com/in/anshul-gole-3934a6340" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Linkedin size={20} />
          </a>
          <a href="https://www.instagram.com/anshul._.editor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Instagram size={20} />
          </a>
          <a href="mailto:anshulgole4@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Mail size={20} />
          </a>
          <a href="tel:+918305995654" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <Phone size={20} />
          </a>
        </div>
        <p className="text-text-muted text-xs">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  )
}

