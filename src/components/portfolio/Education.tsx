import { motion } from "motion/react";

const educations = [
  {
    degree: "B.E. in Information Technology",
    school: "Bharati Vidyapeeth College of Engineering, Mumbai",
    board: "Mumbai University",
    period: "Expected 2027",
    accent: true,
  },
  {
    degree: "Diploma in Information Technology",
    school: "Government Polytechnic Thane",
    board: "MSBTE",
    period: "2021 – 2024",
    accent: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F0E8] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
            >
              04
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)' }} className="relative z-10 font-black text-4xl sm:text-5xl">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educations.map((edu, i) => (
              <motion.div
                key={i}
                className="bg-[#FFFFFF] border-[2px] border-[#1A1A1A] p-6 sm:p-8"
                style={{ boxShadow: "4px 4px 0px #1A1A1A", borderRadius: 0 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "6px 6px 0px #1A1A1A",
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)' }} className="font-black text-xl sm:text-2xl mb-3">
                  {edu.degree}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)' }} className="text-sm sm:text-base mb-1">
                  {edu.school}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)' }} className="text-xs opacity-60 mb-4">
                  {edu.board}
                </p>
                <span
                  style={{ fontFamily: 'var(--font-mono)' }}
                  className={`inline-block border-[2px] border-[#1A1A1A] px-4 py-1 text-xs uppercase tracking-wider ${
                    edu.accent ? "bg-[#E63946] text-[#F5F0E8]" : "bg-[#F0E040]"
                  }`}
                >
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
