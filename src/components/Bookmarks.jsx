import React from 'react';
import { useBookmarks } from '../context/BookmarkContext';
import BookmarkIcon from './BookmarkIcon';
import '../styles/featured.css';
import '../styles/category.css';
import Footer from './footer';

export default function Bookmarks() {
  const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();

  if (bookmarks.length === 0) {
    return (
      <div>
        <div className="allcourse">
          <div className="featured-title">My Bookmarks</div>
          <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
            <h3>No bookmarks yet!</h3>
            <p>Start exploring courses and bookmark your favorites.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="allcourse">
        <div className="featured-title">My Bookmarks ({bookmarks.length})</div>
        <div className="maxwidthcards">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {bookmarks.map((course, index) => (
              <div
                key={index}
                className="featured-card"
                style={{ position: 'relative' }}
              >
                <button
                  className={`bookmark-btn ${isBookmarked(course.link) ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(course)}
                  title="Remove from bookmarks"
                >
                  <BookmarkIcon isBookmarked={isBookmarked(course.link)} size={24} />
                </button>
                <div className="card-icon-title">
                  <div className="card-icon">
                    <i className={course.icon}></i>
                  </div>
                  <div className="card-title">
                    <b>{course.name}</b>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', fontSize: '0.9rem', color: '#666' }}>
                  Category: {course.category}
                </div>
                <div className="card-price-button">
                  <div className="card-price">Price: Free</div>
                  <a className="card-button" href={course.link} target="_blank" rel="noopener noreferrer">
                    Go to Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}