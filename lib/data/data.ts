import {
  AboutPageContent,
  CompanyInfo,
  ContactInfo,
  ContactPageContent,
  EducationItem,
  ExperienceItem,
  FooterSections,
  HomePageContent,
  LanguageItem,
  Link,
  SkillItem,
  SocialLink,
} from "../types/types"

export const links: Link[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

export const footerSections: FooterSections = {
  quickLinks: {
    title: "Quick Links",
  },
  contactUs: {
    title: "Contact Us",
  },
}

export const socialLinks: SocialLink[] = [
  {
    label: "Github",
    href: "https://github.com/herrgallardo",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-gallardo-girela/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/antonio.gallardo",
    icon: "facebook",
  },
]

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    text: "antonio@frontender.se",
    icon: "email",
  },
  {
    type: "phone",
    text: "+46739930848",
    icon: "phone",
  },
  {
    type: "address",
    text: "Vårvädersvägen 6A lgh 1502 \n222 27 Lund\nSweden",
    icon: "location",
  },
]

export const companyInfo: CompanyInfo = {
  name: "Frontender",
  description:
    "Professional web developer specializing in modern, responsive web applications and user-friendly interfaces.",
  logo: "/logos/logo.png",
  copyright: "All rights reserved.",
}

export const experience: ExperienceItem[] = [
  {
    title: "Front-End Developer",
    location: "Axis Communications, Lund, Sweden",
    description:
      "My main work duties included front-end development using Typescript, HTML, React and GraphQL. I worked with bug fixes but also with implementation of new features in Axis built-in web client.",
    icon: "",
    date: "June-August 2023",
    image: "/logos/axis-logo.png",
  },
  {
    title: "Internship as Front-End Developer",
    location: "Axis Communications, Lund, Sweden",
    description:
      "My main duties as an intern included front-end development using Typescript, HTML, React and GraphQL. I worked with bug fixes but also with implementation of new features in Axis built-in web client.",
    icon: "",
    date: "January-June 2023",
    image: "/logos/axis-logo.png",
  },
  {
    title: "Front-End Developer",
    location: "24HR, Malmö, Sweden",
    description: "My main work duties included cloning entire websites.",
    icon: "",
    date: "June-August 2022",
    image: "/logos/24HR-logo.png",
  },
  {
    title: "Internship as Front-End Developer",
    location: "24HR, Malmö, Sweden",
    description:
      "My main duties as an intern included cloning entire websites.",
    icon: "",
    date: "April-June 2022",
    image: "/logos/24HR-logo.png",
  },
  {
    title: "Laundry Worker",
    location: "CWS-boco Sandby, Södra Sandby, Sweden",
    description:
      "High-volume laundry operations at Cws-boco Sandby, ensuring efficient processing of large-scale textiles, equipment maintenance, and adherence to quality standards.",
    icon: "",
    date: "2007-2021",
    image: "/logos/cws-logo.png",
  },
  {
    title: "Circle Leader for Spanish Beginners",
    location: "Medborgarskolan, Lund, Sweden",
    description:
      "Led beginner-level Spanish courses at Medborgarskolan in Lund, facilitating language learning, managing classroom dynamics, and ensuring students grasped foundational Spanish concepts.",
    icon: "",
    date: "2008",
    image: "/logos/medborgarskolan-logo.png",
  },
  {
    title: "Manager",
    location: "Taberna Salinas, Granada, Spain",
    description:
      "Oversaw daily operations. Responsibilities included staff management, customer service, and ensuring a high-quality dining experience for patrons.",
    icon: "",
    date: "2005-2007",
    image: "/logos/taberna-salinas-logo.png",
  },
  {
    title: "European Voluntary Service",
    location: "Youth Center, Eksjö, Sweden",
    description:
      "Served as a volunteer at a youth center under the European Voluntary Service in Eksjö. Assisted with organizing activities, mentoring youth, and supporting daily operations to ensure a positive environment for participants.",
    icon: "",
    date: "2004-2005",
    image: "/logos/evs-logo.png",
  },
  {
    title: "Waiter",
    location: "Granada, Spain",
    description:
      "Worked as a waiter, catering to diners by taking orders, serving meals, and ensuring a pleasant dining experience for all customers.",
    icon: "",
    date: "2002-2004",
    image: "/logos/waiter-logo.png",
  },
  {
    title: "Bartender and Waiter",
    location: "All Bar One, London, United Kingdom",
    description:
      'Served as a bartender and waiter at All Bar One in London, providing top-notch customer service and ensuring a smooth dining experience for patrons. Demonstrated exceptional performance by being selected as "Employee of the Month" and was subsequently promoted to the role of Shift Leader.',
    icon: "",
    date: "2000-2001",
    image: "/logos/allbarone-logo.png",
  },
  {
    title: "Congress assistant and receptionist",
    location: "Granada, Spain",
    description:
      "As a Congress Assistant at a congress hall, responsibilities encompassed assisting with event logistics, setting up conference rooms, managing registration, and ensuring attendees had a smooth experience during the events. My duties as a receptionist included welcoming guests, handling check-ins and check-outs, managing reservations, addressing guest inquiries, and ensuring optimal guest satisfaction throughout their stay.",
    icon: "",
    date: "2000",
    image: "/logos/receptionist-logo.png",
  },
  {
    title: "Telemarketer",
    location: "Granada, Spain",
    description:
      "Worked as a Telemarketer. Responsibilities included reaching out to potential customers over the phone, pitching products or services, addressing inquiries, and achieving sales targets.",
    icon: "",
    date: "1999",
    image: "/logos/telemarketer-logo.png",
  },
  {
    title: "Machine Operator",
    location: "Granada, Spain",
    description:
      "Operated machinery at a plastic bag factory. Responsibilities included the efficient production of plastic bags, ensuring consistent quality, performing routine maintenance checks, and packing the bags for shipment or storage. Maintained a focus on safety standards and production goals throughout the process.",
    icon: "",
    date: "1999",
    image: "/logos/factory-logo.png",
  },
  {
    title: "Kitchen Assistant",
    location: "Granada, Spain",
    description:
      "Served as a kitchen assistant. Responsibilities included aiding chefs and cooks, preparing ingredients, maintaining cleanliness in the kitchen, and ensuring smooth culinary operations to support the timely delivery of meals to diners.",
    icon: "",
    date: "1996-1999",
    image: "/logos/kitchen-logo.png",
  },
]

