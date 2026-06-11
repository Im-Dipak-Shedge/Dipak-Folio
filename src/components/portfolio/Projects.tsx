import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tags: string[];
  description: string;
  url: string;
  impact?: string;
}

const featured: Project & { problem: string; solution: string; features: string[] } = {
  title: "Skill Qualifier — Candidate Assessment Platform",
  tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Google OAuth", "Tailwind"],
  description:
    "A full-stack assessment and candidate evaluation platform designed to help recruiters assess candidates based on role-specific technical skills.",
  url: "https://skill-qualifier-1.onrender.com/",
  impact: "↗ End-to-end recruitment system · Streamlined screening",
  problem:
    "Recruiters struggle to screen candidates on real, role-specific technical skills — generic tests waste everyone's time and miss the right signal.",
  solution:
    "Built an end-to-end recruitment assessment system with dynamic skill-based assessment generation, automated scoring, secure auth with Google OAuth + JWT, and detailed analytics — streamlining candidate screening and skill evaluation.",
  features: [
    "Dynamic assessment generation based on selected skills",
    "Role-based question management",
    "Automated scoring and performance evaluation",
    "Secure authentication with Google OAuth & JWT",
    "Detailed assessment analytics and reporting",
    "Responsive and modern user interface",
  ],
};

//showcase projects
const delightCafe = {
  title: "Delight Cafe — MERN Food Ordering Platform",
  tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "JWT"],

  description:
    "A full-stack food ordering and restaurant management platform that enables customers to browse menus, place orders, make secure online payments, and track order progress in real time.",

  problem:
    "Many small restaurants rely on manual order handling, making it difficult to manage online orders, payment processing, customer tracking, and kitchen workflows efficiently.",

  solution:
    "Built a complete MERN-based food ordering platform with secure JWT authentication, Razorpay payment integration, role-based access control, and a structured order management system that streamlines restaurant operations from order placement to delivery.",

  features: [
    "JWT authentication and role-based authorization",
    "Razorpay payment gateway integration",
    "Customer cart and checkout system",
    "Admin dashboard for restaurant management",
    "Order lifecycle tracking and status updates",
    "Backend payment verification and secure APIs",
  ],

  url: "https://delight-cafe-frontend.onrender.com/",

  impact: "↗ Full-stack MERN application · Razorpay integration · Admin dashboard",
};
const chessMate = {
  title: "ChessMate — Real-Time Multiplayer Chess Platform",
  tags: ["React", "Node.js", "Socket.io", "WebSockets"],

  description:
    "A real-time multiplayer chess platform that allows players to compete online while communicating through integrated chat and audio features.",

  problem:
    "Traditional online chess applications often lack interactive communication features, making gameplay less engaging and limiting player interaction.",

  solution:
    "Developed a multiplayer chess platform using Socket.io and WebSockets to deliver instant move synchronization, real-time communication, and a smooth competitive experience for players across different devices.",

  features: [
    "Real-time multiplayer chess gameplay",
    "Instant move synchronization with Socket.io",
    "Live player-to-player chat",
    "Integrated audio communication",
    "Low-latency WebSocket architecture",
    "Responsive cross-device interface",
  ],

  url: "https://chessmate-4ewq.onrender.com/",

  impact: "↗ Real-time multiplayer experience · Chat & audio communication",
};

//more academic and smaller projects in a bento grid
const bentoProjects: (Project & { colSpan: number; rowSpan: number; isLarge?: boolean })[] = [
  {
    title: "Employee Management System",
    tags: ["Python", "Tkinter", "SQL"],
    description:
      "Desktop-based employee management application developed using Python Tkinter and SQL. Supports employee record management, data storage, search operations, and administrative workflows through an intuitive graphical user interface.",
    url: "https://github.com/Im-Dipak-Shedge/Python-Tkinter/tree/main/Employee%20Management",
    impact: "↗ Python GUI · Database management",
    colSpan: 2,
    rowSpan: 1,
  },

  {
    title: "Personal Portfolio — Neo Brutalist",
    tags: ["React", "TypeScript", "TailwindCSS", "Motion"],
    description:
      "A modern neo-brutalist developer portfolio showcasing projects, skills, experience, GitHub activity, and contact information. Designed with custom animations, bold typography, and responsive layouts.",
    url: "#",
    impact: "↗ Personal branding · Responsive design",
    colSpan: 2,
    rowSpan: 1,
  },

  {
    title: "Hospital Management on Blockchain",
    tags: ["Blockchain", "Solidity", "React", "Node.js"],
    description:
      "A decentralized hospital management system that stores patient records and access logs on the blockchain — tamper-proof, transparent, and patient-owned.",
    url: "#",
    impact: "↗ Blockchain · Patient-owned records",
    colSpan: 2,
    rowSpan: 1,
  },

  {
    title: "Android Quiz Application",
    tags: ["Java", "Android Studio", "SQLite"],
    description:
      "A mobile quiz application developed in Java featuring multiple-choice questions, score tracking, result evaluation, and an interactive user experience for learning and self-assessment.",
    url: "https://github.com/Im-Dipak-Shedge/Quiz-app---Android",
    impact: "↗ Mobile development · Java",
    colSpan: 2,
    rowSpan: 1,
  },
];

