# Quick Start: Testing Dark/Light Mode

## Start the Development Server

```powershell
# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

## Test the Theme Toggle

1. **Open the website** in your browser (usually `http://localhost:5173`)

2. **Locate the theme toggle button** in the top navigation bar (right side)
   - Light mode shows a **Moon icon** (🌙)
   - Dark mode shows a **Sun icon** (☀️)

3. **Click the toggle** to switch between themes
   - Watch all components smoothly transition
   - Check different pages: Home, About, Courses

4. **Test persistence:**
   - Switch to dark mode
   - Refresh the page
   - Theme should remain dark

5. **Test different pages:**
   - Navigate to About page - see theme-aware gradients
   - Check course cards - backgrounds should adapt
   - Verify footer and sidebar match the theme

## Visual Indicators

### Light Mode ☀️
- White/light backgrounds
- Blue primary color (`#216fff`)
- Dark text on light surfaces
- Light navbar

### Dark Mode 🌙
- Dark slate backgrounds (`#0f172a`, `#1e293b`)
- Same blue accents maintained
- Light text on dark surfaces
- Dark navbar with proper contrast

## Keyboard Navigation
- Press `Tab` to focus the theme toggle
- Press `Enter` or `Space` to toggle

## Troubleshooting

**Theme not switching?**
- Check browser console for errors
- Ensure `ThemeContext.jsx` is properly imported
- Verify `localStorage` is enabled

**Styles not applying?**
- Check if CSS files are loaded
- Clear browser cache
- Restart dev server

**Icons not showing?**
- Verify `react-icons` is installed: `npm install react-icons`
- Check import statements in `navbar.jsx`

## Dependencies Used
- `react-icons` - For Sun/Moon icons
- React Context API - For state management
- localStorage API - For persistence
- CSS variables - For theming
