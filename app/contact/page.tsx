"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [warning, setWarning] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setWarning(null);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Envoie directement à Formspree (gratuit, pas besoin de backend)
      const response = await fetch("https://formspree.io/f/mlgygryk", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Navigation */}
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
          <Link href="/">Arif C.</Link>
        </motion.span>
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium text-gray-600"
        >
          <Link href="/#apropos" className="hover:text-[#0070f3] transition-all duration-300">À propos</Link>
          <Link href="/#projets" className="hover:text-[#0070f3] transition-all duration-300">Projets</Link>
          <Link href="/contact" className="hover:text-[#0070f3] transition-all duration-300">Contact</Link>
        </motion.div>
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
            <Link href="/#apropos" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">À propos</Link>
            <Link href="/#projets" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">Projets</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium text-gray-600 hover:text-[#0070f3] transition-colors duration-300 py-2">Accueil</Link>
          </div>
        </motion.div>
      </motion.nav>

      {/* Contact Section */}
      <motion.main 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 max-w-2xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tighter mb-4 text-[#0070f3]"
          whileHover={{ scale: 1.01 }}
        >
          Me contacter
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10"
        >
          Remplis ce formulaire ou envoie-moi directement un email à 
          <a href="mailto:arifchitou6@gmail.com" className="text-[#0070f3] hover:text-[#3b82f6] underline transition-colors duration-300">arifchitou6@gmail.com</a>.
        </motion.p>

        <motion.form 
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-30px" }}
          transition={{ staggerChildren: 0.15, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0070f3]/50 focus:border-[#0070f3] transition-all duration-400 text-sm sm:text-base placeholder:text-gray-400"
              placeholder="Votre nom"
            />
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0070f3]/50 focus:border-[#0070f3] transition-all duration-400 text-sm sm:text-base placeholder:text-gray-400"
              placeholder="votre@email.com"
            />
          </motion.div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0070f3]/50 focus:border-[#0070f3] transition-all duration-400 resize-none text-sm sm:text-base placeholder:text-gray-400"
              placeholder="Votre message..."
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={status === "loading"}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={status !== "loading" ? { 
              scale: 1.04, 
              boxShadow: "0 15px 40px rgba(0, 112, 243, 0.3)",
              y: -2
            } : {}}
            whileTap={status !== "loading" ? { scale: 0.96 } : {}}
            transition={{ type: "spring", damping: 12, stiffness: 150, duration: 0.3 }}
            className="w-full bg-[#0070f3] hover:bg-[#3b82f6] disabled:bg-[#6b7280] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-400 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </motion.button>

          {/* Message de feedback */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <p className="text-green-600 text-sm">
                ✅ Message reçu avec succès !
              </p>
              {warning && (
                <p className="text-orange-500 text-xs mt-2">
                  ⚠️ {warning}
                </p>
              )}
              <p className="text-gray-500 text-xs mt-1">
                Je te répondrai rapidement.
              </p>
            </motion.div>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-red-600 text-sm"
            >
              ❌ Erreur. Veuillez réessayer ou me contacter par email directement.
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 pt-6 border-t border-gray-100/80"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl font-bold tracking-tighter mb-4 sm:mb-5 text-[#0070f3]"
          >
            Autres moyens
          </motion.h2>
          <motion.div 
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delay: 0.5 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.a
              href="https://github.com/arifchitou"
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#0070f3] transition-colors duration-400"
            >
              <span>💻</span>
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/arif-chitou"
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#0070f3] transition-colors duration-400"
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://twitter.com/arifchitou"
              target="_blank"
              rel="noopener noreferrer"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#0070f3] transition-colors duration-400"
            >
              <span>🐦</span>
              <span>Twitter</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
