import React from 'react';

const BookmarkIcon = ({ isBookmarked, size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isBookmarked ? "#ff6b6b" : "none"}
      stroke={isBookmarked ? "#ff6b6b" : "#ccc"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'all 0.3s ease' }}
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  );
};

export default BookmarkIcon;