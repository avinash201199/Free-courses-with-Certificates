# Dark/Light Mode Toggle Feature

## Overview
A fully functional dark/light mode toggle has been implemented across the entire website, allowing users to switch between light and dark themes with persistent state.

## Features Implemented

### 1. **Theme Context** (`src/contexts/ThemeContext.jsx`)
- Global theme state management using React Context API
- Persists theme preference to `localStorage`
- Automatically applies theme on page load
- Provides `useTheme` hook for easy access in components

### 2. **Theme Toggle Button** (in Navbar)
- Sun/Moon icon toggle button
- Located in the top navigation bar
- Smooth transition animations
- Accessible with proper ARIA labels

### 3. **Styling Updates**

#### Global Styles (`src/index.css`)
- CSS variables for consistent theming
- Light mode: `#F0F0FF` background with white cards
- Dark mode: `#0f172a` background with slate cards
- Smooth transitions for all theme changes

#### Component-Specific Styles
- **Navbar** (`src/styles/navbar.css`): Dark background with proper contrast
- **Featured Cards** (`src/styles/featured.css`): Card backgrounds adapt to theme
- **All Courses** (`src/styles/allcourse.css`): Collapsible sections themed
- **Footer** (`src/styles/footer.css`): Footer background and text color
- **About Page** (`src/components/AboutPage.jsx`): Dynamic gradient backgrounds

## Usage

### For Users
1. Click the **Moon icon** (🌙) in the navbar to switch to dark mode
2. Click the **Sun icon** (☀️) to switch back to light mode
3. Your preference is automatically saved and will persist across sessions

### For Developers

#### Access Theme in Components
```jsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={theme === 'dark' ? 'dark-class' : 'light-class'}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

#### Add Dark Mode Styles to CSS
```css
/* Light mode styles */
.my-element {
  background: #fff;
  color: #000;
}

/* Dark mode styles */
.dark .my-element {
  background: #1e293b;
  color: #e2e8f0;
}
```

#### Use CSS Variables
```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
}
```

## Color Palette

### Light Mode
- Primary Background: `#F0F0FF`
- Secondary Background: `#ffffff`
- Text Primary: `#1f2937`
- Text Secondary: `#4b5563`
- Border: `#e5e7eb`

### Dark Mode
- Primary Background: `#0f172a` (slate-950)
- Secondary Background: `#1e293b` (slate-800)
- Text Primary: `#f1f5f9` (slate-100)
- Text Secondary: `#cbd5e1` (slate-300)
- Border: `#334155` (slate-700)

## Files Modified

1. **New Files:**
   - `src/contexts/ThemeContext.jsx` - Theme state management

2. **Modified Files:**
   - `src/main.jsx` - Wrapped app with ThemeProvider
   - `src/components/navbar.jsx` - Added theme toggle button
   - `src/components/AboutPage.jsx` - Dynamic theme-aware backgrounds
   - `src/index.css` - Global dark mode styles
   - `src/styles/navbar.css` - Navbar dark mode
   - `src/styles/featured.css` - Featured cards dark mode
   - `src/styles/allcourse.css` - Course sections dark mode
   - `src/styles/footer.css` - Footer dark mode

## Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Uses `localStorage` for persistence (supported by all modern browsers)
- Graceful fallback to light mode if localStorage is unavailable

## Accessibility
- Proper ARIA labels on toggle button
- Sufficient contrast ratios in both themes
- Smooth transitions don't cause motion sickness (under 0.5s)
- Keyboard accessible toggle

## Future Enhancements
- System preference detection (prefers-color-scheme)
- Additional theme options (e.g., high contrast, sepia)
- Per-component theme customization
- Theme preview before applying

## Testing
To test the feature:
1. Run the development server
2. Navigate to any page
3. Click the theme toggle in the navbar
4. Verify all components update correctly
5. Refresh the page - theme should persist
6. Test on different pages to ensure consistency
