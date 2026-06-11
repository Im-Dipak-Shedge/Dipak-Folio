import { motion } from "motion/react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative mb-12">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
            >
              03
            </span>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="relative z-10 font-black text-4xl sm:text-5xl"
            >
              Experience
            </h2>
          </div>

          <div className="relative border-l-[4px] border-[#1A1A1A] pl-8 sm:pl-12 space-y-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -left-[14px] top-2 w-[12px] h-[12px] bg-[#E63946] border-[2px] border-[#1A1A1A]" />

              <motion.div
                className="bg-[#FFFFFF] border-[3px] border-[#1A1A1A] p-6 sm:p-8"
                style={{ boxShadow: "5px 5px 0px #1A1A1A" }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "8px 8px 0px #1A1A1A",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="mb-4">
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="font-black text-2xl sm:text-3xl mb-3"
                  >
                    Python Developer Intern
                  </h3>
                  <span
                    style={{ fontFamily: "var(--font-mono)" }}
                    className="inline-block bg-[#E63946] text-[#F5F0E8] border-[2px] border-[#1A1A1A] px-4 py-1 text-xs uppercase tracking-wider"
                  >
                    IGNITECH — Jun – Jul 2023
                  </span>
                </div>

                <ul
                  style={{ fontFamily: "var(--font-display)" }}
                  className="space-y-3 text-base sm:text-lg font-bold"
                >
                  <li className="flex gap-3 ">
                    <span className="text-[#E63946] font-black">·</span>
                    <span>
                      Worked within project timelines to deliver assigned modules while maintaining
                      code quality and reliability.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#E63946] font-black">·</span>
                    <span>
                      Gained hands-on experience in software development, problem-solving, and
                      building user-focused applications in a collaborative environment.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#E63946] font-black">·</span>
                    <span>
                      Managed assigned tasks, met project deadlines, and continuously improved
                      application design and functionality.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
