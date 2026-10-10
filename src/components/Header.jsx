import { Link, useLocation } from "react-router-dom";

/**
 * Header Component
 * Displays app title/branding, navigation links, and theme toggle button.
 */
function Header({ theme, onToggleTheme }) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" className="header__brand-link" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div className="header__icon">🎂</div>
          <div>
            <h1 className="header__title">Age Calculator</h1>
            <p className="header__subtitle">Know your exact age instantly</p>
          </div>
        </Link>
      </div>

      <nav className="header__nav" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Link 
          to="/" 
          style={{ 
            fontWeight: location.pathname === "/" ? '600' : '400',
            color: location.pathname === "/" ? 'var(--primary)' : 'inherit',
            textDecoration: 'none'
          }}
        >
          Calculator
        </Link>
        <Link 
          to="/profiles" 
          style={{ 
            fontWeight: location.pathname.startsWith("/profiles") ? '600' : '400',
            color: location.pathname.startsWith("/profiles") ? 'var(--primary)' : 'inherit',
            textDecoration: 'none'
          }}
        >
          Saved Profiles
        </Link>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
