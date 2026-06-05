import {
  Globe,
  Layers,
  Cpu,
  Bot,
  Database,
  MonitorCog,
  Code2,
  CircuitBoard,
  Smartphone,
  Truck,
} from "lucide-react";

export const projects = [
  {
    slug: "aamet-alumni-platform",
    icon: Globe,
    title: "AAMET Alumni Platform",
    category: "Web & Software",
    type: "Full-Stack Web Application",
    status: "Production System",
    image: "/images/projects/aamet/01.png",
    description:
      "A full-stack alumni management platform with member registration, admin dashboard, document uploads, role-based access control, and digital ID card generation.",
    overview:
      "The AAMET Alumni Platform was developed as a modern web-based alumni management system. It supports member registration, admin approval workflows, role-based access, document handling, and digital ID card generation.",
    challenge:
      "The main challenge was creating a structured platform that could manage alumni records, support admin control, handle document uploads, and maintain a professional user experience.",
    solution:
      "The system was designed with a Next.js frontend, Node.js and Express backend, MongoDB database, JWT authentication, and role-based admin permissions.",
    features: [
      "Member registration and approval workflow",
      "Admin dashboard with role-based access",
      "Document and image upload handling",
      "Digital alumni ID card generation",
      "JWT-based authentication",
      "MongoDB-based data management",
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/aamet/01.png",
        alt: "AAMET homepage preview",
      },
      {
        type: "image",
        src: "/images/projects/aamet/02.png",
        alt: "AAMET admin dashboard preview",
      },
      {
        type: "image",
        src: "/images/projects/aamet/03.png",
        alt: "AAMET ID card preview",
      },
      {
        type: "video",
        src: "/videos/projects/aamet-demo.mp4",
        poster: "/images/projects/aamet/aamet.png",
        alt: "AAMET project demo video",
      },
    ],
  },
  {
    slug: "alpha-360-industries-website",
    icon: Layers,
    title: "Alpha 360 Industries Website",
    category: "Web & Software",
    type: "Company Website",
    status: "Brand Project",
    image: "/images/projects/alpha360/01.jpeg",
    description:
      "A professional company website designed to showcase software services, mobile apps, business systems, and digital solutions.",
    overview:
      "Alpha 360 Industries Website was designed as a professional digital presence for a startup software company focused on websites, mobile applications, and business systems.",
    challenge:
      "The challenge was to build a trustworthy and modern brand website that communicates services clearly while maintaining a premium visual identity.",
    solution:
      "The website uses a dark modern design, animated sections, service highlights, and clear call-to-action areas to attract small and medium-sized business owners.",
    features: [
      "Modern responsive landing page",
      "Service showcase sections",
      "Animated hero and content blocks",
      "Professional brand identity",
      "Contact-focused user journey",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/alpha360/02.jpeg",
        alt: "Alpha 360 homepage preview",
      },
      {
        type: "image",
        src: "/images/projects/alpha360/03.jpeg",
        alt: "Alpha 360 services section preview",
      },
    ],
  },
  // {
  //   slug: "personal-portfolio-website",
  //   icon: Globe,
  //   title: "Personal Portfolio Website",
  //   category: "Web & Software",
  //   type: "Personal Brand Website",
  //   status: "Current Build",
  //   image: "/images/projects/portfolio.jpg",
  //   description:
  //     "A dark professional portfolio website with smooth animations, modern typography, and a strong software-engineering identity.",
  //   overview:
  //     "This portfolio website was designed to present my software engineering, engineering technology, automation, and project background in a modern personal brand format.",
  //   challenge:
  //     "The main challenge was creating a unique portfolio that does not feel like a common template while keeping good performance and responsiveness.",
  //   solution:
  //     "The website was built with Next.js, Tailwind CSS, and Framer Motion using a dark red-accented design system, reusable sections, and optimized layout patterns.",
  //   features: [
  //     "Animated hero section",
  //     "Project showcase with case studies",
  //     "Career timeline section",
  //     "Responsive navigation",
  //     "Contact and footer sections",
  //   ],
  //   tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  //   liveLink: "#",
  //   githubLink: "#",
  //   media: [
  //     {
  //       type: "image",
  //       src: "/images/projects/portfolio/01.jpg",
  //       alt: "Portfolio hero section preview",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/portfolio/02.jpg",
  //       alt: "Portfolio project section preview",
  //     },
  //   ],
  // },
  {
    slug: "a360-webcore",
    icon: Code2,
    title: "A360 WebCore",
    category: "Web & Software",
    type: "PHP Backend Framework",
    status: "Framework Project",
    image: "/images/projects/a360-webcore/05.png",
    description:
      "A PHP backend framework for handling requests, responses, authentication, validation, file handling, database integration, and structured APIs.",
    overview:
      "A360 WebCore is a PHP backend library/framework concept created to handle backend logic in a structured and reusable way.",
    challenge:
      "The challenge was to organize backend functionality such as request handling, responses, authentication, error handling, and file processing into reusable core classes.",
    solution:
      "The framework was structured with core PHP classes for requests, responses, JWT authentication, error handling, database connection, and file validation.",
    features: [
      "Request and response handling",
      "JWT authentication support",
      "Image and PDF file validation",
      "Structured error handling",
      "Database connection layer",
    ],
    tech: ["PHP", "JWT", "Composer", "MySQL"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/a360-webcore/01.png",
        alt: "A360 WebCore structure preview",
      },
      {
        type: "image",
        src: "/images/projects/a360-webcore/02.png",
        alt: "A360 WebCore structure preview",
      },
      {
        type: "image",
        src: "/images/projects/a360-webcore/03.png",
        alt: "A360 WebCore structure preview",
      },
      {
        type: "image",
        src: "/images/projects/a360-webcore/04.png",
        alt: "A360 WebCore structure preview",
      },
    ],
  },
  {
    slug: "cc3-glue-application-automation",
    icon: Cpu,
    title: "CC3 Glue Application Automation",
    category: "Automation & IoT",
    type: "Industrial Automation Concept",
    status: "Internship Project",
    image: "/images/projects/cc3-glue.jpg",
    description:
      "A portable automation concept designed to improve glue application consistency, operator comfort, and process efficiency in load cell production.",
    overview:
      "This project focuses on improving the CC3 glue application process through a semi-automated system using a rotational platform and controlled operation method.",
    challenge:
      "Manual glue application can be repetitive and inconsistent. The process requires operator attention, stable rotation, and better control to improve comfort and consistency.",
    solution:
      "A portable rotational platform concept was proposed with foot-operated control, adjustable speed, and future expansion for tape applying and glue applying mechanisms.",
    features: [
      "Portable rotational platform",
      "Foot-operated control concept",
      "Adjustable rotation speed",
      "Supports operator hand freedom",
      "Expandable into tape and glue automation phases",
    ],
    tech: ["Arduino", "Motor Control", "Mechanical Design", "Automation"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/cc3-glue/01.jpg",
        alt: "CC3 glue automation concept preview",
      },
      {
        type: "image",
        src: "/images/projects/cc3-glue/02.jpg",
        alt: "Rotational platform concept",
      },
      {
        type: "video",
        src: "/videos/projects/cc3-glue-demo.mp4",
        poster: "/images/projects/cc3-glue/poster.jpg",
        alt: "CC3 glue automation demo video",
      },
    ],
  },
  {
    slug: "home-automation-system",
    icon: CircuitBoard,
    title: "Home Automation System",
    category: "Automation & IoT",
    type: "IoT System",
    status: "IoT Project",
    image: "/images/projects/home-automation/01.png",
    description:
      "A home automation concept using ESP modules, RFID door lock control, PIR motion detection, server updates, and app-based control.",
    overview:
      "The home automation system was designed with a master and slave ESP module architecture to manage door lock control, motion detection, and app communication.",
    challenge:
      "The main challenge was coordinating hardware events such as RFID unlock and PIR detection with server updates and app-based control.",
    solution:
      "The system used ESP modules to communicate between the slave door lock unit and master module, then update the server and app when door or motion events occur.",
    features: [
      "RFID-based door unlock",
      "PIR motion detection",
      "Master-slave ESP communication",
      "Server update integration",
      "App-based lock and unlock control",
    ],
    tech: ["ESP32", "RFID", "Firebase", "IoT"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/home-automation/02.png",
        alt: "Home automation system preview",
      },
      {
        type: "image",
        src: "/images/projects/home-automation/03.png",
        alt: "Home automation system preview",
      },
      {
        type: "image",
        src: "/images/projects/home-automation/04.png",
        alt: "Home automation system preview",
      },
      {
        type: "image",
        src: "/images/projects/home-automation/05.png",
        alt: "Home automation system preview",
      },
    ],
  },
  {
    slug: "oven-log-system-concept",
    icon: Cpu,
    title: "Oven Log System Concept",
    category: "Automation & IoT",
    type: "Production Tracking System",
    status: "Concept Project",
    image: "/images/projects/oven-log.jpg",
    description:
      "A QR-based oven log concept to reduce manual recording errors, improve traceability, and support production reporting.",
    overview:
      "The oven log system concept was proposed to replace manual oven logging with a digital tracking method using QR codes and production data.",
    challenge:
      "Manual oven logs can lead to counting errors, missed entries, delays, and difficulty in tracking production history.",
    solution:
      "The proposed system would use QR-based identification to log cell information, oven data, time records, and generate traceable production reports.",
    features: [
      "QR-based cell identification",
      "Digital oven log records",
      "Cell type and count tracking",
      "Automated report concept",
      "Reduced manual recording errors",
    ],
    tech: ["QR", "Database", "Web App"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/oven-log/01.jpg",
        alt: "Oven log system concept preview",
      },
    ],
  },
  {
    slug: "kinect-obstacle-avoiding-robot",
    icon: Bot,
    title: "Kinect Obstacle Avoiding Robot",
    category: "Robotics & Vision",
    type: "Computer Vision Robotics",
    status: "Research / Robotics",
    image: "/images/projects/kinect-robot/01.png",
    description:
      "A robot project using Kinect v2, OpenCV, and Python for color/depth processing, obstacle detection, human detection, and path visualization.",
    overview:
      "This project explores obstacle avoidance using Kinect v2 depth sensing, OpenCV image processing, and Python-based real-time visualization.",
    challenge:
      "The challenge was to process color and depth frames, identify obstacles and humans, estimate distance, and visualize avoidance paths.",
    solution:
      "The system uses Kinect v2 input with Python and OpenCV to process frames, detect objects, label obstacles, and guide robot navigation.",
    features: [
      "Color and depth frame processing",
      "Obstacle detection",
      "Human detection concept",
      "Distance visualization",
      "Avoidance path marking",
    ],
    tech: ["Python", "OpenCV", "Kinect v2"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/kinect-robot/02.png",
        alt: "Kinect robot preview",
      },
      {
        type: "image",
        src: "/images/projects/kinect-robot/03.png",
        alt: "Kinect robot preview",
      },
      {
        type: "image",
        src: "/images/projects/kinect-robot/04.png",
        alt: "Kinect robot preview",
      },
      {
        type: "image",
        src: "/images/projects/kinect-robot/05.png",
        alt: "Kinect robot preview",
      },
      {
        type: "video",
        src: "/videos/projects/kinect-robot-demo.mp4",
        poster: "/images/projects/kinect-robot/02.png",
        alt: "Kinect robot demo video",
      },
    ],
  },
  {
    slug: "self-balancing-robot-concept",
    icon: Bot,
    title: "Self-Balancing Robot Concept",
    category: "Robotics & Vision",
    type: "Embedded Robotics",
    status: "Concept Project",
    image: "/images/projects/self-balancing/01.png",
    description:
      "A robotics concept focused on balance control, sensor feedback, motor control, and Arduino-based embedded system design.",
    overview:
      "The self-balancing robot concept focuses on feedback control, motion sensing, and motor control using embedded electronics.",
    challenge:
      "The main challenge is keeping the robot balanced by reading sensor data and adjusting motor output quickly.",
    solution:
      "The robot concept uses an MPU6050 sensor, motor driver, Arduino controller, and control logic to maintain balance.",
    features: [
      "Balance control concept",
      "Sensor feedback",
      "Motor driver control",
      "Arduino-based embedded logic",
      "Prototype-ready component planning",
    ],
    tech: ["Arduino", "MPU6050", "Motor Driver"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/self-balancing/02.png",
        alt: "Self-balancing robot concept preview",
      },
      {
        type: "image",
        src: "/images/projects/self-balancing/03.png",
        alt: "Self-balancing robot concept preview",
      },
      {
        type: "image",
        src: "/images/projects/self-balancing/04.png",
        alt: "Self-balancing robot concept preview",
      },
      {
        type: "image",
        src: "/images/projects/self-balancing/05.png",
        alt: "Self-balancing robot concept preview",
      },
    ],
  },
  {
    slug: "robotic-arm-with-computer-vision",
    icon: Bot,
    title: "Robotic Arm with Computer Vision",
    category: "Robotics & Vision",
    type: "Vision-Based Robotic Arm",
    status: "Learning Project",
    image: "/images/projects/robotic-arm.jpg",
    description:
      "A robotic arm concept with object detection, camera-based control, and embedded movement coordination.",
    overview:
      "This project concept focuses on combining computer vision with robotic arm control for object detection and movement coordination.",
    challenge:
      "The challenge is connecting camera-based object detection with accurate servo or motor movement control.",
    solution:
      "The concept uses OpenCV for visual detection and Arduino-based servo control to move the robotic arm according to detected objects.",
    features: [
      "Camera-based object detection",
      "Servo movement control",
      "Arduino integration",
      "OpenCV processing concept",
      "Robotic movement coordination",
    ],
    tech: ["Arduino", "OpenCV", "Servo Control"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/robotic-arm/01.jpg",
        alt: "Robotic arm concept preview",
      },
    ],
  },
  {
    slug: "pharmacy-inventory-system",
    icon: Database,
    title: "Pharmacy Inventory System",
    category: "Database & Business",
    type: "Inventory Management System",
    status: "Academic Project",
    image: "/images/projects/pharmacy.jpg",
    description:
      "A database-based inventory management system for handling pharmacy stock, item details, records, and basic business operations.",
    overview:
      "The Pharmacy Inventory System was created as a database-focused academic project to manage pharmacy stock and item records.",
    challenge:
      "The challenge was designing a structured database system to store inventory data, item details, and basic operational records.",
    solution:
      "The system was designed with relational database concepts and implemented using PHP and MySQL for data handling.",
    features: [
      "Inventory item management",
      "Stock record handling",
      "Database table design",
      "Basic business operations",
      "PHP and MySQL integration",
    ],
    tech: ["MySQL", "PHP", "Database Design"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/pharmacy/01.jpg",
        alt: "Pharmacy inventory system preview",
      },
    ],
  },
  {
    slug: "vehicle-service-center-system",
    icon: MonitorCog,
    title: "Vehicle Service Center System",
    category: "Database & Business",
    type: "Business Management System",
    status: "Legacy Upgrade",
    image: "/images/projects/service-center.jpg",
    description:
      "A web-based system concept for managing service center operations, customer records, inventory, and service workflows.",
    overview:
      "The Vehicle Service Center System is a web-based system concept for handling service center operations and business records.",
    challenge:
      "The challenge was organizing customer, service, inventory, and workflow-related data in a structured system.",
    solution:
      "The system concept uses PHP, CodeIgniter, and MySQL to manage service center operations through a web interface.",
    features: [
      "Customer record management",
      "Service workflow handling",
      "Inventory-related records",
      "Business operation tracking",
      "Legacy system upgrade planning",
    ],
    tech: ["PHP", "CodeIgniter", "MySQL"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/service-center/01.jpg",
        alt: "Vehicle service center system preview",
      },
    ],
  },
  {
    slug: "growth",
    icon: Globe,
    title: "Growth",
    category: "Web & Mobile Applications",
    type: "Agricultural E-Commerce Platform",
    status: "Startup Project",
    image: "/images/projects/growth/04.png",
    description:
      "A digital agricultural marketplace that enables farmers to purchase farming inputs and sell agricultural products directly to consumers through a unified platform.",

    overview:
      "Growth was developed to address challenges in Sri Lanka's agricultural supply chain by creating a digital ecosystem that connects farmers, consumers, and agricultural suppliers. The platform enables farmers to purchase fertilizers, pesticides, seeds, and farming equipment while also providing a direct channel to market and sell their harvest.",

    challenge:
      "Farmers often face difficulties accessing quality agricultural supplies at competitive prices and rely heavily on intermediaries to sell their produce, reducing profitability and limiting market access. The challenge was to create a single platform that serves both agricultural procurement and product distribution.",

    solution:
      "Growth was designed as a full agricultural commerce platform with integrated farmer, customer, and supplier interactions. The system allows farmers to purchase essential farming inputs, manage products, and sell crops directly to consumers, creating a more transparent and efficient agricultural marketplace.",

    features: [
      "Farmer and customer account management",
      "Agricultural product marketplace",
      "Fertilizer and pesticide purchasing",
      "Seed and farming equipment catalog",
      "Direct farmer-to-consumer sales",
      "Order and inventory management",
      "Mobile-friendly user experience",
      "Integrated Firebase backend services",
    ],

    tech: ["Java", "Servlets", "Firebase", "HTML", "CSS", "JavaScript"],

    liveLink: "#",
    githubLink: "#",

    media: [
      {
        type: "image",
        src: "/images/projects/growth/04.png",
        alt: "Growth platform dashboard",
      },
      {
        type: "image",
        src: "/images/projects/growth/02.png",
        alt: "Growth marketplace interface",
      },
      {
        type: "image",
        src: "/images/projects/growth/06.png",
        alt: "Growth product catalog",
      },
      {
        type: "image",
        src: "/images/projects/growth/07.png",
        alt: "Growth ordering system",
      },
    ],
  },
  {
    slug: "vehicle-service-center-system",
    icon: MonitorCog,
    title: "Vehicle Service Center System",
    category: "Database & Business",
    type: "Business Management System",
    status: "Legacy Upgrade",
    image: "/images/projects/service-center.jpg",
    description:
      "A web-based system concept for managing service center operations, customer records, inventory, and service workflows.",
    overview:
      "The Vehicle Service Center System is a web-based system concept for handling service center operations and business records.",
    challenge:
      "The challenge was organizing customer, service, inventory, and workflow-related data in a structured system.",
    solution:
      "The system concept uses PHP, CodeIgniter, and MySQL to manage service center operations through a web interface.",
    features: [
      "Customer record management",
      "Service workflow handling",
      "Inventory-related records",
      "Business operation tracking",
      "Legacy system upgrade planning",
    ],
    tech: ["PHP", "CodeIgniter", "MySQL"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/service-center/01.jpg",
        alt: "Vehicle service center system preview",
      },
    ],
  },
  {
    slug: "java-swing-ui-library",
    icon: Code2,
    title: "Java Swing UI Library",
    category: "Libraries & Frameworks",
    type: "UI Component Framework",
    status: "Library Project",
    image: "/images/projects/java-swing-ui/01.png",
    description:
      "A custom Java Swing UI library designed to modernize desktop applications with advanced components, animations, rounded controls, shadow effects, and improved user experience.",
    overview:
      "The Java Swing UI Library was created to overcome the visual limitations of standard Swing components by providing a collection of modern, reusable UI elements for desktop software development.",
    challenge:
      "Default Java Swing components lack modern design features such as rounded corners, shadows, animations, and responsive navigation patterns, making applications feel outdated.",
    solution:
      "A reusable component library was developed with custom-painted controls, animation systems, and enhanced user interface elements that can be easily integrated into Java Swing applications.",
    features: [
      "Rounded buttons and text fields",
      "Shadow and glow panels",
      "Animated side navigation",
      "Carousel components",
      "Modern card layouts",
      "Custom dialog components",
      "Reusable UI toolkit architecture",
    ],
    tech: ["Java", "Swing", "Graphics2D", "Custom Components"],
    liveLink: "#",
    githubLink: "#",
    media: [
      {
        type: "image",
        src: "/images/projects/java-swing-ui/02.png",
        alt: "Java Swing UI Library showcase",
      },
      {
        type: "image",
        src: "/images/projects/java-swing-ui/03.png",
        alt: "Java Swing UI Library showcase",
      },
    ],
  },
  {
    slug: "growth-mobile-app",
    icon: Smartphone,
    title: "Growth Mobile Application",
    category: "Mobile Applications",
    type: "Android Application",
    status: "Production Build",
    image: "/images/projects/growth-mobile/01.png",

    description:
      "An Android application designed to connect farmers and consumers through a mobile-first agricultural marketplace, enabling product purchasing, crop selling, and account management on the go.",

    overview:
      "The Growth Mobile Application was developed as the mobile extension of the Growth ecosystem, providing farmers and customers with convenient access to agricultural products and services directly from their smartphones. The application focuses on accessibility, ease of use, and real-time interaction with the marketplace.",

    challenge:
      "Many farmers rely primarily on mobile devices for internet access, making it essential to create a responsive and user-friendly application that delivers marketplace functionality while maintaining good performance on a wide range of Android devices.",

    solution:
      "The mobile application was built with Android and Firebase to provide secure authentication, real-time data synchronization, product browsing, order management, and seamless interaction with the Growth agricultural marketplace.",

    features: [
      "Farmer and customer registration",
      "Secure user authentication",
      "Agricultural product browsing",
      "Direct crop selling functionality",
      "Order management",
      "Real-time Firebase integration",
      "Mobile-first user experience",
      "Product search and filtering",
    ],

    tech: [
      "Java",
      "Android Studio",
      "Firebase Authentication",
      "Firebase Firestore",
      "Firebase Storage",
      "XML",
    ],

    liveLink: "#",
    githubLink: "#",

    media: [
      {
        type: "image",
        src: "/images/projects/growth-mobile/01.png",
        alt: "Growth Mobile Application Home Screen",
      },
      {
        type: "image",
        src: "/images/projects/growth-mobile/02.png",
        alt: "Growth Mobile Marketplace",
      },
      {
        type: "image",
        src: "/images/projects/growth-mobile/03.png",
        alt: "Growth Mobile Product Details",
      },
    ],
  },
  {
    slug: "happy-home-deliver-app",
    icon: Truck,
    title: "Happy Home Deliver App",
    category: "Mobile Applications",
    type: "Android Application",
    status: "Production Build",
    image: "/images/projects/happy-home-deliver/01.png",

    description:
      "An Android application designed to connect farmers and consumers through a mobile-first agricultural marketplace, enabling product purchasing, crop selling, and account management on the go.",

    overview:
      "The Growth Mobile Application was developed as the mobile extension of the Growth ecosystem, providing farmers and customers with convenient access to agricultural products and services directly from their smartphones. The application focuses on accessibility, ease of use, and real-time interaction with the marketplace.",

    challenge:
      "Many farmers rely primarily on mobile devices for internet access, making it essential to create a responsive and user-friendly application that delivers marketplace functionality while maintaining good performance on a wide range of Android devices.",

    solution:
      "The mobile application was built with Android and Firebase to provide secure authentication, real-time data synchronization, product browsing, order management, and seamless interaction with the Growth agricultural marketplace.",

    features: [
      "Farmer and customer registration",
      "Secure user authentication",
      "Agricultural product browsing",
      "Direct crop selling functionality",
      "Order management",
      "Real-time Firebase integration",
      "Mobile-first user experience",
      "Product search and filtering",
    ],

    tech: [
      "Java",
      "Android Studio",
      "Firebase Authentication",
      "Firebase Firestore",
      "Firebase Storage",
      "XML",
    ],

    liveLink: "#",
    githubLink: "#",

    media: [
      {
        type: "image",
        src: "/images/projects/happy-home-deliver/02.png",
        alt: "Happy Home Deliver App Home Screen",
      },
      {
        type: "image",
        src: "/images/projects/happy-home-deliver/03.png",
        alt: "Happy Home Deliver App Marketplace",
      },
      {
        type: "image",
        src: "/images/projects/happy-home-deliver/04.png",
        alt: "Happy Home Deliver App Product Details",
      },
      {
        type: "image",
        src: "/images/projects/happy-home-deliver/05.png",
        alt: "Happy Home Deliver App Product Details",
      },
    ],
  },
  {
    slug: "patasgala-lk",
    icon: Truck,
    title: "Patasgala.lk",
    category: "Web & E-Commerce",
    type: "Online Marketplace Platform",
    status: "Client Project",
    image: "/images/projects/patasgala/01.png",

    description:
      "A comprehensive online marketplace platform that enables users across Sri Lanka to buy, sell, and discover products and services ranging from vehicles and properties to electronics, furniture, and everyday items.",

    overview:
      "Patasgala.lk was developed as a digital marketplace designed to connect buyers and sellers throughout Sri Lanka. The platform provides a centralized space where individuals and businesses can publish listings, browse products, communicate with potential customers, and conduct transactions across multiple categories.",

    challenge:
      "The primary challenge was creating a scalable marketplace capable of supporting diverse product categories while maintaining a simple and intuitive user experience. The platform needed to accommodate a large variety of listings including vehicles, land, electronics, furniture, household items, and business services.",

    solution:
      "A responsive web-based marketplace was developed with category-based listing management, advanced search capabilities, user account management, and seller tools. The platform streamlines the buying and selling process while making it easier for users to discover relevant products and opportunities across the country.",

    features: [
      "Multi-category marketplace",
      "Buy and sell product listings",
      "Vehicle marketplace",
      "Property and land listings",
      "Furniture and electronics marketplace",
      "Seller account management",
      "Product image galleries",
      "Advanced search and filtering",
      "Responsive mobile-friendly design",
      "Location-based listing support",
    ],

    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],

    liveLink: "https://patasgala.lk",
    githubLink: "#",

    media: [
      {
        type: "image",
        src: "/images/projects/patasgala/02.png",
        alt: "Patasgala.lk Homepage",
      },
      {
        type: "image",
        src: "/images/projects/patasgala/03.png",
        alt: "Marketplace Listings",
      },
      {
        type: "image",
        src: "/images/projects/patasgala/04.png",
        alt: "Product Details Page",
      },
      {
        type: "image",
        src: "/images/projects/patasgala/05.png",
        alt: "Seller Dashboard",
      },
    ],
  },
  {
    slug: "somet-lk",
    icon: Globe,
    title: "SOMET.lk",
    category: "Web Design & Development",
    type: "Professional Society Website",
    status: "Client Project",
    image: "/images/projects/somet/01.png",

    description:
      "An official digital platform developed for the Society of Mechanical Engineering Technology (SOMET) to showcase its mission, activities, events, achievements, and engagement with students, academics, and industry professionals.",

    overview:
      "SOMET.lk was designed and developed as the official online presence of the Society of Mechanical Engineering Technology. The platform serves as a centralized hub for sharing organizational information, promoting events, publishing news and updates, highlighting achievements, and strengthening communication between members, students, and industry stakeholders.",

    challenge:
      "The main challenge was creating a modern, professional, and user-friendly platform that accurately represents the society's identity while providing easy access to information, events, announcements, and resources. The website needed to maintain a clean structure while supporting future growth and content expansion.",

    solution:
      "A fully responsive and visually engaging website was developed with modern UI/UX principles, dynamic content management, event promotion sections, news publishing capabilities, and streamlined navigation. The platform effectively enhances the society's digital presence while improving communication and engagement with its audience.",

    features: [
      "Modern responsive design",
      "Organization profile and mission showcase",
      "Event and activity promotion",
      "Latest news and announcements",
      "Committee and member information",
      "Gallery and media sections",
      "Contact and inquiry forms",
      "Mobile-friendly user experience",
      "Professional branding and presentation",
      "Optimized performance and accessibility",
    ],

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],

    liveLink: "https://somet.lk",
    githubLink: "#",

    media: [
      {
        type: "image",
        src: "/images/projects/somet/02.png",
        alt: "SOMET Homepage",
      },
      {
        type: "image",
        src: "/images/projects/somet/01.png",
        alt: "Events Section",
      },
      {
        type: "image",
        src: "/images/projects/somet/03.png",
        alt: "News and Updates",
      },
      {
        type: "image",
        src: "/images/projects/somet/04.png",
        alt: "Organization Information",
      },
    ],
  },
  {
  slug: "global-med",
  icon: Database,
  title: "Global Med",
  category: "Healthcare & Business Systems",
  type: "Pharmacy Inventory Management System",
  status: "Academic Project",
  image: "/images/projects/global-med/01.png",

  description:
    "A pharmacy inventory and stock management system designed to streamline medicine tracking, inventory control, supplier management, and business reporting.",

  overview:
    "Global Med was developed as a healthcare inventory management solution for pharmacies and medical suppliers. The system provides tools for managing medicine stock levels, supplier information, purchase records, sales tracking, and inventory analytics through a centralized dashboard.",

  challenge:
    "Managing pharmaceutical inventory requires accurate stock monitoring, expiry date tracking, and supplier coordination. Manual processes can result in stock shortages, expired products, and reporting inefficiencies.",

  solution:
    "Global Med provides a centralized platform for inventory control, medicine management, stock monitoring, and reporting. The system improves operational visibility while helping pharmacies maintain accurate inventory records.",

  features: [
    "Medicine inventory management",
    "Stock monitoring and alerts",
    "Expiry date tracking",
    "Supplier management",
    "Sales and purchase records",
    "Inventory analytics dashboard",
    "Low stock notifications",
    "Search and filtering tools",
    "Report generation",
    "Role-based management"
  ],

  tech: [
    "PHP",
    "MySQL",
    "Bootstrap",
    "JavaScript",
    "HTML5",
    "CSS3"
  ],

  liveLink: "#",
  githubLink: "#",

  media: [
    {
      type: "image",
      src: "/images/projects/global-med/01.png",
      alt: "Global Med Dashboard"
    },
    {
      type: "image",
      src: "/images/projects/global-med/02.png",
      alt: "Medicine Inventory Management"
    },
    {
      type: "image",
      src: "/images/projects/global-med/03.png",
      alt: "Add New Medicine"
    },
    {
      type: "image",
      src: "/images/projects/global-med/04.png",
      alt: "Stock Monitoring and Alerts"
    },
    {
      type: "image",
      src: "/images/projects/global-med/05.png",
      alt: "Sales and Inventory Analytics"
    },
  ]
}
];
