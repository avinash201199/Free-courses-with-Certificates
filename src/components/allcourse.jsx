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
      "AI Tools": "courseCategories.aiTools",
      "Android": "courseCategories.android",
      "Angular": "courseCategories.angular",
      "Database and SQL": "courseCategories.database",
      "AWS": "courseCategories.aws",
      "Data Visualization": "courseCategories.dataVisualization",
      "Digital marketing": "courseCategories.digitalMarketing",
      "Artificial intelligence": "courseCategories.artificialIntelligence",
      "Augmented Reality": "courseCategories.augmentedReality",
      "Back-end Development": "courseCategories.backendDevelopment",
      "Big Data": "courseCategories.bigData",
      "Analytics cards": "courseCategories.analytics",
      "Programming Fundamentals": "courseCategories.programmingFundamentals",
      "Blockchain Technology": "courseCategories.blockchain",
      "C": "courseCategories.c",
      "GitHub Tutorial": "courseCategories.githubTutorial",
      "C++": "courseCategories.cpp",
      "C#": "courseCategories.csharp",
      "JavaScript": "courseCategories.javascript",
      "jQuery": "courseCategories.jquery",
      "Kotlin": "courseCategories.kotlin",
      "Linux": "courseCategories.linux",
      "Machine Learning": "courseCategories.machineLearning",
      "MongoDB": "courseCategories.mongodb",
      "MySQL": "courseCategories.mysql",
      "NodeJS": "courseCategories.nodejs",
      "NextJs": "courseCategories.nextjs",
      "Cloud Computing": "courseCategories.cloudComputing",
      "Cyber Security": "courseCategories.cyberSecurity",
      "Data Programming": "courseCategories.dataProgramming",
      "Data Science": "courseCategories.dataScience",
      "Dart Programming Language": "courseCategories.dart",
      "Internet of Things": "courseCategories.iot",
      "Data Structure & Algorithm": "courseCategories.dsa",
      "Database Normalization": "courseCategories.databaseNormalization",
      "Docker": "courseCategories.docker",
      "Git": "courseCategories.git",
      "Ethical Hacking": "courseCategories.ethicalHacking",
      "GitOps": "courseCategories.gitops",
      "Go": "courseCategories.go",
      "GraphQL": "courseCategories.graphql",
      "Java": "courseCategories.java",
      "Operating System": "courseCategories.operatingSystem",
      "PHP": "courseCategories.php",
      "Python": "courseCategories.python",
      "Python Libraries/Tools": "courseCategories.pythonLibraries",
      "Quantum Computing": "courseCategories.quantumComputing",
      "Raspberry Pi": "courseCategories.raspberryPi",
      "React": "courseCategories.react",
      "Ruby": "courseCategories.ruby",
      "Scala": "courseCategories.scala",
      "Scientific Computing": "courseCategories.scientificComputing",
      "Software testing": "courseCategories.softwareTesting",
      "Swift iOS Development": "courseCategories.swift",
      "Tableau": "courseCategories.tableau",
      "Flask": "courseCategories.flask",
      "Typescript": "courseCategories.typescript",
      "UI/UX": "courseCategories.uiux",
      "Web Development": "courseCategories.webDevelopment",
      "Introduction to Computer Science": "courseCategories.computerScience",
      "Front-end Development": "courseCategories.frontendDevelopment",
      "Jenkins": "courseCategories.jenkins",
      "Google Cloud Provider": "courseCategories.googleCloud",
      "Flutter": "courseCategories.flutter",
      "Integration Platform": "courseCategories.integrationPlatform",
      "Web 3.0 and  Blockchain": "courseCategories.web3",
      "Software Testing/Quality Assurance": "courseCategories.qa",
      "Django": "courseCategories.django",
      "FastAPI": "courseCategories.fastapi",
      "Computer Networking": "courseCategories.networking",
      "Deep Learning": "courseCategories.deepLearning",
      "Generative AI": "courseCategories.generativeAi"
    };
    
    return titleMap[title] || null;
  };
  
  const Data = courses.map((data, key) => {
    const titleKey = getTitleKey(data.title);
    const displayTitle = titleKey ? t(titleKey) : data.title;
    
    return (
      <Collapsible
        key={key}
        trigger={displayTitle}
        className="collapse-main"
        transitionTime="100"
      >
        {data.cards.map((card, key) => {
          return (
            <div
              key={key}
              className="col-lg-4 featured-card"
              style={{ width: "100%" }}
            >


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
                <a className="card-button" href={card.link}>
                  {t('course.goToCourse')}

                <div className="card-price">Price: Free</div>
                <a className="card-button" href={card.link}>
                  Go to Course
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

  return (
    <div>
      <div className="allcourse">
        <div className="featured-title">All Courses</div>
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="maxwidthcards">
          <CourseData />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
