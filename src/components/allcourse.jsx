import React from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";
import "../styles/allcourse.css";
import Footer from "./footer";
import { useTranslation } from 'react-i18next';

const CourseData = () => {
  const { t } = useTranslation();
  
  // Map course titles to translation keys
  const getTitleKey = (title) => {
    const titleMap = {
      "AI Tools": "aiTools",
      "Android": "android",
      "Angular": "angular",
      "Database and SQL": "database",
      "AWS": "aws",
      "Data Visualization": "dataVisualization",
      "Digital marketing": "digitalMarketing",
      "Artificial intelligence": "artificialIntelligence",
      "Augmented Reality": "augmentedReality",
      "Back-end Development": "backendDevelopment",
      "Big Data": "bigData",
      "Analytics cards": "analytics",
      "Programming Fundamentals": "programmingFundamentals",
      "Blockchain Technology": "blockchain",
      "C": "c",
      "GitHub Tutorial": "githubTutorial",
      "C++": "cpp",
      "C#": "csharp",
      "JavaScript": "javascript",
      "jQuery": "jquery",
      "Kotlin": "kotlin",
      "Linux": "linux",
      "Machine Learning": "machineLearning",
      "MongoDB": "mongodb",
      "MySQL": "mysql",
      "NodeJS": "nodejs",
      "NextJs": "nextjs",
      "Cloud Computing": "cloudComputing",
      "Cyber Security": "cyberSecurity",
      "Data Programming": "dataProgramming",
      "Data Science": "dataScience",
      "Dart Programming Language": "dart",
      "Internet of Things": "iot",
      "Data Structure & Algorithm": "dsa",
      "Database Normalization": "databaseNormalization",
      "Docker": "docker",
      "Git": "git",
      "Ethical Hacking": "ethicalHacking",
      "GitOps": "gitops",
      "Go": "go",
      "GraphQL": "graphql",
      "Java": "java",
      "Operating System": "operatingSystem",
      "PHP": "php",
      "Python": "python",
      "Python Libraries/Tools": "pythonLibraries",
      "Quantum Computing": "quantumComputing",
      "Raspberry Pi": "raspberryPi",
      "React": "react",
      "Ruby": "ruby",
      "Scala": "scala",
      "Scientific Computing": "scientificComputing",
      "Software testing": "softwareTesting",
      "Swift iOS Development": "swift",
      "Tableau": "tableau",
      "Flask": "flask",
      "Typescript": "typescript",
      "UI/UX": "uiux",
      "Web Development": "webDevelopment",
      "Introduction to Computer Science": "computerScience",
      "Front-end Development": "frontendDevelopment",
      "Jenkins": "jenkins",
      "Google Cloud Provider": "googleCloud",
      "Flutter": "flutter",
      "Integration Platform": "integrationPlatform",
      "Web 3.0 and  Blockchain": "web3",
      "Software Testing/Quality Assurance": "qa",
      "Django": "django",
      "FastAPI": "fastapi",
      "Computer Networking": "networking",
      "Deep Learning": "deepLearning",
      "Generative AI": "generativeAi"
    };
    
    return titleMap[title] || null;
  };
  
  const Data = courses.map((data, key) => {
    const titleKey = getTitleKey(data.title);
    const displayTitle = titleKey ? t(`courseCategories.${titleKey}`) : data.title;
    
    return (
      <Collapsible
        key={key}
        trigger={displayTitle}
        className="collapse-main"
        transitionTime="100"
      >
        {data.cards.map((card, cardKey) => {
          return (
            <div
              key={cardKey}
              className="col-lg-4 featured-card"
              style={{ width: "100%" }}
            >
              <div className="card-icon-title">
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="card-title">
                  <b>{card.name}</b>
                </div>
              </div>
              <div className="card-price-button">
                <div className="card-price">{t('course.price')}: {t('course.free')}</div>
                <a className="card-button" href={card.link} target="_blank" rel="noreferrer">
                  {t('course.goToCourse')}
                </a>
              </div>
            </div>
          );
        })}
      </Collapsible>
    );
  });

  return Data;
};

export default function Allcourse() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="allcourse">
        <div className="featured-title">{t('main.allCourses')}</div>
        <div className="maxwidthcards">
          <CourseData />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}