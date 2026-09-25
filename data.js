/* ============================================================
   Content data — edit the text here any time; the page re-renders
   from these arrays automatically. Photos: drop files into /images
   using the exact filenames referenced below.
   ============================================================ */

const TIMELINE = [
  {
    year: "2022",
    title: "Most Inspirational & Best Presentation Awards",
    org: "NASA Space Apps Challenge, Benha",
    text: "Won both awards locally in grade 7 — the first honors of this journey, earned for an inventive team solution and a confident pitch.",
    tag: "engineering"
  },
  {
    year: "2024",
    title: "Finalist, i-club Competition",
    org: "Innovation Support Fund (ISF)",
    text: "National finalist for a vertical-axis wind turbine, modeled in SolidWorks and validated in ANSYS — now funded for prototype development.",
    tag: "engineering"
  },
  {
    year: "Jan 2025",
    title: "2nd Place, STEM Quest Research Competition",
    org: "MedXplore & Youth STEM Initiative",
    text: "Recognized for an internationally reviewed paper on evolutionary brain efficiency and its applications to AI and robotics.",
    tag: "research"
  },
  {
    year: "Feb 2025",
    title: "Top 5, Bioinformatics Track",
    org: "AppX 25, Zewail City",
    text: "Ranked among the top five for a multi-agent reinforcement learning model (MADDPG) optimizing personalized cancer treatment.",
    tag: "engineering"
  },
  {
    year: "2025",
    title: "Silver Honor, Global Rank 22",
    org: "International Physics Realm (IPhR)",
    text: "Ranked 22nd worldwide, awarded Silver Honor for mastery of physics concepts and analytical problem-solving.",
    tag: "academic"
  },
  {
    year: "2025",
    title: "National Finalist",
    org: "Intel / Regeneron ISEF Egypt",
    text: "Represented Qaliobia among Egypt's top student researchers in engineering and applied sciences.",
    tag: "engineering"
  },
  {
    year: "Jul 2025",
    title: "Selected Technology Talent",
    org: "Ebhar Masr Program, Banque Credit Agricole Egypt Foundation",
    text: "One of six technology talents nationwide — and 21 across all fields — selected for this incubator for Egypt's most promising young innovators.",
    tag: "engineering"
  },
  {
    year: "Aug 2025",
    title: "Creativity & Innovation in Education Scholarship",
    org: "UNESCO Grant Scheme, delivered by Educuality",
    text: "Completed a 20-credit-hour program, then led a team ideation project on improving government teachers' technology skills.",
    tag: "engineering"
  },
  {
    year: "Sep 2025",
    title: "Team Lead, Innov Egypt Program",
    org: "Innov Egypt",
    text: "Led a nine-member team through the program and delivered a final pitch that earned an A+ evaluation.",
    tag: "leadership"
  },
  {
    year: "Fall 2025",
    title: "Junior Academy Member",
    org: "The New York Academy of Sciences",
    text: "Selected into a global community of STEM peers for mentorship, collaborative research, and academic refinement.",
    tag: "research"
  },
  {
    year: "2026",
    title: "Bronze Honor, International Result",
    org: "International Astronomy and Astrophysics Competition (IAAC)",
    text: "After qualifying for the Final Round in September 2025, the official results confirmed an international Bronze Honor.",
    tag: "research"
  },
  {
    year: "2026",
    title: "1st Place, Global",
    org: "Purple Comet Mathematical Challenge",
    text: "Placed first in the world in this international team mathematics competition.",
    tag: "academic"
  }
];

