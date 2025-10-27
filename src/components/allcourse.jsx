import React, { useState, useMemo } from "react";
import Collapsible from "react-collapsible";
import courses from "../components/data/allcourses.json";
import CategoryFilter from "./CategoryFilter";
import BookmarkIcon from "./BookmarkIcon";
import { useBookmarks } from "../context/BookmarkContext";
import "../styles/allcourse.css";
import "../styles/category.css";
import Footer from "./footer";



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
          {Data}
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