export const education: EducationItem[] = [
  {
    title: "C# .NET Fullstack System Developer",
    location: "Lexicon Malmö AB",
    description:
      "Pursuing an intensive program in .NET development with strong emphasis on C# object-oriented design programming. Gaining experience in frontend fundamentals and technologies (HTML, CSS, JavaScript, React) and backend frameworks (ASP.NET Web API, MVC). Building proficiency in database management through SQL, ADO.NET, LINQ, and Entity Framework Core. Applying Agile methodologies, SCRUM practices, and UML diagramming while using Git/GitHub for version control. Program structure combines hands-on mini-projects with collaborative teamwork, concluding with a comprehensive capstone project.",
    icon: "",
    date: "March 2025 - Present",
    image: "/logos/lexicon-logo.png",
  },
  {
    title:
      "Full-stack developer with a focus on JavaScript (Fullstackutvecklare – inriktning JavaScript)",
    location: "Teknikhögskolan, Lund, Sweden",
    description:
      'I pursued a comprehensive program that covered various domains of software development. I began with a foundational course in Basic Programming with a focus on Java, followed by studies in Frontend Development, delving into technologies like Javascript, HTML, CSS, and React. I also mastered the intricacies of Databases and Secure Software practices. The course also incorporated work-integrated learning modules, known as LIA, where practical application and integration of knowledge took center stage. Advanced courses like Java Spring and Object-oriented Analysis and Design further enhanced my expertise. Throughout my academic journey, I maintained a consistent performance, securing a grade of A, which corresponds to the Swedish grade "VG".',
    icon: "",
    date: "August 2021-August 2023",
    image: "/logos/teknikhogskolan-logo.png",
  },
  {
    title: "Programming 1. C#",
    location: "Hermods, Lund, Sweden",
    description:
      'I completed the "Programming 1" course with a focus on C# at Hermods in Lund. Throughout the course, I consistently excelled and achieved a grade of A.',
    icon: "",
    date: "2021",
    image: "/logos/hermods-logo.png",
  },
  {
    title: "Bachelor's degree in Spanish (Linguistic focus)",
    location: "Lund University, Lund, Sweden",
    description:
      "I earned my Bachelor's degree in Spanish with a linguistic emphasis from Lund University. I successfully completed the program with a final grade of A.",
    icon: "",
    date: "2018",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Linguistics: Basic Course",
    location: "Lund University, Lund, Sweden",
    description:
      "I completed the basic course in Linguistics at Lund University, achieving a grade of A.",
    icon: "",
    date: "2015",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Japanese I: Basic Language Skills",
    location: "Online-based course, Dalarna University, Dalarna, Sweden",
    description:
      'I undertook the "Japanese I" course focused on basic language skills at Dalarna University, delivered through an online platform.',
    icon: "",
    date: "2014",
    image: "/logos/dalarna-university-logo.png",
  },
  {
    title: "Beginner's Course I: Italian / Beginner's Course II: Italian",
    location: "Lund University, Lund, Sweden",
    description:
      "I completed both the Beginner's Course I and II in Italian at Lund University, achieving a grade of A in both courses.",
    icon: "",
    date: "2014",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Swedish as a Foreign Language",
    location: "Lund University, Lund, Sweden",
    description:
      'I took the "Swedish as a Foreign Language" course at Lund University, which is equivalent to the Tisus test. Tisus is a proficiency examination in the Swedish language, and obtaining its certificate qualifies an individual to undertake academic studies in Swedish institutions.',
    icon: "",
    date: "2010",
    image: "/logos/lund-university-logo.png",
  },
  {
    title: "Translation and Interpreting",
    location:
      "University of Granada, Granada, Spain / University of Westminster, London, UK",
    description:
      'I studied "Translation and Interpreting" at the University of Granada in Spain. Additionally, as part of the Erasmus program, I continued my studies in "Translation and Interpreting" for a year at the University of Westminster in London.',
    icon: "",
    date: "2001-2004",
    image: "/logos/granada-university-logo.png",
  },
]