const SKILLS = [
  {
    label: "Programming",
    detail: "Python — Qiskit, NumPy, Pandas, Matplotlib, TensorFlow — plus MATLAB and LaTeX for scientific typesetting."
  },
  {
    label: "Web Development",
    detail: "HTML, CSS, and JavaScript — this portfolio itself is hand-built, no frameworks, from scratch."
  },
  {
    label: "Quantum Computing",
    detail: "Superposition, quantum gates, error correction, and quantum neural networks."
  },
  {
    label: "Machine Learning",
    detail: "Reinforcement learning and end-to-end model development."
  },
  {
    label: "Scientific Tools",
    detail: "SolidWorks, ANSYS, AutoCAD for design, simulation, and validation."
  },
  {
    label: "Data Analysis",
    detail: "Scientific visualization and experimental design."
  },
  {
    label: "Research Methodology",
    detail: "Literature exploration, hypothesis formulation, proof writing, interdisciplinary synthesis."
  },
  {
    label: "Science Communication",
    detail: "LaTeX typesetting for papers and posters; oral and written presentation at international events."
  }
];

const SOFT_SKILLS = [
  "Growth mindset", "Curiosity", "Adaptability", "Collaborative teamwork",
  "Leadership", "Mentoring", "Public speaking", "Problem-solving",
  "Scientific curiosity", "Open science & global collaboration"
];