function ViewBtn({ url, light = false }: { url: string; light?: boolean }) {
  return (
    <motion.a
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={{
        boxShadow: "3px 3px 0px #1A1A1A",
        fontFamily: "var(--font-mono)",
      }}
      className={`inline-flex items-center gap-2 border-[2px] border-[#1A1A1A] py-2 px-4 text-xs font-bold uppercase tracking-wider self-start ${
        light ? "bg-white text-[#1A1A1A]" : "bg-transparent text-[#1A1A1A]"
      }`}
      whileHover={{
        y: -2,
        boxShadow: "5px 5px 0px #1A1A1A",
        transition: { type: "spring", stiffness: 400 },
      }}
    >
      View Project <ExternalLink className="w-3 h-3" />
    </motion.a>
  );
}

function BentoCard({ project, index }: { project: (typeof bentoProjects)[0]; index: number }) {
  return (
    <motion.div
      className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col overflow-hidden"
      style={{
        gridColumn: `span ${project.colSpan}`,
        gridRow: `span ${project.rowSpan}`,
        boxShadow: "3px 3px 0 #1A1A1A",
        borderRadius: 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: "8px 8px 0px #1A1A1A",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              border: "1.5px solid #1A1A1A",
              background: "#ffffff",
            }}
            className="px-2 py-[2px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3
        style={{ fontFamily: "var(--font-display)" }}
        className="font-black text-base sm:text-lg mb-2 leading-tight"
      >
        {project.title}
      </h3>

      {project.isLarge && (
        <div
          style={{
            background: "#E63946",
            padding: "12px 16px",
            marginTop: 10,
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 20,
              fontWeight: 700,
              color: "#F5F0E8",
            }}
          >
            MERN CAFE
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#F5F0E8",
              opacity: 0.8,
              marginTop: 2,
            }}
          >
            React · Node · Mongo
          </span>
        </div>
      )}

      <p
        style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.55 }}
        className="mb-3 flex-1"
      >
        {project.description}
      </p>

      {project.impact && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
          {project.impact}
        </p>
      )}

      <ViewBtn url={project.url} />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
          >
            05
          </span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="relative z-10 font-black text-4xl sm:text-5xl"
          >
            Projects
          </h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12 }} className="mt-2 opacity-50">
            Things I've built and shipped.
          </p>
        </motion.div>

        {/* FEATURED */}
        <motion.div
          className="project-card border-[3px] border-[#1A1A1A] bg-[#F5F0E8] overflow-hidden mb-5 flex flex-col sm:flex-row"
          style={{ boxShadow: "7px 7px 0px #1A1A1A", minHeight: 180 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -6,
            boxShadow: "10px 10px 0px #1A1A1A",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <div
            className="w-full sm:w-[40%] sm:order-last flex flex-col items-center justify-center py-8 sm:py-0"
            style={{ background: "#E63946", borderBottom: "3px solid #1A1A1A" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 28,
                fontWeight: 700,
                color: "#F5F0E8",
              }}
            >
              SKILL QUALIFIER
            </span>
            <span
              style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#F5F0E8" }}
              className="opacity-80 mt-1"
            >
              MERN · JWT · Tailwind
            </span>
          </div>

          <div
            className="flex-1 p-6 flex flex-col justify-between"
            style={{ borderRight: "3px solid #1A1A1A" }}
          >
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em" }}
                className="uppercase opacity-50 mb-2"
              >
                Featured Project
              </p>
              <h3
                style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}
                className="mb-3 leading-tight"
              >
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#E63946",
                      color: "#F5F0E8",
                      border: "2px solid #1A1A1A",
                      padding: "2px 8px",
                    }}
                    className="uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}
                className="mb-3"
              >
                {featured.description}
              </p>

              <div
                style={{
                  marginTop: 10,
                  paddingTop: 10,
                  borderTop: "1px solid rgba(26,26,26,0.12)",
                }}
              >
                <p
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
                  className="uppercase opacity-60 mb-2"
                >
                  Key Features
                </p>
                <ul
                  style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.55 }}
                  className="grid sm:grid-cols-2 gap-x-4 gap-y-1 mb-3"
                >
                  {featured.features.map((f, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: "#E63946" }} className="font-black">
                        ▸
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: 6,
                  paddingTop: 10,
                  borderTop: "1px solid rgba(26,26,26,0.12)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  lineHeight: 1.6,
                }}
                className="mb-2"
              >
                <p style={{ marginBottom: 6 }}>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>
                    PROBLEM —{" "}
                  </span>
                  <span style={{ opacity: 0.85 }}>{featured.problem}</span>
                </p>
                <p>
                  <span style={{ fontWeight: 700, opacity: 0.7, letterSpacing: "0.08em" }}>
                    SOLUTION —{" "}
                  </span>
                  <span style={{ opacity: 0.85 }}>{featured.solution}</span>
                </p>
              </div>

              {featured.impact && (
                <p
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  className="opacity-55 mb-4"
                >
                  {featured.impact}
                </p>
              )}
            </div>
            <ViewBtn url={featured.url} />
          </div>
        </motion.div>

        {/* delightcafe */}
        <motion.div
          className="border-[3px] border-[#1A1A1A] bg-[#F5F0E8] p-5 mb-5"
          style={{ boxShadow: "6px 6px 0px #1A1A1A" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                className="uppercase opacity-50"
              >
                Full Stack MERN Application
              </p>

              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-2xl">
                Delight Cafe
              </h3>
            </div>

            <ViewBtn url={delightCafe.url} />
          </div>

          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-sm leading-relaxed mb-4 opacity-80"
          >
            {delightCafe.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {delightCafe.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-[10px] font-bold uppercase border border-[#1A1A1A] bg-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-[4px] border-[#E63946] pl-3">
              <p className="text-[10px] font-bold uppercase mb-1">Problem</p>
              <p className="text-xs leading-relaxed">{delightCafe.problem}</p>
            </div>

            <div className="border-l-[4px] border-[#1A1A1A] pl-3">
              <p className="text-[10px] font-bold uppercase mb-1">Solution</p>
              <p className="text-xs leading-relaxed">{delightCafe.solution}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="border border-[#1A1A1A] bg-white px-2 py-1 text-[10px]">
              Razorpay Payments
            </span>

            <span className="border border-[#1A1A1A] bg-white px-2 py-1 text-[10px]">JWT Auth</span>

            <span className="border border-[#1A1A1A] bg-white px-2 py-1 text-[10px]">
              Admin Dashboard
            </span>

            <span className="border border-[#1A1A1A] bg-white px-2 py-1 text-[10px]">
              Order Tracking
            </span>
          </div>
        </motion.div>

        {/* chessmate */}
        <motion.div
          className="border-[3px] border-[#1A1A1A] bg-[#E63946] text-[#F5F0E8] p-6 mb-5"
          style={{ boxShadow: "6px 6px 0px #1A1A1A" }}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                className="uppercase opacity-80"
              >
                Real Time Application
              </p>

              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-2xl">
                ChessMate
              </h3>
            </div>

            <ViewBtn url={chessMate.url} light />
          </div>

          <p className="mb-5 text-sm opacity-90">{chessMate.description}</p>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-[#F5F0E8] text-[#1A1A1A] p-3">
              <p className="font-bold text-xs mb-2">PROBLEM</p>
              <p className="text-xs">{chessMate.problem}</p>
            </div>

            <div className="bg-[#F5F0E8] text-[#1A1A1A] p-3">
              <p className="font-bold text-xs mb-2">SOLUTION</p>
              <p className="text-xs">{chessMate.solution}</p>
            </div>

            <div className="bg-[#F5F0E8] text-[#1A1A1A] p-3">
              <p className="font-bold text-xs mb-2">IMPACT</p>
              <p className="text-xs">{chessMate.impact}</p>
            </div>
          </div>
        </motion.div>

        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
          className="uppercase opacity-45 mb-3"
        >
          More Projects
        </p>

        {/* Desktop bento grid */}
        <div
          className="hidden sm:grid gap-[14px]"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {bentoProjects.map((project, index) => (
            <BentoCard key={index} project={project} index={index} />
          ))}
          <motion.div
            className="bg-[#E63946] text-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col justify-between"
            style={{ gridColumn: "span 2", gridRow: "span 1", boxShadow: "3px 3px 0 #1A1A1A" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2 } }}
          >
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}
                className="opacity-70 mb-1"
              >
                MORE COMING
              </p>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-4">
                Always building.
              </h3>
            </div>
            <a
              href="mailto:dipakshedge160@gmail.com"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-[#F5F0E8] text-[#1A1A1A] py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
            >
              Say Hi ↗
            </a>
          </motion.div>
        </div>

        {/* Mobile stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          {bentoProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col"
              style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      border: "1.5px solid #1A1A1A",
                      background: "#ffffff",
                    }}
                    className="px-2 py-[2px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-2">
                {project.title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.55 }}
                className="mb-2 flex-1"
              >
                {project.description}
              </p>
              {project.impact && (
                <p
                  style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  className="opacity-55 mb-3"
                >
                  {project.impact}
                </p>
              )}
              <ViewBtn url={project.url} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
