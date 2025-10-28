import React, { useState, useMemo } from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";
import CategoryFilter from "./CategoryFilter";
import BookmarkIcon from "./BookmarkIcon";
import { useBookmarks } from "../context/BookmarkContext";
import "../styles/allcourse.css";
import "../styles/category.css";
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


export default function Allcourse() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { toggleBookmark, isBookmarked } = useBookmarks();

  // Extract unique categories
  const categories = useMemo(() => {
    const categoryMap = {
      'Programming': ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'C', 'Go', 'Ruby', 'PHP', 'Kotlin', 'Swift iOS Development'],
      'Web Development': ['React', 'Angular', 'NodeJS', 'NextJs', 'jQuery', 'Flask', 'Django', 'FastAPI'],
      'Data Science': ['Machine Learning', 'Data Science', 'Data Visualization', 'Big Data', 'Artificial intelligence'],
      'Mobile Development': ['Android', 'Flutter', 'Swift iOS Development'],
      'Cloud & DevOps': ['AWS', 'Cloud Computing', 'Docker', 'Jenkins'],
      'Database': ['Database and SQL', 'MySQL', 'MongoDB'],
      'Cybersecurity': ['Cyber Security', 'Ethical Hacking'],
      'Design': ['UI/UX'],
      'Business': ['Digital marketing']
    };
    
    return Object.keys(categoryMap);
  }, []);

  // Filter courses based on selected category
  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') return courses;
    
    const categoryMap = {
      'Programming': ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'C', 'Go', 'Ruby', 'PHP', 'Kotlin', 'Swift iOS Development'],
      'Web Development': ['React', 'Angular', 'NodeJS', 'NextJs', 'jQuery', 'Flask', 'Django', 'FastAPI'],
      'Data Science': ['Machine Learning', 'Data Science', 'Data Visualization', 'Big Data', 'Artificial intelligence'],
      'Mobile Development': ['Android', 'Flutter', 'Swift iOS Development'],
      'Cloud & DevOps': ['AWS', 'Cloud Computing', 'Docker', 'Jenkins'],
      'Database': ['Database and SQL', 'MySQL', 'MongoDB'],
      'Cybersecurity': ['Cyber Security', 'Ethical Hacking'],
      'Design': ['UI/UX'],
      'Business': ['Digital marketing']
    };
    
    const categoryTitles = categoryMap[selectedCategory] || [];
    return courses.filter(course => categoryTitles.includes(course.title));
  }, [selectedCategory]);

  const Data = filteredCourses.map((data, key) => {
    return (
      <Collapsible
        key={key}
        trigger={data.title}
        className="collapse-main"
        transitionTime="100"
      >
        {data.cards.map((card, cardKey) => {
          return (
            <div
              key={cardKey}
              className="col-lg-4 featured-card"
              style={{ width: "100%", position: "relative" }}
            >
              <button
                className={`bookmark-btn ${isBookmarked(card.link) ? 'bookmarked' : ''}`}
                onClick={() => toggleBookmark({ ...card, category: data.title })}
                title={isBookmarked(card.link) ? 'Remove from bookmarks' : 'Add to bookmarks'}
              >
                <BookmarkIcon isBookmarked={isBookmarked(card.link)} size={24} />
              </button>
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