/* Achievement categories: quantum | engineering | academic | research | leadership */
const ACHIEVEMENTS = [
  // --- Technology, AI & Quantum Computing ---
  {
    cat: "quantum",
    title: "IEEE QCE 2025 Attendance",
    org: "International Conference on Quantum Computing and Engineering, Albuquerque, USA",
    text: "Attended the conference, engaged with global leaders in quantum research, and built connections with professors worldwide.",
    year: "Aug–Sep 2025"
  },
  {
    cat: "quantum",
    title: "Quantum Summer School & Air Quality Competition",
    org: "Nile University & ASRT",
    text: "Advanced training in quantum mechanics, Qiskit, PennyLane, and quantum ML applied to satellite-based environmental monitoring, under Prof. Ahmed ElRefay.",
    year: "Aug 2025"
  },
  {
    cat: "quantum",
    title: "ADEQUATE Course",
    org: "QURECA & QWorld, EIT Deep Tech Talent Initiative",
    text: "50+ hour course covering quantum algorithms (Shor's, Grover's, VQE, QAOA, QPE), error correction, and hands-on circuits on real quantum hardware.",
    year: "Aug 2025"
  },
  {
    cat: "quantum",
    title: "Womanium & WISER Online Quantum Program",
    org: "WISER",
    text: "Selected for this summer training program in quantum computing.",
    year: "2025"
  },
  {
    cat: "quantum",
    title: "IEEE Nuclear Energy Conference",
    org: "IEEE",
    text: "Attended sessions on nuclear energy technology and policy, broadening a technical interest beyond quantum computing alone.",
    year: "2025"
  },
  {
    cat: "quantum",
    title: "Digital Egypt Cubs Initiative (DECI) — Level 4",
    org: "Ministry of Communications and Information Technology (MCIT), Egypt",
    text: "Fully-funded government scholarship since grade 7; four years in, now completing Level 4 in AI & Data Science alongside a yearly leadership summer camp.",
    year: "2022–ongoing"
  },
  {
    cat: "quantum",
    title: "Self-Directed Study in Math, Physics & Quantum Computing",
    org: "Independent study",
    text: "Working through Jaenich's Linear Algebra, Stewart's PreCalculus, Serway's Physics, and Nielsen & Chuang's Quantum Computation and Quantum Information — sparked by an earlier curiosity about the philosophy of mathematics.",
    year: "Ongoing"
  },

  // --- Engineering, Innovation & Entrepreneurship ---
  {
    cat: "engineering",
    title: "Finalist, i-club Competition",
    org: "Innovation Support Fund (ISF)",
    text: "Designed a vertical wind turbine — modeled in SolidWorks, simulated in ANSYS, validated mathematically — now funded for a prototype and headed toward a patent application.",
    year: "2024"
  },
  {
    cat: "engineering",
    title: "Creativity & Innovation in Education Scholarship",
    org: "UNESCO Grant Scheme",
    text: "20-credit-hour program on creativity and leadership in education; led a team ideation project for government teacher technology training.",
    year: "Aug 2025"
  },
  {
    cat: "engineering",
    title: "Selected Technology Talent — Ebhar Masr Program",
    org: "Banque Credit Agricole Egypt Development Foundation",
    text: "One of six technology talents nationwide selected for this incubator camp for Egypt's most promising young innovators.",
    year: "Jul 2025"
  },
  {
    cat: "engineering",
    title: "Most Inspirational & Best Presentation Awards",
    org: "NASA Space Apps Challenge, Benha",
    text: "Recognized locally for an inventive team solution and standout presentation — earned in grade 7.",
    year: "2022"
  },
  {
    cat: "engineering",
    title: "National Finalist",
    org: "Intel / Regeneron ISEF Egypt",
    text: "Represented Qaliobia among Egypt's top student researchers in engineering and applied sciences.",
    year: "2025"
  },
  {
    cat: "engineering",
    title: "Top 5, Bioinformatics Track — AppX 25",
    org: "Zewail City / IEEE, team Genomind",
    text: "Multi-agent reinforcement learning model (MADDPG) for personalized cancer treatment, integrating multi-omics data.",
    year: "Feb 2025"
  },
  {
    cat: "engineering",
    title: "Shape the Future Challenge",
    org: "Moonshot Pirates, team Sustainable Energy Duo",
    text: "Four-week global innovation program on sustainable energy and cities; designed solutions for SDG 7 and SDG 11.",
    year: "Jul 2025"
  },
  {
    cat: "engineering",
    title: "Girls With Impact Entrepreneurship Program",
    org: "GWI",
    text: "Developed and pitched an original start-up concept.",
    year: "2025"
  },
  {
    cat: "engineering",
    title: "Finalist, Creativa Sustainability Hackathon",
    org: "Creativa",
    text: "Reached the finals with a sustainability-focused engineering solution.",
    year: "2025"
  },
  {
    cat: "engineering",
    title: "School Robotics Championship — Spherical UAV Drone",
    org: "School Robotics Championship",
    text: "Designed and built a spherical UAV drone as part of a school robotics competition entry.",
    year: "2025"
  },

  // --- Academic Distinction & Achievements ---
  {
    cat: "academic",
    title: "Silver Honor, Global Rank 22",
    org: "International Physics Realm (IPhR)",
    text: "Awarded Silver Honor globally, ranking 22nd worldwide for mastery of physics concepts and analytical skill.",
    year: "2025"
  },
  {
    cat: "academic",
    title: "Third Place — Egyptian Olympiad in Computational Science",
    org: "EOCS, Egypt University of Informatics",
    text: "Placed third in the Final Round, a contest spanning computational physics, chemistry, biology, and mathematics.",
    year: "Aug 2025"
  },
  {
    cat: "academic",
    title: "1st Place, Global",
    org: "Purple Comet Mathematical Challenge",
    text: "Ranked first in the world in this international team mathematics competition.",
    year: "2026"
  },
  {
    cat: "academic",
    title: "Arab Physical Society Summer School on High Energy Physics",
    org: "Zewail City",
    text: "Immersive program deepening understanding of modern theoretical frameworks and experimental techniques.",
    year: "2025"
  },
  {
    cat: "academic",
    title: "1st Summer School of Physics",
    org: "Tanta University",
    text: "Advanced physics coursework combined with hands-on research projects.",
    year: "Aug–Sep 2025"
  },
  {
    cat: "academic",
    title: "Cairo University Physics Summer School",
    org: "Cairo University",
    text: "Further advanced physics coursework and hands-on research exposure.",
    year: "2025"
  },
  {
    cat: "academic",
    title: "Academic Member",
    org: "October Math Circle: Calculus Camp",
    text: "Recognized for mathematics excellence and invited into a selective camp of rigorous problem-solving and advanced concepts.",
    year: "2025"
  },
  {
    cat: "academic",
    title: "Selected — YSJ Annual Junior Program",
    org: "Young Scientists Journal",
    text: "10-week intensive research program with the opportunity to publish in a peer-reviewed journal edition.",
    year: "2025"
  },

  // --- Research Achievement & Scientific Leadership ---
  {
    cat: "research",
    title: "2nd Place, STEM Quest Research Competition",
    org: "MedXplore & Youth STEM Initiative",
    text: "Paper: \"Evolutionary Perspective on Brain Efficiency — Insights and Applications for AI and Robotics,\" written in LaTeX and internationally reviewed.",
    year: "Jan 2025"
  },
  {
    cat: "research",
    title: "Research Paper — Seismic-Magnetic Correlations",
    org: "Independent research",
    text: "\"The Role of Magnetism in Earthquake Dynamics and Prediction\": an 18-page analysis of global seismic-magnetic correlations, identifying magnetic field anomalies preceding seismic events.",
    year: "Feb 2025"
  },
  {
    cat: "research",
    title: "Bronze Honor, International Result",
    org: "International Astronomy and Astrophysics Competition (IAAC)",
    text: "Qualified for the Final Round in September 2025 after solving advanced astrophysics and applied-math problems; the official result confirmed an international Bronze Honor.",
    year: "2026"
  },
  {
    cat: "research",
    title: "Exoplanet Detection Project",
    org: "Paradox Team, PACS e-Lab & AAVSO",
    text: "Hands-on light curve analysis and telescope data processing; analyzed datasets and validated candidate exoplanets in a Pan-Africa research collaboration.",
    year: "Aug 2025"
  },
  {
    cat: "research",
    title: "Team Member — Paradox",
    org: "International Astronomical Search Collaboration (IASC)",
    text: "Organized three cohorts of asteroid search campaigns, mentored 40+ participants, and represented the team at the African Astronomical Society conference.",
    year: "2025"
  },
  {
    cat: "research",
    title: "Junior Academy Member",
    org: "The New York Academy of Sciences",
    text: "Selected for expert mentorship within a global community of STEM peers for Fall 2025.",
    year: "Fall 2025"
  },

  // --- Leadership & Outreach ---
  {
    cat: "leadership",
    title: "Team Lead, Innov Egypt Program",
    org: "Innov Egypt",
    text: "Led a nine-member team through the program, culminating in a final pitch that earned an A+ evaluation.",
    year: "Sep 2025"
  },
  {
    cat: "leadership",
    title: "Tutor, Space Scholar Program",
    org: "Paradox",
    text: "Designed and delivered lessons introducing school students to astronomy as part of Paradox's outreach program.",
    year: "2025"
  },
  {
    cat: "leadership",
    title: "Volunteer",
    org: "Resala Organization",
    text: "Contributed volunteer hours with one of Egypt's largest community-service organizations.",
    year: "2025"
  },
  {
    cat: "leadership",
    title: "Campus Ambassador — Winter of Blockchain",
    org: "GirlScript Foundation",
    text: "Represented the program within a student community, spreading awareness of blockchain fundamentals.",
    year: "2024"
  }
];