export const languages: LanguageItem[] = [
  {
    name: "Spanish",
    level: "5",
    icon: "/icons/spanish-icon.png",
  },
  {
    name: "English",
    level: "4",
    icon: "/icons/english-icon.png",
  },
  {
    name: "Swedish",
    level: "4",
    icon: "/icons/swedish-icon.png",
  },
  {
    name: "Italian",
    level: "3",
    icon: "/icons/italian-icon.png",
  },
  {
    name: "Japanese",
    level: "1",
    icon: "/icons/japanese-icon.png",
  },
]

export const skills: SkillItem[] = [
  {
    name: ".NET",
    icon: "/icons/net-icon.png",
  },
  {
    name: "C#",
    icon: "/icons/c-sharp-icon.png",
  },
  {
    name: "CSS",
    icon: "/icons/css-icon.png",
  },
  {
    name: "Elementor Pro",
    icon: "/icons/elementor-pro-icon.png",
  },
  {
    name: "Express",
    icon: "/icons/express-icon.png",
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer-motion-icon.png",
  },
  {
    name: "Git",
    icon: "/icons/git-icon.png",
  },
  {
    name: "GraphQL",
    icon: "/icons/graphql-icon.png",
  },
  {
    name: "HTML",
    icon: "/icons/html-icon.png",
  },
  {
    name: "Java",
    icon: "/icons/java-icon.png",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript-icon.png",
  },
  {
    name: "Jira",
    icon: "/icons/jira-icon.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb-icon.png",
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs-icon.png",
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs-icon.png",
  },
  {
    name: "Photoshop",
    icon: "/icons/photoshop-icon.png",
  },
  {
    name: "React",
    icon: "/icons/react-icon.png",
  },
  {
    name: "SCRUM",
    icon: "/icons/scrum-icon.png",
  },
  {
    name: "SQL",
    icon: "/icons/sql-icon.png",
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss-icon.png",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript-icon.png",
  },
]

