import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Frontend Skills
export const FRONTEND_SKILL = [
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "mui.png", // Using MUI icon as placeholder for Bootstrap
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

// Backend Skills
export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "react.png", // Using React icon as placeholder for Python
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "Flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "next.png", // Using Next.js icon as placeholder for Django
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "PHP.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "ts.png", // Using TypeScript icon as placeholder for Java
    width: 80,
    height: 80,
  },
] as const;

// Database Skills
export const DATABASE_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 80,
    height: 80,
  },
] as const;

// Dev Tools & APIs
export const DEVTOOLS_SKILL = [
  {
    skill_name: "Git",
    image: "Git_icon.svg.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
] as const;

// Data Science & Machine Learning
export const DATASCIENCE_SKILL = [
  {
    skill_name: "NumPy",
    image: "Numpy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    image: "pandas.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Matplotlib",
    image: "Matplotlib.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Seaborn",
    image: "Seaborn.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-learn",
    image: "scikit-learn.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "EDA",
    image: "EDA.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Supervised ML",
    image: "Supervised ML.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Unsupervised ML",
    image: "Unsupervised.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Statistics",
    image: "Satistics .png",
    width: 80,
    height: 80,
  },
] as const;

// Other Skills
export const OTHER_SKILL = [
  {
    skill_name: "Selenium",
    image: "Web scraping Selenium.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "BeautifulSoup",
    image: "Web scraping BeautifulSoup.jpg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/amro-alsharafi-a87a6b321/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/zx784",
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/601128028366",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:amroalsharafi75@gmail.com",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/amroo2003",
  },
] as const;

export const PROJECTS = [
  {
    title: "From Theory to Application: A Deep Dive into Machine Learning 🚀🔥",
    description:
      "A hands-on deep dive into supervised, unsupervised, ensemble, and dimensionality reduction methods. Included full model evaluation (ROC, AUC, F1, etc.), data preprocessing, SMOTE balancing, LIME/SHAP explainability, and pipeline automation.",
    image: "/projects/ml-deep-dive.png",
    link: "https://github.com/zx784/E-commerce-Customer-spending-and-satisfaction-level-prediction.git",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SMOTE", "SHAP", "LIME", "PCA", "XGBoost"],
  },
  {
    title: "WinderWise —✈️ Travel Genie AI App",
    description:
      "An AI-powered travel recommendation app that generates full itineraries, suggests cities, estimates trip costs, and customizes experiences based on user preferences. Built using Firebase Studio AI, NLP, and recommendation engines.",
    image: "/projects/winderwise-ai.png",
    link: "https://github.com/zx784/WinderWise.git",
    technologies: ["Firebase Studio AI", "Firestore", "Firebase Auth", "Cloud Functions", "React", "NLP", "Generative AI"],
  },
  {
    title: "Social Media Engagement Analysis",
    description:
      "A dual-pipeline ML project that predicts social media post engagement levels using classification models, and segments user behavior through unsupervised clustering. Included advanced feature engineering, model tuning, PCA visualization, and SHAP-based feature importance.",
    image: "/projects/social-engagement-ml.png",
    link: "https://github.com/zx784/Social-Media-Engagement-Analysis.git",
    technologies: ["Python", "Scikit-learn", "SHAP", "PCA", "SVM", "Random Forest", "K-Means", "Pandas", "Matplotlib"],
  },
  {
    title: "COVID-19 Outcome Prediction",
    description:
      "A research-backed machine learning model to predict patient outcomes based on clinical features. The pipeline included EDA, data imputation, class balancing with SMOTE, model tuning, and explainability via SHAP and LIME.",
    image: "/projects/covid-prediction.png",
    link: "https://github.com/zx784/COVID-19-Outcome-Prediction.git",
    technologies: ["Python", "Pandas", "Scikit-learn", "SMOTE", "LIME", "SHAP", "Logistic Regression", "Random Forest", "XGBoost"],
  },
  {
    title: "Predictive Cybersecurity Risk Assessment",
    description:
      "Developed a machine learning-based system to evaluate and prioritize cybersecurity threats. Included risk factor encoding, severity prediction, feature importance analysis, and recommendation generation for mitigation.",
    image: "/projects/cyber-risk-ml.png",
    link: "https://github.com/zx784/Predictive-Modeling-for-Cybersecurity-Risk-Assessment-and-Prioritization.git",
    technologies: ["Python", "Scikit-learn", "Pandas", "Random Forest", "SVM", "SHAP", "SMOTE", "Risk Scoring Models"],
  },
  {
    title: "Mobile eCommerce App (Flutter + Bagisto)",
    description:
      "A full-featured open-source eCommerce mobile app that syncs in real-time with Bagisto stores. Includes GraphQL-based APIs, product filtering, dark mode, push notifications, wishlist support, and custom Flutter theming.",
    image: "/projects/ecommerce-app.png",
    link: "https://github.com/zx784/eCommerce-Mobile-App.git",
    technologies: ["Flutter", "Dart", "Firebase", "Laravel", "Bagisto", "GraphQL", "Android", "iOS"],
  },
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      'Embark on a journey through my professional evolution with the "Modern Next.js Portfolio" - a dynamic showcase of my skills, experiences, and passion for web development. Crafted with precision and powered by Next.js, this portfolio is more than just a static display; it\'s an immersive experience that reflects the cutting edge of modern web technologies.',
    image: "/projects/project-1.png",
    link: "https://example.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/project-2.png",
    link: "https://example.com",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Animation"],
  },
  {
    title: "Space Themed Website",
    description:
      'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
    image: "/projects/project-3.png",
    link: "https://example.com",
    technologies: ["HTML5", "CSS3", "JavaScript", "Three.js", "WebGL"],
  },
] as const;

export const FOOTER_DATA = [] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};




