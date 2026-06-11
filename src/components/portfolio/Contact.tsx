import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] text-[#F5F0E8] scroll-mt-20"
    >
      <style>{`
        .social-icon-wrapper:hover .tooltip-label {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .tooltip-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          font-family: 'Caveat', cursive;
          font-size: 24px;
          font-weight: 700;
          color: #E63946;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            style={{ fontFamily: "var(--font-display)" }}
            className="font-black text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's build something.
          </motion.h2>

          <motion.p
            style={{ fontFamily: "var(--font-display)" }}
            className="text-xl font-extrabold sm:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Open for internships, collabs, and cool ideas.
          </motion.p>

          <motion.a
            href="mailto:dipakshedge160@gmail.com"
            style={{ boxShadow: "5px 5px 0px #E63946", fontFamily: "var(--font-mono)" }}
            className="inline-block bg-[#E63946] text-[#F5F0E8] border-[3px] border-[#E63946] px-8 py-4 font-bold uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{
              y: -2,
              boxShadow: "8px 8px 0px #E63946",
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <Mail className="inline w-5 h-5 mr-2" />
            dipakshedge160@gmail.com
          </motion.a>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.div className="social-icon-wrapper relative" whileHover={{ y: -2 }}>
              <span className="tooltip-label">See my code!</span>
              <a
                href="https://github.com/Im-Dipak-Shedge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)" }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#E63946] hover:border-[#E63946] transition-colors"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </motion.div>

            <motion.div className="social-icon-wrapper relative" whileHover={{ y: -2 }}>
              <span className="tooltip-label">Let's connect!</span>
              <a
                href="https://www.linkedin.com/in/dipak-shedge-195123340?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)" }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#E63946] hover:border-[#E63946] transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </motion.div>

            <motion.div className="social-icon-wrapper relative" whileHover={{ y: -2 }}>
              <span className="tooltip-label">Call me!</span>
              <a
                href="tel:+918097811674"
                style={{ fontFamily: "var(--font-mono)" }}
                className="flex items-center gap-2 border-[3px] border-[#F5F0E8] px-6 py-3 uppercase text-sm hover:bg-[#E63946] hover:border-[#E63946] transition-colors"
              >
                <Phone className="w-5 h-5" /> +91 80978 11674
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-16 border-t-[3px] border-[#F5F0E8]/20 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <p style={{ fontFamily: "var(--font-mono)" }} className="text-sm opacity-60">
              Dipak Shedge · Mumbai, Maharashtra
              <br />· Built with React, Tailwind & Motion ·
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
