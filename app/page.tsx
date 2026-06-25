"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* 1. Barre de navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100/80 z-50 px-3 sm:px-5 py-2.5 sm:py-3.5 flex justify-between items-center shadow-sm"
      >
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg font-bold tracking-tighter text-gray-900"
        >
          Arif C.
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium text-gray-600"
        >
          <a href="#apropos" className="hover:text-[#0070f3] transition-colors duration-300">À propos</a>
          <a href="#projets" className="hover:text-[#0070f3] transition-colors duration-300">Projets</a>
          <a href="/contact" className="hover:text-[#0070f3] transition-colors duration-300">Contact</a>
        </motion.div>
        {/* Menu mobile */}
        {/* Bouton hamburger mobile */}
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center space-y-1.5 p-2 bg-transparent z-50"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </motion.button>
        {/* Menu mobile déroulant - Masqué par défaut */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isMenuOpen ? { opacity: 1, y: 0, visibility: 'visible' } : { opacity: 0, y: -20, visibility: 'hidden' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100/80 shadow-lg lg:hidden origin-top z-40"
        >
          <div className="flex flex-col space-y-3 py-4 px-6">
            <a href="#apropos" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">À propos</a>
            <a href="#projets" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">Projets</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">Contact</a>
          </div>
        </motion.div>
      </motion.nav>

      {/* 2. Section Hero (Présentation) */}
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 max-w-4xl mx-auto min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6 text-[#0070f3]"
          whileHover={{ scale: 1.01 }}
        >
          Bonjour, je suis Arif Chitou.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          Développeur web fullstack passionné par la création d'applications modernes, performantes et intuitives.
        </motion.p>
      </motion.header>

      {/* 2.5 Section À propos */}
      <motion.section 
        id="apropos"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-gray-100/80"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl font-bold tracking-tighter mb-3 sm:mb-4 text-[#0070f3]"
        >
          À propos de moi
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl"
        >
          Avec une solide expérience en développement web, je me spécialise dans la création d'applications 
          fullstack en utilisant des technologies modernes comme Next.js, React, Node.js et TypeScript. 
          J'aime construire des interfaces utilisateur propres et des backends robustes qui offrent une expérience 
          fluide et performante.
        </motion.p>
      </motion.section>

      {/* 3. Section Projets */}
      <motion.section 
        id="projets" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-gray-100/80"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6 sm:mb-8 text-[#0070f3]"
        >
          Projets sélectionnés
        </motion.h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Projet 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 15px 45px rgba(0, 112, 243, 0.12)",
              borderColor: "rgba(0, 112, 243, 0.4)"
            }}
            className="group bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-gray-100/80 hover:border-[#0070f3]/30 transition-all duration-400 cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">📁 Portfolio Personnel</h3>
            <p className="text-sm text-gray-600 mb-4">Mon portfolio professionnel pour mettre en avant mes compétences et projets en développement web fullstack.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Next.js</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">TypeScript</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Projet 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 15px 45px rgba(0, 112, 243, 0.12)",
              borderColor: "rgba(0, 112, 243, 0.4)"
            }}
            className="group bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-gray-100/80 hover:border-[#0070f3]/30 transition-all duration-400 cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">✅ Gestionnaire de Tâches</h3>
            <p className="text-sm text-gray-600 mb-4">Application de todo list avec authentification utilisateur et gestion de projets en temps réel.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">React</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Node.js</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">MongoDB</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Express</span>
            </div>
          </motion.div>
          
          {/* Projet 3 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              boxShadow: "0 15px 45px rgba(0, 112, 243, 0.12)",
              borderColor: "rgba(0, 112, 243, 0.4)"
            }}
            className="group bg-white p-3 sm:p-5 rounded-2xl shadow-sm border border-gray-100/80 hover:border-[#0070f3]/30 transition-all duration-400 cursor-pointer"
          >
            <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">📝 Blog Technique</h3>
            <p className="text-sm text-gray-600 mb-4">Plateforme de blog avec système de commentaires et recherche full-text. Déploiement automatique via CI/CD.</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Next.js</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Prisma</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">PostgreSQL</span>
              <span className="text-xs font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full border border-blue-100">Vercel</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 4. Section Contact & Footer */}
      <motion.footer 
        id="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-gray-100/80 text-center bg-white/50"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl sm:text-3xl font-bold tracking-tighter mb-3 sm:mb-4 text-[#0070f3]"
        >
          Discutons ensemble
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-gray-600 mb-6"
        >
          Disponible pour de nouvelles opportunités.
        </motion.p>
        <motion.a 
          href="/contact"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.04, 
            boxShadow: "0 15px 40px rgba(0, 112, 243, 0.3)",
            y: -2
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", damping: 12, stiffness: 150, duration: 0.3 }}
          className="inline-block bg-[#0070f3] hover:bg-[#3b82f6] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-400 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30"
        >
          Me contacter
        </motion.a>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-xs text-gray-500"
        >
          © {new Date().getFullYear()} Arif Chitou. Tous droits réservés.
        </motion.p>
      </motion.footer>

    </div>
  );
}