export const typewriterWords: string[] = [
  "adaptable.",
  "analytical.",
  "creative.",
  "curious.",
  "dedicated.",
  "diligent.",
  "disciplined.",
  "efficient.",
  "empathetic.",
  "flexible.",
  "focused.",
  "friendly.",
  "hard-working.",
  "helpful.",
  "honest.",
  "innovative.",
  "motivated.",
  "organized.",
  "passionate.",
  "patient.",
  "punctual.",
  "reliable.",
  "responsible.",
  "self-motivated.",
  "sociable.",
  "a team player.",
  "thorough.",
  "trustworthy.",
  "versatile.",
  "well-organized.",
]

export const heroText =
  "Hi there! I'm Antonio Gallardo Girela, a Full Stack Developer with a passion for problem-solving. Based in Lund, Sweden, I bring fresh perspective, tenacious determination, and creative solutions to complex challenges. I specialize in building modern, responsive web applications using JavaScript, TypeScript, React, and Next.js. With professional experience at Axis Communications developing with React and GraphQL, I combine technical expertise with a unique linguistic background, including a Bachelor's degree in Spanish and fluency in four languages. Whether you need a polished website, a dynamic web application, or technical consultation, I'm ready to bring your ideas to life with precision and creativity. Let's build something amazing together!"

export const synonymMap: Record<string, string> = {
  passion: "enthusiasm",
  "problem-solving": "troubleshooting",
  fresh: "new",
  perspective: "viewpoint",
  tenacious: "persistent",
  determination: "resolve",
  creative: "innovative",
  solutions: "answers",
  complex: "complicated",
  challenges: "problems",
  specialize: "focus on",
  building: "creating",
  modern: "contemporary",
  responsive: "adaptive",
  applications: "apps",
  technical: "technological",
  expertise: "proficiency",
  unique: "distinctive",
  linguistic: "language",
  background: "foundation",
  fluency: "mastery",
  precision: "accuracy",
  creativity: "imagination",
  amazing: "wonderful",
  "Full Stack Developer": "Web Developer",
  polished: "refined",
  dynamic: "interactive",
}

export const homePageContent: HomePageContent = {
  hero: {
    description:
      "I'm a developer crafting beautiful and performant web experiences. Explore my work and let's build something great together.",
  },
  buttons: {
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    getInTouch: "Get in Touch",
    learnMore: "Learn More",
  },
  sections: {
    featuredProjects: {
      title: "Featured Projects",
      description:
        "Explore my portfolio of web applications and digital solutions. Each project showcases different skills and technologies in my development journey.",
      projects: [
        {
          title: "My CV",
          briefDescription:
            "Professional CV website with responsive design and interactive elements.",
          description:
            "A responsive personal CV website built with Next.js and Tailwind CSS. Features a clean, professional design with a two-column layout, interactive elements, and a mobile-first approach. Showcases my professional background, skills, and experience through visually appealing components like skill grids and interactive timelines.",
          image: "/images/projects/cv-project.png",
          techStack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ],
          links: {
            demo: "https://lxcn-frontend-01-my-cv.vercel.app/",
            github: "https://github.com/herrgallardo/my-personal-website",
          },
        },
        {
          title: "I Knead Cake",
          briefDescription:
            "Responsive bakery website showcasing artisanal cupcakes and wedding cakes with AI-generated visuals.",
          description:
            "A responsive bakery website built with Next.js 15 and Tailwind CSS. Features a clean, modern design with a soft color palette that highlights the bakery's products while providing essential business information. All images and icons were AI-generated, creating a cohesive visual identity. Implements UI components with shadcn/ui, image carousels, responsive navigation, and contact form functionality with modern frontend architecture.",
          image: "/images/projects/bakery-project.png",
          techStack: [
            "Next.js 15",
            "Tailwind CSS",
            "shadcn/ui",
            "TypeScript",
            "Responsive Design",
          ],
          links: {
            demo: "https://lxcn-frontend-02-cakery.vercel.app/",
            github: "https://github.com/herrgallardo/lxcn-frontend-02-cakery",
          },
        },
        {
          title: "Portfolio (old version)",
          briefDescription:
            "Personal portfolio website showcasing my front-end development skills with React, TypeScript, and modern web technologies.",
          description:
            "A responsive personal portfolio website built with React, Next.js, TypeScript, and Tailwind CSS. Features a clean, intuitive interface with smooth Framer Motion animations, dark/light mode toggle, and fully responsive design. Includes interactive sections for showcasing my experience, skills, education, and languages, along with a contact form powered by React Email and Resend. Deployed on Vercel for optimal performance and reliability.",
          image: "/images/projects/portfolio-project.png",
          techStack: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "React Email",
            "Resend",
            "Vercel",
          ],
          links: {
            demo: "https://old-frontender.vercel.app/",
            github: "https://github.com/herrgallardo/my-personal-website",
          },
        },
      ],
    },
    skills: {
      title: "My Skills",
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Interested in hiring a skilled developer? I'm currently looking for new opportunities and would love to hear from you. Feel free to reach out and let's discuss how my skills can benefit your team.",
    },
  },
}

