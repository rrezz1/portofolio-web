export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  logo?: string;
  video?: string;
  videos?: { label: string; src: string }[];
  links: {
    live?: string;
    github?: string;
  };
};

export function projectHasVideo(project: Project): boolean {
  return Boolean(project.video || project.videos?.length);
}

export const profile = {
  name: "Rrezart Buzuku",
  role: "Software Developer",
  tagline:
    "I turn ideas into reliable digital products, from backend logic and databases to interfaces people enjoy using. Experienced delivering web platforms, eCommerce solutions, and interactive applications, with a strong ability to learn fast, adapt to new teams, and ship quality work on time. Open to full-time and remote opportunities.",
  location: "Lipjan, Kosovo",
  email: "rrezbuzuku@gmail.com",
  phone: "+383 44 495 303",
  languages: ["Albanian (Native)", "English (Fluent)"],
  links: {} as { github?: string; linkedin?: string },
};

export const skills = [
  "Full-Stack Development",
  "Web Applications",
  "API Development",
  "Databases",
  "Frontend & UI",
  "Problem Solving",
  "Git & Collaboration",
  "Agile",
  "eCommerce",
  "Game Development",
];

export const experience = [
  {
    id: "exp-1",
    company: "Genpact",
    role: "Fullstack Developer",
    period: "Mar 2026 — Present",
    location: "Remote",
    highlights: [
      "Undergoing intensive full-stack engineering training, focusing on modern backend and frontend ecosystems.",
      "Developing and testing RESTful APIs using Python and FastAPI, with database management via SQL.",
      "Building interactive and responsive user interface components using React.js.",
      "Utilizing Linux environments for development and Git for version control and team collaboration.",
    ],
  },
  {
    id: "exp-2",
    company: "Zonda Creative",
    role: "Game Developer",
    period: "Oct 2023 — Jun 2025",
    location: "Pristina, Kosovo",
    highlights: [
      "Developed browser games for Poki.com using JavaScript and PlayCanvas.",
      "Built complete gameplay systems and responsive UI/UX.",
      "Optimized performance, loading times, and memory usage.",
      "Created mobile games from scratch with Unity and C# for Android and iOS.",
      "Implemented gameplay mechanics, UI, audio, animations, and data persistence.",
      "Tested, optimized, and polished games before release.",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    institution: "UBT College",
    degree: "B.S. in Computer Science and Engineering",
    period: "Oct 2022 — Present",
    location: "Pristina, Kosovo",
  },
];

export const projects: Project[] = [
  {
    id: "proj-9",
    slug: "desklite",
    title: "deskLite",
    description:
      "Capstone support-ticket system where customers raise issues, agents resolve them, and admins oversee the full queue.",
    longDescription:
      "deskLite is an internal help desk app I worked on as part of a five-person capstone team (my role was full-stack integration). Customers register, open tickets, add comments and attachments, and track status on their own requests. Agents pull work from a queue, update ticket status, and reply to assigned cases. Admins manage user roles, assign tickets to agents, and view workload metrics on a live dashboard. Access is split by role with strict permissions on the API so each user only sees what they are allowed to. The frontend is Next.js, React, TypeScript, and Tailwind. The backend is FastAPI with PostgreSQL for data and MinIO for file storage. The whole stack runs in Docker with CI through GitHub Actions. Below are three short demos: customer, agent, and admin views.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
    ],
    videos: [
      { label: "Customer view", src: "/projects/desklite/customer.mp4" },
      { label: "Agent view", src: "/projects/desklite/agent.mp4" },
      { label: "Admin view", src: "/projects/desklite/admin.mp4" },
    ],
    links: {},
  },
  {
    id: "proj-1",
    slug: "poker-game",
    title: "Poker Game (Real-Time Multiplayer)",
    description:
      "Online poker where several players sit at the same table and play in real time.",
    longDescription:
      "I worked on both sides of this project. The game runs in PlayCanvas (2D and 3D), and the backend is ASP.NET Core with MongoDB. Players connect through SignalR, sign in with JWT, and the table updates live as hands are played.",
    stack: [
      "PlayCanvas",
      "JavaScript",
      "ASP.NET Core",
      "MongoDB",
      "SignalR",
      "JWT",
    ],
    links: {},
  },
  {
    id: "proj-8",
    slug: "myshop",
    title: "My Shop",
    description:
      "Online store with Laravel on the backend and Next.js on the frontend.",
    longDescription:
      "Laravel handles products, orders, and the main business logic. The shop itself is built with Next.js and React. There is a demo video below if you want to see how the store works in practice.",
    stack: ["Laravel", "PHP", "Next.js", "React"],
    video: "/projects/myshop/myshop.mp4",
    links: {},
  },
  {
    id: "proj-7",
    slug: "en-aksesore",
    title: "En Aksesore E-Commerce",
    description:
      "E-commerce site for accessories, with React on the front and .NET Core on the back.",
    longDescription:
      "Customers browse products, log in, and place orders through the React app. The .NET Core API and MySQL keep track of users, stock, and orders. I used Bootstrap for most of the layout.",
    stack: ["React", ".NET Core", "MySQL", "JWT", "Bootstrap"],
    video: "/projects/en-aksesore/wallet-store.mp4",
    links: {},
  },
  {
    id: "proj-3",
    slug: "bkr-ecommerce",
    title: "Blerina Kllokoqi Rugova / Bukur E-Commerce",
    description:
      "Shopify store refresh for the BKR brand, plus a WhatsApp option for certain orders.",
    longDescription:
      "I updated the look of the Blerina Kllokoqi Rugova / Bukur site and cleaned up the overall layout. For some products, instead of a normal checkout, the customer is sent to WhatsApp to finish the order directly with the seller.",
    stack: ["Shopify", "UI/UX", "WhatsApp"],
    links: {},
  },
  {
    id: "proj-4",
    slug: "kontroll-test",
    title: "Kontroll Test",
    description:
      "Web app for test control, live at kontroll-test.com.",
    longDescription:
      "Built with Next.js and server-side rendering so pages load quickly. The app covers the main workflows needed to manage and run tests online.",
    stack: ["Next.js", "React"],
    video: "/projects/kontroll-test/kontroll-test.mp4",
    links: {
      live: "https://www.kontroll-test.com/",
    },
  },
  {
    id: "proj-6",
    slug: "fdm",
    title: "FDM",
    description:
      "React frontend connected to a backend through REST endpoints.",
    longDescription:
      "Most of my work here was on the React side: splitting the UI into reusable parts and hooking them up to the API. Data moves back and forth through regular REST calls.",
    stack: ["React", "REST API"],
    video: "/projects/fdm/fdm.mp4",
    links: {},
  },
  {
    id: "proj-2",
    slug: "fitness-app",
    title: "Fitness App",
    description:
      "App for tracking workouts and user data, with a .NET API and React UI.",
    longDescription:
      "Users can register, log in, and manage their fitness records. The .NET Core backend talks to a MySQL database, and the React app handles everything on the client side.",
    stack: [".NET Core", "React", "MySQL", "JWT"],
    links: {},
  },
  {
    id: "proj-5",
    slug: "kosova-vikend",
    title: "Kosova Vikend",
    description:
      "Website for Kosova Vikend events, built with PHP and Tailwind CSS.",
    longDescription:
      "PHP and MySQL run the backend, including login and sessions. The pages use Tailwind for styling, and the code is split in a simple MVC structure so it stays easy to follow.",
    stack: ["PHP", "MySQL", "Tailwind CSS"],
    video: "/projects/kosovavikend/kosovavikend.mp4",
    links: {},
  },
  {
    id: "proj-10",
    slug: "bike-mania-3d",
    title: "Bike Mania 3D",
    description:
      "3D browser bike game built for web, with physics-based riding and level progression.",
    longDescription:
      "Bike Mania 3D is a browser game I worked on at Zonda Creative for Poki.com. The game runs in PlayCanvas with 3D models and physics handled through Ammo.js. I focused on smooth controls, level flow, and keeping performance solid in the browser using WebGL and modern rendering where supported.",
    stack: [
      "PlayCanvas",
      "JavaScript",
      "TypeScript",
      "WebGL 2.0",
      "WebGPU",
      "HTML5",
      "CSS",
      "Ammo.js",
    ],
    video: "/projects/bike-mania-3d/bike-mania-3d.mp4",
    links: {
      live: "https://launch.playcanvas.com/2004851?debug=true",
    },
  },
  {
    id: "proj-11",
    slug: "sticker-bliss",
    title: "Sticker Bliss",
    description:
      "Casual sticker-matching browser game with a clean, responsive UI.",
    longDescription:
      "Sticker Bliss is a casual browser title built with PlayCanvas for Poki.com. Players work through sticker-based levels with simple, satisfying interactions. I handled gameplay logic in JavaScript and TypeScript, built the UI with HTML5 and CSS, and tuned rendering so it runs well across devices.",
    stack: [
      "PlayCanvas",
      "JavaScript",
      "TypeScript",
      "WebGL 2.0",
      "WebGPU",
      "HTML5",
      "CSS",
      "Ammo.js",
    ],
    video: "/projects/sticker-bliss/sticker-bliss.mp4",
    links: {
      live: "https://launch.playcanvas.com/2150502?debug=true",
    },
  },
  {
    id: "proj-12",
    slug: "fruit-blast",
    title: "Fruit Blast",
    description:
      "Browser arcade game where you shoot fruits with a cannon to earn coins and upgrade your gear.",
    longDescription:
      "In Fruit Blast, players aim a cannon at fruits to clear them and collect coins. Those coins go toward upgrades that make each run stronger and more rewarding. Built with PlayCanvas, JavaScript, and TypeScript for Poki.com, with physics handled through Ammo.js where needed. Most of the work was on shooting feel, progression, and keeping the game smooth in the browser.",
    stack: [
      "PlayCanvas",
      "JavaScript",
      "TypeScript",
      "WebGL 2.0",
      "WebGPU",
      "HTML5",
      "CSS",
      "Ammo.js",
    ],
    video: "/projects/fruit-blast/fruit-blast.mp4",
    links: {
      live: "https://launch.playcanvas.com/2089035",
    },
  },
  {
    id: "proj-13",
    slug: "combo-block",
    title: "Combo Block",
    description:
      "Mobile block puzzle game built in Unity with C# for Android and iOS.",
    longDescription:
      "Combo Block is a mobile puzzle game I developed in Unity using C#. I built the core block mechanics, UI flow, scoring, and level progression, then tested and polished the build before release on mobile. The focus was on tight gameplay loops and a smooth experience on both Android and iOS.",
    stack: ["Unity", "C#"],
    video: "/projects/combo-block/combo-block.mp4",
    links: {},
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Courses", href: "#courses" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