/* Certificates: real certificates, letters, and acceptance emails from your
   certificates PDF, listed here as text only (no images in this version). */
const CERTIFICATES = [
  { title: "Letter of Attendance", org: "IEEE QCE 2025, Albuquerque, USA", year: "Sep 2025" },
  { title: "Silver Honour, Global Rank 22", org: "International Physics Realm (IPhR)", year: "2025" },
  { title: "Certificate of Attendance", org: "Air Quality Prediction Quantum Summer School, Nile University & ASRT", year: "Aug 2025" },
  { title: "Certificate of Completion", org: "ADEQUATE Quantum Computing Course, QURECA & QWorld", year: "Aug 2025" },
  { title: "Program Welcome & Enrollment", org: "Womanium & WISER Online Quantum Program", year: "2025" },
  { title: "Certificate of Finalist", org: "i-club Competition, Innovation Support Fund", year: "2024" },
  { title: "Graduation Certificate", org: "Creativity & Innovation in Education Scholarship, UNESCO Grant Scheme", year: "Aug 2025" },
  { title: "Mail of Selection", org: "Technology Talent, Ebhar Misr Program", year: "Jul 2025" },
  { title: "Galactic Problem-Solver", org: "NASA Space Apps Challenge — Most Inspirational & Best Presentation", year: "Oct 2022" },
  { title: "Certificate of National Finalist", org: "Intel / Regeneron ISEF Egypt", year: "Dec 2024" },
  { title: "Medal, Qaliobia Science Fair", org: "Confirming National Finalist selection", year: "Dec 2024" },
  { title: "Certificate of Appreciation", org: "Zewail City AppX 25, Top 5 Bioinformatics Track", year: "Feb 2025" },
  { title: "Certificate of Excellence, Third Place", org: "Egyptian Olympiad in Computational Science (EOCS)", year: "Aug 2025" },
  { title: "Verified Certificate of Completion", org: "Shape the Future Challenge, Moonshot Pirates", year: "Jul 2025" },
  { title: "Class Invitation", org: "Girls With Impact (GWI) Entrepreneurship Program", year: "2025" },
  { title: "Accepted as Academic Member", org: "October Math Circle: Calculus Camp", year: "2025" },
  { title: "Verified Certificate of Completion, Level Two", org: "Digital Egypt Cubs Initiative (DECI), MCIT Egypt — now Level 4", year: "2022–ongoing" },
  { title: "Congratulations Mail", org: "YSJ Annual Junior Program", year: "2025" },
  { title: "Letter of Appreciation, 2nd Place", org: "STEM Quest Research Competition, MedXplore", year: "Jan 2025" },
  { title: "Junior Academy Acceptance", org: "The New York Academy of Sciences", year: "Fall 2025" },
  { title: "Pre-Final Certificate", org: "International Astronomy and Astrophysics Competition (IAAC) — later confirmed Bronze Honor", year: "Sep 2025" },
  { title: "Certificate of Achievement", org: "Exoplanet Photometry Research, Paradox Team & AAVSO", year: "Aug 2025" },
  { title: "Certificate of Achievement", org: "Activities & Projects Team Member, Paradox", year: "2025" },
  { title: "Acceptance Mail", org: "Arab Physical Society Summer School on High Energy Physics", year: "2025" },
  { title: "Acceptance Mail", org: "1st Summer School of Physics, Tanta University", year: "2025" },
  { title: "Campus Ambassador Selection", org: "Winter of Blockchain, GirlScript Foundation", year: "2024" }
];


