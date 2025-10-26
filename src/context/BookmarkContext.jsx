import React, { createContext, useContext, useState, useEffect } from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('courseBookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('courseBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (course) => {
    setBookmarks(prev => {
      const isAlreadyBookmarked = prev.some(bookmark => bookmark.link === course.link);
      if (!isAlreadyBookmarked) {
        return [...prev, course];
      }
      return prev;
    });
  };

  const removeBookmark = (courseLink) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.link !== courseLink));
  };

  const isBookmarked = (courseLink) => {
    return bookmarks.some(bookmark => bookmark.link === courseLink);
  };

  const toggleBookmark = (course) => {
    if (isBookmarked(course.link)) {
      removeBookmark(course.link);
    } else {
      addBookmark(course);
    }
  };

  const value = {
    bookmarks,
    addBookmark,
    removeBookmark,
    isBookmarked,
    toggleBookmark
  };

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
};