import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  pixelpace,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cigar,
  yes,
  yggy,
  aution,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Pixel Pace Technologies",
    icon: pixelpace,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Next.js Projects:Led the development of projects like Grammit,leveraging the power of server side rendering",
      "Full stack Devlopment:Played a vital role in creation and development of ",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Tossdown",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Aug 2023",
    points: [
      "I specialize in building scalable applications using React and Redux. Notably, I developed the CMS **bizv2.tossdown.com** leveraging React, Redux, TypeScript, RESTful APIs, and microservices..",
      "Led the development of bizv2.tossdown.com, a responsive CMS, utilizing React, Redux, and higher-order components (HOCs)  ensured high-quality standards with Jest testing; managed the project team and oversaw seamless delivery.",
      "Working as a React JS Developer/Junior Software Engineer with experience in React, Redux, Material-UI, Ant Design, AWS, Firebase, Google Maps API, and Git workflows. Skilled in building business-level applications, including Restaurant Management Systems and ERP/CRM solutions, with hands-on expertise in modern JavaScript (ES6+), push notifications, and drag-and-drop implementations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Prismware Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2021 - Sep 2021",
    points: [
      "Designed and maintained scalable web applications with React.js, Node.js, and Express.js.",
      "Collaborated with cross-functional teams to gather requirements and deliver solutions.",
      "Developed and optimized RESTful APIs for seamless front-end/back-end communication.",
      "Implemented CI/CD pipelines, reducing deployment time by 2x.",
      "Built dynamic data dashboards with React and Chart.js.",
      "Integrated Firebase Cloud Messaging for real-time notifications.",
      "Managed full software development lifecycle using Office 365 and Azure DevOps.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce Saas ",
    description:
      "Tossdown is a cutting-edge e-commerce platform tailored for the food and beverage industry. It empowers restaurants, grocery stores, and more with tools like online ordering, customer loyalty programs, branded mobile apps, and real-time analytics. With seamless digital payments and inventory management, Tossdown delivers a robust solution for thriving in the digital marketplace.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "RestApi",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://bizv2.tossdown.com/",
  },
  {
    name: "Yes Express Cargo Web Dashboad and App ",
    description:
      "Yes Express Cargo, also known as Yes Express Services PTY LTD, specializes in sea cargo shipping between Australia and Pakistan. They offer reliable and affordable services for personal and commercial shipments, including home appliances, gifts, and business goods. .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Restfull Api's",
        color: "pink-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: yes,
    source_code_link:
      "https://play.google.com/store/apps/details?id=com.pixelpacetechnologies.yesexpress&hl=en&pli=1",
  },
  {
    name: "Africa's Travel Agency",
    description:
      "Our client, a leading travel agency specializing in African destinations, needed a comprehensive digital solution to manage their travel packages and streamline the booking process. The goal was to create an easy-to-use platform where customers could browse destinations, book trips, and make secure payments online, all while enjoying a seamless user experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "React Native",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://travelafricas.com/",
  },
  {
    name: "Cigar Ecommerce Store",
    description:
      "Our client, a renowned cigar retailer based in Hong Kong, wanted to launch a sleek and functional e-commerce store to showcase their wide range of premium cigars. The goal was to enhance the user experience, increase online sales, and build a strong digital presence for their luxury product line. We worked closely with the client to design a custom Shopify store that catered to their niche market, focusing on optimizing product visibility and ensuring smooth navigation for customers..",
    tags: [
      {
        name: "Shopify",
        color: "blue-text-gradient",
      },
      {
        name: "Payment Integrations",
        color: "green-text-gradient",
      },
    ],
    image: cigar,
    source_code_link: "https://migratorystory.com/",
  },
  {
    name: "Yggy Career Suite",
    description:
      "Yggy Career Suite is your all-in-one companion for navigating the modern job market. We're dedicated to helping job-seekers, career changers, and ambitious professionals thrive with a versatile toolbox of career-building resources tailored to every step of your journey. Whether you're launching your career fresh out of school, making a bold pivot into a new industry, or simply searching for a role that aligns with your passions and lifestyle, we’ve got your back.Our suite offers expertly crafted resume templates, interview preparation guides.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Larvel",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
    ],
    image: yggy,
    source_code_link: "https://www.yggycareersuite.com/",
  },
  {
    name: "​AWD Auctions",
    description:
      "​AWD Auctions is an online, dealer-only vehicle auction platform designed to streamline the buying and selling process for automotive dealers. With over a decade of industry experience, AWD Auctions focuses on transparency, efficiency, and competitive pricing to support dealers in maximizing their business potential.Each vehicle undergoes comprehensive multi-point inspections conducted by certified professionals. Detailed condition reports and high-quality visuals provide buyers with the confidence to make informed decisions",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Larvel",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
    ],
    image: aution,
    source_code_link: "https://awdauctions.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
