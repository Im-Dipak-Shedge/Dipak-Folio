import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Profile Picture */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="border-[3px] border-[#1A1A1A] overflow-hidden max-w-sm mx-auto lg:mx-0 bg-[#E63946] aspect-[4/5] flex items-center justify-center"
              style={{ boxShadow: "8px 8px 0px #1A1A1A" }}
              whileHover={{
                rotate: 2,
                boxShadow: "12px 12px 0px #1A1A1A",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <img
                src="/profile.png"
                alt="Dipak Shedge"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <div className="relative">
            <div
              style={{ fontFamily: "var(--font-display)" }}
              className="absolute -left-4 -top-16 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
            >
              02
            </div>

            <motion.div
              className="relative z-10 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="font-black text-4xl sm:text-5xl mb-6"
              >
                About
              </h2>
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg font-extrabold leading-relaxed"
              >
                I'm Dipak Shedge — a third-year B.E. student at Bharati Vidyapeeth College of
                Engineering, Mumbai, majoring in Information Technology.
              </p>
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg font-extrabold leading-relaxed"
              >
                I'm a technology-driven learner who enjoys exploring new tools to solve real-world
                problems. I love spotting where things can be improved and turning that into
                practical, results-oriented solutions.
              </p>
              <p
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg font-extrabold leading-relaxed"
              >
                Currently focused on full-stack web development with the MERN stack, while also
                experimenting with AI and real-time multiplayer systems. Always open to internships
                and meaningful collaborations.
              </p>
            </motion.div>
          </div>

          {/* Fun Fact Chips */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { text: "⚡ Python Dev Intern @ IGNITECH", rotate: -2 },
              { text: "🛠 Builds MERN side projects for fun", rotate: 1 },
              { text: "🤝 Open to full-stack internships", rotate: -1.5 },
            ].map((chip, index) => (
              <motion.div
                key={index}
                className="bg-[#E63946] text-[#F5F0E8] border-[2px] border-[#1A1A1A] px-[14px] py-2"
                style={{
                  boxShadow: "3px 3px 0px #1A1A1A",
                  rotate: chip.rotate,
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -3,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                {chip.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
