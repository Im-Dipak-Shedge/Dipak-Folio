import { motion } from "motion/react";
import { useState } from "react";

const allSkills = [
  "ReactJS",
  "JavaScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Python",
  "JWT Auth",
  "MERN Stack",
  "Render",
  "Vercel",
  "Socket.io",
  "Full Stack Development",
];

const skillsPerRow = Math.ceil(allSkills.length / 3);

const marqueeRows = [
  { chips: allSkills.slice(0, skillsPerRow), dir: "left" },
  { chips: allSkills.slice(skillsPerRow, skillsPerRow * 2), dir: "right" },
  { chips: allSkills.slice(skillsPerRow * 2), dir: "left" },
];

const tools = [
  {
    name: "React",
    abbr: "RE",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    abbr: "ND",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    abbr: "MG",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "JavaScript",
    abbr: "JS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind",
    abbr: "TW",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    abbr: "GT",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Python",
    abbr: "PY",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    abbr: "SQ",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Express",
    abbr: "EX",
    img: "",
  },
  {
    name: "Postman",
    abbr: "PM",
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Socket.io",
    abbr: "SO",
    img: "",
  },
];

function ToolTile({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="bg-[#FFFFFF] border-[2px] border-[#1A1A1A] flex flex-col items-center justify-center gap-2 p-3"
      style={{
        boxShadow: "4px 4px 0px #1A1A1A",
        width: "90px",
        height: "90px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{
        backgroundColor: "#E63946",
        color: "#F5F0E8",
        y: -4,
        scale: 1.05,
        boxShadow: "8px 8px 0px #1A1A1A",
        transition: {
          type: "spring",
          stiffness: 400,
        },
      }}
    >
      {tool.img && !imgError ? (
        <img
          src={tool.img}
          alt={tool.name}
          className="w-8 h-8 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <span style={{ fontFamily: "var(--font-mono)" }} className="font-black text-lg">
          {tool.abbr}
        </span>
      )}

      <span
        style={{ fontFamily: "var(--font-mono)" }}
        className="text-[10px] uppercase text-center leading-tight"
      >
        {tool.name}
      </span>
    </motion.div>
  );
}

function MarqueeRow({ chips, dir }: { chips: string[]; dir: "left" | "right" }) {
  const looped = [...chips, ...chips, ...chips];

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 w-max ${dir === "left" ? "marquee-left" : "marquee-right"}`}>
        {looped.map((chip, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              boxShadow: "3px 3px 0px #1A1A1A",
            }}
            className="bg-[#FFFFFF] border-[2px] border-[#1A1A1A] px-4 py-2 uppercase whitespace-nowrap"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .marquee-left {
          animation: marquee-left 30s linear infinite;
        }

        .marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
          >
            06
          </span>

          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="relative z-10 font-black text-4xl sm:text-5xl"
          >
            Skills
          </h2>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12 }} className="mt-2 opacity-50">
            Technologies I use to build modern web applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <motion.div
        className="mb-16 space-y-4"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {marqueeRows.map((row, i) => (
          <MarqueeRow key={i} chips={row.chips} dir={row.dir as "left" | "right"} />
        ))}
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <ToolTile key={tool.name} tool={tool} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