const EXPERIENCE = [
  {
    role: "Web Developer (Self-Directed)",
    org: "Independent projects",
    period: "2025 – ongoing",
    text: "Builds interactive science and education websites from scratch using HTML, CSS, and JavaScript — including this very portfolio, no frameworks used."
  },
  {
    role: "Team Lead",
    org: "Innov Egypt Program",
    period: "Sep 2025",
    text: "Led a nine-member team from ideation through a final pitch that earned an A+ evaluation."
  },
  {
    role: "Astronomy Tutor",
    org: "Space Scholar Program, Paradox",
    period: "2025",
    text: "Designed and delivered lessons introducing younger school students to astronomy and the world of space science."
  }
];

const AFFILIATIONS = [
  { name: "Junior Academy Member", org: "The New York Academy of Sciences", period: "Fall 2025" },
  { name: "Selected Participant", org: "YSJ Annual Junior Research Program (peer-reviewed publication opportunity)", period: "2025" },
  { name: "Academic Member", org: "October Math Circle: Calculus Camp", period: "2025" },
  { name: "Attendee", org: "IEEE International Conference on Quantum Computing and Engineering (QCE)", period: "2025" },
  { name: "Attendee", org: "IEEE Nuclear Energy Conference", period: "2025" },
  { name: "Participant", org: "Arab Physical Society Summer School on High Energy Physics, Zewail City", period: "2025" },
  { name: "Participant", org: "1st Summer School of Physics, Tanta University", period: "2025" },
  { name: "Participant", org: "Cairo University Physics Summer School", period: "2025" },
  { name: "Scholar", org: "Digital Egypt Cubs Initiative (DECI), Level 4 — AI & Data Science, MCIT Egypt", period: "2022–ongoing" },
  { name: "Volunteer", org: "Resala Organization", period: "2025" }
];
