import PortfolioWebsite from "@/assets/projects/portfolio-website.webp";
import ComingSoon from "@/assets/projects/coming-soon.webp";
import QuoteGenerator from "@/assets/projects/quote-generator.webp";
import CustomCountDown from "@/assets/projects/countdown-creator.webp";

export const HERO_CONTENT = `Hello, I'm Bishoy Gamal. With a strong foundation in front-end technologies and a continuous drive for learning, I build responsive and engaging websites that stand out. Let's collaborate and bring your vision to life.`;

export const ABOUT_TEXT = `Aspiring front-end web developer with a robust foundation in HTML, CSS, and JavaScript, and hands-on experience with the React framework. Passionate about creating user-friendly, responsive websites. Seeking an entry-level web development position to contribute technical skills and grow professionally in a dynamic team environment. My journey into web development has been fueled by a love for crafting innovative digital solutions and a constant desire to learn and grow in this ever-evolving field. My path to web development began with a fascination for the web's ability to connect people and ideas across the globe. Over time, I honed my skills through hands-on projects, online courses, and relentless practice. Today, I am dedicated to building visually appealing and highly functional websites that not only meet but exceed user expectations.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Developer",
    company: "Freelance",
    description: [
      "Design and develop visually appealing and user-friendly websites using HTML, CSS, and JavaScript.",
      "Implement responsive design principles to ensure websites function well on various devices and screen sizes.",
      "Utilize front-end frameworks such as React.js to create dynamic and interactive user interfaces.",
      "Optimize website performance by reducing load times and improving overall speed through techniques such as code minification, image optimization, and efficient resource loading.",
      "Communicate effectively to gather requirements, provide updates, and address any concerns or feedback from clients.",
      "Deploy websites to hosting platforms and ensure smooth launch and maintenance.",
      "Stay updated with the latest web development trends, tools, and best practices.",
      "Continuously improve skills and knowledge to deliver innovative and efficient web solutions.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Gatsby.js",
      "Astro",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "Git & Github",
      "Research",
      "Problem Solving",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Search Engine Evaluator",
    company: "Clickworker",
    description: [
      "Helped maintain a seamless user experience by promptly addressing critical concerns related to navigation, functionality, or other technical issues within the platform.",
      "Optimized websites content and images to improve search engine rankings.",
      "Increased efficiency in the evaluation process through the implementation of standardized tools and methodologies.",
      "Improved user experience by identifying and reporting issues in search engine algorithms.",
    ],
    skills: ["Research"],
  },
  {
    year: "2019 - 2021",
    role: "Loadmaster",
    company: "Egyptair",
    description: [
      "Coordinated and managed the loading and unloading of aircraft, ensuring compliance with safety and regulatory standards.",
      "Maintained compliance with airport and airline policies and baggage weight restrictions to protect passengers, crew, cargo and aircraft.",
      "Maximized use of space with proper distribution of cargo in available compartments.",
      "Evaluated cargo quantity, optimum orientation and weight to make accurate decisions about handling.",
      "Maximized cargo capacity by strategically arranging loads according to size, weight, and priority.",
      "Maintained detailed logs and documentation of cargo handling procedures.",
    ],
    skills: ["Team Leadership", "Problem Solving"],
  },
  {
    year: "2017-2018",
    role: "Coordinator",
    company: "Litteratura Arts and Culture Center",
    description: [
      "Creating posters and social media graphics for events.",
      "Develop creative concepts for events and courses at the center.",
    ],
    skills: ["Graphic Deign", "Canva", "Time Management"],
  },
  {
    year: "2011 - 2017",
    role: "Data Entry Clerk & IT Support",
    company: "Elmasa Security & Services",
    description: [
      "Accurately entered and managed large volumes of data into company databases.",
      "Assisted in creating and maintaining the company website using WordPress.",
      "Designed graphic materials for marketing purposes using Adobe Photoshop.",
      "Performed computer maintenance tasks, including installing Windows operating systems and Microsoft Office suites. ",
      "Ensured data integrity and consistency through detailed verification processes.",
      "Assisted in creating reports and presentations, enhancing data-driven decision-making.",
    ],
    skills: ["MS Word", "MS Excel", "Adobe Photoshop", "WordPress"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: PortfolioWebsite,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Astro", "React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "E-Commerce Website",
    image: ComingSoon,
    comingSoon: true,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Next.js", "TailwindCSS", "MySQL", "Prisma"],
  },
  {
    title: "Quote Generator",
    image: QuoteGenerator,
    description:
      "Create random quotes with the option to share them on Twitter.",
    technologies: ["React", "TypeScript"],
    url: "https://quote-generator-e0b.pages.dev/",
  },
  {
    title: "Custom Countdown Creator",
    image: CustomCountDown,
    description:
      "Develop a custom countdown feature and save the date in local storage for future access.",
    technologies: ["JavaScript"],
    url: "https://bishoygh.github.io/custom-countdown/",
  },
];