export const aboutPageContent: AboutPageContent = {
  hero: {
    title: "About Me",
    description: [
      "I'm Antonio Gallardo Girela, a Full Stack Developer passionate about building intuitive and impactful web applications.",
      "With experience in React, TypeScript, Next.js, and C#, I blend technical expertise with creative problem-solving. My background in linguistics and fluency in multiple languages gives me a unique perspective on communication and user experience.",
      "Based in Lund, Sweden, I'm dedicated to creating seamless digital experiences through clean code and thoughtful design. Whether working on frontend interfaces or backend systems, I focus on delivering solutions that are both efficient and user-friendly.",
      "When I'm not coding, I enjoy exploring languages, both human and programming ones, and finding creative ways to solve complex problems.",
    ],
    profileImage: "/images/profile-image.png",
    profileImageAlt: "Antonio Gallardo Girela",
  },
  sections: {
    languages: {
      title: "Languages",
      maxLevel: 5,
    },
    skills: {
      title: "Skills",
    },
    experience: {
      title: "Experience",
      showRecent: 5,
      recentText: "Showing 5 most recent positions.",
      showAllButtonText: "Show All Experience",
      showRecentButtonText: "Show Recent Only",
    },
    education: {
      title: "Education",
      showRecent: 5,
      recentText: "Showing 5 most recent educational achievements.",
      showAllButtonText: "Show All Education",
      showRecentButtonText: "Show Recent Only",
    },
    running: {
      title: "My Running Journey",
      description:
        "I love to run. I used to run a lot, then took a break, but I'm happy to say I've started again. Running has been an important part of my life and has taught me discipline, perseverance, and the joy of pushing beyond perceived limits.",
      image: "/images/marathon.jpg",
      imageAlt: "Antonio Gallardo Girela",
      racesTitle: "Official Races I've Completed:",
      races: [
        "Asics Stockholm Marathon (2012)",
        "Malmö Half Marathon (2013)",
        "Sydkustloppet, Trelleborgs Half Marathon (2012)",
        "Skryllemilen (10 Km.) (2012)",
        "Lundaloppet (10 Km.) (2015)",
        "Lundaloppet (15 Km.) (2025)",
      ],
    },
  },
}

export const contactPageContent: ContactPageContent = {
  hero: {
    title: "Let's Connect",
    description:
      "Feel free to reach out with any questions, project ideas, or opportunities. I'd love to hear from you!",
  },
  form: {
    title: "Send a Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "Your Message",
    submitButtonText: "Send Message",
    sendingText: "Sending...",
    successMessage: "Thank you for your message! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again later.",
  },
  contactInfo: {
    title: "Contact Information",
  },
  socialLinks: {
    title: "Connect With Me",
  },
  availability: {
    title: "Availability",
    description:
      "I'm currently available for full-time positions, contract work, and freelance projects. Feel free to reach out to discuss how I can help with your development needs.",
  },
  location: {
    title: "Located in Lund, Sweden",
    description: "Available for both remote work and on-site in Sweden",
    subDescription: "Based in Lund, with easy access to Malmö and Copenhagen",
    image: "/images/lund-map.jpg",
    imageAlt: "Location Map",
  },
}
